import { useHashPath } from "hooks/useHash";
import { useCallback } from "react";

type HashLinkProps = {
  hash: string;
  className?: string;
  anchor?: boolean;
  visible?: boolean;
  children?: any;
};

export default function HashLink(props: HashLinkProps) {
  const [_, updateHash] = useHashPath();
  const onClick = useCallback(
    (e: any) => {
      e.preventDefault();
      updateHash(props.hash);
    },
    [props.hash, updateHash]
  );
  if (props.anchor) {
    return (
      <a
        className={
          "font-sans text-gray-300" +
          (props.visible === false ? " invisible" : "")
        }
        href={"/#" + props.hash}
        // onClick={onClick}
      >
        ¶
      </a>
    );
  }
  return (
    <a
      className={
        (props.className ?? "") + (props.visible === false ? " invisible" : "")
      }
      href={"/#" + props.hash}
      // onClick={onClick}
    >
      {props.children}
    </a>
  );
}
