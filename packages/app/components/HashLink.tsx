import { useHashPath } from "hooks/useHash";
import { useCallback } from "react";

type HashLinkProps = {
  hash: string;
  className?: string;
  children: any;
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
  return (
    <a
      className={props.className ?? "text-gray-300"}
      href={"#" + props.hash}
      onClick={onClick}
    >
      {props.children}
    </a>
  );
}
