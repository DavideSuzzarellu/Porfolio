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
		
		rotate: {
			'0': '0deg',
			'180': '180deg',
		  },
		  
		transform: {
		'rotateX-0': 'rotateX(0deg)',
		'rotateX-180': 'rotateX(180deg)',
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
		function ({ addUtilities }) {
			addUtilities({
			  '.backface-visible': {
				'backface-visibility': 'visible',
			  },
			  '.backface-hidden': {
				'backface-visibility': 'hidden',
			  },
			  '.rotateX-0': {
				transform: 'rotateX(0deg)',
			  },
			  '.rotateX-180': {
				transform: 'rotateX(180deg)',
			  },
			});
		},
	],
}
