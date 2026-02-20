import type { Ref, ShallowRef } from 'vue'
import type { OxlintrcConfig } from '.'

export type LintConfigType = 'json' | 'ts'

export interface IRulesConfigProvider {
    rules: IRulesMap
    totalRule: number
    defaultRule: number
    fixableRule: number

    searchKeyword: Ref<string>

    lintConfigType?: Ref<LintConfigType>
    setLintConfigType?: (type: LintConfigType) => void

    // https://oxc.rs/docs/guide/usage/linter/config.html
    oxlintrc: ShallowRef<OxlintrcConfig>
    setOxLintRc: (code: OxlintrcConfig) => void

    // Scope selection management
    selectedScopes: Ref<SourcePluginName[]>
    toggleScope: (scope: SourcePluginName) => void
    isSelected: (scope: SourcePluginName) => boolean
}
