import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import { firstToUpperCase, getArticuloLabel } from "lib/helpers";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import Pagina from "./Pagina";

export default function Articulo(articulo: ArticuloSchema) {
  const path = "art:" + articulo.articulo;
  const [hash, _] = useHashPath();
  const referencias = articulo.referencias?.filter((r) => !r.incisos);
  const isHighlighted = path == hash;
  return (
    <div
      className={
        "border border-solid rounded-md p-3 mb-3" +
        (isHighlighted ? " bg-amber-100" : "")
      }
    >
      <a id={path} />
      <div className="float-right">
        &nbsp;
        <Pagina pagina={articulo.pagina} />
      </div>
      <div>
        <HashLink hash={path} anchor visible={!isHighlighted} />{" "}
        <b className="text-black">{getArticuloLabel(articulo)}</b>{" "}
        <span className="font-sans rounded-md bg-gray-300 text-black px-2 py-1">
          {firstToUpperCase(articulo.sobre)}
        </span>{" "}
        {articulo.etiquetas.map((etiqueta, index) => (
          <span key={index}>
            {" "}
            <span className="font-sans rounded-md bg-orange-400 text-white px-2 py-1 mb-1">
              {etiqueta.replace(/ /g, "\u00a0")}
            </span>
          </span>
        ))}{" "}
        {referencias?.map((referencia, index) => (
          <span key={index}>
            {" "}
            <a
              className="rounded-md bg-blue-700 text-white px-2 py-1 mb-1"
              href={referencia.url}
              target="_blank"
              rel="noreferrer"
              title={"por " + referencia.autor}
            >
              {referencia.etiqueta}
              {referencias.length > 1 ? " " + (index + 1) : ""}
            </a>
          </span>
        ))}
      </div>
      {articulo.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
