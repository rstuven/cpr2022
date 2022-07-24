import { useCallback, useState } from "react";
import { Tooltip as FlowbiteTooltip, TooltipProps } from "flowbite-react";

// Wrap flowbite's Tooltip to improve perfomance
export default function Tooltip(props: TooltipProps): JSX.Element {
  const [render, setRender] = useState(false);
  const onActivation = useCallback(() => {
    setRender(true);
  }, []);
  return (
    <div
      className="block-inline"
      onMouseOver={onActivation}
      onTouchStart={onActivation}
    >
      {render ? <FlowbiteTooltip {...props} /> : props.children}
    </div>
  );
}
