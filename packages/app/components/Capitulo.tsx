import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import Articulos from "./Articulos";
import HashLink from "./HashLink";
import Titulo from "./Titulo";

export default function Capitulo(capitulo: CapituloSchema) {
  const [hash, _] = useHashPath();
  const path = "cap:" + capitulo.numero;
  return (
    <div className="">
      <a id={path} />
      <h2 className={path == hash ? "bg-amber-100" : ""}>
        <HashLink hash={path}>¶</HashLink> Capítulo {capitulo.capitulo}{" "}
        {capitulo.nombre}
      </h2>
      {capitulo.articulos && <Articulos articulos={capitulo.articulos} />}
      {capitulo.titulos?.map((titulo, tituloIndex) => (
        <Titulo
          key={tituloIndex}
          {...titulo}
          path={`${path}.${tituloIndex + 1}`}
        />
      ))}
    </div>
  );
}