import React, { AnchorHTMLAttributes, useCallback } from "react";
import { usePWAInstall } from "react-use-pwa-install";
import { MdAddToHomeScreen } from "react-icons/md";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { Navbar, Avatar } from "flowbite-react";
import { useNavbarContext } from "flowbite-react/lib/esm/components/Navbar/NavbarContext";
import useMediaQuery from "hooks/useMediaQuery";
import { getItemFragmentoId, getItemsOfType, getItemLabel } from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";

export function AppNavbar() {
  const isMediumMinWidth = useMediaQuery("(min-width: 768px)");
  const install = usePWAInstall();
  return (
    <Navbar border rounded>
      <Navbar.Brand href="/#inicio">
        <Avatar alt="Inicio" img="/images/logo.png" />
        &nbsp;
        <span className="p-1 text-lg sm:hidden">
          Propuesta de Nueva Constitución
        </span>
        <span className="p-1 text-lg hidden sm:block md:hidden">
          Propuesta de Nueva Constitución para Chile 2022
        </span>
        <span className="p-1 font-ConvencionFJ text-lg hidden md:block lg:hidden ">
          Propuesta de Constitución Política de la República de Chile
        </span>
        <span className="p-1 font-ConvencionFJ text-lg hidden lg:block">
          Propuesta de Constitución Política de la República de Chile 2022
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {isMediumMinWidth ? (
          <>
            <Navbar.Link href="/#inicio" active={true}>
              <div className="flex gap-1">
                <AiOutlineHome size={20} />
                Inicio
              </div>
            </Navbar.Link>
            <Navbar.Link href="/acerca-de">
              <div className="flex gap-1">
                <AiOutlineInfoCircle size={20} />
                ¿Qué es esto?
              </div>
            </Navbar.Link>
          </>
        ) : (
          <div className="flex flex-col w-full h-screen pr-5 pb-[70px] absolute bg-white overflow-scroll">
            <NavLink href="/#inicio">
              <div className="flex gap-1">
                <AiOutlineHome size={20} />
                Inicio
              </div>
            </NavLink>
            <NavLink href="/acerca-de">
              <div className="flex gap-1">
                <AiOutlineInfoCircle size={20} />
                ¿Qué es esto?
              </div>
            </NavLink>
            {install && (
              <div className="p-1">
                <button onClick={install} className="flex gap-1">
                  <MdAddToHomeScreen size={20} />
                  Instalar app
                </button>
              </div>
            )}
            {getItemsOfType("preambulo", "capitulo", "transitorias").map(
              (item, index) => (
                <ItemNavLink key={index} item={item} />
              )
            )}
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { setIsOpen } = useNavbarContext();

  const onNavbarLinkClick = useCallback(() => {
    // this timeout avoids unmounting before the link follows through
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }, [setIsOpen]);
  return (
    <div
      className="hover:bg-gray-200 p-1"
      onClick={onNavbarLinkClick}
      onTouchEnd={onNavbarLinkClick}
    >
      <a className="block align-middle" {...props} />
    </div>
  );
}

function ItemNavLink({ item }: { item: ItemObject }) {
  return (
    <NavLink href={"/#" + getItemFragmentoId(item)}>
      <span className="font-ConvencionFJ">{getItemLabel(item)}</span>
    </NavLink>
  );
}
