/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-blue': '#0A2342',
                'ocean-blue': '#006994',
                'warm-sand': '#F4EBD0',
                'accent-gold': '#D4AF37',
                'text-dark': '#1A1A1A',
                'text-light': '#F4F4F4',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['"Lato"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
