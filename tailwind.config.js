/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "Primary-A": "#FA7436",
                "Primary-B": "#222222",
                Paragraph: "#666666",
            },
        },
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
            Volkhov: ["Volkhov", "serif"],
        },
    },
    plugins: [],
};
