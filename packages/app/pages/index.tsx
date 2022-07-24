import React from "react";

import dynamic from "next/dynamic";
import MetaTags from "components/MetaTags";

const App = dynamic(() => import("../components/App"), {
  ssr: false,
});

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home({}) {
  return (
    <>
      <MetaTags
        type="book"
        title="CPR Chile 2022"
        description="Propuesta de Constitución Política de la República de Chile 2022"
        locale="es_CL"
      />
      <App />
    </>
  );
}
