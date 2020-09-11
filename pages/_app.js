import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import "../styles/header.css";
import TagManager from "react-gtm-module";

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
  Component: PropTypes.element,
  pageProps: PropTypes.any,
};

export default EssentialCU;
