import { ReactNode } from "react";
import { Popover as PopoverMantine } from "@mantine/core";

// Wrap to defer dropdown rendering and improve perfomance
export default function Popover({
  width,
  target,
  dropdown,
}: {
  width?: number;
  target: ReactNode;
  dropdown: ReactNode;
}) {
  return (
    <PopoverMantine width={width} shadow="md" withArrow>
      <PopoverMantine.Target>{target}</PopoverMantine.Target>
      <PopoverMantine.Dropdown>{dropdown}</PopoverMantine.Dropdown>
    </PopoverMantine>
  );
}
