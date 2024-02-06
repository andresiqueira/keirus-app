/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/team_members',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
