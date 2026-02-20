import { join, resolve } from 'node:path'
import { downloadTemplate } from 'giget'
import { rimraf } from 'rimraf'
import { x } from 'tinyexec'
import { RuleDocParser } from './oxlint.rule.doc.parser'
import { marked } from 'marked'
import { load } from 'cheerio'
import { readFile, writeFile } from 'node:fs/promises'
import { FIXABLE_TYPES } from '../app/constant'

interface OxlintRules {
    scope: string
    value: string
    category: string
    type_aware: boolean
    fix: string
    default: boolean
    docs_url: string
}

interface IConfig {
    cwd: string
    tempPath: string
    tempGithubSourceCodePath: string
    rulePath: string
}

function useConfig(): IConfig {
    const cwd = process.cwd()
    const tempPath = resolve(cwd, 'temp')
    return {
        cwd,
        tempPath,
        tempGithubSourceCodePath: resolve(tempPath, 'oxc-project-website'),
        rulePath: join('src', 'docs', 'guide', 'usage', 'linter', 'rules'),
    }
}

function cleanText(text: string) {
    return text.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, ' ')
}

async function getRuleMarkDownContent(config: IConfig, rule: OxlintRules) {
    return await readFile(resolve(config.tempGithubSourceCodePath, `${config.rulePath}/${rule.scope}/${rule.value}.md`), 'utf-8')
}

async function getRuleDescription(config: IConfig, rule: OxlintRules) {
    const mdContent = await getRuleMarkDownContent(config, rule)
    const html = await marked(mdContent)

    const $ = load(html)

    const description = $('h3')
        .filter((_, el) => $(el).text().trim() === 'What it does')
        .nextAll('p')
        .first()
        .text()

    return cleanText(description)
}

const generatorOxLintRules = async () => {
    const config = useConfig()

    const ruleCommand = await x('oxlint', ['--rules', '-f', 'json'])
    const activeRules = JSON.parse(ruleCommand.stdout.trim()) as OxlintRules[]

    // step 1: download oxlint temp source code
    await downloadTemplate('github:oxc-project/website', {
        cwd: config.tempPath,
    })

    // step 2: parse markdown
    const parser = new RuleDocParser()

    const oxLintRules = await Promise.all(
        activeRules.map(async (rule: OxlintRules) => {
            const description = await getRuleDescription(config, rule)
            const options = parser.parse(await getRuleMarkDownContent(config, rule))

            console.log(`rule: ${rule.value}`)
            return {
                ...rule,
                rule: rule.value,
                description,
                options,
            }
        }),
    )

    // step 3: group by source
    const oxLintRulesGroupBySource = oxLintRules.reduce((acc, item) => {
        if (!acc[item.scope]) {
            acc[item.scope] = []
        }
        acc[item.scope].push(item)
        return acc
    }, {})

    // step 4: generate json
    const data = {
        total: oxLintRules.length,
        useDefaultTotal: oxLintRules.filter(item => item.default).length,
        useFixableTotal: oxLintRules.filter(item => !FIXABLE_TYPES.includes(item.fix)).length,
        rules: oxLintRulesGroupBySource,
    }

    await writeFile(
        resolve(config.cwd, 'app', 'data', 'oxlint-rules.json'),
        JSON.stringify(data, null, 4),
        'utf-8',
    )

    // step end: rmrf oxlint temp directory
    await rimraf(config.tempGithubSourceCodePath)
}

generatorOxLintRules().then(() => {
})
