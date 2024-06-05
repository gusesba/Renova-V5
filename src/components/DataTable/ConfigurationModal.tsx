import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Gear } from "../Icones/Gear";
import { fecharModal, Modal } from "../Modal/Modal";

export const ConfigurationModal = <F,>({
  editarColunas,
  filtro,
  fetchData,
}: {
  editarColunas: Dispatch<SetStateAction<boolean>>;
  filtro: MutableRefObject<F>;
  fetchData: () => void;
}) => {
  const titulo = (titulo: string) => {
    return (
      <h3 className="pb-2 ml-2 mt-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
        {titulo}
      </h3>
    );
  };
  const editarBotao = () => {
    return (
      <div className="-mx-3 mt-5.5 flex justify-center">
        <button
          onClick={() => {
            fecharModal("config");
            editarColunas((editar) => !editar);
          }}
          className="w-73 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
        >
          Editar Colunas
        </button>
      </div>
    );
  };

  const limparFiltroBotao = () => {
    return (
      <div className="-mx-3 mt-5.5 flex justify-center">
        <button
          onClick={() => {
            fecharModal("config");
            filtro.current = {} as F;
            document.querySelectorAll(".filter-input").forEach((input) => {
              (input as HTMLInputElement).value = "";
            });
            fetchData();
          }}
          className="w-73 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
        >
          Limpar Filtro
        </button>
      </div>
    );
  };

  return (
    <Modal name="config">
      <span className="flex justify-center items-center">
        <Gear width={3} height={3} />
        {titulo("Configurações")}
      </span>

      {editarBotao()}
      {limparFiltroBotao()}
    </Modal>
  );
};
