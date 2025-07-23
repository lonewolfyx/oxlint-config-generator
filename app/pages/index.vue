<template>
    <div>
        <DynamicScroller
            :items="chunkedRs"
            :min-item-size="150"
            key-field="rowKey"
        >
            <template #default="{ item: rowItems, index }">
                <DynamicScrollerItem
                    :active="true"
                    :index="index"
                    :item="rowItems"
                >
                    <div class="grid grid-cols-3 gap-4 pb-4">
                        <RuleItem
                            v-for="item in rowItems"
                            :key="item.name"
                            v-model="rules[item.name]"
                            :rule="item"
                        />
                    </div>
                </dynamicscrolleritem>
            </template>
        </DynamicScroller>
    </div>
</template>

<script lang="ts" setup>
import { payload } from '~/composables/payload'

// @ts-expect-error
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import type { IPayloadRules } from '~~/types/types'
import { useOXLintConfig } from '~/store/useOXLintConfig'

const oxRules = computed(() => payload.value.rules)

type RuleRow = IPayloadRules[] & { rowKey?: string }

const { rules } = storeToRefs(useOXLintConfig())

const chunkedRs = computed(() => {
    const rules = oxRules.value
    const chunkSize = 3
    const result: RuleRow[] = []

    for (let i = 0; i < rules.length; i += chunkSize) {
        const row: RuleRow = rules.slice(i, i + chunkSize)
        Object.defineProperty(row, 'rowKey', {
            value: `row-${result.length}`,
            enumerable: false,
        })
        result.push(row)
    }

    return result
})
</script>
