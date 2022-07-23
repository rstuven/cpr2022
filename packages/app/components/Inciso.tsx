import { Inciso as IncisoSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import { getIncisoBullet } from "lib/helpers";
import HashLink from "./HashLink";

type IncisoProps = IncisoSchema & { path: string };
export default function Inciso(inciso: IncisoProps) {
  const [hash, _] = useHashPath();
  const bullet = getIncisoBullet(inciso);
  const path = inciso.path + "." + (inciso.inciso ?? "");
  const isHighlighted = path == hash;
  return (
    <div className={"mt-2 leading-6 " + (isHighlighted ? " bg-amber-100" : "")}>
      <a data-id={path} />
      <HashLink hash={path} anchor visible={!isHighlighted} /> <b>{bullet}</b>
      {inciso.texto}
      {inciso.incisos?.map((subinciso, index) => (
        <Inciso key={index} {...subinciso} path={path} />
      ))}
    </div>
  );
}
