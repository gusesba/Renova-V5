import { Modal, fecharModal } from "../Modal/Modal";
import { ClienteService } from "@/resources/cliente/cliente.service";

interface DeleteModalProps {
  itens: number[];
  clienteService: ClienteService;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  itens,
  clienteService,
}: DeleteModalProps) => {
  const handleDelete = () => {
    clienteService.deleteClientes(itens);
    fecharModal();
  };
  return (
    <>
      <Modal>
        <span className="mx-auto inline-block">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              width="60"
              height="60"
              rx="30"
              fill="#DC2626"
            ></rect>
            <path
              d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
              stroke="#DC2626"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          Excluir itens
        </h3>
        <p className="mb-10 font-medium">
          Você tem certeza que deseja excluir os itens selecionados?
        </p>
        <div className="-mx-3 flex flex-wrap gap-y-4">
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              onClick={fecharModal}
              className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
            >
              Cancelar
            </button>
          </div>
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              onClick={handleDelete}
              className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90"
            >
              Excluir
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
