import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [
				extractorSvelte(),
			],
			/* more options */
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
