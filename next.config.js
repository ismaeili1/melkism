/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    unoptimized: true, // غیرفعال کردن موقت بهینه‌سازی تصویر برای جلوگیری از تایم‌اوت لوکال
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);