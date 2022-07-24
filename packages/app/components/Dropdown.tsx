import {
  Dropdown as FlowbiteDropdown,
  DropdownProps as FlowbiteDropdownProps,
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

type DropdownProps = FlowbiteDropdownProps & { className?: string };
function Dropdown(props: DropdownProps) {
  const [render, setRender] = useState(false);
  return (
    <div className="cursor-pointer " onMouseOver={() => setRender(true)}>
      {render ? (
        <FlowbiteDropdown {...props}>
          <div className={"-m-5 -mr-2 pr-5 " + (props.className ?? "")}>
            {props.children}
          </div>
        </FlowbiteDropdown>
      ) : (
        <div className="flex">
          {props.label}
          {(props.arrowIcon ?? true) && (
            <HiOutlineChevronDown className="ml-2 h-4 w-4" />
          )}
        </div>
      )}
    </div>
  );
}

Dropdown.Item = FlowbiteDropdown.Item;

export default Dropdown;
