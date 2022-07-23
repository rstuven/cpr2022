import { Transitoria as TransitoriaSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

export default function Transitoria(transitoria: TransitoriaSchema) {
  const [hash, _] = useHashPath();
  const path = "dt:" + transitoria.numero;
  return (
    <div className="border border-solid rounded-md p-3 mb-3">
      <a id={path} />
      <h3 className={"my-0" + (path == hash ? " bg-amber-100" : "")}>
        <HashLink hash={path} anchor /> {transitoria.transitoria}
      </h3>
      {transitoria.incisos.map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} {...inciso} path={path} />
      ))}
    </div>
  );
}
