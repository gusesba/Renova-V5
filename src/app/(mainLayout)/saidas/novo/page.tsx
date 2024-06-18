"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useDataTable from "@/hooks/useDataTable";
import { LinhaTabela } from "@/components/DataTable/LinhaTabela";
import { DeleteModal } from "@/components/DataTable/DeleteModal";
import { Title } from "@/components/Utils/Title";
import { Table } from "@/components/DataTable/Table";
import { Content } from "@/components/DataTable/Content";
import { TableTitleItem } from "@/components/DataTable/TableTitleItem";
import { SearchButton } from "@/components/DataTable/SearchButton";
import { DeleteButton } from "@/components/DataTable/DeleteButton";
import { abrirModal } from "@/components/Modal/Modal";
import { CopyButton } from "@/components/DataTable/CopyButton";
import { ConfigurationButton } from "@/components/DataTable/ConfigurationButton";
import { ConfigurationModal } from "@/components/DataTable/ConfigurationModal";
import { Check } from "@/components/Icones/Check";
import { FullScreenButton } from "@/components/DataTable/FullScreenButton";
import { Produto, produtosHeaders } from "@/resources/produto/produto.resource";

//#endregion Tipos

const Novo = <T, F>() => {
  //#region Variáveis

  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    console.log("teste");
    //adicionar foco no input de pesquisa ao abrir a página e ao digitar *
    document.getElementById("filtro-geral")?.focus();

    const keydownHandler = (e: KeyboardEvent) => {
      //verificar se elemento focado é um input
      if (document.activeElement?.tagName == "INPUT") return;
      e.preventDefault();
      if (e.key == "*") {
        document.getElementById("filtro-geral")?.focus();
      }
    };

    const enterHandler = (e: KeyboardEvent) => {
      if (!(document.activeElement?.id == "filtro-geral")) return;
      if (e.key == "Enter") {
        e.preventDefault();
        fetchData();
      }
    };

    //adicionar foco no input de pesquisa ao digitar *
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keydown", enterHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
      document.removeEventListener("keydown", enterHandler);
    };
  }, []);

  const router = useRouter();

  const addInput = useRef<HTMLInputElement>(null);

  const [
    linhasSelecionadas,
    setLinhasSelecionadas,
    take,
    setTake,
    page,
    setPage,
    filter,
    headersState,
    setHeadersState,
    isEditing,
    setIsEditing,
  ] = useDataTable<F>(produtosHeaders, "novaSaida");

  const [drag, setDrag] = useState<number>(-1);

  //#endregion Variáveis

  //#region Funções

  const fetchData = () => {
    console.log(addInput.current?.value);
    const id = parseInt((addInput.current as HTMLInputElement).value);
    setProdutos((prev) => [...prev, { id: id }]);
    (addInput.current as HTMLInputElement).value = "";
  };

  const copyToClipboard = (
    headers: { text: string; value: string }[],
    key: string = "id"
  ) => {
    if (linhasSelecionadas.length === 0) return;

    const columns: string[][] = [];

    for (let i = 0; i < headers.length; i++) {
      columns.push([headers[i].text]);
    }

    produtos.forEach((line) => {
      if (linhasSelecionadas.includes(line[key as keyof Produto] as number)) {
        for (let i = 0; i < headers.length; i++) {
          let value = line[headers[i].value as keyof Produto];
          if (typeof value == "number") {
            columns[i].push(value.toString());
          } else if (typeof value == "string") {
            columns[i].push(value);
          } else {
            columns[i].push("");
          }
        }
      }
    });

    const maxValues: number[] = columns.map((column) =>
      Math.max(...column.map((value) => value.length))
    );

    let clipBoard = "";

    for (let i = 0; i < columns[0].length; i++) {
      for (let j = 0; j < columns.length; j++) {
        clipBoard += columns[j][i].toString().padEnd(maxValues[j] + 4);
      }
      clipBoard += "\n";
    }

    navigator.clipboard.writeText(clipBoard);
  };

  //#endregion Funções

  //#region Effects

  //#endregion Effects

  //#region Funções de renderização

  const linhasTabela = (
    headers: { text: string; value: string }[],
    key: string = "id"
  ) => {
    return produtos.map((linha) => (
      <LinhaTabela
        linhas={produtos}
        key={linha[key as keyof Produto] as number}
        linhasSelecionadas={linhasSelecionadas}
        setLinhasSelecionadas={setLinhasSelecionadas}
        identificador={linha[key as keyof Produto] as number}
      >
        {headers.map((header, index) => {
          return (
            <td key={index}>
              {linha[header.value as keyof Produto] as string}
            </td>
          );
        })}
      </LinhaTabela>
    ));
  };

  const headerTabela = () => {
    return (
      <thead className="sticky top-0 bg-white dark:bg-boxdark">
        <tr className="title-group">
          {headersState.map((header, index) => (
            <TableTitleItem
              drag={drag}
              index={index}
              setHeaders={setHeadersState}
              key={index}
              setDrag={setDrag}
              isEditing={isEditing}
            >
              {header.text}
            </TableTitleItem>
          ))}
        </tr>
      </thead>
    );
  };

  const searchInput = () => {
    return (
      <input
        ref={addInput}
        id="filtro-geral"
        className="filter-input datatable-input  p-5  pt-[10px]  pb-[10px] w-100 "
        placeholder="Pesquisar..."
        type="search"
        autoComplete={"off"}
      />
    );
  };

  const finishEditingButton = () => {
    return (
      <button
        className="mr-4 hover:scale-125 transition-all"
        onClick={() => setIsEditing(false)}
      >
        <Check />
      </button>
    );
  };

  const deleteItens = (itens: number[]) => {
    setProdutos((prev) => {
      return prev.filter((produto) => !itens.includes(produto.id as number));
    });
    setLinhasSelecionadas([]);
  };

  //#endregion

  //#region Componente

  return (
    <>
      <DeleteModal
        conteudo={"titulo"}
        itens={linhasSelecionadas}
        deleteList={deleteItens}
      />
      <ConfigurationModal
        name={"path"}
        editarColunas={setIsEditing}
        fetchData={fetchData}
        filtro={filter}
        setHeaders={setHeadersState}
        headers={produtosHeaders}
      />
      <Title titulo={"Nova Venda"} caminho={"Vendas /"} />
      <Table>
        <div className="datatable-top h-20 flex items-center justify-between">
          <div className="datatable-search m-7 flex items-center">
            <ConfigurationButton onClick={() => abrirModal("config")} />
            {isEditing && finishEditingButton()}
            {searchInput()}
            <SearchButton onClick={fetchData} />
            <DeleteButton
              show={linhasSelecionadas.length !== 0}
              onClick={() => abrirModal("delete")}
            />
            <CopyButton
              show={linhasSelecionadas.length !== 0}
              onClick={() => copyToClipboard(headersState)}
            />
          </div>

          <div className="datatable-dropdown m-8 flex">
            <FullScreenButton />
          </div>
        </div>

        <Content>
          {headerTabela()}
          <tbody>{linhasTabela(headersState)}</tbody>
        </Content>
        <div className="datatable-bottom h-20 border-t-gray-1 dark:border-t-graydark border-t-[1px] flex justify-end items-center">
          <div className="datatable-info m-8 font-medium">
            {produtos.length} produtos selecionados
          </div>
        </div>
      </Table>
    </>
  );

  //#endregion Componente
};

export default Novo;
