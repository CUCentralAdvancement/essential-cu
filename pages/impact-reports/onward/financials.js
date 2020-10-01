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
      </Head>
      <Layout>
      
        <div className="container">
        
          <section className="financials-title">
            <img src="//fpoimg.com/1181x485?text=FPO" alt="Onward" />
            <h1>It adds up:<br /> Your generosity is an investment</h1>
            <hr />
            <h2>2020 fiscal year financials</h2>
            <p className="body-text-lg">You give to what matters to you—deeply, personally, meaningfully—to make a better world. At CU, we believe donors like you support your passions because you want tomorrow to be better than today.</p>
            <p className="body-text-lg"><strong>Thank you for supporting what’s important to you.</strong><br />You made a difference last year. Here’s how.</p>
          </section>

        </div>

      </Layout>
    </>
  );
}
