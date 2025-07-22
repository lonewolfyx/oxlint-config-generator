// types/pinia.d.ts
import 'pinia'
// @ts-ignore
import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        persist?: boolean | PersistedStateOptions | PersistedStateOptions[]
    }
}
