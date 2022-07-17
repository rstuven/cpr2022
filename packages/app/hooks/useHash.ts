import React from "react";

export const useHash = (): [string, (newHash: string) => void] => {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const hashChangeHandler = React.useCallback(() => {
    setHash(window.location.hash);
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  const updateHash = React.useCallback(
    (newHash: string) => {
      if (newHash == hash) {
        return;
      }
      history.pushState({}, "", newHash);
      window.dispatchEvent(new Event("hashchange"));
    },
    [hash]
  );

  return [hash, updateHash];
};

export function useHashPath(): [string, (newHash: string) => void] {
  const [hash, updateHash] = useHash();
  return [hash.substring(1), (newHash: string) => updateHash("#" + newHash)];
}
