module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				vue: {
					300: '#53d79c',
					400: '#41b883',
				},
			},
			height: {
				'82': '21rem',
			},
		},
	},
	plugins: [],
}
