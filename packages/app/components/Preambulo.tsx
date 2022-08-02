import React from "react";

import HashLink from "./HashLink";
import { ItemFilter, preambulo } from "lib/helpers";

export default React.memo(Preambulo);

function Preambulo(props: { filter: ItemFilter }) {
  if (
    props.filter.oids.length > 0 &&
    !props.filter.oids.includes(preambulo.oid)
  ) {
    return null;
  }
  const path = preambulo.type;
  return (
    <div
      data-hash={path}
      className="mb-8 text-xl text-center italic py-4 px-2 rounded"
    >
      <HashLink hash={path} anchor="preámbulo" /> {preambulo.content}
    </div>
  );
}
