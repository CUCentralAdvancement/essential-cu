import Head from "next/head";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Onward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <h1>Welcome to IR20!</h1>
        </div>
      </Layout>
    </>
  );
}
