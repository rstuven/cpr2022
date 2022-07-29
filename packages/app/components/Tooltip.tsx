import { Tooltip as FlowbiteTooltip, TooltipProps } from "flowbite-react";
import useRenderOnActivation from "hooks/useRenderOnActivation";

// Wrap flowbite's Tooltip to improve perfomance
export default function Tooltip(props: TooltipProps): JSX.Element {
  const { render, onMouseOver, onTouchMove, onTouchEnd } =
    useRenderOnActivation();
  return (
    <div
      className="inline"
      onMouseOver={onMouseOver}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {render ? <FlowbiteTooltip {...props} /> : props.children}
    </div>
  );
}
