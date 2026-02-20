<template>
    <div class="w-1/3">
        <InputGroup class="rounded-full">
            <InputGroupInput
                v-model="searchKeyword"
                placeholder="Search Rules..."
            />
            <InputGroupAddon>
                <Icon
                    mode="svg"
                    name="ph:magnifying-glass-duotone"
                />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script lang="ts" setup>
import { useRulesConfig } from '~/components/rule'

defineOptions({
    name: 'RuleKeywordSearch',
})

const { searchKeyword } = useRulesConfig()!
</script>
