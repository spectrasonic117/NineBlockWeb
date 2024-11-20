/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"brain-freeze": {
					50: "#eafffe",
					100: "#cbfffe",
					200: "#9efeff",
					300: "#5bf9ff",
					400: "#00eaff",
					500: "#00cde5",
					600: "#00a4c0",
					700: "#03829b",
					800: "#0d687d",
					900: "#105569",
					950: "#033949",
				},
				"dithered-sky": {
					50: "#eff6ff",
					100: "#daebff",
					200: "#badaff",
					300: "#91c7ff",
					400: "#5ea8fc",
					500: "#3885f9",
					600: "#2266ee",
					700: "#1a51db",
					800: "#1c42b1",
					900: "#1c3b8c",
					950: "#162555",
				},
				"blue-gem": {
					50: "#f0effe",
					100: "#e1e1fe",
					200: "#ccc9fc",
					300: "#aea8f9",
					400: "#9785f4",
					500: "#8668ec",
					600: "#794be0",
					700: "#693dc5",
					800: "#55349f",
					900: "#4d3589",
					950: "#2a1d49",
				},
				"arcade-glow": {
					50: "#e7f4ff",
					100: "#d3ebff",
					200: "#b0d7ff",
					300: "#81baff",
					400: "#4f8eff",
					500: "#2861ff",
					600: "#0430ff",
					700: "#002eff",
					800: "#0025ce",
					900: "#0b2aa4",
					950: "#07175f",
				},
				"dark-navy": {
					50: "#e4f4ff",
					100: "#cfe9ff",
					200: "#a8d5ff",
					300: "#74b7ff",
					400: "#3e85ff",
					500: "#1354ff",
					600: "#0040ff",
					700: "#0040ff",
					800: "#0039e4",
					900: "#0026b0",
					950: "#000930",
				},
			},
		},
	},
	plugins: [],
};