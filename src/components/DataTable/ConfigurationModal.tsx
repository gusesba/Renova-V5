"use client";
import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { Gear } from "../Icones/Gear";
import { X } from "../Icones/X";
import { fecharModal, Modal } from "../Modal/Modal";

export const ConfigurationModal = <F,>({
  editarColunas,
  filtro,
  fetchData,
  name,
}: {
  editarColunas: Dispatch<SetStateAction<boolean>>;
  filtro: MutableRefObject<F>;
  fetchData: () => void;
  name: string;
}) => {
  const [configFilterState, setConfigFilterState] = useState("config");
  const filterNameRef = useRef<HTMLInputElement>(null);
  const [updateModal, setUpdateModal] = useState(false);

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

  const limparFiltro = () => {
    filtro.current = {} as F;
    document.querySelectorAll(".filter-input").forEach((input) => {
      (input as HTMLInputElement).value = "";
    });
  };

  const limparFiltroBotao = () => {
    return (
      <div className="-mx-3 mt-5.5 flex justify-center">
        <button
          onClick={() => {
            fecharModal("config");
            limparFiltro();
            fetchData();
          }}
          className="w-73 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
        >
          Limpar Filtro
        </button>
      </div>
    );
  };

  const salvarFiltro = () => {
    return (
      <div className="-mx-3 mt-5.5 flex justify-center">
        <button
          onClick={() => {
            setConfigFilterState("salvarFiltro");
          }}
          className="w-73 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
        >
          Salvar Filtro
        </button>
      </div>
    );
  };

  const recuperarFiltro = () => {
    return (
      <div className="-mx-3 mt-5.5 flex justify-center">
        <button
          onClick={() => {
            setConfigFilterState("recuperarFiltro");
          }}
          className="w-73 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
        >
          Recuperar Filtro
        </button>
      </div>
    );
  };

  const semFiltroTexto = () => {
    return (
      <div className="flex justify-center items-center h-80">
        <span className="text-center dark:text-gray">
          Não há filtros salvos
        </span>
      </div>
    );
  };

  const botoesSalvarFiltro = () => {
    return (
      <div className="-mx-3 flex flex-wrap gap-y-4 mt-5">
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={() => {
              setConfigFilterState("config");
              filterNameRef.current!.value = "";
            }}
            className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
          >
            Voltar
          </button>
        </div>
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={() => {
              const storageFiltros = localStorage.getItem(`filtros-${name}`);
              var filtrosParse = JSON.parse(storageFiltros || "{}");
              const filterName = filterNameRef.current?.value;
              if (filterName) {
                filtrosParse = {
                  ...filtrosParse,
                  [filterName]: filtro.current,
                };
                localStorage.setItem(
                  `filtros-${name}`,
                  JSON.stringify(filtrosParse)
                );
                filterNameRef.current!.value = "";
                setConfigFilterState("config");
                fecharModal("config");
              }
            }}
            className="block w-full rounded border border-green-500 bg-green-500 p-3 text-center font-medium text-white transition-all hover:bg-opacity-80"
          >
            Salvar
          </button>
        </div>
      </div>
    );
  };

  const voltarBotao = () => {
    return (
      <button
        onClick={() => {
          setConfigFilterState("config");
        }}
        className="mt-4 w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
      >
        Voltar
      </button>
    );
  };

  const botoesFiltros = () => {
    return (
      <div className="flex flex-col gap-y-4 mt-4 overflow-auto h-80">
        {localStorage.getItem(`filtros-${name}`) == null
          ? semFiltroTexto()
          : localStorage.getItem(`filtros-${name}`) == "{}"
          ? semFiltroTexto()
          : Object.keys(
              JSON.parse(localStorage.getItem(`filtros-${name}`) || "{}")
            ).map((filtroItem) => (
              <div className="flex">
                <button
                  onClick={() => {
                    const novoFiltro = JSON.parse(
                      localStorage.getItem(`filtros-${name}`) || "{}"
                    )[filtroItem];
                    filtro.current = novoFiltro;
                    limparFiltro();
                    Object.keys(novoFiltro).forEach((key) => {
                      const input = document.getElementById(`filtro-${key}`);
                      if (input) {
                        (input as HTMLInputElement).value = novoFiltro[key];
                      }
                    });

                    fecharModal("config");
                    setConfigFilterState("config");
                    fetchData();
                  }}
                  className="w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-green-500 dark:hover:bg-green-500"
                >
                  {filtroItem}
                </button>
                <button
                  onClick={() => {
                    const filtros = JSON.parse(
                      localStorage.getItem(`filtros-${name}`) || "{}"
                    );
                    delete filtros[filtroItem];
                    localStorage.setItem(
                      `filtros-${name}`,
                      JSON.stringify(filtros)
                    );
                    setUpdateModal(!updateModal);
                  }}
                  className="ml-2 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition-all hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                >
                  <X />
                </button>
              </div>
            ))}
      </div>
    );
  };

  const inputNomeFiltro = () => {
    return (
      <input
        ref={filterNameRef}
        className="filter-input datatable-input  p-5  pt-[10px]  pb-[10px] w-100 mt-4 dark:text-gray"
        type="search"
      />
    );
  };

  if (configFilterState === "salvarFiltro") {
    return (
      <Modal size="sm" name="config">
        <span className="flex justify-center items-center">
          {titulo("Salvar Filtro")}
        </span>
        {inputNomeFiltro()}
        {botoesSalvarFiltro()}
      </Modal>
    );
  }

  if (configFilterState === "recuperarFiltro") {
    return (
      <Modal size="lg" name="config">
        <span className="flex justify-center items-center">
          {titulo("Recuperar Filtro")}
        </span>
        {botoesFiltros()}
        {voltarBotao()}
      </Modal>
    );
  }

  return (
    <Modal size="lg" name="config">
      <span className="flex justify-center items-center">
        <Gear width={3} height={3} />
        {titulo("Configurações")}
      </span>

      {editarBotao()}
      {limparFiltroBotao()}
      {salvarFiltro()}
      {recuperarFiltro()}
    </Modal>
  );
};
