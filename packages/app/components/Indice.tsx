import React from "react";
import {
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
} from "cpr2022-data/src/types/schema";
import { constitucion } from "cpr2022-data";
import HashLink from "./HashLink";

export default function Indice() {
  return (
    <div className="prose text-xs">
      <ul className="list-none">
        {constitucion.capitulos.map((capitulo: CapituloSchema) => (
          <Capitulo key={capitulo.nombre} {...capitulo} />
        ))}

        <li>
          <HashLink className="text-black" hash={"dt"}>
            Disposiciones Transitorias
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

function Capitulo(capitulo: CapituloSchema) {
  const path = "cap:" + capitulo.numero;
  return (
    <li>
      <HashLink className="text-black" hash={path}>
        Capítulo {capitulo.capitulo} {capitulo.nombre}
      </HashLink>
      <ul className="list-disc list-outside">
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
      <HashLink className="text-black" hash={titulo.path}>
        {titulo.titulo}
      </HashLink>
    </li>
  );
}
