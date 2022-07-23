export default function Pagina(props: { pagina: number }) {
  return (
    <a
      className="text-sm"
      href={
        "https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=" +
        (props.pagina + 4)
      }
      target="_blank"
      rel="noreferrer"
      title="Ir a página en el PDF oficial"
    >
      Pág. {props.pagina}
    </a>
  );
}
