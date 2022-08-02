import React from "react";
import { Badge } from "flowbite-react";
import { ItemObject, CommonData } from "cpr2022-data/src/types/schemaShallow";
import {
  firstToUpperCase,
  getChildrenOfType,
  getItemFragmentoId,
  getItemLabel,
  ItemFilter,
} from "lib/helpers";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import ItemToolbar from "./ItemToolbar";
import AudioBadge from "./AudioBadge";

export default React.memo(Transitoria);

function Transitoria({
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
    <div data-hash={path} className="border border-solid rounded-md p-3 mb-3">
      <ItemToolbar path={path} item={item} />
      <span className="font-sans flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor="disposición transitoria" />{" "}
        <b className="text-black mx-1 font-ConvencionFJ">
          {getItemLabel(item)}
        </b>
        <AudioBadge fragmentoId={path} />
        {data.sobre && (
          <Badge color="purple"> {firstToUpperCase(data.sobre)}</Badge>
        )}
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
