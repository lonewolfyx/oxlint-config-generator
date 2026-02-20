<template>
    <ToggleGroup
        v-model="severity"
        size="sm"
        type="single"
        variant="outline"
    >
        <ToggleGroupItem
            aria-label="rule off"
            value="off"
        >
            <Label class="cursor-pointer">off</Label>
        </ToggleGroupItem>
        <ToggleGroupItem
            aria-label="rule warn"
            value="warn"
        >
            <Label class="cursor-pointer">warn</Label>
        </ToggleGroupItem>
        <ToggleGroupItem
            aria-label="rule error"
            value="error"
        >
            <Label class="cursor-pointer">error</Label>
        </ToggleGroupItem>
    </ToggleGroup>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRulesConfig } from '.'
import type { IRule, PluginName } from '#shared/types'

defineOptions({
    name: 'RuleSeverity',
})

const props = defineProps<{
    rule: IRule
}>()

const { oxlintrc, setOxLintRc } = useRulesConfig()!

const ruleKey = computed(() => {
    return `${props.rule.scope.replace('_', '-')}/${props.rule.value}`
})

const severity = computed({
    get: () => {
        if (!oxlintrc.value.rules) return ''

        const ruleValue = oxlintrc.value.rules[ruleKey.value]

        if (typeof ruleValue === 'string') return ruleValue

        if (Array.isArray(ruleValue)) return ruleValue[0] as string

        return ''
    },
    set: (value: 'off' | 'warn' | 'error' | '') => {
        if (!oxlintrc || !setOxLintRc || !value) return

        // update oxlintrc options
        const newConfig: typeof oxlintrc.value = {
            ...oxlintrc.value,
            rules: {
                ...oxlintrc.value.rules,
                [ruleKey.value]: value,
            },
        }

        // if the plugin is not in the plugins list, add it
        const scope = props.rule.scope.replace('_', '-') as PluginName
        if (newConfig.plugins && !newConfig.plugins.includes(scope)) {
            newConfig.plugins = [...newConfig.plugins, scope]
        }

        setOxLintRc(newConfig)
    },
})
</script>
