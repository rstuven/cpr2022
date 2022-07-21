import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { constitucion } from "cpr2022-data";
import MetaTags from "components/Meta";
import { useScrollToHash } from "hooks/useScrollToHash";
import { useHashPath } from "hooks/useHash";
import {
  ArticuloContext,
  CapituloContext,
  getCapituloArticulos,
  parseFragment,
} from "helpers";

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

  const { Component, title, description } = getFragment(fragmentId);
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

function getFragment(fragmentId: string) {
  const fragment = parseFragment(fragmentId);

  if (fragment && "articulo" in fragment) {
    return getArticulo(fragment);
  }

  if (fragment && "capitulo" in fragment) {
    return getCapitulo(fragment);
  }

  throw new Error(`Can't handle fragmentId ${fragmentId}`);
}

function getCapitulo(fragment: CapituloContext) {
  const capitulo = fragment.capitulo;
  const articulos = getCapituloArticulos(capitulo);
  const title = `Capítulo ${capitulo.capitulo} ${capitulo.nombre}`;
  const description = `Artículos ${articulos[0].articulo.articulo} al ${
    articulos[articulos.length - 1].articulo.articulo
  }`;
  const Component = function Component() {
    return <Capitulo {...capitulo} />;
  };
  return { Component, title, description };
}

function getArticulo(data: ArticuloContext) {
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
