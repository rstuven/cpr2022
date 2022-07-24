import Tooltip from "./Tooltip";

export default function Pagina(props: { pagina: number }) {
  const title = "Ir a página en el PDF oficial";
  return (
    <a
      className="text-sm"
      href={
        "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
        (props.pagina + 4)
      }
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <Tooltip content={title}>Pág. {props.pagina}</Tooltip>
    </a>
  );
}
