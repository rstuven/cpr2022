import { useCallback, useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
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
  const onFilterChange = useCallback(
    debounce((e: any) => {
      props.onFilterChange(e.target?.value ?? "");
    }, 500),
    [props]
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

  if (!props.open) return null;

  return (
    <div
      className={classNames(
        "fixed flex flex-col z-10",
        "right-4 w-11/12 md:w-60 h-24 p-2 pl-4 pr-6 md:pr-4 top-[55px]",
        "bg-white",
        "border-[1px] border-gray-200 rounded-lg",
        "justify-center",
        "items-center",
        "shadow-2xl shadow-black/20"
      )}
    >
      <div className="w-full">
        <div className="md:hidden cursor-pointer float-right absolute right-0 top-1 p-1">
          <GrFormClose size={16} onClick={props.onClose} />
        </div>
        <input
          ref={filterInput}
          autoFocus
          tabIndex={0}
          placeholder="Artículo o texto (mín. 4 caracteres)"
          className="border rounded p-2 h-8 w-full placeholder:text-sm placeholder:text-gray-400"
          type="text"
          onChange={onFilterChange}
          onFocus={onFocus}
          defaultValue={props.filter.text}
        />
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
