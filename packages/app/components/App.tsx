import React, {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useHashHighlighting, useHashScrolling } from "hooks/useHash";
import Indice from "./Indice";
import Constitucion from "./Constitucion";
import AppNavbar from "./AppNavbar";
import { HashProvider } from "./HashProvider";
import { SmallMediaProvider } from "./SmallMediaProvider";
import BrowsingTools from "./BrowsingTools";
import {
  prepareRegex,
  filterItems,
  ItemFilter,
  getParentOfType,
  getCurrentHash,
} from "lib/helpers";
import useMediaQuery from "hooks/useMediaQuery";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  const indice = useRef<HTMLDivElement>(null);
  const isMediumMinHeight = useMediaQuery("(min-height: 600px)");
  useHashScrolling(isMediumMinHeight ? 350 : 150, "auto", main);
  useHashScrolling(isMediumMinHeight ? 350 : 150, "smooth", indice, true);
  useHashHighlighting(main);

  const [filter, setFilter] = useState("");
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const initialFilter =
      new URLSearchParams(getCurrentHash()).get("buscar") ?? "";
    setFilter(initialFilter);
    setToolsOpen(initialFilter != "");
  }, []);

  const onFilterChange = useCallback((filter: string) => {
    setFilter(filter);
    location.hash = "#buscar=" + filter;
  }, []);

  const onClose = useCallback(() => {
    setToolsOpen(false);
    setFilter("");
    location.hash = "";
  }, []);

  const onToolsToggle = useCallback(() => {
    setToolsOpen(!toolsOpen);
    startTransition(() => {
      if (toolsOpen) {
        setFilter("");
        location.hash = "";
      }
    });
  }, [toolsOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        e.stopPropagation();
        onToolsToggle();
      }
    };
    document.addEventListener("keydown", handler, false);
    return () => document.removeEventListener("keydown", handler);
  });

  const itemFilter = useMemo(() => getItemFilter(filter), [filter]);

  return (
    <HashProvider>
      <SmallMediaProvider>
        {/* make sure highlightClass is noticed by tailwind compiler */}
        <div className="hidden bg-amber-100" />

        <BrowsingTools
          open={toolsOpen}
          onClose={onClose}
          onFilterChange={onFilterChange}
          filter={itemFilter}
        />

        <div className="h-screen overflow-hidden">
          <div className="z-10 md:mr-4 relative">
            <AppNavbar
              onToolsToggle={onToolsToggle}
              setToolsOpen={setToolsOpen}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7">
            <aside
              ref={indice}
              className="pb-3 h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2"
            >
              <Indice filter={itemFilter} />
            </aside>
            <div
              ref={main}
              className="h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center"
            >
              <Constitucion filter={itemFilter} />
            </div>
          </div>
        </div>
      </SmallMediaProvider>
    </HashProvider>
  );
}

function getItemFilter(filter: string) {
  let itemFilter: ItemFilter;
  if (filter == "") {
    itemFilter = {
      text: "",
      oids: [],
      totalMatches: 0,
      foundItems: 0,
    };
  } else {
    const articulosTestRegex = new RegExp(/^(\d+(\.[\da-zñ]+)?,?)*$/);
    const articulos = articulosTestRegex.test(filter)
      ? filter.split(",").filter((x) => x)
      : [];
    const filterResult = filterItems((item) => {
      if (articulos.length > 0) {
        const articulo =
          item.type == "articulo"
            ? item
            : item.type == "inciso" && getParentOfType(item, "articulo");
        if (articulo && articulos.includes(String(articulo.key))) {
          return 1;
        }
        if (
          articulo &&
          item.type == "inciso" &&
          articulos.includes(`${articulo.key}.${item.key}`)
        ) {
          return 1;
        }
        return 0;
      }
      if (filter.length < 4) {
        return 0;
      }
      const content = item.content ?? "";
      const filterRegex = new RegExp(prepareRegex(filter), "ig");
      const matches = Array.from(content.matchAll(filterRegex));
      return matches.length;
    });
    itemFilter = {
      query: filter,
      text: articulos.length > 0 || filter.length < 4 ? "" : filter,
      ...filterResult,
    };
  }
  return itemFilter;
}
