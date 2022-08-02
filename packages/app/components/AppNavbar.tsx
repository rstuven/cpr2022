import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";

import { Navbar, Avatar } from "flowbite-react";
import useMediaQuery from "hooks/useMediaQuery";
import Tooltip from "./Tooltip";

const AppNavbarSmall = dynamic(() => import("./AppNavbarSmall"), {
  ssr: false,
});

export default function AppNavbar(props: {
  onToolsToggle?: () => void;
  setToolsOpen?: (value: boolean) => void;
}) {
  const isMediumMinWidth = useMediaQuery("(min-width: 768px)", true);
  const [modifierKeyPrefix, setModifierKeyPrefix] = useState("");
  const [staticLoading, setStaticLoading] = useState(true);

  useEffect(() => {
    setStaticLoading(false);
    setModifierKeyPrefix(
      navigator.userAgent.includes("Macintosh") ||
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad")
        ? "⌘"
        : "Ctrl+"
    );
  }, []);

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
      {staticLoading ? (
        <button
          className={
            "md:hidden" +
            "ml-3 inline-flex items-center rounded-lg p-2 text-sm " +
            "text-gray-500 hover:bg-gray-100 " +
            "focus:outline-none focus:ring-2 focus:ring-gray-200 "
          }
        >
          <ImSpinner2 size={24} className="animate-spin" />
        </button>
      ) : (
        <Navbar.Toggle />
      )}
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
                  <Tooltip
                    placement="bottom"
                    content={
                      <>
                        Buscar{" "}
                        <span className="text-gray-400">
                          {modifierKeyPrefix}B
                        </span>
                      </>
                    }
                  >
                    <BiSearchAlt
                      className="cursor-pointer"
                      size={20}
                      onClick={props.onToolsToggle}
                    />
                  </Tooltip>
                </div>
              </div>
            )}
          </>
        ) : (
          <AppNavbarSmall {...props} />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
