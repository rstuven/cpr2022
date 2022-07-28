import React from "react";

import Capitulo from "./Capitulo";
import Transitorias from "./Transitorias";
import { getItemsOfType, ItemFilter } from "lib/helpers";
import TitleCase from "./TitleCase";
import Preambulo from "./Preambulo";

export default function Constitucion({ filter }: { filter: ItemFilter }) {
  return (
    <div className="prose px-3 sm:px-10 font-ConvencionFJ">
      <a data-id="inicio" />
      <h1 className="text-center font-normal">
        <TitleCase
          lowercaseClass="text-3xl"
          text="Constitución Política de la República de Chile"
        />
      </h1>

      <Preambulo filter={filter} />

      {getItemsOfType("capitulo").map((item) => (
        <Capitulo key={item.oid} item={item} filter={filter} />
      ))}

      <Transitorias filter={filter} />

      <div className="text-center text-2xl mt-10">********</div>
    </div>
  );
}
