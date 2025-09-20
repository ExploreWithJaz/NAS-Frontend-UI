import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/', // all unmatched requests go here
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
