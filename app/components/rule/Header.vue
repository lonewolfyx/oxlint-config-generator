<template>
    <div class="relative flex items-center">
        <div
            :class="cn(
                'relative capitalize flex-1',
                'pl-2',
                'after:absolute after:inset-0 after:left-0 after:w-1 after:h-full after:rounded after:bg-amber-600',
            )"
        >
            {{ scope }}
        </div>
        <div class="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <span class="text-pink-600 font-bold">{{ usedRuleCount }}</span>
            <span>/</span>
            <span>{{ totalRuleCount }}</span>
            <span>Rules</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '~/lib/utils'
import { useRulesConfig } from '~/components/rule'
import type { SourcePluginName } from '#shared/types'

defineOptions({
    name: 'RuleHeader',
})

const props = defineProps<{
    scope: SourcePluginName
}>()

const { rules, oxlintrc } = useRulesConfig()!

const totalRuleCount = computed(() => {
    return rules[props.scope]?.length ?? 0
})

const usedRuleCount = computed(() => {
    if (!oxlintrc.value.rules) return 0

    // count the number of rules in oxlintrc.rules that start with "scope/"
    const prefix = `${props.scope.replace('_', '-')}/`
    return Object.keys(oxlintrc.value.rules).filter(key =>
        key.startsWith(prefix),
    ).length
})
</script>
