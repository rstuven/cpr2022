import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

export default function Articulo(articulo: ArticuloSchema) {
  const path = "art:" + articulo.articulo;
  const [hash, _] = useHashPath();
  return (
    <div
      className={
        "border border-solid rounded-md p-3 mb-3" +
        (path == hash ? " bg-amber-100" : "")
      }
    >
      <a id={path} />
      <div>
        <HashLink hash={path}>¶</HashLink> <b>Artículo {articulo.articulo}</b>
      </div>
      {articulo.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
