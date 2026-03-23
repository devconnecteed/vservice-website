import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // standalone output is only needed for Docker/Dokploy — not for Vercel
  ...(process.env.DOCKER_BUILD === 'true' && { output: 'standalone' }),
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    };
    return config;
  },
  turbopack: {
    alias: {
      '@': './src',
    },
  },
};

export default withNextIntl(nextConfig);
