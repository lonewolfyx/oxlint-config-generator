<template>
    <div
        v-if="isError"
    >
        {{ errorInfo }}
    </div>
    <div
        v-else-if="isLoading"
        class="relative w-full h-screen flex flex-col justify-center items-center"
    >
        <div class="flex items-center gap-4 text-primary">
            <Icon
                name="eos-icons:bubble-loading"
                size="32"
            />
            <span class="font-mono">Loading Data...</span>
        </div>
    </div>
    <div
        v-else
        class="relative w-screen h-screen m-auto px-4 pt-8 pb-2 flex flex-col space-y-4"
    >
        <Header />
        <HeaderMenu />

        <div class="flex-1 grid grid-cols-4 overflow-hidden gap-4">
            <div class="col-span-3 h-full overflow-auto ">
                <NuxtPage />
            </div>

            <div class="col-span-1 h-full overflow-hidden border rounded opacity-75">
                <CoderReview />
            </div>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
import { errorInfo, init } from '~/composables/payload'

init()
</script>
