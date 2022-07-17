import { Inciso as IncisoSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import styles from "../styles/Home.module.css";
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
    <div className={path == hash ? styles.incisoHighlighted : styles.inciso}>
      <a id={path} />
      <span className={styles.path}>
        <HashLink hash={path}>¶</HashLink>
      </span>{" "}
      <b>{bullet}</b>
      {inciso.texto}
      {inciso.incisos?.map((subinciso, index) => (
        <Inciso key={index} {...subinciso} path={path} />
      ))}
    </div>
  );
}
