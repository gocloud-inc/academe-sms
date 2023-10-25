// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	experimental: {
		payloadExtraction: false,
	},
	app: {
		baseURL: '/academe-sms/',
    	buildAssetsDir: 'assets',
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					name: 'robots',
					content: 'index, follow'
				},
				{
					name: 'googlebot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'bingbot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'description',
					content: 'Academe School Information Management System'
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: 'favicon.ico',
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: 'anonymous'
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
				},
			],
		}
	},
	css: [
		'~/assets/css/main.css'
	],
	postcss: {
		plugins: {
			'postcss-import': {},
    		'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		'@nuxtjs/color-mode',
		'@vite-pwa/nuxt'
	],
	colorMode: {
		classSuffix: ''
	},
	pwa: {
		manifest: {
			name: 'Academe SMS',
			short_name: 'Academe SMS',
			description: 'Academe School Information Management System',
			theme_color: '#DFF1FB',
			background_color: '#ffffff',
			icons: [
				{
					src: 'pwa-64x64.png',
					sizes: '64x64',
					type: 'image/png'
				},
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any'  
				},
				{
					src: 'maskable-icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'maskable'
				}
			]
		},
		registerType: 'autoUpdate',
		devOptions: {
			enabled: true,
			type: 'module',
		},
	}
})
