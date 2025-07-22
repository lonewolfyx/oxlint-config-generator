<template>
    <div class="flex flex-wrap items-center gap-3">
        <NuxtLink
            v-for="items in menus"
            :key="items.name"
            :class="cn(
                'flex items-center gap-2 border rounded px-3 py-1 opacity-75',
                'hover:bg-active/10 hover:border-active/20 hover:text-black',
                route.name === items.url ? 'bg-active/10 border-active/20 text-active hover:text-active hover:bg-active/5' : '',
            )"
            :to="items.url"
        >
            <Icon
                :name="items.icon"
                size="20"
            />
            {{ items.name }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'HeaderMenu',
})

const menus: { name: string, icon: string, url: string }[] = [
    { name: 'Rules', icon: 'ph:list-dashes-duotone', url: 'rules' },
    // { name: 'Plugins', icon: 'mingcute:plugin-2-line', url: 'plugin' },
    // { name: 'Overrides', icon: 'lucide:replace-all', url: 'override' },
    // { name: 'Categories', icon: 'lucide:chart-bar-stacked', url: 'category' },
    // { name: 'IgnorePatterns', icon: 'lucide:circle-off', url: 'ignore.pattern' },
    // { name: 'Env', icon: 'lucide:command', url: 'env' },
    // { name: 'Globals', icon: 'ph:list-dashes-duotone', url: 'global' },
    // { name: 'Settings', icon: 'lucide:cog', url: 'setting' },
]

const route = useRoute()
</script>

<style scoped>

</style>
