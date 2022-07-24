import { useCallback, useState } from "react";
import {
  Dropdown as FlowbiteDropdown,
  DropdownProps as FlowbiteDropdownProps,
} from "flowbite-react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { classNames } from "lib/helpers";

type DropdownProps = FlowbiteDropdownProps & { className?: string };

// Wrap flowbite's Dropdown to improve perfomance
function Dropdown(props: DropdownProps) {
  const [render, setRender] = useState(false);
  const onActivation = useCallback(() => {
    setRender(true);
  }, []);
  return (
    <div
      className="cursor-pointer "
      onMouseOver={onActivation}
      onTouchStart={onActivation}
    >
      {render ? (
        <FlowbiteDropdown {...props}>
          <div className={classNames("-m-5 -mr-2 pr-5", props.className)}>
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
