import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { getItemsOfType, ItemFilter, transitorias } from "lib/helpers";
import TitleCase from "./TitleCase";

export default React.memo(Transitorias);

function Transitorias(props: { filter: ItemFilter }) {
  if (
    props.filter.oids.length > 0 &&
    !props.filter.oids.includes(transitorias.oid)
  ) {
    return null;
  }
  const path = transitorias.type;
  return (
    <>
      <h2 data-hash={path} className="text-center mt-1 rounded">
        <HashLink hash={path} anchor="apartado" />{" "}
        <TitleCase lowercaseClass="text-lg" text={transitorias.label ?? ""} />
      </h2>
      {getItemsOfType("transitoria").map((item) => (
        <Transitoria key={item.oid} item={item} filter={props.filter} />
      ))}
    </>
  );
}
