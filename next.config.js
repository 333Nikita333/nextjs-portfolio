/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
