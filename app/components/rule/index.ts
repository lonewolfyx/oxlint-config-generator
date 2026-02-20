import { cva } from 'class-variance-authority'
import { createContext } from 'reka-ui'

export { default as RuleContainer } from './Container.vue'
export { default as RuleItem } from './Item.vue'
export { default as RuleSeverity } from './Severity.vue'
export { default as RuleHeader } from './Header.vue'
export { default as RuleConfigProvider } from './ConfigProvider.vue'

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
            text: {
                '': '',
                'eslint': 'text-purple-700',
                'import': 'text-orange-700',
                'jest': 'text-yellow-700',
                'jsdoc': 'text-blue-700',
                'jsx-a11y': 'text-indigo-700',
                'nextjs': 'text-neutral-700 dark:text-neutral-600',
                'node': 'text-emerald-700',
                'oxc': 'text-amber-700',
                'promise': 'text-yellow-700',
                'react': 'text-sky-700',
                'react-perf': 'text-cyan-700',
                'typescript': 'text-sky-700',
                'unicorn': 'text-red-700',
                'vitest': 'text-green-700',
                'vue': 'text-green-700',
            },
        },
    },
)

export const [useRulesConfig, RulesConfigProvider] = createContext<IRulesConfigProvider>('OxLintRules')
