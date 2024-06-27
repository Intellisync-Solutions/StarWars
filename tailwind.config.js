module.exports = {
	darkMode: "class", // Enable dark mode with a 'class' strategy
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // Adjust paths according to your project structure
	],
	theme: {
		extend: {
			colors: {
				bg: "var(--color-bg)",
				text: "var(--color-text)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				muted: "var(--color-muted)",
				offwhite: "var(--color-offwhite)",
				bluegray: {
					50: "var(--color-bluegray-50)",
					100: "var(--color-bluegray-100)",
					200: "var(--color-bluegray-200)",
					300: "var(--color-bluegray-300)",
					400: "var(--color-bluegray-400)",
					500: "var(--color-bluegray-500)",
					600: "var(--color-bluegray-600)",
					700: "var(--color-bluegray-700)",
					800: "var(--color-bluegray-800)",
					900: "var(--color-bluegray-900)",
				},
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark"],
			textColor: ["dark"],
			borderColor: ["dark"],
		},
	},
	plugins: [],
};
