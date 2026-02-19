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
                <div class="flex flex-col gap-3">
                    <RuleHeader />
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
import RuleHeader from '~/components/rule/Header.vue'
import RuleKeywordSearch from '~/components/rule/KeywordSearch.vue'

defineOptions({
    name: 'RuleContainer',
})
</script>
