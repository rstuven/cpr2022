import { constitucionShallow as constitucion } from "cpr2022-data";
import {
  CommonData,
  ItemObject,
  ItemType,
} from "cpr2022-data/src/types/schemaShallow";

export type ItemFilterResult = {
  oids: string[];
  totalMatches: number;
  foundItems: number;
};

export type ItemFilter = ItemFilterResult & {
  text: string;
  query?: string;
};

export function firstToUpperCase(text: string) {
  if (text == "") return "";
  return text[0].toUpperCase() + text.substring(1);
}

const items = Object.values(constitucion.items);

export const preambulo = getItemsOfType("preambulo")[0];
export const transitorias = getItemsOfType("transitorias")[0];

export function getEnlacesDesde(fragmentoId: string, external?: boolean) {
  const result = constitucion.enlaces.filter((e) => e.desde == fragmentoId);
  if (external != null) {
    return result.filter((e) => e.hacia.startsWith("http") === external);
  }
  return result;
}

export function getEnlacesHacia(fragmentoId: string, strict = true) {
  if (strict) {
    return constitucion.enlaces.filter(
      (e) => fragmentoId == e.hacia && fragmentoId != e.desde
    );
  }
  return constitucion.enlaces.filter(
    (e) =>
      isFragmentoIdMatch(fragmentoId, e.hacia) &&
      !isFragmentoIdMatch(fragmentoId, e.desde)
  );
}

export function filterItems(
  predicate: (item: ItemObject) => number
): ItemFilterResult {
  const selected: Record<string, ItemObject> = {};
  let totalMatches = 0;
  items.forEach((item) => {
    const matches = predicate(item);
    if (matches > 0) {
      totalMatches += matches;
      selected[item.oid] = item;
    }
  });
  const foundItems = Object.values(selected).length;
  Object.values(selected).forEach((item) => {
    let parentOid = item.parent;
    while (parentOid) {
      const parent = constitucion.items[parentOid];
      selected[parentOid] = parent;
      parentOid = parent.parent;
    }
  });
  return {
    totalMatches,
    foundItems,
    oids: Object.keys(selected),
  };
}

export function prepareRegex(text: string) {
  return ignoreAccentRegex(escapeRegex(text));
}

