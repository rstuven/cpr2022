import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { getChildrenOfType, getItemFragmentoId, ItemFilter } from "lib/helpers";
import Titulo from "./Titulo";
import HashLink from "./HashLink";
import Articulo from "./Articulo";
import TitleCase from "./TitleCase";

export default function Capitulo({
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
  return (
    <div>
      <h2 data-hash={path} className="text-center mt-1 rounded">
        <HashLink hash={path} anchor="capítulo" />{" "}
        <TitleCase lowercaseClass="text-lg" text={"Capítulo " + item.key} />
        <br />
        <TitleCase lowercaseClass="text-lg" text={item.label ?? ""} />
      </h2>
      {getChildrenOfType(item, "articulo").map((item) => (
        <Articulo key={item.oid} item={item} filter={filter} />
      ))}
      {getChildrenOfType(item, "titulo").map((child, tituloIndex) => (
        <Titulo
          key={tituloIndex}
          item={child}
          path={`${path}.${tituloIndex + 1}`}
          filter={filter}
        />
      ))}
    </div>
  );
}
