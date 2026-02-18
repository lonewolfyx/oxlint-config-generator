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
