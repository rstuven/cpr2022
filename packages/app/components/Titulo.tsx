import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { getChildrenOfType, ItemFilter } from "lib/helpers";
import Articulo from "./Articulo";
import HashLink from "./HashLink";

type TituloProps = { item: ItemObject; path: string, filter: ItemFilter };

export default function Titulo(props: TituloProps) {
  if (props.filter.oids.length > 0 && !props.filter.oids.includes(props.item.oid)) {
    return null;
  }
  return (
    <div>
      <h3 data-hash={props.path} className="text-center rounded">
        <HashLink hash={props.path} anchor="título" /> {props.item.label}
      </h3>
      {getChildrenOfType(props.item, "articulo").map((item) => (
        <Articulo key={item.oid} item={item} filter={props.filter} />
      ))}
    </div>
  );
}
