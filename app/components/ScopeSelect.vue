<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
            v-for="scope in scopeCategories"
            :key="scope.label"
            class="flex items-start gap-2"
        >
            <span class="capitalize text-sm opacity-50">{{ scope.label }}:</span>
            <div class="flex items-center gap-2">
                <Button
                    v-for="plugin in scope.plugins"
                    :key="plugin.value"
                    :class="cn(
                        'capitalize',
                        'border rounded-full',
                        'px-2.5 py-0.5 h-auto',
                        ruleScopeVariants(
                            {
                                label: '',
                            },
                        ),
                    )"
                    as="label"
                    variant="secondary"
                >
                    {{ plugin.label }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { ruleScopeVariants } from '~/components/rule'

defineOptions({
    name: 'ScopeSelect',
})

const scopeCategories: IScopeCategory[] = [
    {
        label: 'Default',
        plugins: [
            { label: 'Eslint', value: 'eslint' },
            { label: 'Oxc', value: 'oxc' },
            { label: 'TypeScript', value: 'typescript' },
        ],
    },
    {
        label: 'Frameworks',
        plugins: [
            { label: 'React', value: 'react' },
            { label: 'React Pref', value: 'react_perf' },
            { label: 'JSX Accessibility', value: 'jsx_a11y' },
            { label: 'vue', value: 'vue' },
            { label: 'Next.js', value: 'nextjs' },
        ],
    },
    {
        label: 'Testing',
        plugins: [
            { label: 'Jest', value: 'jest' },
            { label: 'Vitest', value: 'vitest' },
        ],
    },
    {
        label: 'Misc',
        plugins: [
            { label: 'Unicorn', value: 'unicorn' },
            { label: 'Import', value: 'import' },
            { label: 'JSDoc', value: 'jsdoc' },
            { label: 'Promise', value: 'promise' },
            { label: 'Node.js', value: 'node' },
        ],
    },
]
</script>
