import Image, { ImageLoader } from "next/image";
import { IconType } from "react-icons";
import { BsWhatsapp, BsTwitter, BsTelegram, BsFacebook } from "react-icons/bs";
import { BiBookmarks } from "react-icons/bi";
import { AppNavbar } from "components/AppNavbar";
import Indice from "./Indice";
import * as ga from "lib/ga";

const shareUrl = "https://cpr2022.cl";
const shareMessage =
  "Versión interactiva de la propuesta de nueva Constitución. " +
  "Optimizada para leer el texto de forma contextualizada " +
  "y para usarla como insumo de conversaciones y debates. " +
  "Explora y comparte.";

if (shareMessage.length > 255) {
  throw new Error("Message too long for Twitter");
}

const shareMessageUrl = `${shareMessage} ${shareUrl}`;

const shareTwitter =
  "https://twitter.com/intent/tweet?text=" +
  encodeURIComponent(shareMessageUrl);

const shareFacebook =
  "https://www.facebook.com/sharer/sharer.php?display=page&u=" +
  encodeURIComponent(shareUrl);

const shareWhatsapp =
  "https://api.whatsapp.com/send/?text=" + encodeURIComponent(shareMessageUrl);

const shareTelegram =
  "https://telegram.me/share/url?url=" +
  encodeURIComponent(shareUrl) +
  "&text=" +
  encodeURIComponent(shareMessage);

const buildShareLink = (title: string, Icon: IconType, href: string) => (
  <a
    title={title}
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={() => ga.event({ action: "share", params: { title } })}
  >
    <Icon size={18} />
  </a>
);

const imageLoader: ImageLoader = (props) => {
  return props.src;
};

