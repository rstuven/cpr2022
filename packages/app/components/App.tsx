import React, { useCallback, useRef, useState } from "react";
import { useHashHighlighting, useHashScrolling } from "hooks/useHash";
import Indice from "./Indice";
import Constitucion from "./Constitucion";
import { AppNavbar } from "./AppNavbar";
import { HashProvider } from "./HashProvider";
import { SmallMediaProvider } from "./SmallMediaProvider";
import BrowsingTools from "./BrowsingTools";
import { filterItems, ItemFilter } from "lib/helpers";
import useMediaQuery from "hooks/useMediaQuery";

export default function App() {
  const main = useRef<HTMLDivElement>(null);
  const indice = useRef<HTMLDivElement>(null);
  const isMediumMinHeight = useMediaQuery("(min-height: 600px)");
  useHashScrolling(isMediumMinHeight ? 350 : 150, "auto", main);
  useHashScrolling(isMediumMinHeight ? 350 : 150, "smooth", indice, true);
  useHashHighlighting(main);

  const [filter, setFilter] = useState("");
  const onFilterChange = useCallback((filter: string) => {
    setFilter(filter);
  }, []);

  const [toolsOpen, setToolsOpen] = useState(false);
  const onClose = useCallback(() => {
    setToolsOpen(false);
    setFilter("");
  }, []);

  const onToolsToggle = useCallback(() => {
    setToolsOpen(!toolsOpen);
    if (toolsOpen) setFilter("");
  }, [toolsOpen]);

  const itemFilter = getItemFilter(filter);

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
    const filterResult = filterItems((item) => {
      const content = item.content ?? "";
      return filter.length < 4 ? 0 : content.split(filter).length - 1;
    });
    itemFilter = {
      text: filter.length < 4 ? "" : filter,
      ...filterResult,
    };
  }
  return itemFilter;
}
