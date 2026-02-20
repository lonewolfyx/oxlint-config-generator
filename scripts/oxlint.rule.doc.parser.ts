import type { Token, Tokens } from 'marked'
import { marked } from 'marked'

interface JSONSchema {
    type?: string
    enum?: string[]
    items?: JSONSchema | JSONSchema[]
    properties?: Record<string, JSONSchema>
    additionalProperties?: boolean | JSONSchema
}

interface ParsedRuleDoc {
    schema: JSONSchema
    defaultOptions: any[]
}

interface ConfigNode {
    name: string
    depth: number
    type?: string
    default?: any
    children: ConfigNode[]
}

export class RuleDocParser {
    parse(markdown: string): ParsedRuleDoc {
        const tokens = marked.lexer(markdown)
        const configTokens = this.extractConfigurationSection(tokens)
        if (configTokens.length === 0) {
            return { schema: {}, defaultOptions: [] }
        }
        const tree = this.buildConfigTree(configTokens)
        if (this.isTupleRule(tree)) {
            return this.buildTupleSchema(tree)
        }
        return this.buildObjectSchema(tree)
    }

    private extractConfigurationSection(tokens: Token[]): Token[] {
        const startIndex = tokens.findIndex(
            t => t.type === 'heading' && (t as Tokens.Heading).depth === 2 && (t as Tokens.Heading).text.trim() === 'Configuration',
        )
        if (startIndex === -1)
            return []
        const section: Token[] = []
        for (let i = startIndex + 1; i < tokens.length; i++) {
            const t = tokens[i]
            if (t.type === 'heading' && (t as Tokens.Heading).depth === 2)
                break
            section.push(t)
        }
        return section
    }

