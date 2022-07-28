import { PropsWithChildren } from "react";
import { classNames } from "lib/helpers";
import Tooltip from "./Tooltip";

type HashLinkProps = PropsWithChildren<{
  hash: string;
  className?: string;
  title?: string;
  anchor?: string;
  visible?: boolean;
  indent?: boolean;
}>;

export default function HashLink(props: HashLinkProps) {
  if (props.anchor) {
    const title = (
      <div className="indent-0">
        {props.title ?? "Enlace a " + props.anchor}
      </div>
    );
    return (
      <div className="inline-block">
        <a
          className={classNames(
            props.className,
            "font-sans text-gray-300 no-underline",
            props.visible === false && "invisible"
          )}
          href={"/#" + props.hash}
          data-id={props.hash}
        >
          <Tooltip placement="left" content={title}>
            <div className={props.indent ? "-indent-3" : ""}>¶</div>
          </Tooltip>
        </a>
      </div>
    );
  }
  return (
    <a
      className={classNames(
        props.className,
        props.visible === false && "invisible"
      )}
      href={"/#" + props.hash}
      title={props.title}
      data-id={props.hash}
    >
      {props.children}
    </a>
  );
}
