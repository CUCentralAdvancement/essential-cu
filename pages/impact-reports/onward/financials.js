import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { useState, useEffect } from "react";

export default function StyleGuide({ storyData }) {
  const [stories, setStories] = useState(storyData);

  return (
    <>
      <Head>
        <title>University of Colorado Fiscal Year 2020 Philanthropy Financials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      
        <div className="container">
          <section className="financials-title">

            <h1>Financials page</h1>
            <hr />
            <p className="body-text-lg">Lorem ipsum</p>

          </section>

        </div>

      </Layout>
    </>
  );
}
