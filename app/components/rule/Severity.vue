<template>
    <RadioGroup
        :class="cn(
            'bg-muted inline-flex items-center rounded',
            'divide-x divide-border-input',
            'p-1 gap-0',
        )"
        default-value="comfortable"
    >
        <RadioButtonGroupItem value="off">
            off
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="warn">
            warn
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="error">
            error
        </RadioButtonGroupItem>
    </RadioGroup>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'RuleSeverity',
})
</script>
