<template>
    <a-radio-group
        v-model="value"
        type="button"
        v-bind="$attrs"
    >
        <a-radio value="off">
            off
        </a-radio>
        <a-radio value="warn">
            warn
        </a-radio>
        <a-radio value="error">
            error
        </a-radio>
    </a-radio-group>
</template>

<script lang="ts" setup>
const value = defineModel<string>()
</script>

<style scoped>

</style>
