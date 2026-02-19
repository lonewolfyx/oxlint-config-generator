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
            <span class="text-pink-600 font-bold">15</span>
            <span>/</span>
            <span>40</span>
            <span>Rules</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import type { SourcePluginName } from '#shared/types'

defineOptions({
    name: 'RuleHeader',
})

defineProps<{
    scope: SourcePluginName
}>()
</script>
