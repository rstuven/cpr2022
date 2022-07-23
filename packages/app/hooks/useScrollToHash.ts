import { useEffect, RefObject } from "react";

export function useScrollToHash(offset = 0, target?: RefObject<HTMLElement>) {
  useEffect(() => {
    const scroll = (behavior: ScrollBehavior) => {
      if (target && !target.current) return false;

      const hash = window.location.hash?.substring(1);

      let elementToScroll: HTMLElement | null = document.querySelector(
        `a[data-id="${hash}"]`
      );

      if (!elementToScroll) return false;

      (target ? target.current : window).scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior,
      });

      return true;
    };

    if (!scroll("auto")) {
      setTimeout(() => {
        scroll("auto");
      }, 500);
    }
    const onHashChange = () => scroll("smooth");
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [offset, target]);
}
