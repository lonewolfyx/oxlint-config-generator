import type { IPayload } from '~~/types/types'
import { getOXLintPayload } from '~/lib/oxlintrules'

const data = ref<IPayload>({
    rules: {} as any,
    categories: [],
    plugins: [],
})

export const payload = computed(() => data.value!)

export const isLoading = ref(true)

export const isError = ref(false)

export const errorInfo = ref<any>()

export const init = async () => {
    data.value = await getOXLintPayload()
    isLoading.value = false
}
