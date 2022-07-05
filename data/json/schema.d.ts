interface Constitucion {
  preambulo: string
  capitulos: Capitulo[]
  transitorias: Transitoria[]
}

interface Capitulo {
  capitulo?: string
  nombre: string
  articulos?: Articulo[]
  titulos?: Titulo[]
}

interface Titulo {
  titulo: string
  articulos: Articulo[]
}

interface Articulo {
  articulo: number
  incisos: Inciso[]
}

interface Transitoria {
  transitoria: string
  incisos: Inciso[]
}

interface Inciso {
  inciso?: number | string
  nivel: number
  texto: string
  incisos?: Inciso[]
}
