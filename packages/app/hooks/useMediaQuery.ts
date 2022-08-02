import { useCallback, useEffect, useState } from "react";

function useMediaQuery(query: string, defaultValue = false): boolean {
  const getMatches = useCallback(
    (query: string): boolean => {
      if (typeof window !== "undefined") {
        return window.matchMedia(query).matches;
      }
      return defaultValue;
    },
    [defaultValue]
  );

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [getMatches, query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [handleChange, query]);

  return matches;
}

export default useMediaQuery;
