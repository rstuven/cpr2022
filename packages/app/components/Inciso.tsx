import {
  Enlace,
  GlossaryEntry,
  ItemObject,
} from "cpr2022-data/src/types/schemaShallow";
import { constitucionShallow as constitucion } from "cpr2022-data";
import { HiOutlineExternalLink } from "react-icons/hi";
import extractDomain from "extract-domain";
import {
  classNames,
  prepareRegex,
  getChildrenOfType,
  getEnlacesDesde,
  getIncisoBullet,
  getItemFragmentoId,
  ItemFilter,
  parseFragmento,
  getCurrentHash,
} from "lib/helpers";
import { AnchorHTMLAttributes, useContext } from "react";
import HashLink from "./HashLink";
import Tooltip from "./Tooltip";
import EnlacesHacia from "./EnlacesHacia";
import FragmentoTooltipContent from "./FragmentoTooltipContent";
import { SmallMediaContext } from "./SmallMediaProvider";
import HoverCard from "./HoverCard";
import VisibilitySensor from "./VisibilitySensor";

type IncisoProps = {
  item: ItemObject;
  baseItem: ItemObject;
  filter: ItemFilter;
};

export default function Inciso(props: IncisoProps) {
  const isSmallMedia = useContext(SmallMediaContext);
  if (
    props.filter.oids.length > 0 &&
    !props.filter.oids.includes(props.item.oid)
  ) {
    return null;
  }

  const bullet = getIncisoBullet(props.item, props.baseItem, !isSmallMedia);
  const indent = isSmallMedia && bullet != "";
  const path = getItemFragmentoId(props.item);

  return (
    <VisibilitySensor
      invisible={<IncisoSimple {...{ path, indent, bullet, ...props }} />}
      visible={<IncisoFull {...{ path, indent, bullet, ...props }} />}
    />
  );
}

type IncisoVariantProps = IncisoProps & {
  path: string;
  indent: boolean;
  bullet: string;
};

function IncisoSimple(props: IncisoVariantProps) {
  return (
    <div
      data-hash={props.path}
      data-id={props.path}
      className={classNames(
        `mt-1 leading-6 rounded-lg pr-2 py-1`,
        props.indent ? "pl-[3.4rem]" : "pl-9",
        props.indent ? "-indent-10" : "-indent-9"
      )}
    >
      &nbsp;&nbsp;&nbsp;
      {props.bullet}
      &nbsp;&nbsp;
      {props.item.content}
      {getChildrenOfType(props.item, "inciso").map((subinciso) => (
        <Inciso
          key={subinciso.oid}
          item={subinciso}
          baseItem={props.baseItem}
          filter={props.filter}
        />
      ))}
    </div>
  );
}

function IncisoFull(props: IncisoVariantProps) {
  const enlaces = getEnlacesDesde(props.path).filter((e) => e.texto);
  const injections: Injection[] = enlaces.map(
    (e) =>
      ({
        text: e.texto,
        value: e,
        ignoreCase: false,
        word: false,
        render: renderEnlace,
      } as Injection)
  );
  if (props.filter.text) {
    injections.push({
      text: props.filter.text,
      value: props.filter.text,
      ignoreCase: true,
      word: false,
      render: renderHighlight,
    });
  }
  const entries = constitucion.glossary.flatMap((entry) =>
    entry.aliases
      .map((alias) => ({ ...entry, search: alias }))
      .concat({ ...entry, search: entry.title })
  );
  entries.sort((a, b) => (a.title.length > b.title.length ? -1 : 1));
  entries.forEach((entry) => {
    injections.push({
      text: entry.search,
      value: entry,
      ignoreCase: entry.ignoreCase,
      word: true,
      render: renderGlossary,
    });
  });
  return (
    <div
      data-hash={props.path}
      className={classNames(
        `mt-1 leading-6 rounded-lg pr-2 py-1`,
        props.indent ? "pl-[3.4rem]" : "pl-9",
        props.indent ? "-indent-10" : "-indent-9",
        getCurrentHash() == props.path && "bg-amber-100"
      )}
    >
      <HashLink
        indent={props.indent}
        hash={props.path}
        anchor={typeof props.item.key == "string" ? "letra" : "inciso"}
      />{" "}
      <b>{props.bullet}</b>
      &nbsp;&nbsp;
      {inject(props.item.content ?? "", injections)}
      <div className="flex gap-1">
        <EnlacesHacia path={props.path} />
      </div>
      {getChildrenOfType(props.item, "inciso").map((subinciso) => (
        <Inciso
          key={subinciso.oid}
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
  ignoreCase: boolean;
  word: boolean;
  render: (value: any, match: string, key: number) => JSX.Element;
}

const renderHighlight = (
  text: string,
  match: string,
  key: number
): JSX.Element => {
  return (
    <span key={key} className="bg-amber-400">
      {match}
    </span>
  );
};

const renderGlossary = (
  entry: GlossaryEntry,
  match: string,
  key: number
): JSX.Element => {
  return (
    <HoverCard
      key={key}
      width={400}
      openDelay={600}
      target={
        <span
          key={key}
          className="underline decoration-2 decoration-dotted decoration-green-500 cursor-default"
          onContextMenu={(e) => e.preventDefault()}
        >
          {match}
        </span>
      }
      dropdown={
        <div className="indent-0 text-sm font-sans flex flex-col gap-2">
          <div className="font-bold">{entry.title}</div>
          <div className="max-w-md italic">{entry.content}</div>
          <div>
            Fuente:{" "}
            <a href={entry.source} target="_blank" rel="noreferrer">
              {entry.author}
            </a>
          </div>
        </div>
      }
    />
  );
};

const renderEnlace = (
  enlace: Enlace,
  match: string,
  key: number
): JSX.Element => {
  let content: JSX.Element;
  let attrs: AnchorHTMLAttributes<HTMLAnchorElement>;
  let icon: JSX.Element | undefined;

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
      const escapedPattern = prepareRegex(injection.text);
      const regexFlags = (injection.ignoreCase ? "i" : "") + "g";
      const matchPattern = injection.word
        ? "\\b" + escapedPattern + "\\b"
        : escapedPattern;

      const matches = result.match(new RegExp(matchPattern, regexFlags));
      if (matches == null) {
        return result;
      }
      const separator = injection.ignoreCase
        ? new RegExp(matchPattern, regexFlags)
        : injection.text;

      return result
        .split(separator)
        .flatMap((part, i) => [
          i != 0
            ? injection.render(injection.value, matches[i - 1], key++)
            : undefined,
          part,
        ])
        .filter((x) => !!x) as (string | JSX.Element)[];
    });
  });
  return results;
}
