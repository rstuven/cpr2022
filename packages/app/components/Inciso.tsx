import { Inciso as IncisoSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import HashLink from "./HashLink";

type IncisoProps = IncisoSchema & { path: string };
export default function Inciso(inciso: IncisoProps) {
  const [hash, _] = useHashPath();
  const bullet = inciso.inciso
    ? "\u00a0".repeat(inciso.nivel * 4) +
      inciso.inciso +
      ".))"[inciso.nivel - 1] +
      " "
    : "";
  const path = inciso.path + "." + (inciso.inciso ?? "");
  return (
    <div className={"mt-2" + (path == hash ? " bg-amber-100" : "")}>
      <a id={path} />
      <HashLink hash={path}>¶</HashLink> <b>{bullet}</b>
      {inciso.texto}
      {inciso.incisos?.map((subinciso, index) => (
        <Inciso key={index} {...subinciso} path={path} />
      ))}
    </div>
  );
}
