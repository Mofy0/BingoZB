import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import json from '@rollup/plugin-json'


export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		json({
    			compact: true
  			})
	]
});
