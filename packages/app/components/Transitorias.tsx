import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { getItemsOfType, isFragmentoIdMatch } from "lib/helpers";

export default function Transitorias() {
  const [hash, _] = useHashPath();
  const path = "transitorias";
  const isHighlighted = isFragmentoIdMatch(path, hash);
  return (
    <>
      <h2 className={isHighlighted ? "bg-amber-100 rounded" : undefined}>
        <HashLink hash={path} anchor /> Disposiciones Transitorias
      </h2>
      {getItemsOfType("transitoria").map((item) => (
        <Transitoria key={item.oid} item={item} />
      ))}
    </>
  );
}
