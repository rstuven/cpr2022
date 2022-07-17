import React from "react";
import styles from "../styles/Home.module.css";

import { constitucion } from "cpr2022-data";
import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";
import Capitulo from "./Capitulo";
import { useScrollToHash } from "hooks/useScrollToHash";
import Transitorias from "./Transitorias";

export default function Constitucion() {
  useScrollToHash(200);
  return (
    <div className={styles.grid}>
      <p className={styles.description}>{constitucion.preambulo}</p>

      {constitucion.capitulos.map((capitulo: CapituloSchema) => (
        <Capitulo key={capitulo.nombre} {...capitulo} />
      ))}

      <Transitorias transitorias={constitucion.transitorias} />
    </div>
  );
}
