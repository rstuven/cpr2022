import { Badge } from "flowbite-react";
import extractDomain from "extract-domain";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

import { HiOutlineExternalLink } from "react-icons/hi";
import { ArticuloData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";
import ItemToolbar from "./ItemToolbar";

export default function Articulo({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const articulo = item.data as ArticuloData;
  const referencias = articulo.referencias?.filter((r) => !r.incisos);
  return (
    <div data-hash={path} className="border border-solid rounded-md p-3 mb-3">
      <ItemToolbar path={path} item={item} />
      <span className="font-sans flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor="artículo" />
        <b className="text-black mx-1 font-ConvencionFJ">
          {getItemLabel(item)}
        </b>
        <Badge color="gray"> {firstToUpperCase(articulo.sobre)}</Badge>
        {articulo.etiquetas.map((etiqueta, index) => (
          <BadgeEtiquetas key={index} etiqueta={etiqueta} item={item} />
        ))}
        {referencias?.map((referencia, index) => (
          <Badge color="info" key={index}>
            <Tooltip
              content={
                <>
                  {"por " + referencia.autor}
                  <br />
                  {"en " + extractDomain(referencia.url)}
                </>
              }
            >
              <span className="flex">
                <a href={referencia.url} target="_blank" rel="noreferrer">
                  {referencia.etiqueta}
                  {referencias.length > 1 ? " " + (index + 1) : ""}
                </a>
                &nbsp;
                <HiOutlineExternalLink size={14} />
              </span>
            </Tooltip>
          </Badge>
        ))}
      </span>
      {getChildrenOfType(item, "inciso").map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} item={inciso} baseItem={item} />
      ))}
    </div>
  );
}

function BadgeEtiquetas(props: {
  etiqueta: string;
  item: ItemObject;
}): JSX.Element {
  const label = props.etiqueta.replace(/ /g, "\u00a0");
  return (
    <Badge color="pink">
      <Dropdown
        inline
        label={label}
        className="max-h-[210px] overflow-y-scroll overscroll-contain"
      >
        {getItemsOfType("articulo")
          .filter(
            (art) =>
              art.oid != props.item.oid &&
              (art.data as ArticuloData).etiquetas.includes(props.etiqueta)
          )
          .map((articulo, index) => {
            return (
              <div key={index}>
                <a
                  className="no-underline hover:underline font-normal"
                  href={"/#" + getItemFragmentoId(articulo)}
                >{`${getItemLabel(articulo)} sobre ${
                  (articulo.data as ArticuloData).sobre
                }`}</a>
              </div>
            );
          })}
      </Dropdown>
    </Badge>
  );
}
