import { ReactNode } from "react";
import { Popover as PopoverMantine } from "@mantine/core";
import useRenderOnActivation from "hooks/useRenderOnActivation";

// Wrap to defer dropdown rendering and improve perfomance
export default function Popover({
  width,
  target,
  dropdown,
  className,
}: {
  width?: number;
  target: ReactNode;
  dropdown: ReactNode;
  className: string;
}) {
  const { render, onMouseOver, onTouchMove, onTouchEnd, onFocus } =
    useRenderOnActivation();
  return render ? (
    <PopoverMantine width={width} shadow="md" withArrow>
      <PopoverMantine.Target>{target}</PopoverMantine.Target>
      <PopoverMantine.Dropdown>{dropdown}</PopoverMantine.Dropdown>
    </PopoverMantine>
  ) : (
    <div
      tabIndex={0}
      className={className}
      onMouseOver={onMouseOver}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onFocus={onFocus}
    >
      {target}
    </div>
  );
}