export default function AcercaDe({}) {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="z-10 md:mr-4 relative">
          <AppNavbar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <aside className="h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2">
            <Indice
              filter={{ oids: [], text: "", totalMatches: 0, foundItems: 0 }}
            />
          </aside>
          <div className="bg-gray-100 h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center">
            <div className="prose px-10 leading-6">
              <h1 className="font-normal">¿Qué es esto?</h1>

              <div className="rounded-xl bg-white p-5 pb-10 drop-shadow-xl">
                <div className="text-lg">
                  Este sitio es una versión interactiva de la propuesta de nueva
                  Constitución. Su objetivo es ser una herramienta práctica para
                  leer la propuesta de forma contextualizada, aprovechando al
                  máximo las ventajas del hipertexto, y para usar como insumo de
                  conversaciones y debates.
                </div>
                <div className="float-right pt-2 text-sm flex gap-2">
                  Compartir en:
                  {buildShareLink("Twitter", BsTwitter, shareTwitter)}
                  {buildShareLink("Facebook", BsFacebook, shareFacebook)}
                  {buildShareLink("WhatsApp", BsWhatsapp, shareWhatsapp)}
                  {buildShareLink("Telegram", BsTelegram, shareTelegram)}
                </div>
              </div>

              <h2>Funcionalidades</h2>

              <h3>
                Enlaces directos a capítulos, títulos, artículos, incisos y
                disposiciones transitorias.
              </h3>
              <p>
                El símbolo{" "}
                <BiBookmarks className="inline text-gray-500" size={20} /> que
                aparece a la izquierda de que cada párrafo es un enlace directo
                al párrafo y que además lo resalta. Se puede usar como marcador
                para luego navegar hacia atrás. Los enlaces en la tabla de
                contenidos cumplen la misma función.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de enlace a párrafo"
                    src="/images/screenshot-anchor-link.png"
                    loader={imageLoader}
                    width={323}
                    height={297}
                  />
                </span>
              </div>

              <h3>Compartir en redes sociales</h3>
              <p>
                Si bien es posible compartir un enlace directo, al usar la
                opción &ldquo;Copiar enlace&rdquo; o &ldquo;Compartir
                en...&rdquo;, se incluye también una imagen con un extracto del
                artículo o de la disposición transitoria enlazada.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de Twitter con imagen de extracto de artículo"
                    src="/images/screenshot-social-articulo.png"
                    loader={imageLoader}
                    width={697 * 0.6}
                    height={479 * 0.6}
                  />
                </span>
                <div className="text-sm italic">
                  Un artículo compartido en Facebook
                </div>
              </div>

              <p>
                Además, si un inciso está resaltado en el artículo o la
                disposición transitoria, se compartirá un enlace directo a ese
                inciso.
              </p>

              <h3>Número de página y enlace a página en el PDF oficial</h3>
              <p>
                Cada artículo y disposición transitoria tiene un enlace al texto
                publicado por la Convención Constitucional. Permite dar el
                número de página como referencia a alguien con una edición
                impresa o con el PDF, y además permite verificar el contenido de
                este sitio.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de enlace a párrafo"
                    src="/images/screenshot-actions-menu.png"
                    loader={imageLoader}
                    width={376}
                    height={333}
                  />
                </span>
              </div>

              <h3>Referencias cruzadas con vista previa</h3>
              <p>
                Esto es cuando un artículo hace referencia a otro artículo...
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de vista previa de inciso"
                    src="/images/screenshot-cross-reference-1.png"
                    loader={imageLoader}
                    width={488}
                    height={252}
                  />
                </span>
              </div>
              <p>
                ...y el otro artículo muestra a su vez la referencia entrante.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de vista previa de inciso"
                    src="/images/screenshot-cross-reference-2.png"
                    loader={imageLoader}
                    width={494}
                    height={270}
                  />
                </span>
              </div>

              <h3>Enlaces a artículos de leyes referenciados en el texto</h3>
              <p></p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de enlace a ley"
                    src="/images/screenshot-link-law.png"
                    loader={imageLoader}
                    width={491}
                    height={180}
                  />
                </span>
              </div>

              <h3>Enlaces a material complementario</h3>
              <p>
                Como, por ejemplo, las evaluaciones de normas elaboradas por
                expertos y publicadas en el proyecto{" "}
                <a href="https://laconstitucionesnuestra.cl/">
                  La Constitución es Nuestra
                </a>{" "}
                de Ciudadanía Inteligente.
              </p>
              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de enlace a párrafo"
                    src="/images/screenshot-reference.png"
                    loader={imageLoader}
                    width={268}
                    height={122}
                  />
                </span>
              </div>

              <h3>Etiquetas enlazadas</h3>
              <p>
                Permiten navegar a otros artículos que comparten la misma
                etiqueta.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de enlace a párrafo"
                    src="/images/screenshot-tag-links.png"
                    loader={imageLoader}
                    width={396}
                    height={247}
                  />
                </span>
              </div>

              <h3>Uso sin conexión – Instalación como app</h3>
              <p>
                Este sitio es una{" "}
                <a href="https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web_progresiva">
                  aplicación web progresiva
                </a>
                . Esto permite volver a abrir el sitio en el navegador cuando no
                hay conexión a internet. También puede instalarse en móviles y
                escritorio como una app.
              </p>

              <div className="text-center">
                <span className="drop-shadow-xl">
                  <Image
                    alt="Pantallazo de opción para instalar app"
                    src="/images/screenshot-install-app.png"
                    loader={imageLoader}
                    width={317}
                    height={203}
                  />
                </span>
              </div>

              <h2>Créditos</h2>
              <p>
                Varios elementos gráficos (tipografía, colores, logo, etc.)
                fueron tomados del{" "}
                <a href="https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf">
                  documento original
                </a>
                .
              </p>
              <p>
                Las definiciones de conceptos y las etiquetas enlazadas están
                basadas en su mayoría en las de{" "}
                <a href="https://nuevaconstitucion.tiddlyhost.com/">
                  este TiddlyWiki
                </a>{" "}
                creado por <a href="https://twitter.com/bicubico">@bicubico</a>.
              </p>
              <p>
                Nombres cortos de artículos basados en los de la{" "}
                <a href="https://tabla-constitucional.cl/">
                  Tabla Periódica Constitucional
                </a>{" "}
                diseñada por{" "}
                <a href="https://twitter.com/diegotherium">Diego</a> y
                desarrollada de forma interactiva por{" "}
                <a href="https://twitter.com/XCMLBG">Xavier</a> y{" "}
                <a href="https://www.linkedin.com/in/antoine-lb/">Antoine</a>,
                de donde también viene la idea de enlazar directamente a la
                página del PDF.
              </p>
              <p>
                Audios generados por{" "}
                <a href="https://github.com/rmaureira">Robinson Maureira</a>.
              </p>
              <p>
                Proyecto desarrollado con ❤️ por Ricardo Stuven. Código fuente
                disponible en{" "}
                <a href="https://github.com/rstuven/cpr2022">GitHub</a>.
                Contacto:{" "}
                <a href="mailto:cpr2022.cl@gmail.com">cpr2022.cl@gmail.com</a>
              </p>
              
              <h2>Palabras de apoyo</h2>
              <p>
                Gran trabajo e iniciativa Ricardo, felicitaciones para tí
                y tu equipo :) -
                <a href="https://www.linkedin.com/in/leonardomontenegro123/">
                  Leonardo
                </a>
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
