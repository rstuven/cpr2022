import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";
import { useHashPath } from "hooks/useHash";
import Articulos from "./Articulos";
import HashLink from "./HashLink";
import Titulo from "./Titulo";

export default function Capitulo(capitulo: CapituloSchema) {
  const [hash, _] = useHashPath();
  const path = "cap:" + capitulo.numero;
  const isHighlighted = path == hash;
  return (
    <div className="">
      <a id={path} />
      <h2
        className={
          "text-center " + (isHighlighted ? "bg-amber-100 rounded" : "")
        }
      >
        <HashLink hash={path} anchor visible={!isHighlighted} />{" "}
        <TitleCase text={"Capítulo " + capitulo.capitulo} />
        <br />
        <TitleCase text={capitulo.nombre} />
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

function TitleCase(props: { text: string }) {
  const chars = props.text.split("");
  return (
    <>
      {chars.map((char, index) => {
        return (
          <span key={index} className={isLowerCase(char) ? "text-lg" : ""}>
            {char.toUpperCase()}
          </span>
        );
      })}
    </>
  );
}

function isLowerCase(text: string) {
  return text == text.toLowerCase() && text != text.toUpperCase();
}
