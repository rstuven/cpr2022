import {
  ItemObject,
  TransitoriaData,
} from "cpr2022-data/src/types/schemaShallow";
import {
  firstToUpperCase,
  getChildrenOfType,
  getItemFragmentoId,
} from "lib/helpers";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import Pagina from "./Pagina";

export default function Transitoria({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const transitoria = item.data as TransitoriaData;
  return (
    <div className="border border-solid rounded-md p-3 mb-3">
      <div className="float-right ml-1">
        <Pagina pagina={transitoria.pagina} />
      </div>
      <h3 data-hash={path} className="my-0 rounded">
        <HashLink hash={path} anchor="disposición transitoria" /> {item.key}{" "}
        {transitoria.sobre && (
          <span className="font-sans rounded-md text-sm font-normal  bg-gray-300 text-black px-2 py-1">
            {firstToUpperCase(transitoria.sobre)}
          </span>
        )}
      </h3>

      {getChildrenOfType(item, "inciso").map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} item={inciso} baseItem={item} />
      ))}
    </div>
  );
}
