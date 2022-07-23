import { useEffect, RefObject } from "react";

export function useScrollToHash(offset = 0, target?: RefObject<HTMLElement>) {
  useEffect(() => {
    const _scroll = (behavior: ScrollBehavior) => {
      console.log("_scroll");
      if (target && !target.current) return false;

      const hash = window.location.hash?.substring(1);
      console.log(hash);

      let elementToScroll: HTMLElement | null = document.querySelector(
        `a[data-id="${hash}"]`
      );

      if (!elementToScroll || elementToScroll.offsetTop == 0) return false;

      (target ? target.current : window).scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior,
      });

      return true;
    };

    const scroll = (behavior: ScrollBehavior) => {
      if (!_scroll(behavior)) {
        setTimeout(() => {
          if (!_scroll(behavior)) {
            setTimeout(() => {
              _scroll(behavior);
            }, 100);
          }
        }, 100);
      }
    };

    scroll("auto");

    const onHashChange = () => scroll("auto");
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [offset, target]);
}
