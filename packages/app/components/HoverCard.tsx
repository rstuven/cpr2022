import { HoverCard as HoverCardMantine } from "@mantine/core";

// Wrap to defer dropdown rendering and improve perfomance
export default function HoverCard({
  width,
  target,
  dropdown,
  openDelay,
}: {
  width?: number;
  openDelay?: number;
  target: JSX.Element;
  dropdown: JSX.Element;
}) {
  return (
    <HoverCardMantine
      width={width}
      shadow="md"
      withArrow
      openDelay={openDelay}
      closeDelay={400}
    >
      <HoverCardMantine.Target>{target}</HoverCardMantine.Target>
      <HoverCardMantine.Dropdown>{dropdown}</HoverCardMantine.Dropdown>
    </HoverCardMantine>
  );
}
