import { cva } from 'class-variance-authority'

export { default as RuleContainer } from './Container.vue'
export { default as RuleItem } from './Item.vue'
export { default as RuleSeverity } from './Severity.vue'
export { default as RuleHeader } from './Header.vue'

export const ruleScopeVariants = cva(
    'dark:bg-muted text-muted-foreground',
    {
        variants: {
            label: {
                '': '',
                'eslint': 'hover:bg-purple-100 bg-purple-100 text-purple-700',
                'import': 'hover:bg-orange-100 bg-orange-100 text-orange-700',
                'jest': 'hover:bg-yellow-100 bg-yellow-100 text-yellow-700',
                'jsdoc': 'hover:bg-blue-100 bg-blue-100 text-blue-700',
                'jsx_a11y': 'hover:bg-indigo-100 bg-indigo-100 text-indigo-700',
                'nextjs': 'hover:bg-neutral-100 bg-neutral-100 text-neutral-700 dark:text-neutral-600',
                'node': 'hover:bg-emerald-100 bg-emerald-100 text-emerald-700',
                'oxc': 'hover:bg-amber-100 bg-amber-100 text-amber-700',
                'promise': 'hover:bg-yellow-100 bg-yellow-100 text-yellow-700',
                'react': 'hover:bg-sky-100 bg-sky-100 text-sky-700',
                'react_perf': 'hover:bg-cyan-100 bg-cyan-100 text-cyan-700',
                'typescript': 'hover:bg-sky-100 bg-sky-100 text-sky-700',
                'unicorn': 'hover:bg-red-100 bg-red-100 text-red-700',
                'vitest': 'hover:bg-green-100 bg-green-100 text-green-700',
                'vue': 'hover:bg-green-100 bg-green-100 text-green-700',
            },
        },
    },
)
