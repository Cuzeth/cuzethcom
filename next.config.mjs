/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/lab',
        destination: 'https://abdeen.dev',
        permanent: true,
      },
      {
        source: '/lab/pwgen',
        destination: 'https://abdeen.dev/pwgen',
        permanent: true,
      },
      {
        source: '/lab/qr',
        destination: 'https://abdeen.dev/qr',
        permanent: true,
      },
      {
        source: '/lab/2fa',
        destination: 'https://abdeen.dev/2fa',
        permanent: true,
      },
      {
        source: '/lab/pomodoro',
        destination: 'https://abdeen.dev/pomodoro',
        permanent: true,
      },
      {
        source: '/lab/regex',
        destination: 'https://abdeen.dev/regex',
        permanent: true,
      },
      {
        source: '/lab/coverquad',
        destination: 'https://abdeen.dev/coverquad',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
