import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{js,ts,vue}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './nuxt.config.ts'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#16a34a',
                dark: '#111827'
            }
        }
    },
    plugins: []
}
export default config
