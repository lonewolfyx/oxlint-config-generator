<template>
    <div class="relative border border-input rounded p-2 space-y-2">
        <div class="flex flex-col">
            <div class="flex justify-start items-center">
                <div class="flex items-center flex-1 gap-1.5">
                    <span
                        :class="cn(
                            'capitalize text-base font-medium',
                            ruleScopeVariants({
                                text: rule.scope,
                            }),
                        )"
                    >
                        {{ rule.scope }}
                    </span>
                    <span class="font-medium opacity-65">/</span>
                </div>
                <Button
                    class="text-muted-foreground/50 hover:text-red-500"
                    size="icon-sm"
                    variant="ghost"
                    @click="handleDeleteRule"
                >
                    <Icon
                        mode="svg"
                        name="ic:twotone-delete"
                    />
                </Button>
            </div>
            <span class="text-foreground font-medium font-mono text-sm">{{ rule.value }}</span>
        </div>
        <div class="text-xs opacity-75 min-h-12 line-clamp-3">
            {{ rule.description }}
        </div>
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2 flex-1">
                <Icon
                    v-if="rule.default"
                    class="text-green-500/50"
                    mode="svg"
                    name="si:check-square-duotone"
                    size="16"
                />
                <Icon
                    v-if="!FIXABLE_TYPES.includes(rule.fix)"
                    class="text-zinc-500/50"
                    mode="svg"
                    name="si:wrench-duotone"
                    size="16"
                />
                <Icon
                    v-if="rule.fix === 'pending'"
                    class="opacity-50"
                    mode="svg"
                    name="noto:construction"
                    size="16"
                />
            </div>
            <div class="flex items-center gap-1">
                <RuleSeverity :rule="rule" />
                <Button
                    v-if="Object.keys(rule.options.schema).length"
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
import { computed } from 'vue'
import { ruleScopeVariants, useRulesConfig } from '~/components/rule'
import { cn } from '~/lib/utils'
import type { IRule } from '#shared/types'
import { FIXABLE_TYPES } from '~/constant'
import { scopeToPluginMap } from '~/utils/scopeToPluginMap'

defineOptions({
    name: 'RuleItem',
})

const props = defineProps<{
    rule: IRule
}>()

const { oxlintrc, setOxLintRc } = useRulesConfig()!

const scope = computed(() => scopeToPluginMap[props.rule.scope])

const ruleKey = computed(() => `${scope.value}/${props.rule.value}`)

// delete rule
const handleDeleteRule = () => {
    if (!oxlintrc || !setOxLintRc || !oxlintrc.value.rules) return

    const currentRules = { ...oxlintrc.value.rules }

    // delete current rule
    delete currentRules[ruleKey.value]

    // check if there are other rules using the scope
    const scopePrefix = `${scope.value}/`
    const hasOtherRules = Object.keys(currentRules).some(key =>
        key.startsWith(scopePrefix),
    )

    // if no other rules use the scope, remove it from plugins
    let newPlugins = oxlintrc.value.plugins ? [...oxlintrc.value.plugins] : []
    if (!hasOtherRules && newPlugins.includes(scope.value)) {
        newPlugins = newPlugins.filter(p => p !== scope.value)
    }

    setOxLintRc({
        ...oxlintrc.value,
        plugins: newPlugins,
        rules: currentRules,
    })
}
</script>
