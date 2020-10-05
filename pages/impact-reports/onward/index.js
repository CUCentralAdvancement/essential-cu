import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoriesData } from "../../../data/helpers";
import { storiesDefinition, storyDefinition } from "../../../data/types";
import { useState, useEffect } from "react";

Home.propTypes = {
  storyData: PropTypes.arrayOf(PropTypes.shape(storiesDefinition)),
};

// @todo Add default props.

export default function Home({ storyData }) {
  const [stories, setStories] = useState(storyData);

  const shareUrl = "https://essential.cu.edu/impact-reports/onward/";

  // Set the initial filters for stories.
  useEffect(() => {
    // Only do this client-side so SSG content is full for SEO.
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("campus")) {
        let first = [];
        let second = [];
        stories.forEach((el) => {
          if (el.campus_tag.toLocaleLowerCase() === urlParams.get("campus")) {
            first.push(el);
          } else {
            second.push(el);
          }
        });
        setStories([...first, ...second]);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>University of Colorado 2020 Donor Impact Report</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="University of Colorado 2020 Donor Impact Report" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Head>
      <Layout>
        <div className="container">

          <section className="home-title">
            <h1>
              <span className="visually-hidden">Onward</span>
              <img src="//fpoimg.com/1181x485?text=FPO" alt="Onward" />
            </h1>
            <h2>
              Giving is a force for good, especially when the world feels anything but. Thanks to the incredible generosity of ordinary people on every front and the resilience of those who face adversity, we are inspired by stories like the ones below. We believe you will be, too. With hope, determination and support, we believe brighter days lie ahead no matter the challenge. 
            </h2>
            <img className="home-title-hrimg" src="//fpoimg.com/189x57?text=FPO" alt="divider graphic" />
          </section>

          <ul className="story-cards">
            {stories.map((el) => (
              <li key={el.slug} className="storycard">
                <Link
                  href="/impact-reports/onward/[slug]"
                  as={`/impact-reports/onward/${el.slug}`}
                >
                  <a className={ "storycard-link " + ( el.interest_tag ? el.interest_tag.toLowerCase() : "")}>
                    <img
                      style={{ display: "block" }}
                      src={el.image_card.url}
                      alt={el.image_card.alt}
                      height={el.image_card.height}
                      width={el.image_card.width}
                      className="storycard-image"
                    />

                    <h5 className="storycard-title">
                      {el.title}
                    </h5>

                    <hr className="storycard-hr" />

                    <p className="storycard-subtitle">
                      static subtitle for dev static subtitle for dev static subtitle for dev 
                    {/*
                      {el.subtitle}
                    */}
                    </p>
                    
                    <span className="storycard-readmore">
                      <span className="storycard-readmore-text label-text">Read More</span>
                    </span>

                    <span className="storycard-arrow"></span>
                    
                    <span className="storycard-temptags">
                      {`Campus Tag: ${el.campus_tag}`}<br />
                      {`Interest Tag: ${el.interest_tag}`}<br />
                      {`Priority: ${el.priority}`}
                    </span>

                    <span className="storycard-bg"></span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <section className="home-financials">
            {/* TODO: 
              order this section here by default, or before story cards dependent upon "entry into the site" ?? 
            */}
            <h2 className="h1">CU philanthropy,</h2>
            <h3 className="h2">by the numbers</h3>

            <div className="home-financials-container">
              <div className="home-financials-content">
                <h4 className="h1">$455.9 million</h4>
                <p className="body-text-lg">
                  Your generosity creates impact—bright futures for students, awe-inspiring discovery, innovative health care and a commitment to the common good. Last year, donors like you invested $455.9 million in your passions. 
                </p>
                <div className="text-center">
                  <Link href="/impact-reports/onward/financials">
                    <a className="btn">See more</a>
                  </Link>
                </div>
              </div>
              <div className="home-financials-image">
                <img src="//fpoimg.com/615x530?text=FPO" alt="financials graph" />
              </div>
            </div>
          </section>

          <section className="home-mission">
            <h2 className="h1">Our Mission</h2>
            <div className="home-mission-container">
              <div className="home-mission-content">
                <Link href="https://giving.cu.edu/about-us/central-cu-advancement">
                  <a>
                    <h3 className="h2">CU Foundation</h3>  
                    <p className="body-text-lg">
                      We receive, manage and prudently invest private support for the benefit of the University of Colorado and support the university’s philanthropic endeavors through donor stewardship.
                    </p>
                  </a>
                </Link>
              </div>
              <div className="home-mission-content">
                <Link href="https://giving.cu.edu/about-us/university-colorado-foundation">
                  <a>
                    <h3 className="h2">CU Advancement</h3>  
                    <p className="body-text-lg">
                      We aspire to unite donor with their passions, elevate grand ideas and prudently manage philanthropy—all to spark enduring support of a university that creates transformative impact in our communities and around the world.
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
}

const PaddedDiv = ({ children }) => {
  return <div style={{ padding: "1rem" }}>{children}</div>;
};
PaddedDiv.propTypes = { children: PropTypes.any.isRequired };

export async function getStaticProps() {
  // Real data from API.
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/jsonapi/node/story?sort=created`
  // );
  // const rawStoryData = await res.json();

  // Sample data.
  const rawStoryData = require("../../../data/stories/stories.json");

  const stories = formatStoriesData(rawStoryData);

  return {
    props: {
      storyData: stories,
    },
    // No need to revalidate data at this point.
    // revalidate: 600,
  };
}
