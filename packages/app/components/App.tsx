import React, { useRef } from "react";
import { useHashHighlighting, useHashScrolling } from "hooks/useHash";
import useMediaQuery from "hooks/useMediaQuery";
import Indice from "./Indice";
import Constitucion from "./Constitucion";
import { AppNavbar } from "./AppNavbar";
import { HashProvider } from "./HashProvider";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  const indice = useRef<HTMLDivElement>(null);
  const isMediumMinWidth = useMediaQuery("(min-width: 768px)");
  useHashScrolling(isMediumMinWidth ? 350 : 150, "auto", main);
  useHashScrolling(isMediumMinWidth ? 350 : 150, "smooth", indice, true);
  useHashHighlighting(main);
  return (
    <HashProvider>
      {/* make sure highlightClass is noticed by tailwind compiler */}
      <div className="bg-amber-100 hidden" />
      <div className="h-screen overflow-hidden">
        <div className="z-10 md:mr-4 relative">
          <AppNavbar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <aside
            ref={indice}
            className="h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2"
          >
            <Indice />
          </aside>
          <div
            ref={main}
            className="h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center"
          >
            <Constitucion />
          </div>
        </div>
      </div>
    </HashProvider>
  );
}
