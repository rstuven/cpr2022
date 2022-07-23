import fs from "fs";

const outputDirData = "data/json/";
const outputDirSrc = "packages/data/src/";
const outputFormatNest = "constitucion.nested.json";
const outputFormatShallow = "constitucion.shallow.json";

let nextId = 0;

const metadatos = JSON.parse(
  fs.readFileSync("data/json/metadatos.json", "utf8")
);
const preambulo = fs.readFileSync("data/markdown/preambulo.md", "utf8");
const [capitulos, capitulosShallow] = itemsDesdeMarkdown(
  "data/markdown/capitulos.md"
);
const [transitorias, transitoriasShallow] = itemsDesdeMarkdown(
  "data/markdown/transitorias.md"
);
const constitucionNested = {
  preambulo,
  capitulos,
  transitorias,
};

const constitucionShallow = {
  ["0"]: {
    oid: "0",
    type: "preambulo",
    level: 0,
    content: preambulo,
  },
  ...capitulosShallow,
  ...transitoriasShallow,
};

saveJson(outputDirData + outputFormatNest, constitucionNested);
saveJson(outputDirSrc + outputFormatNest, constitucionNested);
saveJson(outputDirData + outputFormatShallow, constitucionShallow);
saveJson(outputDirSrc + outputFormatShallow, constitucionShallow);

function saveJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function itemsDesdeMarkdown(entrada) {
  const markdown = fs.readFileSync(entrada, "utf8");

  const nestedRoots = [];
  let capitulo = null;
  let capituloNumero = 1;
  let transitoria = null;
  let transitoriaNumero = 1;
  let titulo = null;
  let tituloNumero = 1;
  let articulo = null;
  let incisoNivel = [];
  let incisoPrevio = null;

  /** @type {{ oid: number, type: string, level: number, key?: string, parent?: string, label?: string, data?: object }[]} */
  const shallowItems = {};

  /** @type {object | undefined} */
  let parentIncisos;

  markdown
    .split("\n")
    .filter((linea) => linea.trim() != "")
    .forEach((linea) => {
      if (linea.startsWith("## Capítulo ")) {
        const parts = linea.match(/## Cap\u00EDtulo ([IVX]+) (.*)/);
        capitulo = {
          capitulo: parts[1],
          nombre: parts[2],
          numero: capituloNumero++,
          __oid: String(++nextId),
        };
        titulo = null;
        tituloNumero = 1;
        nestedRoots.push(capitulo);
        shallowItems[capitulo.__oid] = {
          oid: capitulo.__oid,
          type: "capitulo",
          level: 0,
          key: capitulo.capitulo,
          ordinal: capitulo.numero,
          label: capitulo.nombre,
        };
      } else if (linea.startsWith("### ")) {
        const parts = linea.match(/### (.*)/);
        titulo = {
          titulo: parts[1],
          numero: tituloNumero++,
          articulos: [],
          __oid: String(++nextId),
        };
        if (capitulo.titulos == null) {
          capitulo.titulos = [];
        }
        capitulo.titulos.push(titulo);
        shallowItems[titulo.__oid] = {
          oid: titulo.__oid,
          type: "titulo",
          level: 1,
          parent: capitulo.__oid,
          ordinal: titulo.numero,
          label: titulo.titulo,
        };
      } else if (linea.startsWith("#### Artículo ")) {
        const articuloNumeroActual = parseInt(linea.split(" ")[2]);
        const meta = metadatos.find((m) => m.articulo == articuloNumeroActual);
        const data = {
          pagina: meta.pagina,
          etiquetas: meta.etiquetas || [],
          referencias: meta.referencias,
          sobre: meta.sobre,
        };
        articulo = {
          articulo: articuloNumeroActual,
          incisos: [],
          ...data,
          __oid: String(++nextId),
        };
        const item = (shallowItems[articulo.__oid] = {
          oid: articulo.__oid,
          type: "articulo",
          key: articulo.articulo,
          data,
        });

        incisoPrevio = null;
        incisoNivel = [];
        if (titulo == null) {
          if (capitulo.articulos == null) {
            capitulo.articulos = [];
          }
          capitulo.articulos.push(articulo);
          item.parent = capitulo.__oid;
          item.level = 1;
        } else {
          titulo.articulos.push(articulo);
          item.parent = titulo.__oid;
          item.level = 2;
        }
      } else if (linea.startsWith("#### ")) {
        const parts = linea.match(/#### (.*)/);
        const transitoriaNumeroActual = transitoriaNumero++;
        const meta = metadatos.find(
          (m) => m.transitoria == transitoriaNumeroActual
        );
        const data = {
          pagina: meta.pagina,
          etiquetas: meta.etiquetas || [],
          sobre: meta.sobre,
        };
        transitoria = {
          transitoria: parts[1],
          numero: transitoriaNumeroActual,
          ...data,
          __oid: String(++nextId),
        };
        incisoPrevio = null;
        incisoNivel = [];
        nestedRoots.push(transitoria);
        shallowItems[transitoria.__oid] = {
          oid: transitoria.__oid,
          type: "transitoria",
          level: 0,
          key: transitoria.transitoria,
          ordinal: transitoria.numero,
          data,
        };
      } else {
        const inciso = parseLinea(linea);
        const contenedor = articulo || transitoria;
        if (incisoPrevio != null) {
          if (inciso.nivel > incisoPrevio.nivel) {
            incisoNivel.push(incisoPrevio);
            if (incisoPrevio.incisos == null) {
              incisoPrevio.incisos = [];
            }
            parentIncisos = incisoPrevio;
          } else if (inciso.nivel < incisoPrevio.nivel) {
            incisoPrevio = incisoNivel.pop();
            if (incisoNivel.length >= 1) {
              parentIncisos = incisoNivel[incisoNivel.length - 1];
            } else {
              parentIncisos = contenedor;
            }
          }
        } else if (incisoNivel.length == 0) {
          if (contenedor.incisos == null) {
            contenedor.incisos = [];
          }
          parentIncisos = contenedor;
        }
        inciso.texto = inciso.texto.replace(/<br>/g, "\n");
        inciso.__oid = String(++nextId);
        parentIncisos.incisos.push(inciso);
        shallowItems[inciso.__oid] = {
          oid: inciso.__oid,
          type: "inciso",
          key: inciso.inciso,
          level: shallowItems[parentIncisos.__oid].level + 1,
          parent: parentIncisos.__oid,
          content: inciso.texto,
        };
        incisoPrevio = inciso;
      }
    });

  nestedRoots.forEach((root) => {
    delete root.__oid;
    const articulos = root.articulos;
    cleanArticulos(articulos);
    cleanIncisos(root.incisos);
    root.titulos?.forEach((titulo) => {
      delete titulo.__oid;
      cleanArticulos(titulo.articulos);
    });
  });

  return [nestedRoots, shallowItems];
}

function cleanArticulos(articulos) {
  articulos?.forEach((art) => {
    delete art.__oid;
    const incisos = art.incisos;
    cleanIncisos(incisos);
  });
}

function cleanIncisos(incisos) {
  incisos?.forEach((i) => {
    delete i.__oid;
    i.incisos?.forEach((i2) => {
      delete i2.__oid;
      i2.incisos?.forEach((i3) => {
        delete i3.__oid;
      });
    });
  });
}

function parseLinea(linea) {
  const nivel1Match = linea.match(/^(\d+)\. /);
  if (nivel1Match) {
    return {
      inciso: parseInt(nivel1Match[1]),
      nivel: 1,
      texto: linea.substring(nivel1Match[0].length),
    };
  }

  // Markdown no soporta listas de letras, así que adoptamos convención guión+letra+paréntesis
  const nivel2Match = linea.match(/^(\s*-\s)?([a-z,\u00F1])\) /);
  if (nivel2Match) {
    return {
      inciso: nivel2Match[2],
      nivel: 2,
      texto: linea.substring(nivel2Match[0].length),
    };
  }

  const nivel3Match = linea.match(/^\s*(\d+)\) /);
  if (nivel3Match) {
    return {
      inciso: parseInt(nivel3Match[1]),
      nivel: 3,
      texto: linea.substring(nivel3Match[0].length),
    };
  }

  return {
    nivel: 1,
    texto: linea,
  };
}
