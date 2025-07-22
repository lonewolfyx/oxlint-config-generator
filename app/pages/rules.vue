<template>
    <div>
        <DynamicScroller
            :items="chunkedRules"
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
                </DynamicScrollerItem>
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

const chunkedRules = computed<RuleRow[]>(() => {
    return oxRules.value.reduce((acc: RuleRow[], item: IPayloadRules, index: number) => {
        const chunkIndex = Math.floor(index / 3)

        if (!acc[chunkIndex]) {
            const row: RuleRow = []
            Object.defineProperty(row, 'rowKey', {
                value: `row-${chunkIndex}`,
                enumerable: false,
            })
            acc[chunkIndex] = row
        }

        acc[chunkIndex].push(item)
        return acc
    }, [] as RuleRow[])
})

const { rules } = storeToRefs(useOXLintConfig())
</script>
