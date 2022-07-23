import dynamic from "next/dynamic";
import MetaTags from "components/MetaTags";
import Head from "next/head";

const AcercaDe = dynamic(() => import("../components/AcercaDe"), {
  ssr: false,
});

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function AcercaDePage({}) {
  return (
    <>
      <MetaTags
        type="book"
        title="CPR Chile 2022"
        description="Propuesta de Constitución Política de la República de Chile 2022"
        locale="es_CL"
      />
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <AcercaDe />
    </>
  );
}
