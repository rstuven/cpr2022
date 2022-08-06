import React, { useCallback } from "react";
import { MdOutlineClose } from "react-icons/md";
import createPersistedState from "use-persisted-state";

const useWarningOpenState = createPersistedState("not-official-warning");

export default function NotOfficialWarning() {
  const isServer = typeof window == "undefined";

  const [warningOpen, setWarningOpen] = useWarningOpenState(!isServer);

  const onCloseWarning = useCallback(() => {
    setWarningOpen(false);
  }, [setWarningOpen]);

  if (!warningOpen) return null;

  return (
    <div className="bg-amber-100 border border-solid rounded border-amber-500 mx-2 mb-4 p-2 flex gap-2 items-center">
      <div className="w-full font-sans text-sm text-amber-700 text-center">
        Este sitio <b>no&nbsp;es&nbsp;oficial</b>. Si bien buscamos ser fieles
        al texto original, siempre prefiere o contrasta con las fuentes
        oficiales:
        <br />
        <a
          className="text-amber-700"
          href="https://chileconvencion.cl"
          target="_blank"
          rel="noreferrer"
        >
          chileconvencion.cl
        </a>{" "}
        y{" "}
        <a
          className="text-amber-700"
          href="https://www.gob.cl/chilevotainformado/"
          target="_blank"
          rel="noreferrer"
        >
          chilevotainformado.cl
        </a>
      </div>
      <MdOutlineClose
        size={20}
        onClick={onCloseWarning}
        className="text-amber-700 cursor-pointer"
      />
    </div>
  );
}
