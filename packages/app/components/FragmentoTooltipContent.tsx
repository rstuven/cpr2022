import { CommonData } from "cpr2022-data/src/types/schemaShallow";
import {
  getIncisoBullet,
  getItemByOid,
  getItemLabel,
  FragmentoContext,
} from "lib/helpers";

export default function FragmentoTooltipContent({
  fragmento,
}: {
  fragmento: FragmentoContext;
}) {
  if (!("inciso" in fragmento)) return null;

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

  const inciso = fragmento.inciso;

  let incisoLabel = inciso && getIncisoBullet(inciso, parent, false);

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
