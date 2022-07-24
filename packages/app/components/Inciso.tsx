import { Enlace, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getEnlacesDesde,
  getIncisoBullet,
  getItemFragmentoId,
} from "lib/helpers";
import HashLink from "./HashLink";

type IncisoProps = { item: ItemObject; baseItem: ItemObject };

export default function Inciso(props: IncisoProps) {
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = getItemFragmentoId(props.item);
  const enlaces = getEnlacesDesde(path, false).filter((e) => e.texto);
  return (
    <div data-hash={path} className="mt-2 leading-6 rounded">
      <HashLink hash={path} anchor="inciso" /> <b>{bullet}</b>
      <span
        dangerouslySetInnerHTML={{
          __html: addEnlaces(props.item.content ?? "", enlaces),
        }}
      ></span>
      {}
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso key={index} item={subinciso} baseItem={props.baseItem} />
      ))}
    </div>
  );
}

function addEnlaces(text: string, enlaces: Enlace[]) {
  if (text == "") return "";
  let result = text;
  enlaces.forEach((enlace) => {
    const parts = result.split(enlace.texto as string);
    result = parts.join(
      `<a class="text-blue-800" href="/#${enlace.hacia}">${enlace.texto}</a>`
    );
  });
  return result;
}
