import "@/styles/globals.css";
import Head from "next/head";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
import { FormspreeProvider } from "@formspree/react";


export default function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="mnnzrawp">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muhammad Bilal Senior Frontend Developer</title>
        <meta name="description" content="Senior Frontend portfolio: React, Next.js, Node.js, TypeScript, Microservices." />
        <meta name="theme-color" content="#0b1020" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </FormspreeProvider>
  );
}
