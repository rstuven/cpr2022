import React from "react";
import { Badge } from "flowbite-react";
import { CgExternal } from "react-icons/cg";
import { getEnlacesDesde } from "lib/helpers";
import Tooltip from "./Tooltip";
import extractDomain from "extract-domain";

export default React.memo(EnlacesDesde);

function EnlacesDesde(props: { path: string }) {
  const enlaces = getEnlacesDesde(props.path, true);
  return (
    <>
      {enlaces.map((enlace, index) => (
        <Badge color="info" key={index}>
          <Tooltip
            content={
              <>
                {"por " + enlace.autor}
                <br />
                {"en " + extractDomain(enlace.hacia)}
              </>
            }
          >
            <span className="flex gap-1">
              <a href={enlace.hacia} target="_blank" rel="noreferrer">
                {enlace.etiqueta}
                {enlaces.length > 1 ? " " + (index + 1) : ""}
              </a>
              <CgExternal size={16} />
            </span>
          </Tooltip>
        </Badge>
      ))}
    </>
  );
}
