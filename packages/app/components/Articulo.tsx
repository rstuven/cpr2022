import { Badge, Dropdown } from "flowbite-react";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import Pagina from "./Pagina";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ArticuloData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
} from "lib/helpers";

export default function Articulo({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const [hash, _] = useHashPath();
  const articulo = item.data as ArticuloData;
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
      <span className="font-sans flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor visible={!isHighlighted} />
        <b className="text-black mx-1 font-ConvencionFJ">{getItemLabel(item)}</b>
        <Badge color="gray"> {firstToUpperCase(articulo.sobre)}</Badge>
        {articulo.etiquetas.map((etiqueta, index) => (
          <BadgeEtiquetas key={index} etiqueta={etiqueta} item={item} />
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
      {getChildrenOfType(item, "inciso").map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} item={inciso} baseItem={item} path={path} />
      ))}
    </div>
  );
}

function BadgeEtiquetas(props: {
  etiqueta: string;
  item: ItemObject;
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
            {getItemsOfType("articulo")
              .filter(
                (art) =>
                  art.oid != props.item.oid &&
                  (art.data as ArticuloData).etiquetas.includes(props.etiqueta)
              )
              .map((articulo, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <a href={"#" + getItemFragmentoId(articulo)}>{`${getItemLabel(
                      articulo
                    )} (${firstToUpperCase(
                      (articulo.data as ArticuloData).sobre
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
