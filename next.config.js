module.exports = {
  async redirects() {
    return [
      // Because the homepage is an HTML file for some reason...
      {
        source: "/",
        destination: "/index.html",
        permanent: true,
      },
      // Current year redirects. @todo Change this to the Joy homepage.
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
      // 2019 report.
      {
        source: "/impact-reports/picture-this",
        destination: "/impact-reports/picture-this/index.html",
        permanent: true,
      },
      // 2020 report.
      {
        source: "/onward2020",
        destination: "/r/index.html?utm_campaign=2020ImpactReport&utm_source=IR20_Print&utm_medium=Print",
        permanent: true,
      },
      // 2021 report.
      {
        source: "/joy",
        destination: "/impact-reports/joy?utm_campaign=IR21&utm_source=folder&utm_medium=web&utm_content=",
        permanent: true,
      },
      {
        source: "/QRJoy21",
        destination: "/impact-reports/joy?utm_campaign=IR21&utm_source=folder&utm_medium=print&utm_content=qr-code",
        permanent: true,
      },
    ];
  },
  eslint: {
    // Warning: Hilariously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
