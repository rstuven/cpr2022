import React from "react";
import { Badge } from "flowbite-react";
import { CgExternal } from "react-icons/cg";
import { getEnlacesDesde } from "lib/helpers";
import Tooltip from "./Tooltip";
import extractDomain from "extract-domain";

export default React.memo(EnlacesDesde);

function EnlacesDesde(props: { path: string }) {
  const enlaces = getEnlacesDesde(props.path, true);
  const etiquetasCount: Record<string, number> = {};
  const etiquetasIndex: Record<string, number> = {};
  enlaces.forEach((enlace) => {
    const etiqueta = enlace.etiqueta ?? "";
    etiquetasCount[etiqueta] = (etiquetasCount[etiqueta] ?? 0) + 1;
    etiquetasIndex[etiqueta] = 1;
  });
  return (
    <>
      {enlaces.map((enlace, index) => (
        <Badge color="info" key={index}>
          <Tooltip
            content={
              <>
                {enlace.autor && (
                  <>
                    por {enlace.autor}
                    <br />
                  </>
                )}
                {"en " + extractDomain(enlace.hacia)}
              </>
            }
          >
            <span className="flex gap-1">
              <a href={enlace.hacia} target="_blank" rel="noreferrer">
                {enlace.etiqueta}
                {etiquetasCount[enlace.etiqueta ?? ""] > 1
                  ? " " + etiquetasIndex[enlace.etiqueta ?? ""]++
                  : ""}
              </a>
              <CgExternal size={16} />
            </span>
          </Tooltip>
        </Badge>
      ))}
    </>
  );
}
