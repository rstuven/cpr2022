import { useCallback, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  classNames,
  debounce,
  getItemByOid,
  getItemFragmentoId,
  ItemFilter,
} from "lib/helpers";

export default function BrowsingTools(props: {
  open: boolean;
  filter: ItemFilter;
  onClose: () => void;
  onFilterChange: (filter: string) => void;
}) {
  const propOnFilterChange = props.onFilterChange;
  const onFilterChange = useCallback(
    debounce((e: any) => {
      propOnFilterChange(e.target?.value ?? "");
    }, 500),
    [propOnFilterChange]
  );
  const filterInput = useRef<HTMLInputElement>(null);

  const onFocus = useCallback((e: any) => e.target.select(), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose();
      }
      if (e.key === "Enter") {
        const articulo = props.filter.oids
          .map((oid) => getItemByOid(oid))
          .find((item) => item.type == "articulo");
        if (articulo) {
          const hash = getItemFragmentoId(articulo);
          props.onClose();
          location.hash = hash;
        }
      }
    };
    document.addEventListener("keydown", handler, false);
    return () => document.removeEventListener("keydown", handler);
  });

  return (
    <div
      className={classNames(
        "fixed flex flex-col z-10",
        "right-4 w-11/12 md:w-80 h-24 p-2 pl-4",
        props.open ? "top-[55px]" : "-top-20",
        "transition-[top] ease-in-out",
        "bg-white",
        "border-[1px] border-gray-200 rounded-lg",
        "justify-center",
        "items-center",
        "shadow-2xl shadow-black/20"
      )}
    >
      <div className="w-full">
        {props.open && (
          <div className="flex gap-1 items-center">
            <input
              ref={filterInput}
              autoFocus
              tabIndex={0}
              placeholder="Artículo o texto (mínimo 4 caracteres)"
              className="border rounded p-2 h-8 w-full placeholder:text-sm placeholder:text-gray-400"
              type="text"
              onChange={onFilterChange}
              onFocus={onFocus}
              defaultValue={props.filter.text}
            />
            <div className="cursor-pointer">
              <MdOutlineClose
                size={20}
                onClick={props.onClose}
                className="text-gray-700"
              />
            </div>
          </div>
        )}
      </div>
      {props.filter.text != "" && (
        <div className="text-sm pt-2">
          {props.filter.totalMatches} ocurrencias
          {props.filter.foundItems > 0 && (
            <> en {props.filter.foundItems} párrafos</>
          )}
        </div>
      )}
    </div>
  );
}
