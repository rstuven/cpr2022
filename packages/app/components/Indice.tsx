import React from "react";
import {
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
} from "cpr2022-data/src/types/schema";
import { constitucion } from "cpr2022-data";

export default function Indice() {
  return (
    <div>
      <ul>
        {constitucion.capitulos.map((capitulo: CapituloSchema) => (
          <Capitulo key={capitulo.nombre} {...capitulo} />
        ))}

        <li>
          <a href={"#dt"}>Disposiciones transitorias</a>
        </li>
      </ul>
    </div>
  );
}

function Capitulo(capitulo: CapituloSchema) {
  const path = "cap:" + capitulo.numero;
  return (
    <li>
      <a href={"#" + path}>
        Capítulo {capitulo.capitulo} {capitulo.nombre}
      </a>
      <ul>
        {capitulo.titulos?.map((titulo, tituloIndex) => (
          <Titulo
            key={tituloIndex}
            {...titulo}
            path={`${path}.${tituloIndex + 1}`}
          />
        ))}
      </ul>
    </li>
  );
}

type TituloProps = TituloSchema & { path: string };
function Titulo(titulo: TituloProps) {
  return (
    <li>
      <a href={"#" + titulo.path}>{titulo.titulo}</a>
    </li>
  );
}
