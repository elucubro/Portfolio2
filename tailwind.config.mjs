/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {"zeus": "#272622", "cucumber": "#7AAA64", "evergreen": "#114D37", "background": "#EFF1E3"},
			fontFamily: {sans: ["General Sans", ...defaultTheme.fontFamily.sans], serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif]}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}