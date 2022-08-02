import React from "react"
import { PropsWithChildren } from "react";
import { BiBookmarks } from "react-icons/bi";

import { classNames } from "lib/helpers";
import Tooltip from "./Tooltip";

type HashLinkProps = PropsWithChildren<{
  hash: string;
  classNameLink?: string;
  classNameOuter?: string;
  title?: string;
  anchor?: string;
  visible?: boolean;
  indent?: boolean;
}>;

export default React.memo(HashLink);

function HashLink(props: HashLinkProps) {
  if (props.anchor) {
    const title = props.title ?? "Enlace a " + props.anchor;
    return (
      <div className={classNames(props.classNameOuter, "inline-block")}>
        <a
          className={classNames(
            props.classNameLink,
            "text-amber-600/30",
            props.visible === false && "invisible"
          )}
          href={"/#" + props.hash}
          data-id={props.hash}
        >
          <div className={props.indent ? "-indent-3 -ml-2.5" : "pl-1"}>
            <Tooltip placement="left" content={title}>
              <BiBookmarks className="p-0 -mb-1" size={20} />
            </Tooltip>
          </div>
        </a>
      </div>
    );
  }
  return (
    <a
      className={classNames(
        props.classNameLink,
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
