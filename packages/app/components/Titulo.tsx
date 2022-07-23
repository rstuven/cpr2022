import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { useHashPath } from "hooks/useHash";
import { getChildrenOfType, isFragmentoIdMatch } from "lib/helpers";
import Articulo from "./Articulo";
import HashLink from "./HashLink";

type TituloProps = { item: ItemObject; path: string };

export default function Titulo(props: TituloProps) {
  const [hash, _] = useHashPath();
  const isHighlighted = isFragmentoIdMatch(props.path, hash);
  return (
    <div>
      <h3 className={isHighlighted ? "bg-amber-100 rounded" : ""}>
        <HashLink hash={props.path} anchor visible={!isHighlighted} />{" "}
        {props.item.label}
      </h3>
      {getChildrenOfType(props.item, "articulo").map((item) => (
        <Articulo key={item.oid} item={item} />
      ))}
    </div>
  );
}
