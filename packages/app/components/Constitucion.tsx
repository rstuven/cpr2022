import React, { useRef } from "react";

import { constitucion } from "cpr2022-data";
import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";
import Capitulo from "./Capitulo";
import Transitorias from "./Transitorias";

export default function Constitucion() {
  return (
    <div className="prose px-10">
      <p className="text-2xl">{constitucion.preambulo}</p>

      {constitucion.capitulos.map((capitulo: CapituloSchema) => (
        <Capitulo key={capitulo.nombre} {...capitulo} />
      ))}

      <Transitorias transitorias={constitucion.transitorias} />
    </div>
  );
}
