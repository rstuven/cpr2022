import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { getChildrenOfType, getItemFragmentoId } from "lib/helpers";
import Titulo from "./Titulo";
import HashLink from "./HashLink";
import Articulo from "./Articulo";
import TitleCase from "./TitleCase";

export default function Capitulo({ item }: { item: ItemObject }) {
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
        <Articulo key={item.oid} item={item} />
      ))}
      {getChildrenOfType(item, "titulo").map((child, tituloIndex) => (
        <Titulo
          key={tituloIndex}
          item={child}
          path={`${path}.${tituloIndex + 1}`}
        />
      ))}
    </div>
  );
}
