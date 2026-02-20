<template>
    <Body class="text-foreground flex h-full text-base antialiased bg-zinc-100 dark:bg-zinc-900 lg:overflow-hidden">
        <slot />
    </Body>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteBody',
})
</script>
