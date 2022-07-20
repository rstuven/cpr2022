import { useEffect, RefObject } from "react";

export function useScrollToHash(offset = 0, target: RefObject<HTMLElement>) {
  useEffect(() => {
    const scroll = (behavior: ScrollBehavior) => {
      if (!target.current) return false;

      const hash = window.location.hash?.substring(1);
      let elementToScroll = document.getElementById(hash);

      if (!elementToScroll) {
        elementToScroll = Array.prototype.slice
          .call(document.getElementsByTagName("a"))
          .find((el: HTMLAnchorElement) => el.name == hash);
      }

      if (!elementToScroll) return false;

      target.current.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior,
      });

      return true;
    };

    scroll("auto");
    const onHashChange = () => scroll("smooth");
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [offset, target]);
}
