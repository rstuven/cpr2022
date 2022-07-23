import React from "react";

import Transitoria from "./Transitoria";
import HashLink from "./HashLink";
import { useHashPath } from "hooks/useHash";
import { getItemsOfType, getPreambulo } from "lib/helpers";

export default function Preambulo() {
  const [hash, _] = useHashPath();
  const path = "preambulo";
  const isHighlighted = path == hash;
  return (
    <>
      <a data-id={path}></a>
      <p
        className={
          "text-xl text-center italic px-2 " +
          (isHighlighted ? "bg-amber-100 rounded" : "")
        }
      >
        <HashLink hash={path} anchor /> {getPreambulo()}
      </p>
    </>
  );
}
