import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

export const HashContext = createContext("");

export const HashProvider = (props: PropsWithChildren<{}>) => {
  const csr = typeof window != "undefined";
  const intialValue = csr ? window.location.hash.substring(1) : "";
  const [hash, setHash] = useState(() => intialValue);

  const onHashChange = useCallback(() => {
    setHash(csr ? window.location.hash.substring(1) : "");
  }, [csr]);

  useEffect(() => {
    csr && window.addEventListener("hashchange", onHashChange);
    return () => {
      csr && window.removeEventListener("hashchange", onHashChange);
    };
  }, [csr, onHashChange]);

  return (
    <HashContext.Provider value={hash}>{props.children}</HashContext.Provider>
  );
};