export function escapeRegex(text: string) {
  return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export function ignoreAccentRegex(text: string) {
  return text
    .replace(/[aá]/g, "[aá]")
    .replace(/[eé]/g, "[eé]")
    .replace(/[ií]/g, "[ií]")
    .replace(/[oó]/g, "[oó]")
    .replace(/[uú]/g, "[uú]");
}

export function getItemsOfType(...types: ItemType[]) {
  return items.filter((o) => types.includes(o.type));
}

export function getChildren(parent: ItemObject) {
  return items.filter((o) => o.parent == parent.oid);
}

export function getChildrenOfType(parent: ItemObject, childrenType: ItemType) {
  return items.filter((o) => o.type == childrenType && o.parent == parent.oid);
}

export function getItemByOid(oid: string) {
  return constitucion.items[oid];
}

export function getParentOfType(item: ItemObject, ...parentTypes: ItemType[]) {
  let current = item;
  while (true) {
    if (!current.parent) {
      return undefined;
    }
    const parent = constitucion.items[current.parent];
    if (!parent) {
      return undefined;
    }
    if (parentTypes.includes(parent.type)) {
      return parent;
    }
    current = parent;
  }
}

export function isAncestorOf(ancestor: ItemObject, of: ItemObject) {
  let current = of;
  while (true) {
    if (!current.parent) {
      return false;
    }
    const parent = constitucion.items[current.parent];
    if (!parent) {
      return false;
    }
    if (parent.oid == ancestor.oid) {
      return true;
    }
    current = parent;
  }
}

export function getDescendantsOfType(
  parent: ItemObject,
  childrenType: ItemType
) {
  const candidates = getItemsOfType(childrenType);
  return candidates.filter((candidate) => isAncestorOf(parent, candidate));
}

export function getItemFragmentoId(item: ItemObject, appendSuffix = true) {
  let result = "";

  if (item.type == "inciso") {
    const parent = getParentOfType(item, "articulo", "transitoria");
    if (parent) {
      result = parent.type + ":" + (parent.ordinal ?? parent.key ?? item.oid);
    }
    const incisoUp1 = getParentOfType(item, "inciso");
    if (incisoUp1) {
      const incisoUp2 = getParentOfType(incisoUp1, "inciso");
      if (incisoUp2) {
        result += "." + (incisoUp2.key ?? "");
      }
      result += "." + (incisoUp1.key ?? "");
    }
    result += "." + (item.key ?? "");
  } else if (["preambulo", "transitorias"].includes(item.type)) {
    result = item.type;
  } else if (item.type == "titulo") {
    const capitulo = getParentOfType(item, "capitulo");
    if (capitulo) {
      result = `${capitulo.type}:${capitulo.ordinal}.${item.ordinal}`;
    }
  } else {
    result = item.type + ":" + (item.ordinal ?? item.key ?? item.oid);
  }

  if (appendSuffix && (item.type == "articulo" || item.type == "inciso")) {
    const capitulo = getParentOfType(item, "capitulo");
    const titulo = getParentOfType(item, "titulo");
    if (capitulo) {
      let suffix = `@${capitulo.type}:${capitulo.ordinal}`;
      if (titulo) {
        suffix += "." + titulo.ordinal;
      }
      result += suffix;
    }
  }

  return result;
}

export function isFragmentoIdMatch(fragmentoId: string, hash: string) {
  if (fragmentoId == "transitorias") {
    return fragmentoId == hash || hash.startsWith("transitoria:");
  }
  const parts = fragmentoId.split("@");
  if (parts.length > 1) {
    return (
      hash == fragmentoId || hash == parts[0] || hash.startsWith(parts[0] + ".")
    );
  }
  return hash == fragmentoId || hash.startsWith(fragmentoId + ".");
}

const TYPE_LABELS: Record<ItemType, string> = {
  capitulo: "capítulo",
  articulo: "artículo",
  titulo: "título",
  preambulo: "preámbulo",
  transitoria: "disposición transitoria",
  transitorias: "disposiciones transitorias",
  inciso: "inciso",
};

export function getItemTypeLabel(type: ItemType) {
  return TYPE_LABELS[type];
}

export function getItemLabel(item: ItemObject, withPrefix = true) {
  const label = firstToUpperCase(getItemTypeLabel(item.type));
  if (item.type == "capitulo") {
    return (withPrefix ? `${label} ${item.key} - ` : "") + item.label;
  } else if (item.type == "titulo") {
    return (withPrefix ? label + ": " : "") + item.label;
  } else if (item.type == "articulo") {
    return (withPrefix ? label + " " : "") + item.key;
  } else if (item.type == "preambulo") {
    return item.label as string;
  } else if (item.type == "transitorias") {
    return item.label as string;
  } else if (item.type == "transitoria") {
    return item.key as string;
  } else if (item.type == "inciso") {
    return item.key
      ? typeof item.key == "string"
        ? `letra ${item.key})`
        : "inciso " + item.key
      : "";
  }
  throw Error("Not implemented type " + item.type);
}

export function IncisoContextLabel(
  fragmento: ArticuloContext | TransitoriaContext
) {
  if (!fragmento.inciso) return "";
  if ("articulo" in fragmento) {
    return `${getItemLabel(fragmento.articulo)} ${getItemLabel(
      fragmento.inciso
    )}`;
  }
  return `${getItemLabel(fragmento.transitoria)} ${getItemLabel(
    fragmento.inciso
  )}`;
}

export function getArticuloContextCapituloTituloLabel(
  fragmento: ArticuloContext
) {
  return `${getItemLabel(fragmento.capitulo)}${
    fragmento.titulo ? " / " + getItemLabel(fragmento.titulo) : ""
  }`;
}

export function getCapituloArticulosDescription(capitulo: ItemObject) {
  const articulos = getDescendantsOfType(capitulo, "articulo");
  return `Artículos ${articulos[0].key} al ${
    articulos[articulos.length - 1].key
  }`;
}

export const NON_BREAKING_SPACE = "\u00a0";

export function getIncisoBullet(
  item: ItemObject,
  baseItem: ItemObject,
  indent = true
) {
  if (!item.key) {
    return "";
  }
  const level = item.level - baseItem.level - 1;
  return (
    (indent ? NON_BREAKING_SPACE.repeat(level * 4) : "") +
    item.key +
    ".))"[level] +
    " "
  );
}

export function getItemIncisosLines(item: ItemObject) {
  return getDescendantsOfType(item, "inciso").map(
    (inciso) => getIncisoBullet(inciso, item) + inciso.content
  );
}

export function getCapituloSobreLines(capitulo: ItemObject) {
  return getDescendantsOfType(capitulo, "articulo").map(
    (articulo) =>
      `${articulo.key}. ${firstToUpperCase(
        (articulo.data as CommonData).sobre
      )}`
  );
}

export type ArticuloContext = {
  articulo: ItemObject;
  capitulo: ItemObject;
  titulo?: ItemObject;
  inciso?: ItemObject;
};

export type TituloContext = {
  capitulo: ItemObject;
  titulo: ItemObject;
};

export type CapituloContext = {
  capitulo: ItemObject;
};

export type TransitoriaContext = {
  transitoria: ItemObject;
  inciso?: ItemObject;
};

export type FragmentoContext =
  | ArticuloContext
  | TituloContext
  | CapituloContext
  | TransitoriaContext;

export function parseFragmento(
  fragmentoId: string
): FragmentoContext | undefined {
  if (!fragmentoId.trim()) {
    return undefined;
  }
  let parts: string[];
  if (fragmentoId.lastIndexOf("@") != -1) {
    parts = fragmentoId.split("@")[0].split(":");
  } else {
    parts = fragmentoId.split(":");
  }

  if (parts[0] == "capitulo") {
    const subparts = parts[1].split(".");
    const capitulo = items.find(
      (o) => o.type == "capitulo" && String(o.ordinal) == subparts[0]
    );
    if (!capitulo) {
      throw new Error(`Not found fragmentoId ${fragmentoId}`);
    }
    const titulo = getParentOfType(capitulo, "titulo");

    return { capitulo, titulo };
  }

  if (parts[0] == "articulo") {
    const subparts = parts[1].split(".");
    const articulo = items.find(
      (o) => o.type == "articulo" && String(o.key) == subparts[0]
    );
    if (!articulo) {
      throw new Error(`Not found fragmentoId ${fragmentoId}`);
    }

    let inciso = findInciso(articulo, subparts, fragmentoId);

    const capitulo = getParentOfType(articulo, "capitulo");
    if (!capitulo) {
      throw new Error(`Not found capitulo for ${fragmentoId}`);
    }
    const titulo = getParentOfType(articulo, "titulo");

    return { articulo, capitulo, titulo, inciso };
  }

  if (parts[0] == "transitoria") {
    const subparts = parts[1].split(".");
    const transitoria = items.find(
      (o) => o.type == "transitoria" && String(o.ordinal) == subparts[0]
    );
    if (!transitoria) {
      throw new Error("Can't find transitoria " + parts[1]);
    }

    let inciso = findInciso(transitoria, subparts, fragmentoId);

    return { transitoria, inciso };
  }

  return undefined;
}

function findInciso(
  parent: ItemObject,
  subparts: string[],
  fragmentoId: string
) {
  let inciso: ItemObject | undefined;
  subparts.shift();
  while (subparts.length > 0) {
    const subpart = subparts.shift();
    inciso = getChildrenOfType(parent, "inciso").find(
      (i) => String(i.key ?? "") == (subpart ?? "")
    );
    if (!inciso) {
      throw new Error(`Not found inciso for ${fragmentoId}`);
    }
    parent = inciso;
  }
  return inciso;
}

export function classNames(
  ...classNames: (string | false | undefined | null)[]
) {
  return classNames
    .filter((c) => typeof c == "string")
    .flatMap((c) => String(c).split(" "))
    .join(" ");
}

export function getCurrentHash() {
  if (typeof window == "undefined") return "";
  return decodeURIComponent(window.location.hash).substring(1);
}

export function debounce<T extends Function>(func: T, wait = 100) {
  let h: NodeJS.Timeout | undefined;
  const callable = (...args: any) => {
    h && clearTimeout(h);
    h = setTimeout(() => func(...args), wait);
  };
  return callable as unknown as T;
}
