/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    domains: ['dreampixel.co.uk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/web-design-in-bideford',
        destination: '/web-design-bideford',
        permanent: true,
      },
      {
        source: '/web-design-in-barnstaple',
        destination: '/web-design-barnstaple',
        permanent: true,
      },
      {
        source: '/web-design-in-torquay',
        destination: '/web-design-torquay',
        permanent: true,
      },
      {
        source: '/web-design-in-exeter',
        destination: '/web-design-exeter',
        permanent: true,
      },
      {
        source: '/web-design-in-plymouth',
        destination: '/web-design-plymouth',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
