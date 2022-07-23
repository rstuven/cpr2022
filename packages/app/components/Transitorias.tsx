import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { getItemsOfType } from "lib/helpers";

export default function Transitorias() {
  const [hash, _] = useHashPath();
  const path = "dt";
  return (
    <>
      <a data-id={path}></a>
      <h2 className={path == hash ? "bg-amber-100 rounded" : undefined}>
        <HashLink hash={path} anchor /> Disposiciones Transitorias
      </h2>
      {getItemsOfType("transitoria").map((item) => (
        <Transitoria key={item.oid} item={item} />
      ))}
    </>
  );
}
