import { Tooltip as FlowbiteTooltip, TooltipProps } from "flowbite-react";

// Wrap flowbite's Tooltip to improve perfomance
export default function Tooltip(props: TooltipProps): JSX.Element {
  return (
    <div className="inline indent-0">
      <FlowbiteTooltip {...props} />
    </div>
  );
}
