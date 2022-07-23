import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { getItemsOfType } from "lib/helpers";

export default function Transitorias() {
  const path = "transitorias";
  return (
    <>
      <h2 data-hash={path} className="rounded">
        <HashLink hash={path} anchor="apartado" /> Disposiciones Transitorias
      </h2>
      {getItemsOfType("transitoria").map((item) => (
        <Transitoria key={item.oid} item={item} />
      ))}
    </>
  );
}
