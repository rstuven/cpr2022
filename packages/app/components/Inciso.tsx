import { Enlace, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import { HiOutlineExternalLink } from "react-icons/hi";
import extractDomain from "extract-domain";
import {
  getChildrenOfType,
  getEnlacesDesde,
  getIncisoBullet,
  getItemFragmentoId,
  ItemFilter,
  parseFragmento,
} from "lib/helpers";
import { AnchorHTMLAttributes } from "react";
import HashLink from "./HashLink";
import Tooltip from "./Tooltip";
import EnlacesHacia from "./EnlacesHacia";
import FragmentoTooltipContent from "./FragmentoTooltipContent";

type IncisoProps = {
  item: ItemObject;
  baseItem: ItemObject;
  filter: ItemFilter;
};

export default function Inciso(props: IncisoProps) {
  if (
    props.filter.oids.length > 0 &&
    !props.filter.oids.includes(props.item.oid)
  ) {
    return null;
  }
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = getItemFragmentoId(props.item);
  const enlaces = getEnlacesDesde(path).filter((e) => e.texto);
  const injections: Injection[] = enlaces.map(
    (e) => ({ text: e.texto, value: e, render: renderEnlace } as Injection)
  );
  if (props.filter.text) {
    injections.push({
      text: props.filter.text,
      value: props.filter.text,
      render: renderHighlight,
    });
  }
  return (
    <div data-hash={path} className="mt-2 leading-6 rounded">
      <HashLink hash={path} anchor="inciso" /> <b>{bullet}</b>
      {inject(props.item.content ?? "", injections)}
      <div className="flex gap-1">
        <EnlacesHacia path={path} />
      </div>
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso
          key={index}
          item={subinciso}
          baseItem={props.baseItem}
          filter={props.filter}
        />
      ))}
    </div>
  );
}
interface Injection {
  text: string;
  value: any;
  render: (value: any, key: number) => JSX.Element;
}

const renderHighlight = (text: string, key: number): JSX.Element => {
  return (
    <span key={key} className="bg-amber-400">
      {text}
    </span>
  );
};

const renderEnlace = (enlace: Enlace, key: number): JSX.Element => {
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
};

function tooltipContentEnlace(enlace: Enlace) {
  return (
    <div className="max-w-md font-sans">
      {enlace.etiqueta && <div>{enlace.etiqueta}</div>}
      <div className="flex">en {extractDomain(enlace.hacia)}</div>
    </div>
  );
}

function inject(text: string, injections: Injection[]) {
  if (text == "") return null;
  let key = 0;
  let results: (string | JSX.Element)[] = [text];
  injections.forEach((injection) => {
    results = results.flatMap((result) => {
      if (typeof result != "string") {
        return [result];
      }
      return result
        .split(injection.text as string)
        .flatMap((part, i) => [
          i != 0 ? injection.render(injection.value, key++) : undefined,
          part,
        ])
        .filter((x) => !!x) as (string | JSX.Element)[];
    });
  });
  return results;
}
