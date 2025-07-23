<template>
    <div class="relative border rounded opacity-75 px-4 py-3">
        <div class="flex flex-col h-full">
            <div class="flex justify-between items-start">
                <div
                    class="flex flex-col cursor-pointer text-base font-mono"
                    @click="handleClick"
                >
                    <div class="flex justify-start gap-0.5">
                        <span
                            :class="sourceClass(rule.source)"
                            class="opacity-100"
                        >{{ rule.source }}</span>
                        <span class="opacity-65">/</span>
                    </div>
                    <span>{{ rule.name }}</span>
                </div>
                <div>
                    <button
                        class="cursor-pointer"
                        @click="handleDeleteConfig"
                    >
                        <Icon
                            class="text-red-500 opacity-30"
                            name="lucide:delete"
                            size="16"
                        />
                    </button>
                </div>
            </div>
            <p class="text-xs opacity-75 min-h-12">
                {{ rule.docs.description }}
            </p>

            <div class="flex items-center mt-auto gap-3">
                <a-tooltip
                    v-if="rule.default"
                    content="Rules turned on by default"
                >
                    <Icon
                        class="text-green-500/50"
                        name="si:check-square-duotone"
                        size="24"
                    />
                </a-tooltip>
                <span v-if="rule.fixable">{{ rule.fixable }}</span>
                <div class="ml-auto flex items-center">
                    <SeverityLevel
                        v-model="level"
                        @change="handleChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IPayloadRules } from '~~/types/types'
import { useOXLintConfig } from '~/store/useOXLintConfig'

const { deleteRule, setPlugins } = useOXLintConfig()

interface IRule {
    rule: IPayloadRules
}

const props = withDefaults(defineProps<IRule>(), {})

const level = defineModel<string>()

const handleClick = () => {
    alert('asd')
}

const sourceClass = (source: string): string => {
    switch (source) {
        case 'eslint':
            return 'text-purple-700'
        case 'import':
            return 'text-orange-700'
        case 'jest':
            return 'text-green-700'
        case 'jsdoc':
            return 'text-blue-700'
        case 'jsx_a11y':
            return 'text-indigo-700'
        case 'nextjs':
            return 'text-black'
        case 'oxc':
            return 'text-neutral-700'
        case 'promise':
            return 'text-yellow-700'
        case 'react':
        case 'react_perf':
            return 'text-cyan-700'
        case 'typescript':
            return 'text-sky-700'
        case 'unicorn':
            return 'text-red-700'
        case 'vitest':
            return 'text-amber-700'
        case 'node':
            return 'text-emerald-700'
        default:
            return ''
    }
}

const handleDeleteConfig = () => {
    // emit('update:modelValue', level.value)
    deleteRule(props.rule)
}

const handleChange = (row: string) => {
    console.log(props.rule, row)
    if (!props.rule.plugin) {
        return
    }
    setPlugins(props.rule.plugin)
}
</script>

<style scoped>
.arco-radio-button.arco-radio-checked {
    color: var(--color-active);
}
</style>
