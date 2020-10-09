module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index.html",
        permanent: true,
      },
      {
        source: "/impact",
        destination: "/impact-reports/onward",
        permanent: true,
      },
      {
        source: "/impact-reports",
        destination: "/impact-reports/onward",
        permanent: true,
      },
    ];
  },
};
