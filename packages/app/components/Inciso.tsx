import {
  CommonData,
  Enlace,
  ItemObject,
} from "cpr2022-data/src/types/schemaShallow";
import {
  ArticuloContext,
  getChildrenOfType,
  getEnlacesDesde,
  getIncisoBullet,
  getItemByOid,
  getItemFragmentoId,
  getItemLabel,
  parseFragmento,
  TransitoriaContext,
} from "lib/helpers";
import HashLink from "./HashLink";
import Tooltip from "./Tooltip";

type IncisoProps = { item: ItemObject; baseItem: ItemObject };

export default function Inciso(props: IncisoProps) {
  const bullet = getIncisoBullet(props.item, props.baseItem);
  const path = getItemFragmentoId(props.item);
  const enlaces = getEnlacesDesde(path, false).filter((e) => e.texto);
  return (
    <div data-hash={path} className="mt-2 leading-6 rounded">
      <HashLink hash={path} anchor="inciso" /> <b>{bullet}</b>
      <>
        {injectEnlaces(props.item.content ?? "", enlaces, (enlace, key) => {
          const fragmento = parseFragmento(enlace.hacia ?? "");
          let content: JSX.Element | undefined;

          if (fragmento && "inciso" in fragmento)
            content = tooltipContent(fragmento);

          if (!content) {
            return undefined;
          }

          return (
            <a key={key} className="text-blue-800" href={`/#${enlace.hacia}`}>
              <Tooltip placement="bottom" content={content}>{enlace.texto}</Tooltip>
            </a>
          );
        })}
      </>
      {getChildrenOfType(props.item, "inciso").map((subinciso, index) => (
        <Inciso key={index} item={subinciso} baseItem={props.baseItem} />
      ))}
    </div>
  );
}

function tooltipContent(fragmento: ArticuloContext | TransitoriaContext) {
  let parent =
    "articulo" in fragmento ? fragmento.articulo : fragmento.transitoria;

  let container =
    "articulo" in fragmento
      ? getItemLabel(fragmento.capitulo)
      : "Disposiciones Transitorias";

  let titulo: string | undefined;
  if ("titulo" in fragmento && fragmento.titulo) {
    titulo = getItemLabel(fragmento.titulo);
  }

  let parentLabel =
    "articulo" in fragmento
      ? getItemLabel(fragmento.articulo)
      : getItemLabel(fragmento.transitoria);

  let sobre =
    "articulo" in fragmento
      ? (fragmento.articulo.data as CommonData).sobre
      : (fragmento.transitoria.data as CommonData).sobre;

  const inciso = "inciso" in fragmento ? fragmento.inciso : undefined;

  let incisoLabel =
    inciso && getIncisoBullet(inciso as ItemObject, parent, false);

  let incisoContent = inciso && incisoLabel + " " + inciso.content;

  if (inciso) {
    const parentInciso = getItemByOid(inciso.parent as string);
    if (parentInciso.type == "inciso") {
      incisoContent = `${parentInciso.content} ${
        inciso.key == "a" ? "" : "(...)"
      } ${incisoContent}`;
    }
  }

  return (
    <div className="max-w-md font-sans">
      <div>{container}</div>
      {titulo && <div>{titulo}</div>}
      <div>
        {parentLabel} {sobre && ` (sobre ${sobre})`}
        {incisoContent && ":"}
      </div>
      {incisoContent && (
        <div className="mt-2">
          &quot;
          <span className="font-ConvencionFJ">{incisoContent}</span>
          &quot;
        </div>
      )}
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
