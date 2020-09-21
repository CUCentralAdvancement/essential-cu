import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Header from "./Header";
import MobileLogo from "./MobileLogo";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
