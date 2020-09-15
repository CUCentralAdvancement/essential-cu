import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import MobileLogo from "./MobileLogo";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MobileLogo />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
