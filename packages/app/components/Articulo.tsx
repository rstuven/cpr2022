import { Badge } from "flowbite-react";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import { HiOutlineChevronDown } from "react-icons/hi";
import VisibilitySensor from "react-visibility-sensor";
import { CommonData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
  ItemFilter,
} from "lib/helpers";
import ItemToolbar from "./ItemToolbar";
import EnlacesHacia from "./EnlacesHacia";
import AudioBadge from "./AudioBadge";
import HoverCard from "./HoverCard";
import EnlacesDesde from "./EnlacesDesde";

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
  return (
    <VisibilitySensor partialVisibility offset={{ top: -800, bottom: -800 }}>
      {(args: { args: any }) =>
        !args.isVisible ? (
          <div
            data-hash={path}
            data-id={path}
            className="border border-solid rounded-lg p-3 pb-0 px-0 mb-3"
          >
            <span className="font-ConvencionFJ flex flex-wrap gap-1 text-base pl-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {getItemLabel(item)}
              <br />
              <br />
            </span>
            {getChildrenOfType(item, "inciso").map((inciso) => (
              <Inciso
                key={inciso.oid}
                item={inciso}
                baseItem={item}
                filter={filter}
              />
            ))}
          </div>
        ) : (
          <div
            data-hash={path}
            className="border border-solid rounded-lg p-3 pb-0 px-0 mb-3"
          >
            <ItemToolbar path={path} item={item} />
            <HashLink
              hash={path}
              anchor="artículo"
              classNameOuter="float-left"
            />
            <span className="font-sans flex flex-wrap gap-1 text-base pl-3">
              <b className="text-black mr-1 font-ConvencionFJ">
                {getItemLabel(item)}
              </b>
              <AudioBadge fragmentoId={path} />
              <Badge color="purple"> {firstToUpperCase(data.sobre)}</Badge>
              {data.etiquetas.map((etiqueta) => (
                <BadgeEtiquetas
                  key={etiqueta}
                  etiqueta={etiqueta}
                  item={item}
                />
              ))}
              <EnlacesHacia path={path} />
              <EnlacesDesde path={path} />
            </span>
            {getChildrenOfType(item, "inciso").map((inciso) => (
              <Inciso
                key={inciso.oid}
                item={inciso}
                baseItem={item}
                filter={filter}
              />
            ))}
          </div>
        )
      }
    </VisibilitySensor>
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
      <HoverCard
        width={330}
        openDelay={600}
        className="cursor-pointer"
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
            {etiquetas.map((articulo) => {
              return (
                <div key={articulo.oid}>
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
