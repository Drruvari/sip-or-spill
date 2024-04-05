/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				darkbg: "#121212",
				accent: "#bb86fc",
			},
			animation: {
				reveal: "reveal 0.5s ease-out forwards",
				"shrink-out": "shrinkOut 0.3s ease-out forwards",
			},
			keyframes: {
				reveal: {
					"0%": { opacity: 0, transform: "scale(0.5)" },
					"100%": { opacity: 1, transform: "scale(1)" },
				},
				shrinkOut: {
					"0%": { opacity: 1, transform: "scale(1)" },
					"100%": { opacity: 0, transform: "scale(0)" },
				},
			},
		},
		fontFamily: {
			mono: ["Fira Code", "monospace"],
		},
	},
	plugins: [],
};
