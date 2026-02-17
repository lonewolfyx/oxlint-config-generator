<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
            <img
                alt="OXLint Config Generator"
                class="size-10"
                src="/logo.svg"
            >
            <span
                :class="cn(
                    'bg-gradient-to-r from-[#ff915c] to-[#2b3c5a] bg-clip-text text-transparent',
                )"
                class="text-2xl font-medium font-mono"
            >
                OXLint Config Generator
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'SiteHeader',
})
</script>
