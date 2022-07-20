import React from "react";

export const useHash = (): [string, (newHash: string) => void] => {
  const csr = typeof window != "undefined";
  const intialValue = csr ? window.location.hash : "";
  const [hash, setHash] = React.useState(() => intialValue);

  const hashChangeHandler = React.useCallback(() => {
    setHash(csr ? window.location.hash : "");
  }, [csr]);

  React.useEffect(() => {
    csr && window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      csr && window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, [csr, hashChangeHandler]);

  const updateHash = React.useCallback(
    (newHash: string) => {
      if (newHash == hash) {
        return;
      }
      csr && history.pushState({}, "", newHash);
      csr && window.dispatchEvent(new Event("hashchange"));
    },
    [hash, csr]
  );

  return [hash, updateHash];
};

export function useHashPath(): [string, (newHash: string) => void] {
  const [hash, updateHash] = useHash();
  return [hash.substring(1), (newHash: string) => updateHash("#" + newHash)];
}
