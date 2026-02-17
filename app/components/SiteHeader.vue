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
                    'bg-gradient-to-r from-[#FF925C] via-[#8A380F] to-[#2B3D5A] bg-clip-text text-transparent',
                )"
                class="text-2xl font-medium font-mono"
            >
                OXLint Config Generator
            </span>
        </div>
        <div class="flex items-center gap-2 **:data-[slot=separator]:!h-4">
            <Button
                as-child
                variant="ghost"
            >
                <NuxtLink>
                    <Icon
                        mode="svg"
                        name="lucide:github"
                    />
                </NuxtLink>
            </Button>
            <Separator orientation="vertical" />
            <ModeSwitcher />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'SiteHeader',
})
</script>
