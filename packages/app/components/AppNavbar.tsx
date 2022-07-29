import React, { AnchorHTMLAttributes, useCallback, useEffect } from "react";
import { usePWAInstall } from "react-use-pwa-install";
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

import { Navbar, Avatar } from "flowbite-react";
import { useNavbarContext } from "flowbite-react/lib/esm/components/Navbar/NavbarContext";
import useMediaQuery from "hooks/useMediaQuery";
import { getItemFragmentoId, getItemsOfType, getItemLabel } from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";

export function AppNavbar(props: {
  onToolsToggle?: () => void;
  setToolsOpen?: (value: boolean) => void;
}) {
  const isMediumMinWidth = useMediaQuery("(min-width: 768px)");
  const install = usePWAInstall();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        e.stopPropagation();
        props.onToolsToggle && props.onToolsToggle();
      }
    };
    document.addEventListener("keydown", handler, false);
    return () => document.removeEventListener("keydown", handler);
  });

  return (
    <Navbar border rounded>
      <Navbar.Brand href="/#inicio">
        <Avatar alt="Inicio" img="/images/logo.png" />
        &nbsp;
        <span className="p-1 text-md sm:hidden">
          Propuesta de Nueva Constitución
        </span>
        <span className="p-1 text-lg hidden sm:block md:hidden">
          Propuesta de Nueva Constitución para Chile 2022
        </span>
        <span className="p-1 text-md hidden md:block lg:hidden ">
          Propuesta de Nueva Constitución para Chile 2022
        </span>
        <span className="p-1 text-lg hidden lg:block">
          Propuesta de Constitución Política de la República de Chile 2022
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {isMediumMinWidth ? (
          <>
            <Navbar.Link href="/acerca-de">
              <div className="flex gap-1">
                <AiOutlineInfoCircle size={20} />
                ¿Qué es esto?
              </div>
            </Navbar.Link>

            <Navbar.Link href="mailto:cpr2022.cl@gmail.com">
              <MdEmail size={20} />
            </Navbar.Link>

            <Navbar.Link href="https://twitter.com/cpr2022cl">
              <BsTwitter size={20} />
            </Navbar.Link>

            {props.onToolsToggle && (
              <div className="block p-0  hover:bg-transparent hover:text-blue-700 dark:hover:bg-transparent dark:hover:text-white">
                <div className="flex gap-1">
                  <BiSearchAlt
                    className="cursor-pointer"
                    size={20}
                    onClick={props.onToolsToggle}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col w-full h-screen pr-5 pb-[70px] absolute bg-white overflow-scroll">
            <NavLink href="/#inicio" icon={AiOutlineHome}>
              Inicio
            </NavLink>
            <NavLink href="/acerca-de" icon={AiOutlineInfoCircle}>
              ¿Qué es esto?
            </NavLink>

            {props.setToolsOpen && (
              <NavLinkTools setToolsOpen={props.setToolsOpen} />
            )}

            {install && (
              <div className="p-1">
                <button onClick={install} className="flex gap-1">
                  <MdAddToHomeScreen size={20} />
                  Instalar app
                </button>
              </div>
            )}
            <hr className="my-1" />
            {getItemsOfType("preambulo", "capitulo", "transitorias").map(
              (item, index) => (
                <ItemNavLink key={index} item={item} />
              )
            )}
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
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: IconType;
};

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

function NavLink(props: NavLinkProps) {
  const { setIsOpen } = useNavbarContext();
  const { icon: Icon, ...rest } = props;

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
      onTouchEnd={onNavbarLinkClick}
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
