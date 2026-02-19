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
        <span>762</span>
        <span>rules filtered</span>
        <span class="opacity-50">out of 1718 rules</span>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'RuleFilterInfo',
})
</script>
