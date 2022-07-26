import Head from "next/head";

type MetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: string;
  type?: string;
};

export default function MetaTags(props: MetaTagsProps) {
  return (
    <Head>
      {props.title && <title>{props.title}</title>}
      {props.title && <meta name="application-name" content={props.title} />}
      {props.title && (
        <meta name="apple-mobile-web-app-title" content={props.title} />
      )}
      {props.description && (
        <meta name="description" content={props.description} />
      )}

      {/* Search engine tags */}
      {props.title && <meta itemProp="name" content={props.title} />}
      {props.description && (
        <meta itemProp="description" content={props.description} />
      )}
      {props.image && <meta itemProp="image" content={props.image} />}

      {/* Twitter tags */}
      <meta
        name="twitter:card"
        content={props.image ? "summary_large_image" : "summary"}
      />
      {props.title && <meta name="twitter:title" content={props.title} />}
      {props.description && (
        <meta name="twitter:description" content={props.description} />
      )}
      {props.image && <meta name="twitter:image" content={props.image} />}

      {/* Facebook tags */}
      <meta property="og:type" content={props.type || "website"} />
      {props.title && <meta property="og:title" content={props.title} />}
      {props.description && (
        <meta property="og:description" content={props.description} />
      )}
      {props.image && <meta property="og:image" content={props.image} />}
      {props.url && <meta property="og:url" content={props.url} />}
      {props.locale && <meta property="og:locale" content={props.locale} />}
    </Head>
  );
}
