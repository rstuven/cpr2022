import { useEffect, RefObject, useRef } from "react";
import { getCurrentHash } from "lib/helpers";

export function useHashScrolling(
  offset = 0,
  defaultBehavior: ScrollBehavior,
  target?: RefObject<HTMLElement>,
  index?: boolean
) {
  const hash = useRef<string | undefined>();

  useEffect(() => {
    const isSafari = navigator.userAgent.includes("Safari");

    const scroll = (behavior: ScrollBehavior) => {
      if (target && !target.current) return false;

      // fix search input losing focus on mobile.
      if (hash.current != null && hash.current === window.location.hash) {
        return true;
      }
      hash.current = window.location.hash;

      const element = getElement("data-id", target, index);

      if (!element || element.offsetTop == 0) return false;

      if (defaultBehavior == "auto" && !isSafari) {
        element.focus();
        element.blur();
      } else {
        (target ? target.current : window)?.scrollTo({
          top: element.offsetTop - offset,
          behavior,
        });
      }

      return true;
    };

    retry(() => scroll("auto"));

    const onHashChange = () => retry(() => scroll(defaultBehavior));

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [defaultBehavior, index, offset, target]);
}

export function useHashHighlighting(
  target?: RefObject<HTMLElement>,
  className: string = "bg-amber-100"
) {
  useEffect(() => {
    const highlight = () => {
      if (target && !target.current) return false;

      const classes = className.split(" ");
      const elements = (target ? target.current : document)?.querySelectorAll(
        `.${classes[0]}[data-hash]`
      );
      classes.forEach((c) => {
        elements?.forEach((el) => el.classList.remove(c));
      });

      const element = getElement("data-hash", target);
      if (!element) return false;

      classes.forEach((c) => {
        element.classList.add(c);
      });

      return true;
    };

    const onHashChange = () => retry(highlight);

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [className, target]);
}

function getElement(
  attribute: string,
  target?: RefObject<HTMLElement>,
  index?: boolean
) {
  const hash = getCurrentHash();

  let element: HTMLElement | null | undefined;
  let hashTry = hash;
  if (index && hash.indexOf("@") != -1) {
    hashTry = hash.split("@")[1];
  }
  while (true) {
    element = (target ? target.current : document)?.querySelector(
      `[${attribute}^="${hashTry}"]`
    );
    if (element) break;

    let lastIndex = hashTry.lastIndexOf(".");
    if (lastIndex == -1) {
      lastIndex = hashTry.lastIndexOf(":");
      if (lastIndex == -1) {
        lastIndex = hashTry.lastIndexOf("@");
        if (lastIndex == -1) {
          break;
        }
        if (!index) {
          lastIndex++;
        }
      }
    }
    hashTry = hashTry.substring(0, lastIndex);
  }
  return element;
}

function retry(action: () => boolean) {
  if (!action()) {
    setTimeout(() => {
      if (!action()) {
        setTimeout(() => {
          action();
        }, 100);
      }
    }, 100);
  }
}