    private buildConfigTree(tokens: Token[]): ConfigNode[] {
        const stack: ConfigNode[] = []
        const roots: ConfigNode[] = []

        for (const token of tokens) {
            if (token.type === 'heading') {
                const heading = token as Tokens.Heading
                const name = heading.text.replace(/`/g, '').trim()

                // Skip enum value sub-headings like #### "always" or `"always"`
                if (name.startsWith('"') || name.startsWith('\'') || name.includes('"always"') || name.includes('"never"') || name.includes('"prefer-import"')) {
                    continue
                }

                const node: ConfigNode = { name, depth: heading.depth, children: [] }

                while (stack.length && stack[stack.length - 1].depth >= heading.depth) {
                    stack.pop()
                }

                if (stack.length === 0) {
                    roots.push(node)
                }
                else {
                    stack[stack.length - 1].children.push(node)
                }
                stack.push(node)
            }

            if (token.type === 'paragraph' && stack.length) {
                const current = stack[stack.length - 1]
                let text = (token as Tokens.Paragraph).text.trim()
                text = text.replace(/\*\*/g, '').replace(/\s+/g, ' ') // remove bold, compress spaces

                // Split by lines and look for type: and default: independently
                const lines = text.split('\n').map(l => l.replace(/`/g, '').trim()).filter(Boolean)

                for (const line of lines) {
                    if (line.startsWith('type:') || line.startsWith('Type:')) {
                        current.type = line.replace(/^type:/i, '').trim()
                    }
                    else if (line.startsWith('default:') || line.startsWith('Default:')) {
                        const raw = line.replace(/^default:/i, '').trim()
                        current.default = this.parseValue(raw, current.type)
                    }
                }
            }
        }
        return roots
    }

    private isTupleRule(nodes: ConfigNode[]): boolean {
        return nodes.some(n => n.name.includes('1st option') || n.name.includes('option'))
    }

    private buildObjectSchema(nodes: ConfigNode[]): ParsedRuleDoc {
        const properties: Record<string, JSONSchema> = {}
        const defaults: Record<string, any> = {}

        for (const node of nodes) {
            const key = node.name.trim()
            if (key.startsWith('"') || key === '')
                continue

            properties[key] = this.buildSchemaFromNode(node)
            const def = this.buildDefaultFromNode(node)
            if (def !== undefined) {
                defaults[key] = def
            }
        }

        return {
            schema: {
                type: 'object',
                properties,
                additionalProperties: false,
            },
            defaultOptions: Object.keys(defaults).length ? [defaults] : [],
        }
    }

    private buildTupleSchema(nodes: ConfigNode[]): ParsedRuleDoc {
        const items: JSONSchema[] = []
        const defaults: any[] = []
        for (const node of nodes) {
            items.push(this.buildSchemaFromNode(node))
            const def = this.buildDefaultFromNode(node)
            if (def !== undefined)
                defaults.push(def)
        }
        return {
            schema: { type: 'array', items },
            defaultOptions: defaults,
        }
    }

    private buildSchemaFromNode(node: ConfigNode): JSONSchema {
        if (node.children.length === 0) {
            return this.convertTypeToSchema(node.type)
        }

        if (node.type?.trim() === 'array') {
            let items: JSONSchema | JSONSchema[] = {}
            const itemChild = node.children.find(c => c.name.endsWith('[n]'))
            if (itemChild) {
                items = this.buildSchemaFromNode(itemChild)
            }
            else {
                items = node.children.map(c => this.buildSchemaFromNode(c))
            }
            return { type: 'array', items }
        }

        const properties: Record<string, JSONSchema> = {}
        for (const child of node.children) {
            const key = child.name.split('.').pop()!.trim()
            if (key.startsWith('"') || key === '')
                continue
            properties[key] = this.buildSchemaFromNode(child)
        }

        return {
            type: 'object',
            properties,
            additionalProperties: false,
        }
    }

    private convertTypeToSchema(type?: string): JSONSchema {
        if (!type)
            return {}
        type = type.replace(/`/g, '').trim()

        if (type.includes('|')) {
            const matches = type.match(/"[^"]+"/g) ?? []
            if (matches.length > 0) {
                return {
                    type: 'string',
                    enum: matches.map(m => m.slice(1, -1)),
                }
            }
        }

        const map: Record<string, JSONSchema> = {
            'boolean': { type: 'boolean' },
            'string': { type: 'string' },
            'number': { type: 'number' },
            'integer': { type: 'integer' },
            'object': { type: 'object' },
            'array': { type: 'array' },
            'string[]': { type: 'string[]' },
        }
        return map[type] || {}
    }

    private parseValue(raw: string, type?: string): any {
        raw = raw.replace(/`/g, '').trim()
        if (raw.startsWith('"') && raw.endsWith('"')) {
            return raw.slice(1, -1)
        }
        if (raw.startsWith('\'') && raw.endsWith('\'')) {
            return raw.slice(1, -1)
        }
        const lower = raw.toLowerCase()
        if (type === 'boolean')
            return lower === 'true'
        if (type === 'number' || type === 'integer')
            return Number(raw)
        if (type && (type.includes('array') || type.includes('object') || type.startsWith('Record<'))) {
            try {
                return JSON.parse(raw)
            }
            catch { /* empty */ }
        }
        try {
            return JSON.parse(raw)
        }
        catch { /* empty */ }
        if (lower === 'true')
            return true
        if (lower === 'false')
            return false
        if (raw === 'null')
            return null
        if (/^-?\d+(?:\.\d+)?$/.test(raw))
            return Number(raw)
        return raw
    }

    private buildDefaultFromNode(node: ConfigNode): any {
        if (node.children.length > 0) {
            if (node.type?.trim() === 'array')
                return node.default
            const obj: any = {}
            for (const child of node.children) {
                const key = child.name.split('.').pop()!.trim()
                if (key.startsWith('"') || key === '')
                    continue
                const val = this.buildDefaultFromNode(child)
                if (val !== undefined)
                    obj[key] = val
            }
            return Object.keys(obj).length ? obj : undefined
        }
        return node.default
    }
}
