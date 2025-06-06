/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
      // Ajoute ici les domaines d'images que tu utilises
    ],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['fr', 'en', 'he'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig