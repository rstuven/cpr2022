import React from "react";

import Capitulo from "./Capitulo";
import Transitorias from "./Transitorias";
import { getItemsOfType, getPreambulo } from "lib/helpers";

export default function Constitucion() {
  return (
    <div className="prose px-10 font-ConvencionFJ">
      <p className="text-2xl italic">{getPreambulo()}</p>

      {getItemsOfType("capitulo").map((item) => (
        <Capitulo key={item.oid} item={item} />
      ))}

      <Transitorias />

      <div className={"text-center text-2xl mt-10"}>********</div>
    </div>
  );
}
