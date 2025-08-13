import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muhammad Bilal — MERN Stack Developer</title>
        <meta name="description" content="Portfolio of a MERN stack developer specializing in React, Node.js, Express, and MongoDB." />
        <meta name="theme-color" content="#0b1020" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
