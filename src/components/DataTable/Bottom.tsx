import { Dispatch, SetStateAction } from "react";

interface BottomProps {
  totalPaginas: number;
  totalRegistros: number;
  registrosPorPagina: number;
  paginaAtual: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Bottom: React.FC<BottomProps> = ({
  totalPaginas = 1,
  totalRegistros = 0,
  registrosPorPagina = 10,
  paginaAtual = 0,
  setPage,
}: BottomProps) => {
  const primeiroRegistro = paginaAtual * registrosPorPagina + 1;
  const ultimoRegistro =
    (paginaAtual + 1) * registrosPorPagina > totalRegistros
      ? totalRegistros
      : (paginaAtual + 1) * registrosPorPagina;

  const paginas = () => {
    return (
      <ul className="flex">
        <li
          className={paginaAtual > 5 ? "page-item" : "page-item-disabled"}
          onClick={() => {
            paginaAtual > 5 && setPage(paginaAtual - 5);
          }}
        >
          {"‹‹"}
        </li>
        <li
          className={paginaAtual != 0 ? "page-item" : "page-item-disabled"}
          onClick={() => {
            paginaAtual != 0 && setPage(paginaAtual - 1);
          }}
        >
          {"‹"}
        </li>
        <li className="page-item selected">{paginaAtual}</li>
        <li
          className={
            paginaAtual + 1 < totalPaginas ? "page-item" : "page-item-disabled"
          }
          onClick={() => {
            paginaAtual + 1 < totalPaginas && setPage(paginaAtual + 1);
          }}
        >
          {"›"}
        </li>
        <li
          className={
            paginaAtual + 6 < totalPaginas ? "page-item" : "page-item-disabled"
          }
          onClick={() => {
            paginaAtual + 6 < totalPaginas && setPage(paginaAtual + 5);
          }}
        >
          {"››"}
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="datatable-bottom h-20 border-t-gray-1 dark:border-t-graydark border-t-[1px] flex justify-between items-center">
        <nav className="m-7">{paginas()}</nav>
        <div className="datatable-info m-8 font-medium">
          Mostrando {primeiroRegistro} à {ultimoRegistro} de {totalRegistros}{" "}
          registros
        </div>
      </div>
    </>
  );
};
