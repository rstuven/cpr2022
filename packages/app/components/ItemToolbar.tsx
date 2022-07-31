import { useCallback, useContext, useState } from "react";
import { IconType } from "react-icons/lib/cjs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  BsFileEarmarkPdf,
  BsWhatsapp,
  BsTwitter,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";
import { VscCopy } from "react-icons/vsc";

import { ItemObject, CommonData } from "cpr2022-data/src/types/schemaShallow";
import {
  getItemLabel,
  isFragmentoIdMatch,
  getItemTypeLabel,
  classNames,
} from "lib/helpers";
import * as ga from "lib/ga";
import Tooltip from "./Tooltip";
import { HashContext } from "./HashProvider";
import Popover from "./Popover";

export default function ItemToolbar({
  path,
  item,
}: {
  path: string;
  item: ItemObject;
}) {
  return (
    <div className="ml-1 mr-2 float-right flex gap-2 font-sans">
      <Popover
        width={240}
        className="cursor-pointer"
        target={
          <div className="cursor-pointer">
            <Tooltip content={"Acciones sobre " + getItemTypeLabel(item.type)}>
              <HiOutlineDotsVertical size={20} />
            </Tooltip>
          </div>
        }
        dropdown={<ItemDropdown path={path} item={item} />}
      />
    </div>
  );
}

function ItemDropdown({ path, item }: { path: string; item: ItemObject }) {
  const data = item.data as CommonData;
  let url = `${location.origin}/compartir/${path.split("@")[0]}`;

  // TODO: remove in stable version
  url += "?" + process.env.NEXT_PUBLIC_VERSION;

  const hash = useContext(HashContext);
  if (isFragmentoIdMatch(path, hash) && hash.lastIndexOf(".") != -1) {
    url += "#" + hash;
  }
  const text = `${getItemLabel(item)} (sobre ${data.sobre})`;
  const message = `${text}:\n${url}\n`;

  const copyLabelDefault = "Copiar enlace";
  const [copyLabel, setCopyLabel] = useState(copyLabelDefault);

  const onClickCopy = useCallback(() => {
    navigator.clipboard.writeText(url).then(() => {
      setCopyLabel("¡Copiado!");
      setTimeout(() => {
        setCopyLabel(copyLabelDefault);
      }, 1000);
    });
  }, [url]);

  return (
    <>
      <ExternalLinkItem
        icon={BsFileEarmarkPdf}
        label={`Página ${data.pagina} en el PDF oficial`}
        url={
          "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
          (data.pagina + 4)
        }
      />
      <ExternalLinkItem
        icon={VscCopy}
        label={copyLabel}
        onClick={onClickCopy}
      />
      <ExternalLinkItem
        icon={BsTwitter}
        label="Compartir en Twitter"
        url={
          "https://twitter.com/intent/tweet?text=" + encodeURIComponent(message)
        }
      />
      <ExternalLinkItem
        icon={BsFacebook}
        label="Compartir en Facebook"
        url={
          "https://www.facebook.com/sharer/sharer.php?display=page&u=" +
          encodeURIComponent(url)
        }
      />
      <ExternalLinkItem
        icon={BsWhatsapp}
        label="Compartir en WhatsApp"
        url={`https://api.whatsapp.com/send/?text=${encodeURIComponent(
          message
        )}`}
      />
      <ExternalLinkItem
        icon={BsTelegram}
        label="Compartir en Telegram"
        url={`https://telegram.me/share/url?url=${encodeURIComponent(url)}`}
      />
    </>
  );
}

function ExternalLinkItem({
  icon: Icon,
  label,
  url,
  onClick,
}: {
  icon: IconType;
  label: string;
  url?: string;
  onClick?: () => void;
}) {
  const onClick2 = useCallback(() => {
    onClick && onClick();
    ga.event({ action: "external_link", params: { label } });
  }, [label, onClick]);
  return (
    <li className={classNames("block", "py-1", "text-sm text-gray-700")}>
      <div className="flex">
        <Icon size={20} />
        &nbsp;
        <a
          href={url}
          onClick={onClick2}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline w-full cursor-pointer"
        >
          {label}
        </a>
      </div>
    </li>
  );
}
