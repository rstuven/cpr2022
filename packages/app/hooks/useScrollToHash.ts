import { useEffect } from "react";

export function useScrollToHash(offset = 0) {
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash?.substring(1);
      let elementToScroll = document.getElementById(hash);

      if (!elementToScroll) {
        elementToScroll = Array.prototype.slice
          .call(document.getElementsByTagName("a"))
          .find((el: HTMLAnchorElement) => el.name == hash);
      }

      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior: "smooth",
      });
    };

    scroll();
    window.addEventListener("hashchange", scroll);
    return () => {
      window.removeEventListener("hashchange", scroll);
    };
  }, [offset]);
}
