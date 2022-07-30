import { Badge } from "flowbite-react";
import extractDomain from "extract-domain";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

import { CgExternal } from "react-icons/cg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HoverCard } from "@mantine/core";
import { CommonData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import useRenderOnActivation from "hooks/useRenderOnActivation";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
  getEnlacesDesde,
  ItemFilter,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import ItemToolbar from "./ItemToolbar";
import EnlacesHacia from "./EnlacesHacia";
import AudioBadge from "./AudioBadge";

export default function Articulo({
  item,
  filter,
}: {
  item: ItemObject;
  filter: ItemFilter;
}) {
  if (filter.oids.length > 0 && !filter.oids.includes(item.oid)) {
    return null;
  }
  const path = getItemFragmentoId(item);
  const data = item.data as CommonData;
  const enlacesDesde = getEnlacesDesde(path, true);
  return (
    <div
      data-hash={path}
      className="border border-solid rounded-lg p-3 pb-0 px-0 mb-3"
    >
      <ItemToolbar path={path} item={item} />
      <HashLink hash={path} anchor="artículo" classNameOuter="float-left" />
      <span className="font-sans flex flex-wrap gap-1 text-base pl-3">
        <b className="text-black mr-1 font-ConvencionFJ">
          {getItemLabel(item)}
        </b>
        <AudioBadge fragmentoId={path} />
        <Badge color="purple"> {firstToUpperCase(data.sobre)}</Badge>
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
        <Inciso
          key={incisoIndex}
          item={inciso}
          baseItem={item}
          filter={filter}
        />
      ))}
    </div>
  );
}

function BadgeEtiquetas(props: {
  etiqueta: string;
  item: ItemObject;
}): JSX.Element {
  const label = props.etiqueta.replace(/ /g, "\u00a0");
  const etiquetas = getItemsOfType("articulo").filter(
    (art) =>
      art.oid != props.item.oid &&
      (art.data as CommonData).etiquetas.includes(props.etiqueta)
  );
  if (etiquetas.length == 0) {
    return <Badge color="pink">{label}</Badge>;
  }
  return (
    <Badge color="pink">
      <HoverCardWrapper
        target={
          <div className="cursor-pointer">
            <div className="flex">
              {label}
              <HiOutlineChevronDown size={5} className="ml-1 h-4 w-4" />
            </div>
          </div>
        }
        dropdown={
          <div className="max-h-[202px] overflow-y-scroll overscroll-contain">
            {etiquetas.map((articulo, index) => {
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
          </div>
        }
      />
    </Badge>
  );
}

// Wrap to defer dropdown rendering and improve perfomance
function HoverCardWrapper({
  target,
  dropdown,
}: {
  target: JSX.Element;
  dropdown: JSX.Element;
}) {
  const { render, onMouseOver, onTouchMove, onTouchEnd, onFocus } =
    useRenderOnActivation();

  return render ? (
    <HoverCard
      width={330}
      shadow="md"
      withArrow
      openDelay={200}
      closeDelay={400}
      initiallyOpened
    >
      <HoverCard.Target>{target}</HoverCard.Target>
      <HoverCard.Dropdown>{dropdown}</HoverCard.Dropdown>
    </HoverCard>
  ) : (
    <div
      tabIndex={0}
      className="cursor-pointer"
      onMouseOver={onMouseOver}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onFocus={onFocus}
    >
      {target}
    </div>
  );
}
