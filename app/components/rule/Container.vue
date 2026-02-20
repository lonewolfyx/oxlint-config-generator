<template>
    <div
        :class="cn(
            'flex flex-col grow',
            'gap-4 min-h-0',
        )"
    >
        <ScopeSelect />
        <div class="flex justify-between items-center">
            <RuleFilterInfo />
            <RuleKeywordSearch />
        </div>
        <div
            :class="cn(
                'flex',
                'px-4 py-2 bg-background border border-input rounded-xl min-h-0 h-full',
            )"
        >
            <div class="grow overflow-y-auto min-h-0">
                <div
                    v-for="(items, scope) in filteredRules"
                    :key="`Rule:Scope:${scope}`"
                    class="flex flex-col gap-3"
                >
                    <RuleHeader :scope="scope as SourcePluginName" />
                    <div class="grid grid-cols-3 gap-4">
                        <RuleItem
                            v-for="rule in items"
                            :key="`${rule.value}:${rule.scope}`"
                            :rule="rule"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '~/lib/utils'
import { useRulesConfig } from '~/components/rule'
import RuleHeader from '~/components/rule/Header.vue'
import RuleKeywordSearch from '~/components/rule/KeywordSearch.vue'
import type { IRule, SourcePluginName } from '#shared/types'

defineOptions({
    name: 'RuleContainer',
})

const { rules, selectedScopes, searchKeyword } = useRulesConfig()

const SORTED_SCOPES = [
    'eslint',
    'oxc',
    'typescript',
    'react',
    'react_perf',
    'jsx_a11y',
    'nextjs',
    'vue',
    'jest',
    'vitest',
    'unicorn',
    'import',
    'jsdoc',
    'promise',
    'node',
] as SourcePluginName[]

const filteredRules = computed(() => {
    const result = new Map<string, IRule[]>()
    const keyword = searchKeyword.value.toLowerCase().trim() || ''

    SORTED_SCOPES.forEach((scope) => {
        if (selectedScopes.value.includes(scope) && rules[scope]) {
            let filteredItems = rules[scope]

            if (keyword) {
                filteredItems = rules[scope].filter((rule: IRule) => rule.value.toLowerCase().includes(keyword))
            }

            // Add only scopes with rules
            if (filteredItems.length > 0) {
                result.set(scope, filteredItems)
            }
        }
    })

    return Object.fromEntries(result)
})
</script>
