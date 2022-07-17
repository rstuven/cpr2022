import fs from "fs";

const salida1 = "data/json/constitucion.json";
const salida2 = "packages/data/src/constitucion.json";

const preambulo = fs.readFileSync("data/markdown/preambulo.md", "utf8");
const capitulos = itemsDesdeMarkdown("data/markdown/capitulos.md");
const transitorias = itemsDesdeMarkdown("data/markdown/transitorias.md");
const constitucion = {
  preambulo,
  capitulos,
  transitorias,
};
fs.writeFileSync(salida1, JSON.stringify(constitucion, null, 2));
fs.writeFileSync(salida2, JSON.stringify(constitucion, null, 2));

function itemsDesdeMarkdown(entrada) {
  const markdown = fs.readFileSync(entrada, "utf8");

  const items = [];
  let capitulo = null;
  let capituloNumero = 1;
  let transitoria = null;
  let transitoriaNumero = 1;
  let titulo = null;
  let articulo = null;
  let incisoNivel = [];
  let incisoPrevio = null;
  let incisos = [];

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
        };
        titulo = null;
        items.push(capitulo);
      } else if (linea.startsWith("### ")) {
        const parts = linea.match(/### (.*)/);
        titulo = {
          titulo: parts[1],
          articulos: [],
        };
        if (capitulo.titulos == null) {
          capitulo.titulos = [];
        }
        capitulo.titulos.push(titulo);
      } else if (linea.startsWith("#### Artículo ")) {
        articulo = {
          articulo: parseInt(linea.split(" ")[2]),
          incisos: [],
        };
        incisoPrevio = null;
        incisoNivel = [];
        if (titulo == null) {
          if (capitulo.articulos == null) {
            capitulo.articulos = [];
          }
          capitulo.articulos.push(articulo);
        } else {
          titulo.articulos.push(articulo);
        }
      } else if (linea.startsWith("#### ")) {
        const parts = linea.match(/#### (.*)/);
        transitoria = {
          transitoria: parts[1],
          numero: transitoriaNumero++,
        };
        incisoPrevio = null;
        incisoNivel = [];
        items.push(transitoria);
      } else {
        const inciso = parseLinea(linea);
        const contenedor = articulo || transitoria;
        if (incisoPrevio != null) {
          if (inciso.nivel > incisoPrevio.nivel) {
            incisoNivel.push(incisoPrevio);
            if (incisoPrevio.incisos == null) {
              incisoPrevio.incisos = [];
            }
            incisos = incisoPrevio.incisos;
          } else if (inciso.nivel < incisoPrevio.nivel) {
            incisoPrevio = incisoNivel.pop();
            if (incisoPrevio) {
              incisos = incisoPrevio.incisos;
            } else {
              incisos = contenedor.incisos;
            }
          }
        } else if (incisoNivel.length == 0) {
          if (contenedor.incisos == null) {
            contenedor.incisos = [];
          }
          incisos = contenedor.incisos;
        }
        inciso.texto = inciso.texto.replace(/<br>/g, "\n");
        incisos.push(inciso);
        incisoPrevio = inciso;
      }
    });
  return items;
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
