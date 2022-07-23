import { constitucion } from "cpr2022-data";
import {
  Articulo as ArticuloSchema,
  Capitulo as CapituloSchema,
  Inciso as IncisoSchema,
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
    const capitulo = constitucion.capitulos.find(
      (c) => c.numero.toString() == subparts[0]
    );
    if (!capitulo) {
      throw new Error(`Not found fragmentoId ${fragmentoId}`);
    }

    const titulo =
      capitulo.titulos && capitulo.titulos[parseInt(subparts[1]) - 1];

    return { capitulo, titulo };
  }

  if (parts[0] == "art") {
    const numero = parseInt(parts[1]);
    const data = getArticuloContext(numero);
    if (!data) {
      throw new Error(`Not found fragmentoId ${fragmentoId}`);
    }
    return data;
  }

  if (parts[0] == "dt") {
    const numero = parseInt(parts[1]);
    const data = getTransitoria(numero);
    return { transitoria: data };
  }

  throw new Error(`Can't parse fragmentoId ${fragmentoId}`);
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

export function firstToUpperCase(text: string) {
  return text[0].toUpperCase() + text.substring(1);
}

export function getCapituloArticulosDescription(capitulo: CapituloSchema) {
  const articulos = getCapituloArticulos(capitulo);
  return `Artículos ${articulos[0].articulo.articulo} al ${
    articulos[articulos.length - 1].articulo.articulo
  }`;
}

export const NON_BREAKING_SPACE = "\u00a0";

export function getIncisoBullet(inciso: IncisoSchema) {
  return inciso.inciso
    ? NON_BREAKING_SPACE.repeat(inciso.nivel * 4) +
        inciso.inciso +
        ".))"[inciso.nivel - 1] +
        " "
    : "";
}

export function getArticuloIncisosLines(articulo: ArticuloSchema) {
  return getIncisosLines(articulo.incisos);
}

export function getIncisosLines(
  incisos?: ReadonlyArray<IncisoSchema>
): string[] {
  if (!incisos) return [];
  return incisos.flatMap((inciso) => [
    getIncisoBullet(inciso) + inciso.texto,
    ...getIncisosLines(inciso.incisos),
  ]);
}

export function getCapituloSobreLines(capitulo: CapituloSchema) {
  return [
    getCapituloArticulosSobreLines(capitulo.articulos),
    ...(!capitulo.titulos
      ? []
      : capitulo.titulos?.flatMap((titulo) =>
          getCapituloArticulosSobreLines(titulo.articulos)
        )),
  ].flat();
}

export function getCapituloArticulosSobreLines(
  articulos?: ReadonlyArray<ArticuloSchema>
) {
  if (!articulos) return [];
  return articulos.map((articulo) => `${articulo.articulo}. ${firstToUpperCase(articulo.sobre)}`);
}
