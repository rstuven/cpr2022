import React from "react";

import HashLink from "./HashLink";
import { getPreambulo } from "lib/helpers";

export default function Preambulo() {
  const path = "preambulo";
  return (
    <div data-hash={path} className="mb-6 text-xl text-center italic px-2 rounded">
      <HashLink hash={path} anchor="preámbulo" /> {getPreambulo()}
    </div>
  );
}
