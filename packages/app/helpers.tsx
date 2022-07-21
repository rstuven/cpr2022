import { constitucion } from "cpr2022-data";
import {
  Articulo as ArticuloSchema,
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
  Transitoria as TransitoriaSchema,
} from "cpr2022-data/src/types/schema";

export type ArticuloContext = {
  articulo: ArticuloSchema;
  capitulo: CapituloSchema;
  titulo?: TituloSchema;
};

export type TituloContext = {
  capitulo: CapituloSchema;
  titulo: TituloSchema;
};

export type CapituloContext = {
  capitulo: CapituloSchema;
};

export type TransitoriaContext = {
  transitoria?: TransitoriaSchema;
};

export type FragmentContext =
  | ArticuloContext
  | TituloContext
  | CapituloContext
  | TransitoriaContext;

export function parseFragment(fragmentId: string): FragmentContext {
  const parts = fragmentId.split(":");

  if (parts[0] == "cap") {
    const subparts = parts[1].split(".");
    const capitulo = constitucion.capitulos.find(
      (c) => c.numero.toString() == subparts[0]
    );
    if (!capitulo) {
      throw new Error(`Not found fragmentId ${fragmentId}`);
    }

    const titulo =
      capitulo.titulos && capitulo.titulos[parseInt(subparts[1]) - 1];

    return { capitulo, titulo };
  }

  if (parts[0] == "art") {
    const numero = parseInt(parts[1]);
    const data = getArticuloContext(numero);
    if (!data) {
      throw new Error(`Not found fragmentId ${fragmentId}`);
    }
    return data;
  }

  if (parts[0] == "dt") {
    const numero = parseInt(parts[1]);
    const data = getTransitoria(numero);
    return { transitoria: data };
  }

  throw new Error(`Can't parse fragmentId ${fragmentId}`);
}

export function getTransitoria(numero: number) {
  return constitucion.transitorias.find((dt) => dt.numero == numero);
}

export function getArticuloContext(numero: number) {
  return getArticuloContexts().find(
    (context) => context.articulo.articulo == numero
  );
}

export function getArticuloContexts() {
  const result: ArticuloContext[] = [];
  constitucion.capitulos.forEach((capitulo) => {
    result.push(...getCapituloArticulos(capitulo));
  });
  return result;
}

export function getCapituloArticulos(capitulo: CapituloSchema) {
  const result: ArticuloContext[] = [];
  result.push(
    ...(capitulo.articulos || []).map((articulo) => ({
      articulo,
      capitulo,
    }))
  );
  capitulo.titulos?.forEach((titulo) => {
    result.push(
      ...titulo.articulos.map((articulo) => ({
        articulo,
        titulo,
        capitulo,
      }))
    );
  });
  return result;
}
