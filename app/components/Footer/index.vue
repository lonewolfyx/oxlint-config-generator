<template>
    <div class="flex justify-center items-center">
        <span class="text-xs text-primary/20 font-sans">build with
            <NuxtLink
                target="_blank"
                to="https://nuxt.com/"
            >NuxtJs v4</NuxtLink>
            & <NuxtLink
                target="_blank"
                to="https://tailwindcss.com/"
            >Tailwindcss</NuxtLink> By <NuxtLink
                target="_blank"
                to="https://github.com/lonewolfyx"
            >lonewolfyx</NuxtLink>. Source is on <NuxtLink
                :to="app.github"
                target="_blank"
                :title="app.name"
            >Github</NuxtLink></span>
    </div>
</template>

<script lang="ts" setup>
const { app } = useRuntimeConfig()
</script>

<style scoped>

</style>
