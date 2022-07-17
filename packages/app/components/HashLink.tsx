import { useHashPath } from "hooks/useHash";
import { useCallback } from "react";

type HashLinkProps = { hash: string; children: any };

export default function HashLink({ hash, children }: HashLinkProps) {
  const [_, updateHash] = useHashPath();
  const onClick = useCallback(
    (e: any) => {
      e.preventDefault();
      updateHash(hash);
    },
    [hash, updateHash]
  );
  return (
    <a href={"#" + hash} onClick={onClick}>
      {children}
    </a>
  );
}
