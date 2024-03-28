import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,vue}",
    ],
}
