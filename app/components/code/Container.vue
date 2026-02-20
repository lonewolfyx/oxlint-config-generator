<template>
    <div
        :class="cn(
            'bg-background w-1/3 shrink-0',
            'border border-input rounded-xl',
            'flex min-h-0',
        )"
    >
        <div class="grow flex flex-col min-h-0 pt-4 gap-4">
            <div class="flex justify-between items-center gap-2 mx-3">
                <div
                    :class="cn(
                        'relative capitalize text-foreground font-mono font-medium',
                        'mr-auto pl-4',
                        'after:absolute after:inset-0 after:left-0 after:w-1 after:h-full after:rounded after:bg-amber-600',
                    )"
                >
                    .oxlintrc.json
                </div>
                <Button
                    size="icon-sm"
                    variant="secondary"
                >
                    <Icon
                        mode="svg"
                        name="lucide:refresh-ccw-dot"
                    />
                </Button>
                <Button
                    size="icon-sm"
                    variant="secondary"
                >
                    <Icon
                        mode="svg"
                        name="lucide:copy"
                    />
                </Button>
            </div>
            <div class="rounded-b-xl p-2 overflow-y-auto min-h-0 h-full bg-muted">
                <span>code review</span>
                <p>code review</p>
                <p>code review</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'CodeContainer',
})
</script>
