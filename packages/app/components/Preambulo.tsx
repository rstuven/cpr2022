import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { getItemsOfType, getPreambulo, isFragmentoIdMatch } from "lib/helpers";

export default function Preambulo() {
  const [hash, _] = useHashPath();
  const path = "preambulo";
  const isHighlighted = isFragmentoIdMatch(path, hash);
  return (
    <p
      className={
        "text-xl text-center italic px-2 " +
        (isHighlighted ? "bg-amber-100 rounded" : "")
      }
    >
      <HashLink hash={path} anchor /> {getPreambulo()}
    </p>
  );
}
