import { ReactNode, useState, useEffect } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

type VisibilitySensorProps = { visible: ReactNode; invisible?: ReactNode };

export default function VisibilitySensor(props: VisibilitySensorProps) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: -offset, bottom: -offset }}
    >
      {(args: any) => (!args.isVisible ? props.invisible : props.visible)}
    </ReactVisibilitySensor>
  );
}
