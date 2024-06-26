module.exports = {
	darkMode: "class", // Enable dark mode with a 'class' strategy
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // Adjust paths according to your project structure
	],
	theme: {
		extend: {
			colors: {
				bluegray: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cfd8e3",
					400: "#97a6ba",
					500: "#64748b",
					600: "#475569",
					700: "#364152",
					800: "#27303f",
					900: "#1a202e",
				},
				offwhite: "#F8F8F8",
				primary: "#3B82F6", // Add any primary color
				secondary: "#6366F1", // Add any secondary color
				accent: "#D97706", // Add any accent color
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
