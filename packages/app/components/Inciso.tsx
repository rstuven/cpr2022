import { ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getIncisoBullet,
  getItemFragmentoId,
} from "lib/helpers";
import HashLink from "./HashLink";

type IncisoProps = { item: ItemObject; baseItem: ItemObject };

export default function Inciso(props: IncisoProps) {
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = getItemFragmentoId(props.item);
  return (
    <div data-hash={path} className="mt-2 leading-6 rounded">
      <HashLink hash={path} anchor="inciso" /> <b>{bullet}</b>
      {props.item.content}
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso key={index} item={subinciso} baseItem={props.baseItem} />
      ))}
    </div>
  );
}
