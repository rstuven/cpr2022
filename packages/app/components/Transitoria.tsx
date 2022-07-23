import { Transitoria as TransitoriaSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import { firstToUpperCase } from "lib/helpers";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import Pagina from "./Pagina";

export default function Transitoria(transitoria: TransitoriaSchema) {
  const [hash, _] = useHashPath();
  const path = "dt:" + transitoria.numero;
  const isHighlighted = path == hash;
  return (
    <div className="border border-solid rounded-md p-3 mb-3">
      <a data-id={path} />
      <div className="float-right ml-1">
        <Pagina pagina={transitoria.pagina} />
      </div>
      <h3 className={"my-0" + (isHighlighted ? " bg-amber-100 rounded" : "")}>
        <HashLink hash={path} anchor visible={!isHighlighted} />{" "}
        {transitoria.transitoria}{" "}
        {transitoria.sobre && (
          <span className="font-sans rounded-md text-sm font-normal  bg-gray-300 text-black px-2 py-1">
            {firstToUpperCase(transitoria.sobre)}
          </span>
        )}
      </h3>

      {transitoria.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
