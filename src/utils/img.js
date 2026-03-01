// Prefixes image paths with Vite's base URL so they work on both
// localhost (base = "/") and GitHub Pages (base = "/Matoshrigeetapapers/")
const base = import.meta.env.BASE_URL

export const img = (filename) => `${base}images/${filename}`
