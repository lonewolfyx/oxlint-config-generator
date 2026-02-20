<template>
    <div class="flex justify-start items-end text-xl font-sans gap-3 pb-2 border-b border-dashed">
        <span class="text-base opacity-50">Total number of rules:</span>
        <span class="font-bold font-mono text-red-500">{{ totalRule }}</span>
        <span class="text-base opacity-50">Rules turned on by default:</span>
        <span class="font-bold font-mono text-green-500 opacity-50">{{ defaultRule }}</span>
        <span class="text-base opacity-50">Rules with fixes available:</span>
        <span class="font-bold font-mono text-indigo-500 opacity-50">{{ fixableRule }}</span>
    </div>
</template>

<script lang="ts" setup>
import { useRulesConfig } from '~/components/rule'

defineOptions({
    name: 'SiteRuleInfo',
})

const { totalRule, defaultRule, fixableRule } = useRulesConfig()
</script>
