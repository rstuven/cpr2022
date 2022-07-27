import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getCurrentHash } from "lib/helpers";

export const HashContext = createContext("");

export const HashProvider = (props: PropsWithChildren<{}>) => {
  const [hash, setHash] = useState(() => getCurrentHash());

  const onHashChange = useCallback(() => {
    setHash(getCurrentHash());
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [onHashChange]);

  return (
    <HashContext.Provider value={hash}>{props.children}</HashContext.Provider>
  );
};
