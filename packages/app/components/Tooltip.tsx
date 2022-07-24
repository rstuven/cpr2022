import { Tooltip as FlowbiteTooltip, TooltipProps } from "flowbite-react";
import { useState } from "react";

// Wrap flowbite's Tooltip to improve perfomance
export default function Tooltip(props: TooltipProps): JSX.Element {
  const [render, setRender] = useState(false);
  return (
    <div className="block-inline" onMouseOver={() => setRender(true)}>
      {render ? <FlowbiteTooltip {...props} /> : props.children}
    </div>
  );
}
