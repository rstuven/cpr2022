import Head from "next/head";

export default function ShareRedirect(props: { fragmentoId: string }) {
  const hash = location.hash == "" ? "#" + props.fragmentoId : location.hash;
  return (
    <Head>
      <meta
        httpEquiv="refresh"
        content={`0; url=${`${location.origin}/${hash}`}`}
      />
    </Head>
  );
}
