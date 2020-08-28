import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";
import { formatStoriesData } from "../../../data/helpers";

export default function Home({ stories, rawStoryData }) {
  console.log(stories, "stories");
  // console.log(rawStoryData, "raw");
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
              <li>
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
  const rawStoryData = require("../../../data/stories.json");

  const stories = formatStoriesData(rawStoryData);

  return { props: { stories, rawStoryData }, revalidate: 600 };
}
