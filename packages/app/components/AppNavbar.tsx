import React, { useCallback, useEffect, useState } from "react";
import { Navbar, Avatar } from "flowbite-react";
import { useNavbarContext } from "flowbite-react/lib/esm/components/Navbar/NavbarContext";
import { getCapituloFragmentoId, getCapituloLabel } from "lib/helpers";
import { constitucion } from "cpr2022-data";
import useMediaQuery from "hooks/useMediaQuery";
import { Capitulo as CapituloSchema } from "cpr2022-data/src/types/schema";

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
          constitucion.capitulos.map((capitulo, index) => (
            <CapituloNavLink
              key={index}
              capitulo={capitulo}
              onMenuOpenChange={onMenuOpenChangeHere}
            />
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

function CapituloNavLink({
  capitulo,
  onMenuOpenChange,
}: {
  capitulo: CapituloSchema;
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
      href={"/#" + getCapituloFragmentoId(capitulo)}
      onClick={onNavbarLinkClick}
      onTouchEnd={onNavbarLinkClick}
    >
      {getCapituloLabel(capitulo)}
    </Navbar.Link>
  );
}
