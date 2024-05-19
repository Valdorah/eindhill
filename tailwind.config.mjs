/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Sen', 'sans-serif']
		},
		extend: {
			colors: {
				'eindhill-1': '#261b15',
				'eindhill-2': '#af9062',
				'eindhill-3': '#c1ae9a',
				'eindhill-4': '#623513',
				'eindhill-5': '#e8dbbd',
				'eindhill-6': '#d19f4f',
				'eindhill-7': '#a76c26',
				'eindhill-8': '#8c7660',
				'eindhill-9': '#8a4e17',
				'eindhill-10': '#886840',
				'eindhill-11': '#edc96e',
				'eindhill-12': '#ecbf50',
				'eindhill-13': '#f7f3eb',
				'eindhill-14': '#edd28b',
				'eindhill-15': '#625342',
				'eindhill-16': '#481205',
				'eindhill-17': '#3c5444',
				'eindhill-18': '#c46c24',
				'eindhill-19': '#b4bc9c',
				'eindhill-20': '#3c4c54'
			}
		},
	},
	plugins: [],
}
