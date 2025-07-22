<template>
    <div class="h-full flex flex-col overflow-hidden">
        <div class="flex justify-between items-center p-4 border-b">
            <span class="text-sm font-mono font-bold">.oxlintrc.json</span>
            <div class="flex items-center gap-2">
                <button
                    :class="cn(
                        'flex items-center border rounded-full cursor-pointer p-1',
                        'hover:bg-red-500/20 hover:text-red-500/75 hover:border-red-500/50',
                    )"
                    @click="refreshConfig"
                >
                    <Icon
                        name="lucide:refresh-ccw-dot"
                        size="16"
                    />
                </button>
                <!--                TODO -->
                <!--                <button -->
                <!--                    :class="cn( -->
                <!--                        'flex items-center border rounded-full cursor-pointer p-1', -->
                <!--                        'hover:bg-primary-500/20 hover:text-primary-500/75 hover:border-primary-500/50', -->
                <!--                    )" -->
                <!--                    @click="refreshConfig" -->
                <!--                > -->
                <!--                    <Icon -->
                <!--                        name="lucide:copy" -->
                <!--                        size="16" -->
                <!--                    /> -->
                <!--                </button> -->
            </div>
        </div>
        <div class="relative flex-1 overflow-auto bg-gray-500/10 p-4">
            <VueJsonPretty
                :data="coder"
                :show-double-quotes="false"
                theme="dark"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { useOXLintConfig } from '~/store/useOXLintConfig'
import { cn } from '~/lib/utils'
// https://github.com/leezng/vue-json-pretty/blob/HEAD/README.zh_CN.md

const { refreshConfig } = useOXLintConfig()

const { coder } = toRefs(useOXLintConfig())
</script>
