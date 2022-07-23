import { useContext } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next/types";
import { ArticuloData } from "cpr2022-data/src/types/schemaShallow";
import { HashContext, HashProvider } from "components/HashProvider";
import MetaTags from "components/MetaTags";
import { useHashScrolling } from "hooks/useHash";
import { createFragmentImage } from "lib/images";
import {
  ArticuloContext,
  CapituloContext,
  firstToUpperCase,
  getArticuloContextCapituloTituloLabel,
  getCapituloArticulosDescription,
  getItemFragmentoId,
  getItemLabel,
  getItemsOfType,
  parseFragmento,
} from "lib/helpers";

const Capitulo = dynamic(() => import("../../components/Capitulo"), {
  ssr: false,
});
const Articulo = dynamic(() => import("../../components/Articulo"), {
  ssr: false,
});

export async function getStaticProps(context: GetStaticPropsContext) {
  const fragmentoId = context.params?.fragmentoId;
  if (typeof fragmentoId != "string") {
    throw Error("context.params.fragmentoId");
  }
  const fragmento = parseFragmento(fragmentoId);
  if (!fragmento) {
    return {
      notFound: true,
    };
  }

  await createFragmentImage(fragmentoId, fragmento);

  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = getFragmentoIds().map((fragmentoId) => ({
    params: { fragmentoId },
  }));

  return { paths, fallback: "blocking" };
}

function getFragmentoIds() {
  // return ["articulo:1". "capitulo:1"];
  return getItemsOfType("capitulo")
    .concat(getItemsOfType("articulo"))
    .map((item) => getItemFragmentoId(item, false));
}

export default function Fragmento() {
  const router = useRouter();
  useHashScrolling(150, "auto");
  const hash = useContext(HashContext);

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
      <HashProvider>
        <div className="prose font-ConvencionFJ">
          <Component />
        </div>
      </HashProvider>
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
  const title = getItemLabel(capitulo);
  const description = getCapituloArticulosDescription(capitulo);
  const Component = function Component() {
    return <Capitulo item={capitulo} />;
  };
  return { Component, title, description };
}

function getArticulo(fragmento: ArticuloContext) {
  const title = `${getItemLabel(
    fragmento.articulo
  )} (${getArticuloContextCapituloTituloLabel(fragmento)})`;
  const description = firstToUpperCase(
    (fragmento.articulo.data as ArticuloData).sobre
  );
  const Component = function Component() {
    return (
      <div>
        <h2 className="my-3">{getItemLabel(fragmento.capitulo)}</h2>
        {fragmento.titulo && (
          <h3 className="my-3">{getItemLabel(fragmento.titulo, false)}</h3>
        )}
        <Articulo item={fragmento.articulo} />
      </div>
    );
  };
  return { Component, title, description };
}
