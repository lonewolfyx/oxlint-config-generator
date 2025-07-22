import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        'arco-design-nuxt-module',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'pinia-plugin-persistedstate/nuxt',
    ],
    ssr: false,

    devtools: { enabled: true },
    app: {
        baseURL: './',
        head: {
            title: 'OXLint Config Generator',
            charset: 'utf-8',
            meta: [
                {
                    name: 'author',
                    content: `olddriver <https://github.com/lonewolfyx>`,
                },
                {
                    name: 'description',
                    content: 'Easily config your oxlint config for your next app.',
                },
                {
                    name: 'application-name',
                    content: 'OXLint Config Generator',
                },
                {
                    name: 'keywords',
                    content: [
                        'oxc',
                        'oxlint',
                        'create oxlint config in nuxt.js',
                        'create oxlint config in vue',
                        'vue',
                        'nuxt.js',
                        'javascript',
                        'linter',
                        'linter in javascript app',
                    ].join(','),
                },
            ],
        },
    },

    css: ['~/assets/css/tailwind.css'],

    runtimeConfig: {
        app: {
            name: 'OXLint Config Generator',
            description: 'Easily config your oxlint config for your next app.',
            github: 'https://github.com/lonewolfyx/oxlint-config-generator',
        },
    },

    devServer: {
        port: 7077,
    },
    compatibilityDate: '2025-07-15',

    nitro: {
        devProxy: {
            host: 'localhost',
        },
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },
})
