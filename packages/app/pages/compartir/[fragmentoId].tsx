import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next/types";
import { CommonData } from "cpr2022-data/src/types/schemaShallow";
import MetaTags from "components/MetaTags";
import { createFragmentImage } from "lib/images";
import {
  ArticuloContext,
  firstToUpperCase,
  getArticuloContextCapituloTituloLabel,
  getItemFragmentoId,
  getItemLabel,
  getItemsOfType,
  parseFragmento,
  TransitoriaContext,
} from "lib/helpers";

const ShareRedirect = dynamic(
  () => import("../../components/ShareRedirect"),
  {
    ssr: false,
  }
);

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
  // return ["articulo:1", "transitoria:1"];
  return getItemsOfType("articulo", "transitoria").map((item) =>
    getItemFragmentoId(item, false)
  );
}

export default function Fragmento() {
  const router = useRouter();

  const { fragmentoId } = router.query;
  if (!fragmentoId || fragmentoId instanceof Array) {
    return null;
  }

  const { title, description, fragmentoIdFull } = getFragmento(fragmentoId);

  return (
    <div className="grid justify-center">
      <MetaTags
        title={title}
        description={description}
        image={`https://cpr2022.cl/images/fragmentos/${fragmentoId}.png?${new Date().getTime()}`}
        type="article"
      />
      <ShareRedirect fragmentoId={fragmentoIdFull} />
    </div>
  );
}

function getFragmento(fragmentoId: string) {
  const fragmento = parseFragmento(fragmentoId);

  if (fragmento && "articulo" in fragmento) {
    return getArticulo(fragmento);
  }

  if (fragmento && "transitoria" in fragmento) {
    return getTransitoria(fragmento);
  }

  throw new Error(`Can't handle fragmentoId ${fragmentoId}`);
}

function getArticulo(fragmento: ArticuloContext) {
  const title = `${getItemLabel(
    fragmento.articulo
  )} (${getArticuloContextCapituloTituloLabel(fragmento)})`;
  const description = firstToUpperCase(
    (fragmento.articulo.data as CommonData).sobre
  );
  const fragmentoIdFull = getItemFragmentoId(fragmento.articulo);
  return { title, description, fragmentoIdFull };
}

function getTransitoria(fragmento: TransitoriaContext) {
  const title = getItemLabel(fragmento.transitoria);
  const description = firstToUpperCase(
    (fragmento.transitoria.data as CommonData).sobre
  );
  const fragmentoIdFull = getItemFragmentoId(fragmento.transitoria);
  return { title, description, fragmentoIdFull };
}
