import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Header from "./Header";
import MobileLogo from "./MobileLogo";
import Footer from "./Footer";
import { CookiesProvider } from 'react-cookie';

export default function Layout({ children }) {
  return (
    <>
      <CookiesProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
          <link href="/impact-reports/onward/styles.css" rel="stylesheet"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:site_name" content="University of Colorado 2020 Donor Impact Report" />
        </Head>
        <Header />
        <MobileLogo />
        <main>{children}</main>
        <Footer />
      </CookiesProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
