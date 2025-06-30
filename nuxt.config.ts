// nuxt.config.ts

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Multi Mock - AI Powered Mock Exams',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Prepare for CEFR and MULTILEVEL exams with AI-powered mock tests and instant feedback.' },
                { name: 'keywords', content: 'mock exams, CEFR, MULTILEVEL, language preparation, AI exams, online practice' },
                { name: 'author', content: 'Multi Mock' },
                { property: 'og:title', content: 'Multi Mock - AI Powered Mock Exams' },
                { property: 'og:description', content: 'Realistic mock exams with AI-powered feedback. Prepare with confidence.' },
                { property: 'og:image', content: '/og-image.jpg' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://yourwebsite.com' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Multi Mock - AI Powered Mock Exams' },
                { name: 'twitter:description', content: 'Realistic mock exams with AI-powered feedback. Prepare with confidence.' },
                { name: 'twitter:image', content: '/og-image.jpg' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
            ]
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],
    i18n: {
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'ru', name: 'Русский', file: 'ru.json' },
            { code: 'uz', name: 'Oʻzbek', file: 'uz.json' }
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        }
    },

});