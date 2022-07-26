import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "lib/ga";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
