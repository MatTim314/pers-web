import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest: {
					name: 'Sejf2',
					start_url: "/sejf2/?speed=10",
					short_name: 'Sejf2',
					description: 'Sejf app for transportation',
					theme_color: '#ffffff',
					icons: [
					  {
						src: 'favicon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					  },
					  {
						src: 'favicon-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					  }
					]
				  },
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	}
});
