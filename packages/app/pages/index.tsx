import Head from "next/head";
import React from "react";

import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), {
  ssr: false,
});

export async function getStaticProps(ctx) {
  return {
    props: {},
  };
}

export default function Home({}) {
  return (
    <>
      <Head>
        <title>CPR 2022</title>
        {/* <meta name="description" content="CPR 2022" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <App />
    </>
  );
}
