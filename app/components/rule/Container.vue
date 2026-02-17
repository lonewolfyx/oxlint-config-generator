<template>
    <div
        :class="cn(
            'flex flex-col grow',
            'gap-4 min-h-0',
        )"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="flex items-start gap-2">
                <span class="capitalize text-sm opacity-50">default:</span>
                <div class="flex items-center gap-2">
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        eslint
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        oxc
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        typescript
                    </Button>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <span class="capitalize text-sm opacity-50">frameworks:</span>
                <div class="flex items-center gap-2">
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        react
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        React Perf
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        JSX Accessibility
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        vue
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        next.js
                    </Button>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <span class="capitalize text-sm opacity-50">testing:</span>
                <div class="flex items-center gap-2">
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        jest
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        vitest
                    </Button>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <span class="capitalize text-sm opacity-50">misc:</span>
                <div class="flex items-center gap-2">
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        unicon
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        import
                    </Button>
                    <Button
                        as="label"
                        class="capitalize border rounded-full px-2.5 py-0.5 h-auto"
                        variant="secondary"
                    >
                        jsdoc
                    </Button>
                </div>
            </div>
        </div>
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
