import { Tooltip } from "flowbite-react";

export default function Pagina(props: { pagina: number }) {
  return (
    <Tooltip content="Ir a página en el PDF oficial">
      <a
        className="text-sm"
        href={
          "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
          (props.pagina + 4)
        }
        target="_blank"
        rel="noreferrer"
      >
        Pág. {props.pagina}
      </a>
    </Tooltip>
  );
}
