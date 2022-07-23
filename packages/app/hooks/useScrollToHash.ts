import { useEffect, RefObject } from "react";

export function useScrollToHash(
  offset = 0,
  defaultBehavior: ScrollBehavior,
  target?: RefObject<HTMLElement>,
  index?: boolean
) {
  useEffect(() => {
    const _scroll = (behavior: ScrollBehavior) => {
      if (target && !target.current) return false;

      let elementToScroll: HTMLElement | null | undefined;
      const hash = window.location.hash?.substring(1);
      let hashTry = hash;
      if (index && hash.indexOf("@") != -1) {
        hashTry = hash.split("@")[1];
      }
      while (true) {
        elementToScroll = (target ? target.current : document)?.querySelector(
          `a[data-id^="${hashTry}"]`
        );
        console.log(hash, hashTry, {
          target: target ? target.current : document,
          elementToScroll,
        });
        if (elementToScroll) break;

        let lastIndex = hashTry.lastIndexOf(".");
        if (lastIndex == -1) {
          lastIndex = hashTry.lastIndexOf(":");
          if (lastIndex == -1) {
            lastIndex = hashTry.lastIndexOf("@");
            if (lastIndex == -1) {
              break;
            } else if (!index) {
              lastIndex++;
            }
          }
        }
        hashTry = hashTry.substring(0, lastIndex);
      }

      if (!elementToScroll || elementToScroll.offsetTop == 0) return false;

      (target ? target.current : window)?.scrollTo({
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

    const onHashChange = () => scroll(defaultBehavior);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [defaultBehavior, offset, target]);
}
