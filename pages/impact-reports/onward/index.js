import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoriesData } from "../../../data/helpers";
import { storiesDefinition, storyDefinition } from "../../../data/types";
import { useState, useEffect } from "react";

Home.propTypes = {
  stories: PropTypes.shape(storiesDefinition),
};

// @todo Add default props.

export default function Home({ storyData }) {
  const router = useRouter();
  const [stories, setStories] = useState(storyData);

  // Set the initial filters for stories.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("campus")) {
        setStories(
          stories.filter(
            (el) => el.campus_tag.toLocaleLowerCase() == urlParams.get("campus")
          )
        );
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Onward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <h1>Welcome to IR20!</h1>
          <ul>
            {stories.map((el, index) => (
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

export async function getStaticProps(context) {
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
