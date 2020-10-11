module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://giving.cu.edu/essentialcu/",
        permanent: false,
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
