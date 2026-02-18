<template>
    <slot />
</template>

<script lang="ts" setup>
import { RulesConfigProvider } from '.'
import rules from '~/data/oxlint-rules.json'

defineOptions({
    name: 'RuleConfigProvider',
    inheritAttrs: false,
})

RulesConfigProvider({
    rules: rules.rules,
    totalRule: rules.total,
    defaultRule: rules.useDefaultTotal,
    fixableRule: rules.useFixableTotal,
})
</script>
