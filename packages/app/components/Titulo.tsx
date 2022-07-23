import { Titulo as TituloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import Articulos from "./Articulos";
import HashLink from "./HashLink";

type TituloProps = TituloSchema & { path: string };
export default function Titulo(titulo: TituloProps) {
  const [hash, _] = useHashPath();
  const isHighlighted = titulo.path == hash;
  return (
    <div>
      <a data-id={titulo.path} />
      <h3 className={isHighlighted ? "bg-amber-100 rounded" : ""}>
        <HashLink hash={titulo.path} anchor visible={!isHighlighted} />{" "}
        {titulo.titulo}
      </h3>
      {titulo.articulos && <Articulos articulos={titulo.articulos} />}
    </div>
  );
}
