import React from "react";
import Image, { ImageLoader } from "next/image";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemLabel,
  getItemsOfType,
  isFragmentoIdMatch,
  parseFragmento,
} from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import tituloImage from "public/images/titulo.png";
import escudoImage from "public/images/escudo.png";

export default function Indice() {
  const [hash, _] = useHashPath();
  const pathPreambulo = "preambulo";
  const pathTransitorias = "transitoria";
  const fragmento = parseFragmento(hash);
  const imageLoader: ImageLoader = (props) => {
    return props.src;
  };
  return (
    <div className="prose text-xs font-ConvencionFJ px-6 pt-5 pb-20">
      <HashLink hash="inicio">
        <Image
          src={tituloImage}
          loader={imageLoader}
          width={296}
          height={148}
          alt="Propuesta de Constitución Política de la República de Chile 2022"
          aria-label="Título"
        />
      </HashLink>
      <ul className="list-none pl-0">
        <li>
          <HashLink
            className={
              "no-underline p-1 rounded " +
              (pathPreambulo == hash
                ? " bg-amber-100 text-black"
                : "text-white")
            }
            hash={pathPreambulo}
          >
            Preámbulo
          </HashLink>
        </li>
        {getItemsOfType("capitulo").map((capitulo) => (
          <Capitulo key={capitulo.oid} capitulo={capitulo} />
        ))}

        <li>
          <HashLink
            className={
              "no-underline p-1 rounded " +
              (pathTransitorias == hash ||
              (fragmento && "transitoria" in fragmento)
                ? " bg-amber-100 text-black"
                : "text-white")
            }
            hash={pathTransitorias}
          >
            Disposiciones Transitorias
          </HashLink>
        </li>
      </ul>
      <div className="text-center">
        <Image
          src={escudoImage}
          loader={imageLoader}
          width={160}
          height={123}
          aria-label="Escudo"
        />
      </div>
    </div>
  );
}

function Capitulo({ capitulo }: { capitulo: ItemObject }) {
  const [hash, _] = useHashPath();
  const path = getItemFragmentoId(capitulo);
  const isHighlighted = isFragmentoIdMatch(path, hash);
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
