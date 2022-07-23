import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { getChildrenOfType } from "lib/helpers";
import Articulo from "./Articulo";
import HashLink from "./HashLink";

type TituloProps = { item: ItemObject; path: string };

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h3 data-hash={props.path} className="text-center rounded">
        <HashLink hash={props.path} anchor="título" /> {props.item.label}
      </h3>
      {getChildrenOfType(props.item, "articulo").map((item) => (
        <Articulo key={item.oid} item={item} />
      ))}
    </div>
  );
}
