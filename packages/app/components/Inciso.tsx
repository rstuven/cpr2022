import { ItemObject } from "cpr2022-data/src/types/schemaShallow"
import { useHashPath } from "hooks/useHash";
import { getChildrenOfType, getIncisoBullet } from "lib/helpers";
import HashLink from "./HashLink";

type IncisoProps = { path: string; item: ItemObject, baseItem: ItemObject };

export default function Inciso(props: IncisoProps) {
  const [hash, _] = useHashPath();
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = props.path + "." + (props.item.key ?? "");
  const isHighlighted = path == hash;
  return (
    <div className={"mt-2 leading-6 " + (isHighlighted ? " bg-amber-100" : "")}>
      <a data-id={path} />
      <HashLink hash={path} anchor visible={!isHighlighted} /> <b>{bullet}</b>
      {props.item.content}
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso key={index} item={subinciso} baseItem={props.baseItem} path={path} />
      ))}
    </div>
  );
}
