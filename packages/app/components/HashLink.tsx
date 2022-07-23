import { Tooltip } from "flowbite-react";
import { PropsWithChildren } from "react";

type HashLinkProps = PropsWithChildren<{
  hash: string;
  className?: string;
  title?: string;
  anchor?: string;
  visible?: boolean;
}>;

export default function HashLink(props: HashLinkProps) {
  if (props.anchor) {
    const title = props.title ?? "Vínculo a " + props.anchor;
    return (
      <div className="inline-block">
        <a
          className={
            (props.className ?? "") +
            "font-sans text-gray-300" +
            (props.visible === false ? " invisible" : "")
          }
          href={"/#" + props.hash}
          title={title}
          data-id={props.hash}
        >
          <Tooltip content={title}>¶</Tooltip>
        </a>
      </div>
    );
  }
  return (
    <a
      className={
        (props.className ?? "") + (props.visible === false ? " invisible" : "")
      }
      href={"/#" + props.hash}
      title={props.title}
      data-id={props.hash}
    >
      {props.children}
    </a>
  );
}
