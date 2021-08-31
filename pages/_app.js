import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TagManager from "react-gtm-module";
// import '../styles/impact-report/2021/global.css';

const tagManagerArgs = {
  gtmId: "GTM-KFCM644",
};

function EssentialCU({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

EssentialCU.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default EssentialCU;
