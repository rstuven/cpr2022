import { ReactNode, useContext } from "react";
import { IconType } from "react-icons/lib/cjs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  BsFileEarmarkPdf,
  BsWhatsapp,
  BsTwitter,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";
import { Popover } from "@mantine/core";
import { ItemObject, CommonData } from "cpr2022-data/src/types/schemaShallow";
import useRenderOnActivation from "hooks/useRenderOnActivation"
import {
  getItemLabel,
  isFragmentoIdMatch,
  getItemTypeLabel,
  classNames,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import { HashContext } from "./HashProvider";

export default function ItemToolbar({
  path,
  item,
}: {
  path: string;
  item: ItemObject;
}) {
  return (
    <div className="ml-1 float-right flex gap-2 font-sans">
      <PopoverWrapper
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

// Wrap to defer dropdown rendering and improve perfomance
function PopoverWrapper({
  target,
  dropdown,
}: {
  target: ReactNode;
  dropdown: ReactNode;
}) {
  const { render, onMouseOver, onTouchMove, onTouchEnd, onFocus } =
    useRenderOnActivation();
  return render ? (
    <Popover width={240} shadow="md" withArrow>
      <Popover.Target>{target}</Popover.Target>
      <Popover.Dropdown>{dropdown}</Popover.Dropdown>
    </Popover>
  ) : (
    <div
      tabIndex={0}
      className="cursor-pointer"
      onMouseOver={onMouseOver}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onFocus={onFocus}
    >
      {target}
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
  const text = `${getItemLabel(item)} sobre ${data.sobre}`;
  const message = `${text}:\n${url}\n`;

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
        label="Compartir vía WhatsApp"
        url={`https://api.whatsapp.com/send/?text=${encodeURIComponent(
          message
        )}`}
      />

      <ExternalLinkItem
        icon={BsTelegram}
        label="Compartir vía Telegram"
        url={`https://telegram.me/share/url?url=${encodeURIComponent(url)}`}
      />
    </>
  );
}

function ExternalLinkItem({
  icon: Icon,
  label,
  url,
}: {
  icon: IconType;
  label: string;
  url: string;
}) {
  return (
    <li className={classNames("block", "py-1", "text-sm text-gray-700")}>
      <div className="flex">
        <Icon size={20} />
        &nbsp;
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline w-full"
        >
          {label}
        </a>
      </div>
    </li>
  );
}
