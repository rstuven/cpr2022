import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { getItemsOfType } from "lib/helpers";
import TitleCase from "./TitleCase";

export default function Transitorias() {
  const path = "transitorias";
  return (
    <>
      <h2 data-hash={path} className="text-center mt-1 rounded">
        <HashLink hash={path} anchor="apartado" />{" "}
        <TitleCase lowercaseClass="text-lg" text="Disposiciones Transitorias" />
      </h2>
      {getItemsOfType("transitoria").map((item) => (
        <Transitoria key={item.oid} item={item} />
      ))}
    </>
  );
}
