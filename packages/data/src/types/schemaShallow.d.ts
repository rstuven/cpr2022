export type ConstitucionShallow = Record<string, ItemObject>;

export type ItemType =
  | 'preambulo'
  | 'capitulo'
  | 'titulo'
  | 'articulo'
  | 'inciso'
  | 'transitoria';

export type ItemObject = {
  readonly oid: string;

  readonly type: ItemType;

  readonly level: number;

  readonly ordinal?: number;

  /** Parent oid */
  readonly parent?: string;

  readonly label?: string;

  readonly content?: string;

  /** Unique among the same with the same parent. */
  readonly key?: number | string;

  readonly data?: ArticuloData | TransitoriaData;
};

export type ArticuloData = {
  readonly pagina: number;
  readonly etiquetas: ReadonlyArray<string>;
  readonly sobre: string;
  readonly referencias?: ReadonlyArray<Referencia>;
};

export type Referencia = {
  readonly etiqueta: string;
  readonly url: string;
  readonly autor: string;
  readonly incisos?: ReadonlyArray<string>;
};

export type TransitoriaData = {
  readonly pagina: number;
  readonly etiquetas: ReadonlyArray<string>;
  readonly sobre?: string;
};
