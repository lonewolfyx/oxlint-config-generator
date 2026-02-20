<template>
    <div
        :class="cn(
            'flex items-center gap-2',
            'bg-gray-200 dark:bg-gray-800/20 text-foreground text-sm',
            'border border-input rounded-2xl',
            'px-3 py-1',
        )"
    >
        <Icon
            mode="svg"
            name="ph:list-checks-duotone"
        />
        <span>{{ filteredRuleCount }}</span>
        <span>rules filtered</span>
        <span class="opacity-50">out of {{ totalRule }} rules</span>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '~/lib/utils'
import { useRulesConfig } from '.'

defineOptions({
    name: 'RuleFilterInfo',
})

const { totalRule, rules, selectedScopes } = useRulesConfig()!

// count the number of rules currently displayed based on the scopes selected
const filteredRuleCount = computed(() => {
    let count = 0

    // iterate over all the selected scopes and add up the number of rules
    selectedScopes.value.forEach((scope) => {
        if (rules[scope]) {
            count += rules[scope].length
        }
    })

    return count
})
</script>
