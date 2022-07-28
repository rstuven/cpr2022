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

export default function Transitoria({
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
      <h3 className="my-0 rounded">
        <HashLink hash={path} anchor="disposición transitoria" />{" "}
        {getItemLabel(item)}{" "}
        {data.sobre && (
          <span className="font-sans rounded-md text-sm font-normal  bg-gray-300 text-black px-2 py-1">
            {firstToUpperCase(data.sobre)}
          </span>
        )}
      </h3>

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
