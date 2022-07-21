export type Constitucion = {
  readonly preambulo: string;
  readonly capitulos: ReadonlyArray<Capitulo>;
  readonly transitorias: ReadonlyArray<Transitoria>;
};

export type Capitulo = {
  readonly capitulo: string;
  readonly nombre: string;
  readonly numero: number;
  readonly articulos?: ReadonlyArray<Articulo>;
  readonly titulos?: ReadonlyArray<Titulo>;
};

export type Titulo = {
  readonly titulo: string;
  readonly articulos: ReadonlyArray<Articulo>;
};

export type Articulo = {
  readonly articulo: number;
  readonly incisos: ReadonlyArray<Inciso>;
};

export type Transitoria = {
  readonly transitoria: string;
  readonly numero: number;
  readonly incisos: ReadonlyArray<Inciso>;
};

export type Inciso = {
  readonly inciso?: number | string;
  readonly nivel: number;
  readonly texto: string;
  readonly incisos?: ReadonlyArray<Inciso>;
};