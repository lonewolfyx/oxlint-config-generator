<template>
    <div class="relative border border-input rounded p-2 space-y-2">
        <div class="flex flex-col">
            <div class="flex justify-start items-center">
                <div class="flex items-center flex-1 gap-1.5">
                    <span class="font-mono">typescript</span>
                    <span class="font-medium opacity-65">/</span>
                </div>
                <Button
                    size="icon-sm"
                    variant="ghost"
                    class="text-muted-foreground/50 hover:text-red-500"
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
                    class="rounded"
                    size="icon-sm"
                    variant="secondary"
                >
                    <Icon
                        mode="svg"
                        name="ph:sliders-duotone"
                    />
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'RuleItem',
})
</script>
