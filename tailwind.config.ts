import type { Config } from 'tailwindcss'
import colorList from './src/constant/colorList'
export default <Partial<Config>>{
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,vue}",
    ],
    theme: {
        extend: {
            colors: colorList,
        }
    }
}
