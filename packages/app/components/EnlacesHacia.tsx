import { Badge } from "flowbite-react";

import { CgInternal } from "react-icons/cg";
import {
  getEnlacesHacia,
  IncisoContextLabel,
  parseFragmento,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import FragmentoTooltipContent from "./FragmentoTooltipContent";

export default function EnlacesHacia(props: { path: string }) {
  const enlacesHacia = getEnlacesHacia(props.path);
  return (
    <>
      {enlacesHacia.map((enlace, index) => {
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
                <a className="indent-0" href={"#" + enlace.desde}>
                  {label}
                </a>
              </span>
            </Tooltip>
          </Badge>
        );
      })}
    </>
  );
}
