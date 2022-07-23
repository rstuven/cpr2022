import React from "react";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemLabel,
  getItemsOfType,
  parseFragmento,
} from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";

export default function Indice() {
  const [hash, _] = useHashPath();
  const path = "dt";
  const fragmento = parseFragmento(hash);
  const isHighlighted = path == hash;
  return (
    <div className="prose text-xs font-ConvencionFJ">
      <ul className="list-none">
        {getItemsOfType("capitulo").map((capitulo) => (
          <Capitulo key={capitulo.oid} capitulo={capitulo} />
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

function Capitulo({ capitulo }: { capitulo: ItemObject }) {
  const [hash, _] = useHashPath();
  const path = getItemFragmentoId(capitulo);
  const isHighlighted = path == hash;
  const fragmento = parseFragmento(hash);
  const isSelected =
    fragmento &&
    "capitulo" in fragmento &&
    fragmento.capitulo.oid == capitulo.oid;

  return (
    <li>
      <HashLink
        className={
          "no-underline p-1 rounded " +
          (isHighlighted || isSelected
            ? " bg-amber-100 text-black"
            : "text-white")
        }
        hash={path}
      >
        {getItemLabel(capitulo)}
      </HashLink>
      <ul className="list-disc list-outside">
        {getChildrenOfType(capitulo, "titulo").map((titulo, tituloIndex) => (
          <Titulo
            key={titulo.oid}
            titulo={titulo}
            highlight={Boolean(
              fragmento &&
                "titulo" in fragmento &&
                fragmento.titulo?.oid == titulo.oid
            )}
            path={`${path}.${tituloIndex + 1}`}
          />
        ))}
      </ul>
    </li>
  );
}

type TituloProps = { titulo: ItemObject; path: string; highlight: boolean };

function Titulo(props: TituloProps) {
  const [hash, _] = useHashPath();
  const isHighlighted = props.path == hash;
  return (
    <li>
      <HashLink
        hash={props.path}
        className={
          "no-underline p-1 rounded " +
          (isHighlighted || props.highlight
            ? "bg-amber-100 text-black"
            : "text-[#bf77fa]")
        }
      >
        {props.titulo.label}
      </HashLink>
    </li>
  );
}
