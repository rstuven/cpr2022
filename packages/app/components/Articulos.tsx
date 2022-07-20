import { Articulo as ArticuloSchema } from "cpr2022-data/src/types/schema";
import Articulo from "./Articulo";

type ArticulosProps = {
  articulos: ReadonlyArray<ArticuloSchema>;
};

export default function Articulos(props: ArticulosProps) {
  return (
    <>
      {props.articulos.map((articulo) => (
        <Articulo key={articulo.articulo} {...articulo} />
      ))}
    </>
  );
}
