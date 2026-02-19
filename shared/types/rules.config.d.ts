import type { Ref, ShallowRef } from 'vue'
import type { OxlintConfig } from 'oxlint'
import type { SourcePluginName } from './index'

export type LintConfigType = 'json' | 'ts'

export interface IRulesConfigProvider {
    rules: object
    totalRule: number
    defaultRule: number
    fixableRule: number

    searchKeyword?: Ref<string>
    setSearchKeyword?: (keyword: string) => void

    lintConfigType?: Ref<LintConfigType>
    setLintConfigType?: (type: LintConfigType) => void

    // https://oxc.rs/docs/guide/usage/linter/config.html
    oxlintrc?: ShallowRef<OxlintConfig>
    setOxLintRc?: (code: OxlintConfig) => void

    // Scope selection management
    selectedScopes: Ref<SourcePluginName[]>
    toggleScope: (scope: SourcePluginName) => void
    isSelected: (scope: SourcePluginName) => boolean
}
