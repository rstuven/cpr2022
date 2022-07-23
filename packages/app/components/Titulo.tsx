import { Titulo as TituloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import Articulos from "./Articulos";
import HashLink from "./HashLink";

type TituloProps = TituloSchema & { path: string };
export default function Titulo(titulo: TituloProps) {
  const [hash, _] = useHashPath();
  return (
    <div>
      <a id={titulo.path} />
      <h3 className={titulo.path == hash ? "bg-amber-100" : undefined}>
        <HashLink hash={titulo.path} anchor /> {titulo.titulo}
      </h3>
      {titulo.articulos && <Articulos articulos={titulo.articulos} />}
    </div>
  );
}
