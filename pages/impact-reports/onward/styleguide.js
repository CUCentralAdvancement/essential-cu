import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoriesData } from "../../../data/helpers";
import { storiesDefinition } from "../../../data/types";
import { baseURL } from "../../../data/base";
import { useState, useEffect } from "react";

StyleGuide.propTypes = {
  storyData: PropTypes.arrayOf(PropTypes.shape(storiesDefinition)),
};

// @todo Add default props.

export default function StyleGuide({ storyData }) {
  const [stories, setStories] = useState(storyData);

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
        <title>Onward StyleGuide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* generic StyleGuide content to develop styles */}
        <div className="">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5 </h5>
          <p>This is text p</p>
          <p className="body-text-lg">This is text p.body-text-lg</p>
          <p className="body-text-sm">This is text p.body-text-sm</p>
          <p>
            This is text p <a href="#">with an inline link</a>
          </p>
          <p className="caption-text">This is text p.caption-tex</p>
          <p className="label-text">This is text p.label-text</p>
          <p className="label-text-sm">This is text p.label-text-sm</p>
          <hr />
          hr.left:
          <br />
          <hr className="hr-left" />
          <div
            className="gold-grad"
            style={{ height: "200px", width: "200px" }}
          >
            gold grad
          </div>
          <br />
          Test text not in element.
          <br />
          <br />
          <button>Default Button</button> Text after
          <br />
          <button className="btn">Button.btn</button> Text after
          <br />
          <button className="btn-md">Button.btn-md</button> Text after
          <br />
          <button className="btn-sm">Button.btn-sm</button> Text after
        </div>

        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <h1>Welcome to IR20!</h1>
          <ul>
            {stories.map((el) => (
              <li key={el.slug}>
                <PaddedDiv>
                  <img
                    style={{ display: "block" }}
                    src={el.image_card.url}
                    alt={el.image_card.alt}
                    height={el.image_card.height}
                    width={el.image_card.width}
                  />
                </PaddedDiv>
                <PaddedDiv>
                  <Link
                    href="/impact-reports/onward/[slug]"
                    as={`/impact-reports/onward/${el.slug}`}
                  >
                    <a>{el.title}</a>
                  </Link>
                </PaddedDiv>
                <PaddedDiv>
                  <div style={{ display: "block" }}>{el.subtitle}</div>
                </PaddedDiv>
                <PaddedDiv>{`Campus Tag: ${el.campus_tag}`}</PaddedDiv>
                <PaddedDiv>{`Interest Tag: ${el.interest_tag}`}</PaddedDiv>
                <PaddedDiv>{`Priority: ${el.priority}`}</PaddedDiv>
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
  const res = await fetch(`${baseURL}/api/stories`);
  const rawStoryData = await res.json();

  // Sample data.
  // const rawStoryData = require("../../../data/stories/stories.json");

  const stories = formatStoriesData(rawStoryData);

  return {
    props: {
      storyData: stories,
    },
    // No need to revalidate data at this point.
    // revalidate: 600,
  };
}
