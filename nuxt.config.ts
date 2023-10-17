// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	devtools: { enabled: true },
	  app: {
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
			],
			link: [
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
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				}
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
		'@nuxtjs/color-mode'
	],
	colorMode: {
		classSuffix: ''
	}
})
