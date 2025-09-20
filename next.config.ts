import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/forbidden',
        destination: '/forbidden',
        permanent: false,
      },
      {
        // Exclude /forbidden from being redirected
        source: '/:path((?!forbidden$).*)',
        destination: '/forbidden',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;