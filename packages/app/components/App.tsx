import React, { useCallback, useRef, useState } from "react";
import { useScrollToHash } from "hooks/useScrollToHash";
import Indice from "./Indice";
import Constitucion from "./Constitucion";
import Image from "next/image";
import { AppNavbar } from "./AppNavbar";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  useScrollToHash(350, main);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuOpenChange = useCallback((newValue: boolean) => {
    setIsMenuOpen(newValue);
  }, []);
  return (
    <>
      <AppNavbar onMenuOpenChange={onMenuOpenChange} />
      <div
        className={
          "grid grid-cols-1 md:grid-cols-7 " + (isMenuOpen ? "hidden" : "")
        }
      >
        <aside className="bg-[#34005f] hidden md:block md:col-span-2 overflow-y-scroll overscroll-contain h-screen py-5 pr-5">
          <Indice />
        </aside>
        <main
          ref={main}
          className="md:col-span-5 overflow-y-scroll overscroll-contain h-screen grid justify-center"
        >
          <article className="pb-10 ">
            <Image
              src="/images/hero.png"
              width={600}
              height={200}
              layout="responsive"
              alt=" Propuesta de Constitución Política de la República de Chile 2022"
            />
            <div className="pt-7 mt-0 pb-10">
              <Constitucion />
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
