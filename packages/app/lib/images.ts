import fs from "fs";
import { createCanvas, registerFont, CanvasRenderingContext2D } from "canvas";
import {
  ArticuloContext,
  CapituloContext,
  FragmentoContext,
  getArticuloContextCapituloTituloLabel,
  getArticuloIncisosLines,
  getArticuloLabel,
  getCapituloArticulosDescription,
  getCapituloLabel,
  getCapituloSobreLines,
} from "./helpers";

const accentColor = "#34005f";
const dimmedColor = "#89744f";

type Box = {
  left: number;
  width: number;
  top: number;
  bottom: number;
};

export function createFragmentImage(
  fragmentoId: string,
  fragmento: FragmentoContext
) {
  registerFont("./public/fonts/ConvencionFJ-Regular.ttf", {
    family: "ConvencionFJ",
  });

  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const { bottom: headerBottom } = renderHeader(ctx);

  const padding = 20;
  const box: Box = {
    left: padding,
    width: canvas.width - 2 * padding,
    top: headerBottom + padding / 2,
    bottom: canvas.height - 65,
  };

  "articulo" in fragmento
    ? renderArticulo(ctx, fragmento, box)
    : "capitulo" in fragmento && renderCapitulo(ctx, fragmento, box);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(`public/images/fragmentos/${fragmentoId}.png`, buffer);
}

function renderHeader(ctx: CanvasRenderingContext2D) {
  const height = 70;

  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 0, ctx.canvas.width, height);

  ctx.fillStyle = "white";
  ctx.font = '1.77rem "ConvencionFJ"';

  renderText({
    ctx,
    text: "Propuesta de Constitución Política de la República de Chile 2022",
    left: 20,
    top: 10,
    width: ctx.canvas.width,
  });

  return { bottom: height };
}

function renderArticulo(
  ctx: CanvasRenderingContext2D,
  fragmento: ArticuloContext,
  box: Box
) {
  ctx.fillStyle = accentColor;
  ctx.font = '1rem "ConvencionFJ"';

  const { bottom: containerBottom } = renderText({
    ctx,
    text: getArticuloContextCapituloTituloLabel(fragmento),
    left: box.left + 2,
    top: box.top,
    width: box.width,
    lineHeight: 30,
  });

  const titleTop = containerBottom + 5;

  ctx.fillStyle = "black";
  ctx.font = '2rem "ConvencionFJ"';

  const { lastWidth: titleLastWidth } = renderText({
    ctx,
    text: getArticuloLabel(fragmento.articulo),
    left: box.left,
    top: titleTop,
    width: box.width,
    lineHeight: 40,
  });

  ctx.fillStyle = dimmedColor;
  ctx.font = '1.4rem "ConvencionFJ"';

  const { bottom: titleBottom } = renderText({
    ctx,
    text: `sobre ${fragmento.articulo.sobre}`,
    left: box.left + titleLastWidth + 10,
    top: titleTop + 13,
    width: box.width - titleLastWidth - 20,
    lineHeight: 40,
  });

  const lineHeight = 36;

  ctx.fillStyle = "black";
  ctx.font = '1.3rem "ConvencionFJ"';
  const {
    incomplete,
    lastWidth: lastContentWidth,
    lastPositionY: lastContentPositionY,
  } = renderText({
    ctx,
    text: getArticuloIncisosLines(fragmento.articulo).join("\n"),
    left: box.left,
    top: titleBottom + 20,
    width: box.width,
    lineHeight,
    maxBottom: box.bottom,
  });

  if (incomplete) {
    ctx.fillStyle = dimmedColor;
    renderText({
      ctx,
      text: "(...)",
      left: box.left + lastContentWidth,
      top: lastContentPositionY,
      width: box.width,
      lineHeight,
    });
  }

  renderFooter(ctx, "artículo", incomplete, box);
}

