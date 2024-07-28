/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
		  textColor: ['group-hover'],
		},
	},
	safelist: [
		'text-orange-500', 'group-hover:text-orange-500',
		'text-red-500', 'group-hover:text-red-500',
		'text-blue-500', 'group-hover:text-blue-500',
		'text-green-500', 'group-hover:text-green-500',
		'text-blue-300', 'group-hover:text-blue-300',
	],
	plugins: [
		require("@xpd/tailwind-3dtransforms")
	],
}
