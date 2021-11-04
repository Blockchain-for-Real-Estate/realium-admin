module.exports = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/dashboard",
        permanent: true,
      },
    ];
  },
};
