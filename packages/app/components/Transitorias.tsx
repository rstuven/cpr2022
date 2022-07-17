import React from "react";
import styles from "../styles/Home.module.css";

import { Transitoria as TransitoriaSchema } from "cpr2022-data/src/types/schema";
import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";

type TransitoriasProps = {
  transitorias: ReadonlyArray<TransitoriaSchema>;
};

export default function Transitorias({ transitorias }: TransitoriasProps) {
  const [hash, _] = useHashPath();
  const path = "dt";
  return (
    <>
      <a id={path}></a>
      <h2 className={path == hash ? styles.highlighted : undefined}>
        <span className={styles.path}>
          <HashLink hash={path}>¶</HashLink>
        </span>{" "}
        Disposiciones transitorias
      </h2>
      {transitorias.map((transitoria: TransitoriaSchema) => (
        <Transitoria key={transitoria.transitoria} {...transitoria} />
      ))}
    </>
  );
}
