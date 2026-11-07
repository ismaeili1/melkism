/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;