<template>
    <div class="flex justify-start items-end text-xl font-sans gap-3">
        <span class="text-base opacity-50">Total number of rules:</span>
        <span class="font-bold font-mono text-red-500">{{ rulesTotal }}</span>
        <span class="text-base opacity-50">Rules turned on by default:</span>
        <span class="font-bold font-mono text-green-500 opacity-50">{{ defaultRules }}</span>
    </div>
</template>

<script lang="ts" setup>
import { payload } from '~/composables/payload'

defineOptions({
    name: 'HeaderItem',
})

const rulesTotal = computed(() => payload.value.rules.length)

const defaultRules = computed(() => payload.value.rules.filter(rule => rule.default).length)
</script>

<style scoped>

</style>
