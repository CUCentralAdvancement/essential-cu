import Head from "next/head";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Onward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to IR20!</h1>
    </Layout>
  );
}
