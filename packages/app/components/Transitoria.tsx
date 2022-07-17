import { Transitoria as TransitoriaSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import styles from "../styles/Home.module.css";
import HashLink from "./HashLink"
import Inciso from "./Inciso"

export default function Transitoria(transitoria: TransitoriaSchema) {
  const [hash, _] = useHashPath();
  const path = "dt:" + transitoria.numero;
  return (
    <div className={styles.articulo}>
      <a id={path} />
      <h2 className={path == hash ? styles.highlighted : undefined}>
        <span className={styles.path}>
          <HashLink hash={path}>¶</HashLink>
        </span>{" "}
        {transitoria.transitoria}
      </h2>
      {transitoria.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
