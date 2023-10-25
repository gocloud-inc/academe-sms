/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		// "./error.vue",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				lg: '4rem',
				xl: '7rem',
				'2xl': '7rem',
			},
		},
        colors: {
			"transparent": "transparent",
			"white": "#FFFFFF",
			"black": "#000000",
			primary: {
                DEFAULT: "#1B9AE3",
				50: "#F1F9FD",
				100: "#DFF1FB",
				200: "#BFE3F7",
				300: "#92CFF2",
				400: "#60B8EC",
				500: "#1B9AE3",
				600: "#188BCD",
				700: "#1578B2",
				800: "#126696",
				900: "#0D4A6D",
				950: "#09344D"
			},
			"success": {
				DEFAULT: "#14A44D",
				50: "#E8FCF0",
				100: "#C8F8DC",
				200: "#89F1B2",
				300: "#1CE36C",
				400: "#18C85F",
				500: "#14A44D",
				600: "#129647",
				700: "#0F7F3C",
				800: "#0D6D34",
				900: "#094922",
				950: "#07371A"
			},
			"danger": {
				DEFAULT: "#DC4C64",
				50: "#FCF2F4",
				100: "#FBEAED",
				200: "#F6D0D6",
				300: "#EFAEB9",
				400: "#E88898",
				500: "#DC4C64",
				600: "#D62E4A",
				700: "#C0263F",
				800: "#A22035",
				900: "#6F1625",
				950: "#4D0F19"
			},
			"warning": {
				DEFAULT: "#E4A11B",
				50: "#FDF7ED",
				100: "#FBF0DB",
				200: "#F6E1B6",
				300: "#F1CE88",
				400: "#ECBB5B",
				500: "#E4A11B",
				600: "#CD9118",
				700: "#B27E15",
				800: "#966A12",
				900: "#694A0C",
				950: "#493409"
			},
			"gray": {
				DEFAULT: "#6b7280",
				50: "#f9fafb",
				100: "#f3f4f6",
				200: "#e5e7eb",
				300: "#d1d5db",
				400: "#9ca3af",
				500: "#6b7280",
				600: "#4b5563",
				700: "#374151",
				800: "#1f2937",
				900: "#111827",
				950: "#030712"
			}
        }
	},
	plugins: [
		
	],
	darkMode: [
        'class'
    ],
}

