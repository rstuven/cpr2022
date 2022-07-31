import { HoverCard as HoverCardMantine } from "@mantine/core";
import useRenderOnActivation from "hooks/useRenderOnActivation";

// Wrap to defer dropdown rendering and improve perfomance
export default function HoverCard({
  width,
  className,
  target,
  dropdown,
  openDelay,
}: {
  width?: number;
  className?: string;
  openDelay?: number;
  target: JSX.Element;
  dropdown: JSX.Element;
}) {
  const { render, onMouseOver, onTouchMove, onTouchEnd, onFocus } =
    useRenderOnActivation();

  return render ? (
    <HoverCardMantine
      width={width}
      shadow="md"
      withArrow
      openDelay={openDelay}
      closeDelay={400}
      initiallyOpened
    >
      <HoverCardMantine.Target>{target}</HoverCardMantine.Target>
      <HoverCardMantine.Dropdown>{dropdown}</HoverCardMantine.Dropdown>
    </HoverCardMantine>
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
