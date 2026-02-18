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
                <div>rule selected container</div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="border border-input rounded p-2 space-y-2">
                        <div class="flex flex-col">
                            <div class="flex justify-start items-center">
                                <div class="flex items-center flex-1 gap-1.5">
                                    <span class="font-mono">typescript</span>
                                    <span class="font-medium opacity-65">/</span>
                                </div>
                                <Button
                                    size="icon-sm"
                                    variant="ghost"
                                >
                                    <Icon
                                        mode="svg"
                                        name="lucide:delete"
                                    />
                                </Button>
                            </div>
                            <span class="text-foreground font-medium">adjacent-overload-signatures</span>
                        </div>
                        <div class="text-xs opacity-75 min-h-12">
                            Require that function overload signatures be consecutive.
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-2 flex-1">
                                <Icon
                                    class="text-green-500/50"
                                    mode="svg"
                                    name="si:check-square-duotone"
                                    size="16"
                                />
                                <Icon
                                    class="text-zinc-500/50"
                                    mode="svg"
                                    name="si:wrench-duotone"
                                    size="16"
                                />
                                <Icon
                                    class="opacity-50"
                                    mode="svg"
                                    name="noto:construction"
                                    size="16"
                                />
                            </div>
                            <div class="flex items-center gap-1">
                                <RuleSeverity />
                                <Button
                                    size="icon-sm"
                                    variant="secondary"
                                    class="rounded"
                                >
                                    <Icon
                                        mode="svg"
                                        name="ph:sliders-duotone"
                                    />
                                </Button>
                            </div>
                        </div>
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
