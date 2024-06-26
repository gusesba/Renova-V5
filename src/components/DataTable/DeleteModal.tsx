import { Modal, fecharModal } from "../Modal/Modal";
import { Warning } from "../Icones/Warning";

interface DeleteModalProps {
  itens: number[];
  deleteList: (itens: number[]) => void;
  conteudo: string;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  itens,
  deleteList,
  conteudo,
}: DeleteModalProps) => {
  const titulo = (titulo: string) => {
    return (
      <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
        {titulo}
      </h3>
    );
  };

  const corpoTexto = (texto: string) => {
    return <p className="mb-10 font-medium dark:text-bodydark">{texto}</p>;
  };

  const botoes = () => {
    return (
      <div className="-mx-3 flex flex-wrap gap-y-4">
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={() => fecharModal("delete")}
            className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
          >
            Cancelar
          </button>
        </div>
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={handleDelete}
            className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition-all hover:bg-opacity-80"
          >
            Excluir
          </button>
        </div>
      </div>
    );
  };

  const handleDelete = () => {
    deleteList(itens);
    fecharModal("delete");
  };

  return (
    <>
      <Modal name="delete">
        <span className="mx-auto inline-block">
          <Warning />
        </span>
        {titulo(`Excluir ${itens.length} ${conteudo}`)}
        {corpoTexto(
          `Você tem certeza que deseja excluir os ${conteudo.toLowerCase()} selecionados?`
        )}
        {botoes()}
      </Modal>
    </>
  );
};
