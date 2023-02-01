module.exports = {
    async redirects() {
      return [
        {
          source: '/uno',
          destination: '/',
          permanent: false,
        },
        {
          source: '/dos',
          destination: '/',
          permanent: false,
        },
        {
          source: '/tres',
          destination: '/',
          permanent: false,
        },
      ];
    },
  };