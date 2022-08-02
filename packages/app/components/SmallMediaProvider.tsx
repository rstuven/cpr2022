import { createContext, PropsWithChildren } from "react";
import useMediaQuery from "hooks/useMediaQuery";

export const SmallMediaContext = createContext(false);

export const SmallMediaProvider = (props: PropsWithChildren<{}>) => {
  const isSmallMinWidth = useMediaQuery("(min-width: 500px)", true);
  return (
    <SmallMediaContext.Provider value={isSmallMinWidth}>
      {props.children}
    </SmallMediaContext.Provider>
  );
};
