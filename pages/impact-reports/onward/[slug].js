import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoryData } from "../../../data/helpers";
import { storyDefinition } from "../../../data/types";

Story.propTypes = {
  story: PropTypes.shape(storyDefinition),
};

export default function Story({ story }) {
  // A ghost story slug or something tries to run on build casuing errors.
  // This is a stopgap until that is figured out but impacts nothing if left in.
  if (!story) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{story.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">

          <div className="story-title">
            <div className="story-title-content">
              <h1>{story.title}</h1>
              <hr className="hr-left" />
              <h2>{story.subtitle}</h2>
            </div>
            <div className="story-title-image">
              <img
                style={{ display: "block" }}
                src={story.image_main.url}
                alt={story.image_main.alt}
                height={story.image_main.height}
                width={story.image_main.width}
              />
            </div>
          </div>

          {/*
            SOCIAL MODULE TODO
          */}

          <div className="story-container body-text-lg">
            <div dangerouslySetInnerHTML={{ __html: story.body }}></div>
          </div>

          {story.images.map((el) => {
            return (
              <div className="container story-image-container">
                <img
                  src={el.url}
                  alt={el.alt}
                  height={el.height}
                  width={el.width}
                  className="story-image"
                />
                <p className="caption-text">{el.caption}</p>
              </div>            
            );
          })}

          <PaddedDiv>
            <h2>Related Stories</h2>
            <ul>
              {story.related_stories.map((el) => (
                <li key={el.slug}>
                  <PaddedDiv>
                    {/* @see https://nextjs.org/docs/api-reference/next/link for more link creation context. */}
                    <Link
                      href="/impact-reports/onward/[slug]"
                      as={`/impact-reports/onward/${el.slug}`}
                    >
                      <a>{el.title}</a>
                    </Link>
                  </PaddedDiv>
                </li>
              ))}
            </ul>
          </PaddedDiv>
        </div>
      </Layout>
    </>
  );
}

const PaddedDiv = ({ children }) => (
  <div style={{ padding: "1rem" }}>{children}</div>
);

// Add default props.

/**
 * Gathers all data needed for props.
 *
 * @param {array} params
 */
export async function getStaticProps({ params }) {
  const slug = params.slug || null;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/jsonapi/node/story?filter[field_story_slug]=${slug}`
  // );
  // const rawStoryData = await res.json();

  const rawStoryData = require(`../../../data/stories/${slug}.json`);
  const stories = formatStoryData(rawStoryData);

  return {
    props: {
      // Data comes back in array so first result is the story.
      story: stories[0],
    },
    // Only need to revalidate if data changes after deployments.
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/jsonapi/node/story`
  // );
  // const rawStoryData = await res.json();

  const rawStoryData = require("../../../data/stories/stories.json");
  const stories = formatStoryData(rawStoryData);

  const paths = stories.map((el) => ({
    params: {
      slug: el.slug,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
