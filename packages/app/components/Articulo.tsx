import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import styles from "../styles/Home.module.css";
import HashLink from "./HashLink"
import Inciso from "./Inciso";

export default function Articulo(articulo: ArticuloSchema) {
  const path = "art:" + articulo.articulo;
  const [hash, _] = useHashPath();
  return (
    <div
      className={path == hash ? styles.articuloHighlighted : styles.articulo}
    >
      <a id={path} />
      <div>
        <span className={styles.path}>
          <HashLink hash={path}>¶</HashLink>
        </span>{" "}
        <b>Artículo {articulo.articulo}</b>
      </div>
      {articulo.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
