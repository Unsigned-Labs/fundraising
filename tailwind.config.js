/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
				Roboto: ['Roboto', 'sans-serif']
			}
		}
	}
};

export default config;
