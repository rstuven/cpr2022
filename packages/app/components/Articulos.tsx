import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import Articulo from "./Articulo";

type ArticulosProps = {
  articulos: ReadonlyArray<ArticuloSchema>;
};

export default function Articulos({ articulos }: ArticulosProps) {
  return (
    <>
      {articulos.map((articulo) => (
        <Articulo key={articulo.articulo} {...articulo} />
      ))}
    </>
  );
}
