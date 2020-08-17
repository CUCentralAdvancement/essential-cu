import Head from "next/head";
// import styles from "~/styles/Home.module.css";
const styles = { container: {} };

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to IR20!</h1>
      </main>

      <footer className={styles.footer}>
        <h2>The Footer</h2>
      </footer>
    </div>
  );
}
