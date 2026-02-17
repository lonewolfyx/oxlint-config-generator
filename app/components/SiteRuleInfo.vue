<template>
    <div class="flex justify-start items-end text-xl font-sans gap-3 pb-2 border-b border-dashed">
        <span class="text-base opacity-50">Total number of rules:</span>
        <span class="font-bold font-mono text-red-500">677</span>
        <span class="text-base opacity-50">Rules turned on by default:</span>
        <span class="font-bold font-mono text-green-500 opacity-50">107</span>
        <span class="text-base opacity-50">Rules with fixes available:</span>
        <span class="font-bold font-mono text-indigo-500 opacity-50">242</span>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteRuleInfo',
})
</script>
