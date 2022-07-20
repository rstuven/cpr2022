import React, { useRef } from "react";

import { useScrollToHash } from "hooks/useScrollToHash";
import Indice from "./Indice";
import Constitucion from "./Constitucion";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  useScrollToHash(350, main);
  return (
    <div className="grid grid-cols-1 md:grid-cols-7">
      <aside className="hidden md:block md:col-span-2 overflow-y-scroll h-screen py-5 pr-5">
        <Indice />
      </aside>
      <main
        ref={main}
        className="md:col-span-5 overflow-y-scroll h-screen grid justify-center"
      >
        <article className="pb-10">
          <header className="fixed bg-white prose">
            <h1 className="p-5">
              Propuesta de Constitución Política de la República de Chile 2022
            </h1>
          </header>
          <div className="pt-60 mt-0 sm:pt-32 md:pt-40 lg:pt-32 pb-10">
            <Constitucion />
          </div>
        </article>
      </main>
    </div>
  );
}
