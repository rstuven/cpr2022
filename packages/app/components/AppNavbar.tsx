import React, { useCallback, useEffect } from "react";
import { Navbar, Avatar } from "flowbite-react";
import { useNavbarContext } from "flowbite-react/lib/esm/components/Navbar/NavbarContext";
import useMediaQuery from "hooks/useMediaQuery";
import { getItemFragmentoId, getItemsOfType, getItemLabel } from "lib/helpers";
import { ItemObject } from "cpr2022-data/src/types/schemaShallow";

export function AppNavbar({
  onMenuOpenChange,
}: {
  onMenuOpenChange?: (newValue: boolean) => void;
}) {
  const isMediumMinWidth = useMediaQuery("(min-width: 768px)");
  const onMenuOpenChangeHere = useCallback(
    (newValue: boolean) => {
      onMenuOpenChange && onMenuOpenChange(newValue);
    },
    [onMenuOpenChange]
  );
  return (
    <Navbar border rounded>
      <Navbar.Brand href="/">
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
        <Navbar.Link href="/" active={true}>
          Inicio
        </Navbar.Link>
        <Navbar.Link href="/acerca-de">¿Qué es esto?</Navbar.Link>
        {!isMediumMinWidth &&
          getItemsOfType("preambulo", "capitulo", "transitorias").map((item, index) => (
            <ItemNavLink
              key={index}
              item={item}
              onMenuOpenChange={onMenuOpenChangeHere}
            />
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

function ItemNavLink({
  item,
  onMenuOpenChange,
}: {
  item: ItemObject;
  onMenuOpenChange: (newValue: boolean) => void;
}) {
  const { isOpen, setIsOpen } = useNavbarContext();

  useEffect(() => {
    onMenuOpenChange(isOpen ?? false);
  }, [isOpen, onMenuOpenChange]);

  const onNavbarLinkClick = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }, [setIsOpen]);

  return (
    <Navbar.Link
      href={"/#" + getItemFragmentoId(item)}
      onClick={onNavbarLinkClick}
      onTouchEnd={onNavbarLinkClick}
    >
      <span className="font-ConvencionFJ">{getItemLabel(item)}</span>
    </Navbar.Link>
  );
}
