import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { constitucion } from "cpr2022-data";
import {
  Articulo as ArticuloSchema,
  Capitulo as CapituloSchema,
  Titulo as TituloSchema,
  Constitucion as ConstitucionSchema,
} from "cpr2022-data/src/types/schema";
import MetaTags from "components/Meta";
import { useScrollToHash } from "hooks/useScrollToHash";
import { useHashPath } from "hooks/useHash";

const Capitulo = dynamic(() => import("../../components/Capitulo"), {
  ssr: false,
});
const Articulo = dynamic(() => import("../../components/Articulo"), {
  ssr: false,
});

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const ids: string[] = [];
  constitucion.capitulos.forEach((cap) => {
    ids.push("cap:" + cap.numero);
    cap.articulos?.forEach((art) => {
      ids.push("art:" + art.articulo);
    });
    cap.titulos?.forEach((titulo) => {
      titulo.articulos.forEach((art) => {
        ids.push("art:" + art.articulo);
      });
    });
  });

  const paths = ids.map((fragmentId) => ({
    params: { fragmentId },
  }));

  return { paths, fallback: "blocking" };
}

export default function Fragmento() {
  const router = useRouter();
  useScrollToHash(150);
  const [hash, _] = useHashPath();

  const { fragmentId } = router.query;
  if (!fragmentId || fragmentId instanceof Array) {
    return null;
  }

  const { Component, title, description } = getFragment(
    fragmentId,
    constitucion
  );
  return (
    <div className="grid justify-center">
      <MetaTags title={title} description={description} type="article" />
      <Link href={"/#" + (hash || fragmentId)}>📘 Inicio</Link>
      <div className="prose">
        <Component />
      </div>
    </div>
  );
}

function getFragment(fragmentId: string, constitucion: ConstitucionSchema) {
  const parts = fragmentId.split(":");

  if (parts[0] == "cap") {
    return getCapitulo(constitucion, parts, fragmentId);
  }

  if (parts[0] == "art") {
    return getArticulo(constitucion, parts, fragmentId);
  }

  throw new Error(`Can't handle fragmentId ${fragmentId}`);
}

function getCapitulo(
  constitucion: ConstitucionSchema,
  parts: string[],
  fragmentId: string
) {
  const data = constitucion.capitulos.find(
    (c) => c.numero.toString() == parts[1]
  );
  if (!data) {
    throw new Error(`Not found fragmentId ${fragmentId}`);
  }
  const articulos = getCapituloArticulos(data);
  const title = `Capítulo ${data.capitulo} ${data.nombre}`;
  const description = `Artículos ${articulos[0].articulo.articulo} al ${
    articulos[articulos.length - 1].articulo.articulo
  }`;
  const Component = function Component() {
    return <Capitulo {...data} />;
  };
  return { Component, title, description };
}

type ArticuloContext = {
  articulo: ArticuloSchema;
  capitulo: CapituloSchema;
  titulo?: TituloSchema;
};

function getArticulo(
  constitucion: ConstitucionSchema,
  parts: string[],
  fragmentId: string
) {
  const articulos: ArticuloContext[] = [];
  constitucion.capitulos.forEach((capitulo) => {
    articulos.push(...getCapituloArticulos(capitulo));
  });
  const data = articulos.find(
    (c) => c.articulo.articulo.toString() == parts[1]
  );
  if (!data) {
    throw new Error(`Not found fragmentId ${fragmentId}`);
  }
  const title = `Artículo ${data.articulo.articulo} (${
    data.titulo ? `§ ${data.titulo.titulo}, ` : ""
  }Cap. ${data.capitulo.capitulo} ${data.capitulo.nombre})`;
  const description = data.articulo.incisos[0].texto;
  const Component = function Component() {
    return (
      <div>
        <h2 className="my-3">
          Capítulo {data.capitulo.capitulo} {data.capitulo.nombre}
        </h2>
        {data.titulo && <h3 className="my-3">{data.titulo.titulo}</h3>}
        <Articulo {...data.articulo} />
      </div>
    );
  };
  return { Component, title, description };
}

function getCapituloArticulos(capitulo: CapituloSchema) {
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
