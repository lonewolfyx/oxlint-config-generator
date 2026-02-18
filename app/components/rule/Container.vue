<template>
    <div
        :class="cn(
            'flex flex-col grow',
            'gap-4 min-h-0',
        )"
    >
        <ScopeSelect />
        <div class="flex items-center">
            <div class="bg-muted border border-input rounded-2xl shadow-xs px-3 py-1">
                762 rules enabled out of 1718 rules
            </div>
        </div>
        <div
            :class="cn(
                'flex',
                'px-4 py-2 bg-background border border-input rounded-xl shadow-xs min-h-0 h-full',
            )"
        >
            <div class="grow overflow-y-auto min-h-0">
                <div class="flex flex-col gap-3">
                    <div class="relative flex items-center">
                        <div
                            :class="cn(
                                'relative capitalize flex-1',
                                'pl-2',
                                'after:absolute after:inset-0 after:left-0 after:w-1 after:h-full after:rounded after:bg-amber-600',
                            )"
                        >
                            eslint
                        </div>
                        <div class="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                            <span class="text-pink-600 font-bold">15</span>
                            <span>/</span>
                            <span>40</span>
                            <span>Rules</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <RuleItem
                            v-for="index in Array.from({ length: 6 }, (_, i) => i+1)"
                            :key="index"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'RuleContainer',
})
</script>
