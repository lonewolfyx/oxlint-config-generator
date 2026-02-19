export type SourcePluginName = 'eslint'
    | 'import'
    | 'jest'
    | 'jsdoc'
    | 'jsx_a11y'
    | 'nextjs'
    | 'node'
    | 'oxc'
    | 'promise'
    | 'react'
    | 'react_perf'
    | 'typescript'
    | 'unicorn'
    | 'vitest'
    | 'vue'

export interface IScopeCategory {
    label: string
    plugins: { label: string, value: SourcePluginName }[]
}

export type RuleCategory = 'correctness' | 'nursery' | 'pedantic' | 'perf' | 'restriction' | 'style' | 'suspicious'
export type RuleFixType = 'fixable_fix'
    | 'conditional_fix'
    | 'fixable_suggestion'
    | 'conditional_suggestion'
    | 'fixable_dangerous_fix'
    | 'conditional_dangerous_fix'
    | 'fixable_dangerous_suggestion'
    | 'conditional_dangerous_suggestion'
    | 'conditional_safe_fix_or_suggestion'
    | 'conditional_dangerous_fix_or_suggestion'
    | 'pending'
    | 'none'

export interface IRule {
    scope: SourcePluginName
    value: string
    category: RuleCategory
    type_aware: boolean
    fix: RuleFixType
    default: boolean
    docs_url: string
    rule: string
    description: string
    options: {
        schema: any
        defaultOptions: any[]
    }
}

export type IRulesMap = Partial<Record<SourcePluginName, IRule[]>>
