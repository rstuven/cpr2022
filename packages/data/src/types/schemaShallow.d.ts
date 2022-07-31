export type ConstitucionShallow = {
  readonly items: Record<string, ItemObject>;
  readonly enlaces: ReadonlyArray<Enlace>;
  readonly glossary: ReadonlyArray<GlossaryEntry>;
};

export type ItemType =
  | 'preambulo'
  | 'capitulo'
  | 'titulo'
  | 'articulo'
  | 'inciso'
  | 'transitorias'
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

  readonly data?: CommonData;
};

export type CommonData = {
  readonly pagina: number;
  readonly sobre: string;
  readonly etiquetas: ReadonlyArray<string>;
};

export type Enlace = {
  readonly desde: string;
  readonly hacia: string;
  readonly texto?: string;
  readonly etiqueta?: string;
  readonly autor?: string;
};

export type GlossaryEntry = {
  readonly title: string;
  readonly ignoreCase: boolean;
  readonly aliases: ReadonlyArray<string>;
  readonly content: string;
  readonly author: string;
  readonly source: string;
};
