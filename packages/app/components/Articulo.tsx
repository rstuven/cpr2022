import { Badge } from "flowbite-react";
import extractDomain from "extract-domain";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

import { CgExternal } from "react-icons/cg";
import { CommonData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
  getEnlacesDesde,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";
import ItemToolbar from "./ItemToolbar";
import EnlacesHacia from "./EnlacesHacia"

export default function Articulo({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const data = item.data as CommonData;
  const enlacesDesde = getEnlacesDesde(path, true);
  return (
    <div data-hash={path} className="border border-solid rounded-md p-3 mb-3">
      <ItemToolbar path={path} item={item} />
      <span className="font-sans flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor="artículo" />
        <b className="text-black mx-1 font-ConvencionFJ">
          {getItemLabel(item)}
        </b>
        <Badge color="gray"> {firstToUpperCase(data.sobre)}</Badge>
        {data.etiquetas.map((etiqueta, index) => (
          <BadgeEtiquetas key={index} etiqueta={etiqueta} item={item} />
        ))}
        <EnlacesHacia path={path} />
        {enlacesDesde.map((enlace, index) => (
          <Badge color="info" key={index}>
            <Tooltip
              content={
                <>
                  {"por " + enlace.autor}
                  <br />
                  {"en " + extractDomain(enlace.hacia)}
                </>
              }
            >
              <span className="flex gap-1">
                <a href={enlace.hacia} target="_blank" rel="noreferrer">
                  {enlace.etiqueta}
                  {enlacesDesde.length > 1 ? " " + (index + 1) : ""}
                </a>
                <CgExternal size={16} />
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
              (art.data as CommonData).etiquetas.includes(props.etiqueta)
          )
          .map((articulo, index) => {
            return (
              <div key={index}>
                <a
                  className="no-underline hover:underline font-normal"
                  href={"/#" + getItemFragmentoId(articulo)}
                >{`${getItemLabel(articulo)} sobre ${
                  (articulo.data as CommonData).sobre
                }`}</a>
              </div>
            );
          })}
      </Dropdown>
    </Badge>
  );
}
