/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // TRÈS IMPORTANT : Cette ligne dit à Tailwind de scanner tous les fichiers HTML et TypeScript dans le dossier 'src' pour trouver tes classes Tailwind.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}