import React from "react";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { getChildrenOfType, getItemFragmentoId, ItemFilter } from "lib/helpers";
import useIsServer from "hooks/useIsServer";
import Titulo from "./Titulo";
import HashLink from "./HashLink";
import Articulo from "./Articulo";
import TitleCase from "./TitleCase";

export default React.memo(Capitulo);

function Capitulo({ item, filter }: { item: ItemObject; filter: ItemFilter }) {
  const isServer = useIsServer();
  if (filter.oids.length > 0 && !filter.oids.includes(item.oid)) {
    return null;
  }
  const path = getItemFragmentoId(item);
  const articulos = getChildrenOfType(item, "articulo");
  return (
    <div>
      <h2 data-hash={path} className="text-center mt-1 rounded">
        <HashLink hash={path} anchor="capítulo" />{" "}
        <TitleCase lowercaseClass="text-lg" text={"Capítulo " + item.key} />
        <br />
        <TitleCase lowercaseClass="text-lg" text={item.label ?? ""} />
      </h2>
      {isServer ? (
        articulos[0] && <Articulo item={articulos[0]} filter={filter} />
      ) : (
        <>
          {articulos.map((item) => (
            <Articulo key={item.oid} item={item} filter={filter} />
          ))}
          {getChildrenOfType(item, "titulo").map((child, tituloIndex) => (
            <Titulo
              key={child.oid}
              item={child}
              path={`${path}.${tituloIndex + 1}`}
              filter={filter}
            />
          ))}
        </>
      )}
    </div>
  );
}
