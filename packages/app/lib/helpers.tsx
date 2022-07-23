import { constitucionShallow as constitucion } from "cpr2022-data";
import {
  ArticuloData,
  ItemObject,
  ItemType,
} from "cpr2022-data/src/types/schemaShallow";

export function firstToUpperCase(text: string) {
  return text[0].toUpperCase() + text.substring(1);
}

const items = Object.values(constitucion);

export function getItemsOfType(type: ItemType) {
  return items.filter((o) => o.type == type);
}

export function getChildren(parent: ItemObject) {
  return items.filter((o) => o.parent == parent.oid);
}

export function getChildrenOfType(parent: ItemObject, childrenType: ItemType) {
  return items.filter((o) => o.type == childrenType && o.parent == parent.oid);
}

export function getParentOfType(item: ItemObject, parentType: ItemType) {
  let current = item;
  while (true) {
    if (!current.parent) {
      return undefined;
    }
    const parent = constitucion[current.parent];
    if (!parent) {
      return undefined;
    }
    if (parent.type == parentType) {
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
    const parent = constitucion[current.parent];
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

export function getItemFragmentoId(item: ItemObject) {
  return (
    item.type.substring(0, 3) + ":" + (item.ordinal ?? item.key ?? item.oid)
  );
}

export function getItemLabel(item: ItemObject, withPrefix = true) {
  if (item.type == "capitulo") {
    return (withPrefix ? `Capítulo ${item.key} - ` : "") + item.label;
  } else if (item.type == "titulo") {
    return (withPrefix ? "Título: " : "") + item.label;
  } else if (item.type == "articulo") {
    return (withPrefix ? "Artículo " : "") + item.key;
  }
  throw Error("Not implemented type " + item.type);
}

export function getArticuloContextCapituloTituloLabel(
  fragmento: ArticuloContext
) {
  return `${getItemLabel(fragmento.capitulo)}${
    fragmento.titulo ? " - " + getItemLabel(fragmento.titulo) : ""
  }`;
}

export function getCapituloArticulosDescription(capitulo: ItemObject) {
  const articulos = getDescendantsOfType(capitulo, "articulo");
  return `Artículos ${articulos[0].key} al ${
    articulos[articulos.length - 1].key
  }`;
}

export const NON_BREAKING_SPACE = "\u00a0";

export function getIncisoBullet(item: ItemObject, baseItem: ItemObject) {
  if (!item.key) {
    return "";
  }
  const level = item.level - baseItem.level - 1;
  return NON_BREAKING_SPACE.repeat(level * 4) + item.key + ".))"[level] + " ";
}

export function getArticuloIncisosLines(articulo: ItemObject) {
  return getDescendantsOfType(articulo, "inciso").map(
    (inciso) => getIncisoBullet(inciso, articulo) + inciso.content
  );
}

export function getCapituloSobreLines(capitulo: ItemObject) {
  return getDescendantsOfType(capitulo, "articulo").map(
    (articulo) =>
      `${articulo.key}. ${firstToUpperCase(
        (articulo.data as ArticuloData).sobre
      )}`
  );
}

export function getPreambulo() {
  const item = items.find((o) => o.type == "preambulo");
  return item?.content ?? "";
}

export type ArticuloContext = {
  articulo: ItemObject;
  capitulo: ItemObject;
  titulo?: ItemObject;
};

export type TituloContext = {
  capitulo: ItemObject;
  titulo: ItemObject;
};

export type CapituloContext = {
  capitulo: ItemObject;
};

export type TransitoriaContext = {
  transitoria?: ItemObject;
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
  const parts = fragmentoId.split(":");

  if (parts[0] == "cap") {
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

  if (parts[0] == "art") {
    const subparts = parts[1].split(".");

    const articulo = items.find(
      (o) => o.type == "articulo" && String(o.key) == subparts[0]
    );
    if (!articulo) {
      throw new Error(`Not found fragmentoId ${fragmentoId}`);
    }

    const capitulo = getParentOfType(articulo, "capitulo");
    if (!capitulo) {
      throw new Error(`Not found capitulo for ${fragmentoId}`);
    }
    const titulo = getParentOfType(articulo, "titulo");

    return { articulo, capitulo, titulo };
  }

  if (parts[0] == "dt") {
    const transitoria = items.find(
      (o) => o.type == "transitoria" && String(o.ordinal) == parts[1]
    );
    return { transitoria };
  }

  if (parts[0] == "preambulo") {
    return undefined;
  }

  throw new Error(`Can't parse fragmentoId ${fragmentoId}`);
}
