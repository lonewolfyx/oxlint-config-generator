export type SourcePluginName = 'eslint'
    | 'import'
    | 'jest'
    | 'jsdoc'
    | 'jsx-a11y'
    | 'nextjs'
    | 'node'
    | 'oxc'
    | 'promise'
    | 'react'
    | 'react-pref'
    | 'typescript'
    | 'unicorn'
    | 'vitest'
    | 'vue'

export interface IScopeCategory {
    label: string
    plugins: { label: string, value: SourcePluginName }[]
}
