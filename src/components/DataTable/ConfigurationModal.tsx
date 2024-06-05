import React, { Dispatch, SetStateAction } from "react";
import { Gear } from "../Icones/Gear";
import { fecharModal, Modal } from "../Modal/Modal";

interface ConfigurationModalProps {
  editarColunas: Dispatch<SetStateAction<boolean>>;
}

export const ConfigurationModal: React.FC<ConfigurationModalProps> = ({
  editarColunas,
}) => {
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

  return (
    <Modal name="config">
      <span className="mx-auto inline-block">
        <Gear width={3} height={3} />
      </span>
      {editarBotao()}
    </Modal>
  );
};
