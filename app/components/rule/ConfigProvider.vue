<template>
    <slot />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RulesConfigProvider } from '.'
import rules from '~/data/oxlint-rules.json'
import type { IRulesMap } from '#shared/types'

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

RulesConfigProvider({
    rules: rules.rules as IRulesMap,
    totalRule: rules.total,
    defaultRule: rules.useDefaultTotal,
    fixableRule: rules.useFixableTotal,
    selectedScopes,
    toggleScope,
    isSelected,
})
</script>
