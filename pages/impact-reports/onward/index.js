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
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <h1>Welcome to IR20!</h1>

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
                      {el.subtitle}
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
