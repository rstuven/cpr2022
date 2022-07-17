type Constitucion = {
  readonly preambulo: string;
  readonly capitulos: ReadonlyArray<Capitulo>;
  readonly transitorias: ReadonlyArray<Transitoria>;
};

type Capitulo = {
  readonly capitulo?: string;
  readonly nombre: string;
  readonly articulos?: ReadonlyArray<Articulo>;
  readonly titulos?: ReadonlyArray<Titulo>;
};

type Titulo = {
  readonly titulo: string;
  readonly articulos: ReadonlyArray<Articulo>;
};

type Articulo = {
  readonly articulo: number;
  readonly incisos: ReadonlyArray<Inciso>;
};

type Transitoria = {
  readonly transitoria: string;
  readonly incisos: ReadonlyArray<Inciso>;
};

type Inciso = {
  readonly inciso?: number | string;
  readonly nivel: number;
  readonly texto: string;
  readonly incisos?: ReadonlyArray<Inciso>;
};
