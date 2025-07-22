import { fileURLToPath, resolve } from 'node:url'
import fs from 'node:fs/promises'

export default defineEventHandler(async () => {
    const configPath = resolve(fileURLToPath(import.meta.url), '../../server/payload.json')

    return {
        rules: JSON.parse(await fs.readFile(configPath, 'utf8')),
        categories: [
            {
                name: 'correctness',
                description: 'Rules to lint code that is definitely wrong or useless',
            },
            {
                name: 'suspicious',
                description: 'Rules to lint code that is likely to be wrong or useless',
            },
            {
                name: 'pedantic',
                description: 'Rules which are extra strict or might have false positives',
            },
            {
                name: 'perf',
                description: 'Rules that aim to improve the performance of code',
            },
            {
                name: 'style',
                description: 'Rules that help maintain a consistent style or enforce idiomatic syntax',
            },
            {
                name: 'restriction',
                description: 'Rules that ban specific patterns, syntax, or features and should be enabled on a case-by-case basis',
            },
            {
                name: 'nursery',
                description: 'Rules that are in development, may change significantly, or contain false positives',
            },
        ],
        plugins: [
            { name: 'typescript', isDefault: true },
            { name: 'unicorn', isDefault: true },
            { name: 'react', isDefault: false },
            { name: 'react-perf', isDefault: false },
            { name: 'nextjs', isDefault: false },
            { name: 'oxc', isDefault: true },
            { name: 'import', isDefault: false },
            { name: 'jsdoc', isDefault: false },
            { name: 'jsx-a11y', isDefault: false },
            { name: 'node', isDefault: false },
            { name: 'promise', isDefault: false },
            { name: 'jest', isDefault: false },
            { name: 'vitest', isDefault: false },
        ],
    }
})
