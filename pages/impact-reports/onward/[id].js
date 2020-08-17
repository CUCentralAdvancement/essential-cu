import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Story({ story }) {
  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <h1>{story.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: story.body }}></div>
          <Link href="/impact-reports/onward">
            <a>{`<-- Back`}</a>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id || null;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/story/${id}?_format=json`
  );
  const story = await res.json();

  // Data comes back in array so first result is the story.
  return { props: { story: story[0] }, revalidate: 60 };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stories?_format=json`
  );
  const pathsList = await res.json();

  const paths = pathsList.map((el) => ({
    params: {
      id: el.nid,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
