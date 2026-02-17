<template>
    <div
        :class="cn(
            'bg-background grow',
            'border border-input rounded-xl shadow-xs',
            'flex flex-row min-h-0',
        )"
    >
        <span>content</span>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'RuleContainer',
})
</script>
