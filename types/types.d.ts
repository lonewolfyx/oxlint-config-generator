// .oxlintrc.json demo
// https://github.com/Nowely/marked-input/blob/next/.oxlintrc.json
// https://github.com/582-31F-VA/evaluations/blob/main/exams/01/solution/.oxlintrc.json
// https://github.com/johnowennixon/diffdash/blob/master/.oxlintrc.json
// gllobals demo https://github.com/tuliopc23/LiqUIdify/blob/main/.oxlintrc.json

export interface IBaseConfig {
    rules?: {
        [key: string]: string
    }
    env?: {
        [key: string]: boolean
    }
    plugins?: string[]
    globals?: {
        [key: string]: string
    }
}

export interface IOverride extends IBaseConfig {
    files: string[]
}

export interface IOXLinterConfig extends IBaseConfig {
    extends?: string[]
    categories?: {
        [key: string]: [string, any]
    }
    overrides?: IOverride[]
    ignorePatterns?: string[]
    settings?: {
        [key: string]: any
    }
}

/**
 * Payload interface
 */
export interface IPayloadRules {
    source: string
    plugin: string
    name: string
    cli: string
    default: boolean
    fixable: string
    docs: {
        url: string
        description: string
    }
}

export interface IPayload {
    rules: IPayloadRules[]
    categories: string[]
    plugins: {
        name: string
        isDefault: boolean
    }[]
}
