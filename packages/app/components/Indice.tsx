import React from "react";
import {
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
} from "cpr2022-data/src/types/schema";
import { constitucion } from "cpr2022-data";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { getCapituloFragmentoId, getCapituloLabel, parseFragmento } from "lib/helpers";

export default function Indice() {
  const [hash, _] = useHashPath();
  const path = "dt";
  const fragmento = parseFragmento(hash);
  const isHighlighted = path == hash;
  return (
    <div className="prose text-xs font-ConvencionFJ">
      <ul className="list-none">
        {constitucion.capitulos.map((capitulo: CapituloSchema) => (
          <Capitulo key={capitulo.nombre} {...capitulo} />
        ))}

        <li>
          <HashLink
            className={
              "no-underline p-1 rounded " +
              (isHighlighted || (fragmento && "transitoria" in fragmento)
                ? " bg-amber-100 text-black"
                : "text-white")
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
  const path = getCapituloFragmentoId(capitulo);
  const isHighlighted = path == hash;
  const fragmento = parseFragmento(hash);
  const isCapitulo =
    fragmento &&
    "capitulo" in fragmento &&
    fragmento.capitulo.numero == capitulo.numero;

  return (
    <li>
      <HashLink
        className={
          "no-underline p-1 rounded " +
          (isHighlighted || isCapitulo
            ? " bg-amber-100 text-black"
            : "text-white")
        }
        hash={path}
      >
        {getCapituloLabel(capitulo)}
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
  const isHighlighted = titulo.path == hash;
  return (
    <li>
      <HashLink
        hash={titulo.path}
        className={
          "no-underline p-1 rounded " +
          (isHighlighted || titulo.highlight
            ? "bg-amber-100 text-black"
            : "text-[#bf77fa]")
        }
      >
        {titulo.titulo}
      </HashLink>
    </li>
  );
}
