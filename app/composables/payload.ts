import axios from 'axios'
import type { IPayload } from '~~/types/types'

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
    try {
        const payload = await axios.get('/api/payload.json')
        console.log('[OXLint Payload]', payload.data)

        data.value = payload.data
        isLoading.value = false
    }
    catch (e) {
        isError.value = true
        errorInfo.value = e
    }
}
