<template>
    <div class="w-1/3">
        <InputGroup class="rounded-full">
            <InputGroupInput placeholder="Search Rules..." />
            <InputGroupAddon>
                <Icon
                    mode="svg"
                    name="ph:magnifying-glass-duotone"
                />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'RuleKeywordSearch',
})
</script>
