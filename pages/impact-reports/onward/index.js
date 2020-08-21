import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Home({ stories }) {
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
            {stories.map((el) => (
              <li>
                <Link
                  href="/impact-reports/onward/[id]"
                  as={`/impact-reports/onward/${el.nid}`}
                >
                  <a>{el.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch data from external API.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stories?_format=json`
  );
  const stories = await res.json();

  // Pass data to the page via props.
  return { props: { stories }, revalidate: 600 };
}
