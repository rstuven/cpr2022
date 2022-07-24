import { IconType } from "react-icons/lib/cjs";
import { HiOutlineArrowsExpand, HiOutlineDotsVertical } from "react-icons/hi";
import {
  BsFileEarmarkPdf,
  BsWhatsapp,
  BsTwitter,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";
import {
  ItemObject,
  CommonData,
} from "cpr2022-data/src/types/schemaShallow";
import {
  getItemLabel,
  isFragmentoIdMatch,
  getItemTypeLabel,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { HashContext } from "./HashProvider";

export default function ItemToolbar({
  path,
  item,
}: {
  path: string;
  item: ItemObject;
}) {
  const inFragmento = location.pathname.startsWith("/fragmento/");
  return (
    <div className="ml-1 float-right flex gap-2 font-sans">
      {inFragmento && (
        <a href={`/${location.hash.length > 1 ? location.hash : "#" + path}`}>
          <HiOutlineArrowsExpand size={20} />
        </a>
      )}
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Tooltip content={"Acciones sobre " + getItemTypeLabel(item.type)}>
            <HiOutlineDotsVertical size={20} />
          </Tooltip>
        }
      >
        <ItemDropdown path={path} item={item} />
      </Dropdown>
    </div>
  );
}

function ItemDropdown({ path, item }: { path: string; item: ItemObject }) {
  const data = item.data as CommonData;
  let url = `${location.origin}/fragmento/${path.split("@")[0]}`;

  // TODO: remove in stable version
  url += "?test=1";

  const hash = useContext(HashContext);
  if (isFragmentoIdMatch(path, hash) && hash.lastIndexOf(".") != -1) {
    url += "#" + hash;
  }
  const text = `${getItemLabel(item)} sobre ${data.sobre}`;
  const message = `${text}:\n${url}\n`;

  return (
    <>
      {buildExternalLinkItem(
        BsFileEarmarkPdf,
        `Página ${data.pagina} en el PDF oficial`,
        "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
          (data.pagina + 4)
      )}

      {buildExternalLinkItem(
        BsTwitter,
        "Compartir en Twitter",
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(message)
      )}
      {buildExternalLinkItem(
        BsFacebook,
        "Compartir en Facebook",
        "https://www.facebook.com/sharer/sharer.php?display=page&u=" +
          encodeURIComponent(url)
      )}

      {buildExternalLinkItem(
        BsWhatsapp,
        "Compartir vía WhatsApp",
        `https://api.whatsapp.com/send/?text=${encodeURIComponent(message)}`
      )}

      {buildExternalLinkItem(
        BsTelegram,
        "Compartir vía Telegram",
        `https://telegram.me/share/url?url=${encodeURIComponent(url)}`
      )}
    </>
  );
}

function buildExternalLinkItem(Icon: IconType, label: string, url: string) {
  return (
    <Dropdown.Item>
      <div className="flex">
        <Icon size={20} />
        &nbsp;
        <a href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      </div>
    </Dropdown.Item>
  );
}
