import {
  Enlace,
  ItemObject,
} from "cpr2022-data/src/types/schemaShallow";
import { HiOutlineExternalLink } from "react-icons/hi";
import extractDomain from "extract-domain";
import {
  getChildrenOfType,
  getEnlacesDesde,
  getIncisoBullet,
  getItemFragmentoId,
  parseFragmento,
} from "lib/helpers";
import { AnchorHTMLAttributes } from "react";
import HashLink from "./HashLink";
import Tooltip from "./Tooltip";
import EnlacesHacia from "./EnlacesHacia";
import FragmentoTooltipContent from "./FragmentoTooltipContent";

type IncisoProps = { item: ItemObject; baseItem: ItemObject };

export default function Inciso(props: IncisoProps) {
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = getItemFragmentoId(props.item);
  const enlaces = getEnlacesDesde(path).filter((e) => e.texto);
  return (
    <div data-hash={path} className="mt-2 leading-6 rounded">
      <HashLink hash={path} anchor="inciso" /> <b>{bullet}</b>
      {injectEnlaces(props.item.content ?? "", enlaces, (enlace, key) => {
        let content: JSX.Element;
        let attrs: AnchorHTMLAttributes<HTMLAnchorElement>;
        let icon: JSX.Element | undefined = undefined;

        const fragmento = parseFragmento(enlace.hacia);
        if (fragmento && "inciso" in fragmento) {
          content = <FragmentoTooltipContent fragmento={fragmento} />;
          attrs = {
            href: `/#${enlace.hacia}`,
          };
        } else {
          content = tooltipContentEnlace(enlace);
          attrs = {
            href: enlace.hacia,
            target: "_blank",
            rel: "noreferrer",
          };
          icon = <HiOutlineExternalLink className="inline" size={14} />;
        }

        return (
          <a key={key} className="text-blue-800" {...attrs}>
            <Tooltip placement="bottom" content={content}>
              {enlace.texto} {icon}
            </Tooltip>
          </a>
        );
      })}
      <div className="flex gap-1">
        <EnlacesHacia path={path} />
      </div>
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso key={index} item={subinciso} baseItem={props.baseItem} />
      ))}
    </div>
  );
}

function tooltipContentEnlace(enlace: Enlace) {
  return (
    <div className="max-w-md font-sans">
      {enlace.etiqueta && <div>{enlace.etiqueta}</div>}
      <div className="flex">en {extractDomain(enlace.hacia)}</div>
    </div>
  );
}

function injectEnlaces(
  text: string,
  enlaces: Enlace[],
  render: (enlance: Enlace, key: number) => JSX.Element | undefined
) {
  if (text == "") return null;
  let key = 0;
  let results: (string | JSX.Element)[] = [text];
  enlaces.forEach((enlace) => {
    results = results.flatMap((result) => {
      if (typeof result != "string") {
        return [result];
      }
      return result
        .split(enlace.texto as string)
        .flatMap((part, i) => [
          i != 0 ? render(enlace, key++) : undefined,
          part,
        ])
        .filter((x) => !!x) as (string | JSX.Element)[];
    });
  });
  return results;
}
