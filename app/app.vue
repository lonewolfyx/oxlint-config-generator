<template>
    <SiteBody>
        <div class="flex flex-col grow p-3 gap-3 min-h-0">
            <SiteHeader />
            <RuleConfigProvider>
                <SiteRuleInfo />
                <SiteContent />
            </RuleConfigProvider>
            <SiteFooter />
        </div>
    </SiteBody>
</template>

<script lang="ts" setup>
useHead({
    htmlAttrs: {
        class: ['h-full'],
    },
})

const { title, description } = useAppConfig()
useSeoMeta({
    title,
    description,
})
</script>
