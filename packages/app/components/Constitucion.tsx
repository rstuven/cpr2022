import React from "react";

import Capitulo from "./Capitulo";
import Transitorias from "./Transitorias";
import { getItemsOfType } from "lib/helpers";
import TitleCase from "./TitleCase";
import Preambulo from "./Preambulo";

export default function Constitucion() {
  return (
    <div className="prose px-3 sm:px-10 font-ConvencionFJ">
      <a data-id="inicio" />
      <h1 className="text-center font-normal">
        <TitleCase
          lowercaseClass="text-3xl"
          text="Constitución Política de la República de Chile"
        />
      </h1>

      <Preambulo />

      {getItemsOfType("capitulo").map((item) => (
        <Capitulo key={item.oid} item={item} />
      ))}

      <Transitorias />

      <div className="text-center text-2xl mt-10">********</div>
    </div>
  );
}
