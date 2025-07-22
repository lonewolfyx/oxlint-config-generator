import { defineStore } from 'pinia'
import type { IOXLinterConfig, IPayloadRules } from '~~/types/types'
import { payload } from '~/composables/payload'
import { Notification } from '@arco-design/web-vue'

const filterEmptyKeys = (obj: Record<string, any>) => {
    return Object.entries(obj).reduce((filteredObj, [key, value]) => {
        const actualValue = value?.value ?? value

        // check if value is not empty
        if (actualValue !== undefined && actualValue !== null) {
            if (Array.isArray(actualValue) && actualValue.length === 0) return filteredObj
            if (typeof actualValue === 'object' && Object.keys(actualValue).length === 0) return filteredObj

            // If not empty, add to filtered object
            filteredObj[key] = actualValue
        }

        return filteredObj
    }, {} as Record<string, any>)
}

const oxRules = computed((): IPayloadRules[] => payload.value.rules)

export const useOXLintConfig = defineStore('oxlint-cofnig', () => {
    const config = ref<IOXLinterConfig>({
        rules: {},
        plugins: [],
    })

    const rules = computed({
        get() {
            return config.value.rules
        },
        set(value) {
            config.value.rules = value
        },
    })

    // const rulePlugins

    // delete oxlint config rules for rule key
    const deleteRule = (rule: IPayloadRules) => {
        const newRules = {
            ...config.value.rules,
        }
        delete newRules[rule.name]

        config.value.rules = newRules

        // 开始重置 plugins 内容
        const { isCleared, plugins } = clearPlugins(rule)

        if (isCleared) {
            config.value.plugins = plugins
        }
    }

    const setPlugins = (plugin: string) => {
        if (config.value.plugins!.includes(plugin)) return

        config.value.plugins!.push(plugin)
    }

    const clearPlugins = (rule: IPayloadRules): { isCleared: boolean, plugins: any } => {
        const data = {
            isCleared: false,
            plugins: config.value.plugins,
        }

        if (rule.plugin == '') {
            return data
        }

        const rules = oxRules.value
            .filter(item => item.name != rule.name && item.plugin != '' && item.plugin == rule.plugin)
            .map(item => item.name)

        // 当前的 plugins 有涉及其他的 rule 规则，所以不能删
        if (
            Object.keys(config.value.rules!).length > 0
            && Object.keys(config.value.rules!).every(item => rules.includes(item))
        ) {
            return data
        }

        const newPlugins = [...config.value.plugins!]

        return {
            isCleared: true,
            plugins: newPlugins.filter(item => item !== rule.plugin),
        }
    }

    // config review
    const coder = computed(() => filterEmptyKeys(config.value))

    const refreshConfig = () => {
        config.value = {
            rules: {},
            plugins: [],
        }
        Notification.success({
            title: 'OXLint Config has reset',
            position: 'bottomRight',
        })
    }

    return {
        config,
        rules,
        deleteRule,
        coder,
        setPlugins,
        refreshConfig,
    }
}, {
    persist: true,
})
