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
      {
        source: "/impact-reports/picture-this",
        destination: "/impact-reports/picture-this/index.html",
        permanent: true,
      },
      {
        source: "/onward2020",
        destination: "/r/index.html?utm_campaign=2020ImpactReport&utm_source=IR20_Print&utm_medium=Print",
        permanent: true,
      },

    ];
  },
};
