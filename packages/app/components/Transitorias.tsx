import React from "react";

import { Transitoria as TransitoriaSchema } from "cpr2022-data/src/types/schema";
import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";

type TransitoriasProps = {
  transitorias: ReadonlyArray<TransitoriaSchema>;
};

export default function Transitorias(props: TransitoriasProps) {
  const [hash, _] = useHashPath();
  const path = "dt";
  return (
    <>
      <a id={path}></a>
      <h2 className={path == hash ? "bg-amber-100" : undefined}>
        <HashLink hash={path}>¶</HashLink> Disposiciones Transitorias
      </h2>
      {props.transitorias.map((transitoria: TransitoriaSchema) => (
        <Transitoria key={transitoria.transitoria} {...transitoria} />
      ))}
    </>
  );
}
