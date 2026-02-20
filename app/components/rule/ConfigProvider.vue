<template>
    <slot />
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { RulesConfigProvider } from '.'
import rules from '~/data/oxlint-rules.json'

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

// search keyword
const searchKeyword = ref<string>('')

// oxlint config
const oxlintrc = shallowRef<OxlintrcConfig>({
    $schema: './node_modules/oxlint/configuration_schema.json',
    plugins: [],
    rules: {},
})

// update oxlint config
const setOxLintRc = (config: OxlintrcConfig) => {
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
    searchKeyword,
    oxlintrc,
    setOxLintRc,
})
</script>
