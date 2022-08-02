import React, { AnchorHTMLAttributes, useCallback } from "react";
import { IconType } from "react-icons";
import { MdAddToHomeScreen } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { usePWAInstall } from "react-use-pwa-install";

import { useNavbarContext } from "flowbite-react/lib/esm/components/Navbar/NavbarContext";
import { getItemFragmentoId, getItemsOfType, getItemLabel } from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";

export default function AppNavbarSmall(props: {
  onToolsToggle?: () => void;
  setToolsOpen?: (value: boolean) => void;
}) {
  const install = usePWAInstall();
  return (
    <div className="flex flex-col w-full h-screen pr-5 pb-[70px] absolute bg-white overflow-scroll">
      <NavLink href="/#inicio" icon={AiOutlineHome}>
        Inicio
      </NavLink>
      <NavLink href="/acerca-de" icon={AiOutlineInfoCircle}>
        ¿Qué es esto?
      </NavLink>

      {props.setToolsOpen && <NavLinkTools setToolsOpen={props.setToolsOpen} />}

      {install && (
        <div className="p-1">
          <button onClick={install} className="flex gap-1">
            <MdAddToHomeScreen size={20} />
            Instalar app
          </button>
        </div>
      )}
      <hr className="my-1" />
      {getItemsOfType("preambulo", "capitulo", "transitorias").map((item) => (
        <ItemNavLink key={item.oid} item={item} />
      ))}
      <hr className="my-1" />
      <div className="flex py-1 gap-6 justify-center">
        <a href="mailto:cpr2022.cl@gmail.com">
          <MdEmail size={20} />
        </a>
        <a href="https://twitter.com/cpr2022cl">
          <BsTwitter size={20} />
        </a>
      </div>
      <hr className="my-1" />
      <div className="text-sm text-gray-300 pt-2 w-full text-center">
        Versión: {process.env.NEXT_PUBLIC_VERSION}
      </div>
    </div>
  );
}

function NavLinkTools(props: { setToolsOpen: (value: boolean) => void }) {
  const { setIsOpen } = useNavbarContext();

  const onToolsToggleAndClose = useCallback(() => {
    props.setToolsOpen(true);
    setIsOpen(false);
  }, [props, setIsOpen]);

  return (
    <div className="hover:bg-gray-200 p-1">
      <button onClick={onToolsToggleAndClose} className="flex gap-1 w-full">
        <BiSearchAlt size={20} />
        Buscar
      </button>
    </div>
  );
}

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: IconType;
};

function NavLink(props: NavLinkProps) {
  const { icon: Icon, ...rest } = props;
  const { setIsOpen } = useNavbarContext();

  const onNavbarLinkClick = useCallback(() => {
    // this timeout avoids unmounting before the link follows through
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }, [setIsOpen]);

  return (
    <div
      className="hover:bg-gray-200 p-1 flex gap-1"
      onClick={onNavbarLinkClick}
    >
      <Icon size={20} />

      <a className="block align-middle" {...rest} />
    </div>
  );
}

function ItemNavLink({ item }: { item: ItemObject }) {
  return (
    <NavLink href={"/#" + getItemFragmentoId(item)} icon={AiOutlineBook}>
      <span className="font-ConvencionFJ">{getItemLabel(item)}</span>
    </NavLink>
  );
}
