import React from "react";
import {
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
} from "cpr2022-data/src/types/schema";
import { constitucion } from "cpr2022-data";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { parseFragmento } from "lib/helpers";

export default function Indice() {
  const [hash, _] = useHashPath();
  const path = "dt";
  const fragmento = parseFragmento(hash);
  return (
    <div className="prose text-xs">
      <ul className="list-none">
        {constitucion.capitulos.map((capitulo: CapituloSchema) => (
          <Capitulo key={capitulo.nombre} {...capitulo} />
        ))}

        <li>
          <HashLink
            className={
              "text-black" +
              (hash == path || (fragmento && "transitoria" in fragmento)
                ? " bg-amber-100"
                : "")
            }
            hash={path}
          >
            Disposiciones Transitorias
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

function Capitulo(capitulo: CapituloSchema) {
  const [hash, _] = useHashPath();
  const path = "cap:" + capitulo.numero;

  const fragmento = parseFragmento(hash);
  const isCapitulo =
    fragmento &&
    "capitulo" in fragmento &&
    fragmento.capitulo.numero == capitulo.numero;

  return (
    <li>
      <HashLink
        className={
          "text-black" + (hash == path || isCapitulo ? " bg-amber-100" : "")
        }
        hash={path}
      >
        Capítulo {capitulo.capitulo} {capitulo.nombre}
      </HashLink>
      <ul className="list-disc list-outside">
        {capitulo.titulos?.map((titulo, tituloIndex) => (
          <Titulo
            key={tituloIndex}
            {...titulo}
            highlight={
              fragmento &&
              "titulo" in fragmento &&
              fragmento.titulo?.titulo == titulo.titulo
            }
            path={`${path}.${tituloIndex + 1}`}
          />
        ))}
      </ul>
    </li>
  );
}

type TituloProps = TituloSchema & { path: string; highlight: boolean };
function Titulo(titulo: TituloProps) {
  const [hash, _] = useHashPath();
  return (
    <li
      className={hash == titulo.path || titulo.highlight ? " bg-amber-100" : ""}
    >
      <HashLink className="text-black" hash={titulo.path}>
        {titulo.titulo}
      </HashLink>
    </li>
  );
}
