<template>
    <slot />
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { RulesConfigProvider } from '.'
import rules from '~/data/oxlint-rules.json'
import type { IRulesMap } from '#shared/types'
import type { OxlintConfig } from 'oxlint'

defineOptions({
    name: 'RuleConfigProvider',
    inheritAttrs: false,
})

const selectedScopes = ref<SourcePluginName[]>(['eslint', 'oxc', 'typescript'])

const toggleScope = (scope: SourcePluginName) => {
    const index = selectedScopes.value.indexOf(scope)
    if (index === -1) {
        selectedScopes.value.push(scope)
    }
    else {
        selectedScopes.value.splice(index, 1)
    }
}

const isSelected = (scope: SourcePluginName) => {
    return selectedScopes.value.includes(scope)
}

// oxlint config
const oxlintrc = shallowRef<OxlintConfig>({
    plugins: [],
    rules: {},
})

// update oxlint config
const setOxLintRc = (config: OxlintConfig) => {
    oxlintrc.value = config
}

RulesConfigProvider({
    rules: rules.rules as IRulesMap,
    totalRule: rules.total,
    defaultRule: rules.useDefaultTotal,
    fixableRule: rules.useFixableTotal,
    selectedScopes,
    toggleScope,
    isSelected,
    oxlintrc,
    setOxLintRc,
})
</script>
