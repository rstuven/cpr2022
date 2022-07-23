import { Badge, Dropdown } from "flowbite-react";
import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import {
  firstToUpperCase,
  getArticuloFragmentoId,
  getArticuloLabel,
  getArticulos,
} from "lib/helpers";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import Pagina from "./Pagina";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Articulo(articulo: ArticuloSchema) {
  const path = getArticuloFragmentoId(articulo);
  const [hash, _] = useHashPath();
  const referencias = articulo.referencias?.filter((r) => !r.incisos);
  const isHighlighted = path == hash;
  return (
    <div
      className={
        "border border-solid rounded-md p-3 mb-3" +
        (isHighlighted ? " bg-amber-100" : "")
      }
    >
      <a data-id={path} />
      <div className="ml-1 float-right">
        <Pagina pagina={articulo.pagina} />
      </div>
      <span className="flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor visible={!isHighlighted} />
        <b className="text-black mx-1">{getArticuloLabel(articulo)}</b>
        <Badge color="gray"> {firstToUpperCase(articulo.sobre)}</Badge>
        {articulo.etiquetas.map((etiqueta, index) => (
          <BadgeEtiquetas key={index} {...{ etiqueta, articulo }} />
        ))}
        {referencias?.map((referencia, index) => (
          <Badge color="info" key={index}>
            <a
              href={referencia.url}
              target="_blank"
              rel="noreferrer"
              title={"por " + referencia.autor}
            >
              {referencia.etiqueta}
              {referencias.length > 1 ? " " + (index + 1) : ""}
            </a>
          </Badge>
        ))}
      </span>
      {articulo.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}

function BadgeEtiquetas(props: {
  etiqueta: string;
  articulo: ArticuloSchema;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const label = props.etiqueta.replace(/ /g, "\u00a0");
  return (
    <div className="cursor-pointer" onMouseOver={() => setOpen(true)}>
      <Badge color="pink">
        {!open ? (
          <div className="flex">
            {label}
            <HiOutlineChevronDown className="ml-2 h-4 w-4" />
          </div>
        ) : (
          <Dropdown inline label={label}>
            {getArticulos()
              .filter(
                (art, i) =>
                  art.articulo != props.articulo.articulo &&
                  art.etiquetas.includes(props.etiqueta)
              )
              .map((articulo, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <a
                      href={"#" + getArticuloFragmentoId(articulo)}
                    >{`${getArticuloLabel(articulo)} (${firstToUpperCase(
                      articulo.sobre
                    )})`}</a>
                  </Dropdown.Item>
                );
              })}
          </Dropdown>
        )}
      </Badge>
    </div>
  );
}
