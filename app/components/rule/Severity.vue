<template>
    <ToggleGroup
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
defineOptions({
    name: 'RuleSeverity',
})
</script>
