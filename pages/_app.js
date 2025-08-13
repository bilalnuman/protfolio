import "@/styles/globals.css";
import Head from "next/head";
import { FormspreeProvider } from "@formspree/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="mnnzrawp">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muhammad Bilal — Full-Stack Developer</title>
        <meta name="description" content="Full-Stack portfolio: React, Next.js, Node.js, TypeScript, Microservices." />
        <meta name="theme-color" content="#0b1020" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-image.png"/>
      </Head>
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
