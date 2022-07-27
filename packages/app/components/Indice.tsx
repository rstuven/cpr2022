import React, { useContext } from "react";
import Image, { ImageLoader } from "next/image";
import HashLink from "./HashLink";
import {
  classNames,
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
import { HashContext } from "./HashProvider";

const rootItem = () => classNames("mt-2 mb-0");

const rootLink = (highlight: boolean, hasChildren: boolean) =>
  classNames(
    "no-underline p-1 block my-0",
    "hover:text-white",
    "rounded",
    hasChildren && "rounded-bl-none",
    highlight ? "text-white bg-[#9035da]" : "text-[#d0a2f5]"
  );

const tituloItem = (highlight: boolean) =>
  classNames(
    "border-l-[3px] border-solid",
    "my-0 pt-1 -mx-[19.5px] pr-6 pl-3",
    "-indent-1 pl-2",
    "hover:border-[#730ac8]",
    highlight ? "border-[#9035da]" : "border-[#400472]"
  );

const tituloLink = (highlight: boolean) =>
  classNames(
    "no-underline p-1 my-0",
    "hover:text-[#d0b0ef]",
    highlight ? "text-white" : "text-[#bf77fa]"
  );

export default function Indice() {
  const imageLoader: ImageLoader = (props) => {
    return props.src;
  };
  return (
    <div className="prose text-xs font-ConvencionFJ pl-3 pr-4 py-5">
      <HashLink hash="inicio" title="Ir al inicio">
        <Image
          src={tituloImage}
          loader={imageLoader}
          width={296}
          height={148}
          alt="Propuesta de Constitución Política de la República de Chile 2022"
          aria-label="Título"
        />
      </HashLink>
      <ul className="list-none mt-0 mb-6 pl-0 -ml-1">
        {getItemsOfType("preambulo", "capitulo", "transitorias").map((item) => (
          <RootItem key={item.oid} item={item} />
        ))}
      </ul>
      <div className="text-center">
        <Image
          src={escudoImage}
          loader={imageLoader}
          width={120}
          height={93}
          aria-label="Escudo"
        />
      </div>

      <div className="pt-3 text-sm text-center text-[#603484]">
        Versión: {process.env.NEXT_PUBLIC_VERSION}
      </div>
    </div>
  );
}

function RootItem({ item }: { item: ItemObject }) {
  const hash = useContext(HashContext);
  const path = getItemFragmentoId(item);
  const fragmento = parseFragmento(hash);
  const isHighlighted =
    isFragmentoIdMatch(path, hash) ||
    Boolean(
      fragmento && "capitulo" in fragmento && fragmento.capitulo.oid == item.oid
    );
  const titulos = getChildrenOfType(item, "titulo");
  return (
    <li className={rootItem()}>
      <HashLink
        className={rootLink(isHighlighted, titulos.length > 0)}
        hash={path}
      >
        {getItemLabel(item)}
      </HashLink>
      <ul className="list-none my-0">
        {titulos.map((titulo, tituloIndex) => (
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
  const hash = useContext(HashContext);
  const isHighlighted = props.path == hash || props.highlight;
  return (
    <li className={tituloItem(isHighlighted)}>
      <HashLink hash={props.path} className={tituloLink(isHighlighted)}>
        {props.titulo.label}
      </HashLink>
    </li>
  );
}
