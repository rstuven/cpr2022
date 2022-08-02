import React from "react";
import MetaTags from "components/MetaTags";
import App from "components/App";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
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
