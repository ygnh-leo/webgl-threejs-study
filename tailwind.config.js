module.exports = {
	content: ['src/**/*.{js,ts,jsx,tsx}', 'posts/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'5vw': '5vw', // pull featured sections and navbar in the margin
				'8vw': '8vw', // positions hero img inside the margin
				'10vw': '10vw', // page margin
			},
			screens: {
				xs: '300px',
			},
		},
	},
	plugins: [],
}
