import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { constitucion } from "cpr2022-data";
import MetaTags from "components/MetaTags";
import { useScrollToHash } from "hooks/useScrollToHash";
import { useHashPath } from "hooks/useHash";
import {
  ArticuloContext,
  CapituloContext,
  firstToUpperCase,
  getCapituloArticulosDescription,
  parseFragmento as parseFragmento,
} from "lib/helpers";
import { createFragmentImage } from "lib/images";

const Capitulo = dynamic(() => import("../../components/Capitulo"), {
  ssr: false,
});
const Articulo = dynamic(() => import("../../components/Articulo"), {
  ssr: false,
});

export async function getStaticProps(context) {
  const fragmentoId = context.params.fragmentoId;
  const fragmento = parseFragmento(fragmentoId);
  if (!fragmento) {
    return {
      notFound: true,
    };
  }

  createFragmentImage(fragmentoId, fragmento);

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

  const paths = ids.map((fragmentoId) => ({
    params: { fragmentoId },
  }));

  return { paths, fallback: "blocking" };
}

export default function Fragmento() {
  const router = useRouter();
  useScrollToHash(150);
  const [hash, _] = useHashPath();

  const { fragmentoId } = router.query;
  if (!fragmentoId || fragmentoId instanceof Array) {
    return null;
  }

  const { Component, title, description } = getFragmento(fragmentoId);
  return (
    <div className="grid justify-center">
      <MetaTags
        title={title}
        description={description}
        image={`https://cpr2022.cl/images/fragmentos/${fragmentoId}.png?${new Date().getTime()}`}
        type="article"
      />
      <Link href={"/#" + (hash || fragmentoId)}>📘 Inicio</Link>
      <div className="prose">
        <Component />
      </div>
    </div>
  );
}

function getFragmento(fragmentoId: string) {
  const fragmento = parseFragmento(fragmentoId);

  if (fragmento && "articulo" in fragmento) {
    return getArticulo(fragmento);
  }

  if (fragmento && "capitulo" in fragmento) {
    return getCapitulo(fragmento);
  }

  throw new Error(`Can't handle fragmentoId ${fragmentoId}`);
}

function getCapitulo(fragmento: CapituloContext) {
  const capitulo = fragmento.capitulo;
  const title = `Capítulo ${capitulo.capitulo} ${capitulo.nombre}`;
  const description = getCapituloArticulosDescription(capitulo);
  const Component = function Component() {
    return <Capitulo {...capitulo} />;
  };
  return { Component, title, description };
}

function getArticulo(data: ArticuloContext) {
  const title = `Artículo ${data.articulo.articulo} (Capítulo ${
    data.capitulo.capitulo
  } ${data.capitulo.nombre}${
    data.titulo ? ` - Título: ${data.titulo.titulo}` : ""
  })`;
  const description = firstToUpperCase(data.articulo.sobre);
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
