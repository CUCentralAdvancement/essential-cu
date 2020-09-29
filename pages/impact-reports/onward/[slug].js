import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import StorySocial from "../../../components/impact-reports/onward/global/StorySocial";
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
        <meta property="og:url" content={story.share_url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={story.title} />
        <meta property="og:description" content={story.subtitle} />
        <meta property="og:image" content={story.image_main.url} />
      </Head>
      <Layout>

        <div className="container">
    
          <section className="story-title">
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
          </section>

          <StorySocial shareUrl={story.share_url} />

          <article className="story-container body-text-lg">
            <div dangerouslySetInnerHTML={{ __html: story.body }}></div>
          </article>

          <hr />
          
          <div className="story-social-bottom">
            <h5 className="text-center">Share this story</h5>
            <StorySocial shareUrl={story.share_url} />
          </div>

          <section className="container story-related">
          
            <h5 className="text-center">Read related stories</h5>

            <ul className="story-cards">
              {story.related_stories.map((el) => (
                <li key={el.slug} className="storycard">
                  <Link
                    href="/impact-reports/onward/[slug]"
                    as={`/impact-reports/onward/${el.slug}`}
                  >
                    <a className={ "storycard-link " + ( el.interest_tag ? el.interest_tag.toLowerCase() : "")}>
                      <img
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
          </section>

        </div>
        
      </Layout>
    </>
  );
}

// Add default props.

/**
 * Gathers all data needed for props.
 *
 * @param {array} params
 */
export async function getStaticProps({ params }) {
  const slug = params.slug || null;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/story/${slug}`
  );
  const rawStoryData = await res.json();

  // const rawStoryData = require(`../../../data/stories/${slug}.json`);

  const story = formatStoryData(rawStoryData);

  return {
    props: {
      // Data comes back in array so first result is the story.
      story: story,
    },
    // Only need to revalidate if data changes after deployments.
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stories/paths`
  );
  const data = await res.json();

  // const rawStoryData = require("../../../data/stories/stories.json");

  // const stories = formatStoryData(rawStoryData);

  const paths = data.map((path) => ({
    params: {
      slug: path,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
