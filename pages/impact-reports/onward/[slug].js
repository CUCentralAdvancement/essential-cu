import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoryData } from "../../../data/helpers";

export default function Story({ story }) {
  if (!story) {
    return null;
  }

  console.log(story);

  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <PaddedDiv>
            <img
              style={{ display: "block" }}
              src={story.image_main.url}
              alt={story.image_main.alt}
              height={story.image_main.height}
              width={story.image_main.width}
            />
          </PaddedDiv>
          <PaddedDiv>
            <h1>{story.title}</h1>
          </PaddedDiv>
          <PaddedDiv>
            <Link href="/impact-reports/onward">
              <a>{`<-- Back To Homepage`}</a>
            </Link>
          </PaddedDiv>
          <PaddedDiv>
            <div dangerouslySetInnerHTML={{ __html: story.body }}></div>
          </PaddedDiv>
          <PaddedDiv>
            <h2>Other Images</h2>
            {story.images.map((el) => {
              return (
                <>
                  <img
                    style={{ display: "inline-block" }}
                    src={el.url}
                    alt={el.alt}
                    height={el.height}
                    width={el.width}
                  />
                  <p>{el.caption}</p>
                </>
              );
            })}
          </PaddedDiv>
          <PaddedDiv>
            <h2>Related Stories</h2>
            <ul>
              {story.related_stories.map((el, index) => (
                <li>
                  <PaddedDiv>
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

const PaddedDiv = ({ children }) => {
  return <div style={{ padding: "1rem" }}>{children}</div>;
};

const imageDefinition = {
  /**
   * Standard alt tag needed for accessibility.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Absolute URL to the file hostes on S3 but served via Drupal.
   */
  url: PropTypes.string.isRequired,
  /**
   * Optional caption placed by photo or tooltip.
   */
  caption: PropTypes.string,
  /**
   * Given in pixels without the unit, e.g. {width: 480}
   */
  width: PropTypes.string,
  /**
   * Given in pixels without the unit, e.g. {height: 640}
   */
  height: PropTypes.string,
};

Story.PropTypes = {
  /**
   * Will have paragraph separators and includes all WYSIWYG markup by default. This can be changed.
   */
  body: PropTypes.string.isRequired,
  campus_tag: PropTypes.oneOf("Anschutz", "Boulder", "Denver", "UCCS")
    .isRequired,
  image_main: PropTypes.shape(imageDefinition),
  images: PropTypes.arrayOf(PropTypes.shape(imageDefinition)),
  interest_tag: PropTypes.oneOf("Research", "Society", "Students").isRequired,
  priority: PropTypes.number.isRequired,
  related_stories: PropTypes.arrayOf(
    PropTypes.shape({
      image_card: imageDefinition,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  slug: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export async function getStaticProps({ params }) {
  const slug = params.slug || null;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/jsonapi/node/story?filter[field_story_slug]=${slug}`
  // );
  // const rawStoryData = await res.json();

  const rawStoryData = require(`../../../data/${slug}.json`);
  const stories = formatStoryData(rawStoryData);

  // Data comes back in array so first result is the story.
  return {
    props: { story: stories[0], rawStory: rawStoryData },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/jsonapi/node/story`
  // );
  // const rawStoryData = await res.json();

  const rawStoryData = require("../../../data/stories.json");
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
