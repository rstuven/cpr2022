import React from "react";
import { Badge } from "flowbite-react";
import { CgInternal } from "react-icons/cg";
import {
  getEnlacesHacia,
  IncisoContextLabel,
  parseFragmento,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import FragmentoTooltipContent from "./FragmentoTooltipContent";

export default React.memo(EnlacesHacia);

function EnlacesHacia(props: { path: string }) {
  const enlaces = getEnlacesHacia(props.path);
  return (
    <>
      {enlaces.map((enlace, index) => {
        const fragmento = parseFragmento(enlace.desde);
        if (!fragmento || !("inciso" in fragmento) || !fragmento.inciso) {
          return null;
        }
        const label = IncisoContextLabel(fragmento);
        return (
          <Badge color="success" key={index}>
            <Tooltip
              placement="bottom"
              content={<FragmentoTooltipContent fragmento={fragmento} />}
            >
              <span className="flex gap-1 font-sans">
                <CgInternal size={14} />
                <a href={"#" + enlace.desde}>{label}</a>
              </span>
            </Tooltip>
          </Badge>
        );
      })}
    </>
  );
}
