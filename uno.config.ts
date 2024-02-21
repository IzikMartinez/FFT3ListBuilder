// uno.config.ts
import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    extractors: [
        extractorSvelte(),
    ],
    presets: [
        presetAttributify(),
        presetUno(),
    ],
    theme: {
        fontFamily: {
            staatliches: "Staatliches",
            alumni: "Alumni Sans"
        }
    }
})