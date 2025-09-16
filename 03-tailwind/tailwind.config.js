/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', 
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',
                success: '#10b981',
                danger: '#ef4444',
                card: 'var(--card)',
                text: 'var(--text)',
                muted: 'var(--muted)',
                bg: 'var(--bg)',
            },
        },
    },
    plugins: [],
}