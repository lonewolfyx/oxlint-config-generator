<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
            <img
                :alt="app.name"
                :src="`${app.baseURL}logo.svg`"
                class="size-8"
            >
            <span class="text-2xl font-light font-sans opacity-85">{{ app.name }}</span>
            <span
                class="inline bg-primary/20 rounded-2xl text-primary text-xs px-3 py-1 -translate-y-4"
            >v{{ version }}</span>
        </div>

        <div class="flex items-center">
            <!--            <button> -->
            <!--                <Icon -->
            <!--                    class="opacity-50" -->
            <!--                    name="lucide:sun" -->
            <!--                    size="24" -->
            <!--                /> -->
            <!--                <Icon -->
            <!--                    class="opacity-50" -->
            <!--                    name="lucide:sun-moon" -->
            <!--                    size="24" -->
            <!--                /> -->
            <!--            </button> -->
            <NuxtLink
                :title="app.name"
                :to="app.github"
                target="_blank"
            >
                <Icon
                    class="opacity-50"
                    name="uil:github"
                    size="24"
                />
            </NuxtLink>
        </div>
    </div>

    <HeaderItem />
</template>

<script lang="ts" setup>
import HeaderItem from '~/components/Header/item.vue'
import { version } from '~~/package.json'

const { app } = useRuntimeConfig()
</script>

<style scoped>

</style>
