import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import HomeFinancials from "../../../components/impact-reports/onward/global/HomeFinancials";
import { formatStoriesData } from "../../../data/helpers";
import { storiesDefinition } from "../../../data/types";
import { baseURL } from "../../../data/base";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

Home.propTypes = {
  storyData: PropTypes.arrayOf(PropTypes.shape(storiesDefinition)),
};

// @todo Add default props.

export default function Home({ storyData }) {
  const [cookies] = useCookies(["STYXKEY-Campus"]);
  const [stories, setStories] = useState(storyData);
  
  useEffect(() => {
    // default sort order by priority
    stories.sort((el1, el2) => el1.priority - el2.priority );
    
    // check for campus cookie
    if ( cookies["STYXKEY-Campus"] != null){
      const campusEntryName = cookies["STYXKEY-Campus"];
      let campusMatch = "";
      let first = [];
      let second = [];

      // match cookie campus code to campus tag
      switch (campusEntryName.toUpperCase()) {
        case "AMC":
          campusMatch = "Anschutz";
          break;
        case "UCB":
          campusMatch = "Boulder";
          break;
        case "UCD":
          campusMatch = "Denver";
          break;
        case "UCCS":
          campusMatch = "UCCS";
          break;
      }

      if (campusMatch) {

        // move campus tag matches to beginning
        stories.forEach((el) => {
          if ( el.campus_tag == campusMatch ) {
            first.push(el);
          } else {
            second.push(el);
          }
        });
        setStories([...first, ...second]);

      } else {
        setStories([...stories]);
      }

    } else {
      setStories([...stories]);
    }

  },[]);

  return (
    <>
      <Head>
        <title>University of Colorado 2020 Donor Impact Report</title>
        <meta property="og:url" content="https://essential.cu.edu/impact-reports/onward" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="University of Colorado 2020 Donor Impact Report" />
        <meta property="og:description" content="Giving is a force for good, especially when the world feels anything but. Thanks to the incredible generosity of ordinary people on every front and the resilience of those who face adversity, we are inspired by stories like the ones below. We believe you will be, too. With hope, determination and support, we believe brighter days lie ahead no matter the challenge." />
        <meta property="og:image" content="https://essential.cu.edu/home-banner-onward.png" />
        <meta property="twitter:title" content="University of Colorado 2020 Donor Impact Report" />
        <meta property="twitter:description" content="Giving is a force for good, especially when the world feels anything but. Thanks to the incredible generosity of ordinary people on every front and the resilience of those who face adversity, we are inspired by stories like the ones below. We believe you will be, too. With hope, determination and support, we believe brighter days lie ahead no matter the challenge." />
        <meta property="twitter:image" content="https://essential.cu.edu/home-banner-onward.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <div className="container home-container">

          <section className="home-title">
            <h1>
              <span className="visually-hidden">Onward</span>
              <img src="/home-banner-onward.png" alt="Onward" width="1255" height="516" />
            </h1>
            <h2 className="body-text-lg">
              Giving is a force for good, especially when the world feels anything but. Thanks to the incredible generosity of ordinary people on every front and the resilience of those who face adversity, we are inspired by stories like the ones below. We believe you will be, too. With hope, determination and support, we believe brighter days lie ahead no matter the challenge. 
            </h2>
            <img className="home-title-hrimg" src="/divider-shapes.png" width="199" height="60" alt="divider graphic" />
          </section>

          <section className="home-stories">
            <a id="stories" name="stories" className="home-stories-anchor"></a>
            <ul className="story-cards">
              {stories.map((el) => (
                <li key={el.slug} className="storycard" data-priority={el.priority} data-interest={el.interest_tag} data-campus={el.campus_tag}>
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
                      <span className="storycard-bg"></span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        
          <HomeFinancials />

          <section className="home-mission">
            <h2 className="h1">Our Mission</h2>
            <div className="home-mission-container">
              <div className="home-mission-content">
                <Link href="https://giving.cu.edu/about-us/university-colorado-foundation">
                  <a>
                    <h3 className="h2">CU Foundation</h3>  
                    <p className="body-text-lg">
                      We receive, manage and prudently invest private support for the benefit of the University of Colorado and support the university’s philanthropic endeavors through donor stewardship.
                    </p>
                  </a>
                </Link>
              </div>
              <div className="home-mission-content">
                <Link href="https://giving.cu.edu/about-us/central-cu-advancement">
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

export async function getStaticProps() {
  const res = await fetch(`${baseURL}/api/stories`);
  const rawStoryData = await res.json();
  // const rawStoryData = require("../../../data/stories/stories.json");

  const stories = formatStoriesData(rawStoryData);

  return {
    props: {
      storyData: stories,
    },
    // Set to five seconds while testing.
    revalidate: 5,
  };
}
