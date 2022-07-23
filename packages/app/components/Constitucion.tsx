import React from "react";

import { constitucion } from "cpr2022-data";
import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";
import Capitulo from "./Capitulo";
import Transitorias from "./Transitorias";

export default function Constitucion() {
  return (
    <div className="prose px-10 font-ConvencionFJ">
      <p className="text-2xl italic">{constitucion.preambulo}</p>

      {constitucion.capitulos.map((capitulo: CapituloSchema) => (
        <Capitulo key={capitulo.nombre} {...capitulo} />
      ))}

      <Transitorias transitorias={constitucion.transitorias} />

      <div className={"text-center text-2xl mt-10"}>********</div>
    </div>
  );
}
