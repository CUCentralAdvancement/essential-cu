import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Home({ stories }) {
  return (
    <>
      <Head>
        <title>Onward</title>
        <link rel="icon" href="/favicon.ico" />
        <script>(function(w,d,s,l,i){w[l] = w[l] || []{'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFCM644');</script>
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
