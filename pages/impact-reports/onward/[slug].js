import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import StorySocial from "../../../components/impact-reports/onward/global/StorySocial";
import { formatStoryData } from "../../../data/helpers";
import { storyDefinition } from "../../../data/types";
import { baseURL, cacheTTL } from "../../../data/base";

Story.propTypes = {
  story: PropTypes.shape(storyDefinition),
};

export default function Story({ story }) {

  useEffect(() => {
    // This should be done on the server, but Heroku's internal networking makes it difficult.
    if (typeof window !== 'undefined' && window.location.host === 'essential.cu.edu' && window.location.protocol !== 'https:') {
      window.location.href = 'https://' + window.location.host + window.location.pathname + window.location.search;
    }
  });


  // A ghost story slug or something tries to run on build casuing errors.
  // This is a stopgap until that is figured out but impacts nothing if left in.
  if (typeof story === 'undefined' || story.title === null) {
    return null;
  }

  // parse story.body for images, wrap in container for styling
  const imgOpenRegex = /<img/g;
  const imgCloseRegex = /" \/>/g;
  let storyBody = story.body;
  if (storyBody.indexOf("<img") > 0){
    storyBody = storyBody.replace(imgOpenRegex, '<div class="story-image-container"><div class="container"><img');
    storyBody = storyBody.replace(imgCloseRegex, '" /><p class="caption-text"></p></div></div>');
  }
  
  // parse story.body images for alt text, copy as captions
  const imgCaptionRegex = /data-caption="([\s\S]*?)"/g;
  if (storyBody.indexOf("data-caption") > 0){
    let imgCaption = storyBody.match(imgCaptionRegex);
    imgCaption.forEach((el) => {
      el = el.replace('data-caption="',"").replace('"',"");
      storyBody = storyBody.replace('<p class="caption-text"></p>', '<p class="caption-text">' + el + '</p>');
    });
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
        <meta property="twitter:title" content={story.title} />
        <meta property="twitter:description" content={story.subtitle} />
        <meta property="twitter:image" content={story.image_main.url} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>

        <div className="container story-container">
    
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

          <article className="story-body-container body-text-lg" dangerouslySetInnerHTML={{ __html: storyBody }} />

          <hr />
          
          <div className="story-social-bottom">
            <h5 className="text-center">Share this story</h5>
            <StorySocial shareUrl={story.share_url} />
          </div>

          <section className="container story-related">
          
            <h5 className="text-center">Read related stories</h5>

            <ul className="story-cards">
              {story.related_stories
                .sort((el1, el2) => el1.priority - el2.priority )
                .map((el) => (
                  <li key={el.slug} className="storycard" data-priority={el.priority} data-interest={el.interest_tag} data-campus={el.campus_tag}>
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
                        <h5 className="storycard-title">{el.title}</h5>
                        <hr className="storycard-hr" />
                        <p className="storycard-subtitle">{el.subtitle}</p>
                        <span className="storycard-readmore">
                          <span className="storycard-readmore-text label-text">Read More</span>
                        </span>
                        <span className="storycard-arrow"></span>
                        <span className="storycard-bg"></span>
                      </a>
                    </Link>
                  </li>
                )
              )}
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
    `${baseURL}/api/story/${slug}`
  );
  const rawStoryData = await res.json();
  // const rawStoryData = require(`../../../data/stories/${slug}.json`);

  const story = formatStoryData(rawStoryData);

  return {
    props: {
      story: story,
    },
    revalidate: cacheTTL,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${baseURL}/api/stories/paths`
  );
  const data = await res.json();
  // const data = require("../../../data/stories/stories.json");

  const paths = data.map((el) => ({
    params: {
      slug: `${el}`,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
