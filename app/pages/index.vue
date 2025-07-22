<template>
    <div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()
router.replace('/rules')
</script>

<style scoped>

</style>