function renderCapitulo(
  ctx: CanvasRenderingContext2D,
  fragmento: CapituloContext,
  box: Box
) {
  ctx.fillStyle = "black";
  ctx.font = '2rem "ConvencionFJ"';

  const { bottom: titleBottom } = renderText({
    ctx,
    text: getCapituloLabel(fragmento.capitulo),
    left: box.left,
    top: box.top,
    width: box.width,
    lineHeight: 40,
  });

  ctx.fillStyle = accentColor;
  ctx.font = '1rem "ConvencionFJ"';

  const { bottom: rangeBottom } = renderText({
    ctx,
    text: getCapituloArticulosDescription(fragmento.capitulo),
    left: box.left + 5,
    top: titleBottom + 10,
    width: box.width,
    lineHeight: 30,
  });

  const lineHeight = 38;
  const contentLeft = box.left + 220;

  ctx.fillStyle = "black";
  ctx.font = '1.4rem "ConvencionFJ"';
  const { incomplete, lastPositionY: lastContentPositionY } = renderText({
    ctx,
    text: getCapituloSobreLines(fragmento.capitulo).join("\n"),
    left: contentLeft,
    top: rangeBottom,
    width: box.width,
    lineHeight,
    maxBottom: box.bottom,
  });

  if (incomplete) {
    ctx.fillStyle = dimmedColor;
    renderText({
      ctx,
      text: "...y más",
      left: contentLeft + 5,
      top: lastContentPositionY + 33,
      width: box.width,
      lineHeight,
    });
  }

  renderFooter(ctx, "capítulo", false, box);
}

function renderFooter(
  ctx: CanvasRenderingContext2D,
  item: string,
  incomplete: boolean,
  box: Box
) {
  ctx.fillStyle = accentColor;
  ctx.font = '1.4rem "ConvencionFJ"';

  const lineHeight = 38;
  const footerText = `Lee este ${item} ${
    incomplete ? "completo y " : ""
  }en contexto visitando cpr2022.cl`;

  renderText({
    ctx,
    text: footerText,
    left: box.left,
    top: ctx.canvas.height - lineHeight - 10,
    width: box.width,
    lineHeight,
    centered: true,
  });
}

function renderText({
  ctx,
  left,
  top,
  text,
  width,
  lineHeight,
  maxLines,
  maxBottom,
  centered,
}: {
  ctx: CanvasRenderingContext2D;
  left: number;
  top: number;
  text: string;
  lineHeight?: number;
  width: number;
  maxLines?: number;
  maxBottom?: number;
  centered?: boolean;
}) {
  const lines = getLines(ctx, text, width);
  let totalHeight = 0;
  let lastWidth = width;
  let lastPositionY = 0;
  let height = 0;
  let incomplete = false;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (maxLines && index >= maxLines) {
      incomplete = true;
      break;
    }
    const metrics: any = ctx.measureText(line);
    height = metrics.emHeightAscent + metrics.emHeightDescent;

    const positionY = top + index * (lineHeight ?? height);
    if (maxBottom && positionY + height > maxBottom) {
      incomplete = true;
      break;
    }
    const positionX = centered ? left + (width - metrics.width) / 2 : left;

    ctx.fillText(line, positionX, positionY + height);

    lastPositionY = positionY;
    lastWidth = metrics.width;
    totalHeight += lineHeight ?? height;
  }

  return {
    lastWidth,
    lastPositionY,
    bottom: top + totalHeight + height - (lineHeight ?? height),
    incomplete,
  };
}

function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
) {
  var words: (string | null)[] = text.split(" ");
  var lines = [];
  let currentLine: string | undefined;

  while (words.length) {
    let word = words.shift();
    if (word == null) {
      if (currentLine != null) lines.push(currentLine);
      currentLine = undefined;
      continue;
    }
    const sublines = word.split("\n");
    if (sublines.length > 1) {
      word = sublines.shift() as string;
      sublines.reverse();
      sublines.forEach((subline) => {
        words.unshift(subline);
        words.unshift(null);
      });
    }
    const { width } = ctx.measureText(currentLine + " " + word);
    if (width < maxWidth) {
      if (currentLine == null) {
        currentLine = word;
      } else {
        currentLine += " " + word;
      }
    } else {
      if (currentLine != null) lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine != null) lines.push(currentLine);
  return lines;
}
