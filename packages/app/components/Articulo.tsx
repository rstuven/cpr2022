import { Badge } from "flowbite-react";
import extractDomain from "extract-domain";
import HashLink from "./HashLink";
import Inciso from "./Inciso";

import { IconType } from "react-icons/lib/cjs";
import {
  HiOutlineArrowsExpand,
  HiOutlineDotsVertical,
  HiOutlineExternalLink,
} from "react-icons/hi";
import {
  BsFileEarmarkPdf,
  BsWhatsapp,
  BsTwitter,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";
import { ArticuloData, ItemObject } from "cpr2022-data/src/types/schemaShallow";
import {
  getChildrenOfType,
  getItemFragmentoId,
  getItemsOfType,
  getItemLabel,
  firstToUpperCase,
  isFragmentoIdMatch,
} from "lib/helpers";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { HashContext } from "./HashProvider";

export default function Articulo({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const articulo = item.data as ArticuloData;
  const referencias = articulo.referencias?.filter((r) => !r.incisos);
  return (
    <div data-hash={path} className="border border-solid rounded-md p-3 mb-3">
      {buildToolbar(path, item)}
      <span className="font-sans flex flex-wrap gap-1 text-base">
        <HashLink hash={path} anchor="artículo" />
        <b className="text-black mx-1 font-ConvencionFJ">
          {getItemLabel(item)}
        </b>
        <Badge color="gray"> {firstToUpperCase(articulo.sobre)}</Badge>
        {articulo.etiquetas.map((etiqueta, index) => (
          <BadgeEtiquetas key={index} etiqueta={etiqueta} item={item} />
        ))}
        {referencias?.map((referencia, index) => (
          <Badge color="info" key={index}>
            <Tooltip
              content={
                <>
                  {"por " + referencia.autor}
                  <br />
                  {"en " + extractDomain(referencia.url)}
                </>
              }
            >
              <span className="flex">
                <a href={referencia.url} target="_blank" rel="noreferrer">
                  {referencia.etiqueta}
                  {referencias.length > 1 ? " " + (index + 1) : ""}
                </a>
                &nbsp;
                <HiOutlineExternalLink size={14} />
              </span>
            </Tooltip>
          </Badge>
        ))}
      </span>
      {getChildrenOfType(item, "inciso").map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} item={inciso} baseItem={item} />
      ))}
    </div>
  );
}

function buildToolbar(path: string, item: ItemObject) {
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
          <Tooltip content="Acciones sobre artículo">
            <HiOutlineDotsVertical size={20} />
          </Tooltip>
        }
      >
        <ArticuloDropdown path={path} item={item} />
      </Dropdown>
    </div>
  );
}

function ArticuloDropdown({ path, item }: { path: string; item: ItemObject }) {
  const articulo = item.data as ArticuloData;
  let url = `https://cpr2022.cl/fragmento/${path.split("@")[0]}`;
  const hash = useContext(HashContext);
  if (isFragmentoIdMatch(path, hash)) {
    url += "#" + hash;
  }
  const text = `${getItemLabel(item)} sobre ${articulo.sobre}`;
  const message = `${text}:\n${url}\n`;

  return (
    <>
      {buildExternalLinkItem(
        BsFileEarmarkPdf,
        `Página ${articulo.pagina} en el PDF oficial`,
        "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
          (articulo.pagina + 4)
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
        {/* &nbsp;
        <HiOutlineExternalLink size={14} /> */}
      </div>
    </Dropdown.Item>
  );
}

function BadgeEtiquetas(props: {
  etiqueta: string;
  item: ItemObject;
}): JSX.Element {
  const label = props.etiqueta.replace(/ /g, "\u00a0");
  return (
    <Badge color="pink">
      <Dropdown
        inline
        label={label}
        className="max-h-[210px] overflow-y-scroll overscroll-contain"
      >
        {getItemsOfType("articulo")
          .filter(
            (art) =>
              art.oid != props.item.oid &&
              (art.data as ArticuloData).etiquetas.includes(props.etiqueta)
          )
          .map((articulo, index) => {
            return (
              <div key={index}>
                <a
                  className="no-underline hover:underline font-normal"
                  href={"/#" + getItemFragmentoId(articulo)}
                >{`${getItemLabel(articulo)} sobre ${
                  (articulo.data as ArticuloData).sobre
                }`}</a>
              </div>
            );
          })}
      </Dropdown>
    </Badge>
  );
}
