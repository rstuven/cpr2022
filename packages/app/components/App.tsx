import React, { useCallback, useRef, useState } from "react";
import { useHashHighlighting, useHashScrolling } from "hooks/useHash";
import Indice from "./Indice";
import Constitucion from "./Constitucion";
import { AppNavbar } from "./AppNavbar";
import { HashProvider } from "./HashProvider";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  const indice = useRef<HTMLDivElement>(null);
  useHashScrolling(350, "auto", main);
  useHashScrolling(350, "smooth", indice, true);
  const highlightClass = "bg-amber-100";
  useHashHighlighting(highlightClass, main);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuOpenChange = useCallback((newValue: boolean) => {
    setIsMenuOpen(newValue);
  }, []);
  return (
    <HashProvider>
      <AppNavbar onMenuOpenChange={onMenuOpenChange} />
      {/* make sure highlightClass is noticed by tailwind compiler */}
      <div className={highlightClass + " hidden"} />
      <div
        className={
          "grid grid-cols-1 md:grid-cols-7 " + (isMenuOpen ? "hidden" : "")
        }
      >
        <aside
          ref={indice}
          className="bg-[#34005f] hidden md:block md:col-span-2 overflow-y-scroll overscroll-contain h-screen"
        >
          <Indice />
        </aside>
        <main
          ref={main}
          className="md:col-span-5 overflow-y-scroll overscroll-contain h-screen grid justify-center"
        >
          <article className="pb-10 ">
            <div className="pt-7 mt-0 pb-10">
              <Constitucion />
            </div>
          </article>
        </main>
      </div>
    </HashProvider>
  );
}
