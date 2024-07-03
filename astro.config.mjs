import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				devOptions: {
					enabled: true
				  },
				includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
				manifest: {  
					name: "Sejf",
					short_name: "Sejf",
					icons: [
					  {
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any"
					  },
					  {
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any"
					  },
					  {
						src: "/pwa-maskable-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable"
					  },
					  {
						src: "/pwa-maskable-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable"
					  }
					],
					start_url: "sejf2/?speed=10",
					display: "standalone",
					background_color: "#FFFFFF",
					theme_color: "#FFFFFF",
					description: "Sejf app"	
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
