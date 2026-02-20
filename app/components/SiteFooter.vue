<template>
    <div class="flex justify-center items-center">
        <span class="text-xs text-primary/20 font-sans">build with NuxtJs v4 & Tailwindcss By lonewolfyx. Source is on <NuxtLink
            :to="app.github.link"
            target="_blank"
        >Github</NuxtLink></span>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteFooter',
})

const app = useAppConfig()
</script>
