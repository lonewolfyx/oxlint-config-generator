<template>
    <div class="flex items-center px-2 group/item group-has-[[data-state=checked]]:border-transparent">
        <RadioGroupItem
            :id="value"
            :value="value"
            class="peer hidden sr-only"
        />
        <Label
            :class="cn(
                'capitalize cursor-pointer rounded px-2 py-1 transition-all',
                'bg-muted text-muted-foreground',
                'hover:bg-background hover:text-accent-foreground',
                'peer-data-[state=checked]:bg-background',
                'peer-data-[state=checked]:text-accent-foreground',
            )"
            :for="value"
        >
            <slot />
        </Label>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'RadioButtonGroupItem',
    inheritAttrs: false,
})

defineProps<{
    value: string
}>()
</script>
