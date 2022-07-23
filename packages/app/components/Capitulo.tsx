import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { useHashPath } from "hooks/useHash";
import { getChildrenOfType, getItemFragmentoId } from "lib/helpers";
import Titulo from "./Titulo";
import HashLink from "./HashLink";
import Articulo from "./Articulo";

export default function Capitulo({ item }: { item: ItemObject }) {
  const [hash, _] = useHashPath();
  const path = getItemFragmentoId(item);
  const isHighlighted = path == hash;
  return (
    <div className="">
      <a data-id={path} />
      <h2
        className={
          "text-center mt-1 " + (isHighlighted ? "bg-amber-100 rounded" : "")
        }
      >
        <HashLink hash={path} anchor visible={!isHighlighted} />{" "}
        <TitleCase text={"Capítulo " + item.key} />
        <br />
        <TitleCase text={item.label ?? ""} />
      </h2>
      {getChildrenOfType(item, "articulo").map((item) => (
        <Articulo key={item.oid} item={item} />
      ))}
      {getChildrenOfType(item, "titulo").map((child, tituloIndex) => (
        <Titulo
          key={tituloIndex}
          item={child}
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
