import { defineConfig } from "@windicss/plugin-utils"

export default defineConfig({
    // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                "blurple": "#5865F2",
                "blurple-secondary": "#404EED",
                "dark-pro": "#131b21",
                "dark": "#23272A",
                "dark-secondary": "#2C2F33",
                "light": "#FFFFFF",
                "light-secondary": "#F6F6F6"
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                "open-sans": ['Open Sans', 'sans-serif']
            }
        }
    },
    variants: {

    },
    plugins: []
})