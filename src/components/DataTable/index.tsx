"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useDataTable from "@/hooks/useDataTable";
import { LinhaTabela } from "@/components/DataTable/LinhaTabela";
import { DeleteModal } from "@/components/DataTable/DeleteModal";
import { Title } from "@/components/Utils/Title";
import { Table } from "@/components/DataTable/Table";
import { Top } from "@/components/DataTable/Top";
import { Content } from "@/components/DataTable/Content";
import { TableTitleItem } from "@/components/DataTable/TableTitleItem";
import { Bottom } from "@/components/DataTable/Bottom";
import { SearchButton } from "@/components/DataTable/SearchButton";
import { DeleteButton } from "@/components/DataTable/DeleteButton";
import { abrirModal } from "@/components/Modal/Modal";
import { CopyButton } from "@/components/DataTable/CopyButton";

export interface TableService<T, F> {
  getPaginated: (
    filter: F,
    take?: number,
    page?: number
  ) => Promise<PaginatedData<T>>;
  deleteList: (itens: number[]) => void;
}

export interface PaginatedData<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements: number;
}

export const DataTable = <T, F>({
  titulo,
  caminho,
  headers,
  path,
  service,
}: {
  titulo: string;
  caminho: string;
  headers: { text: string; value: string }[];
  path: string;
  service: TableService<T, F>;
}) => {
  const [contentPage, setContentPage] = useState<PaginatedData<T>>({
    content: [],
    totalElements: 0,
    totalPages: 1,
    size: 0,
    number: 0,
    numberOfElements: 0,
  });
  const router = useRouter();
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
  ] = useDataTable<F>(headers);

  const fetchData = useCallback(() => {
    service.getPaginated(filter.current, take, page).then((data) => {
      setContentPage(data as PaginatedData<T>);
    });
  }, [filter, take, page]);

  const copyToClipboard = (
    headers: { text: string; value: string }[],
    key: string = "id"
  ) => {
    if (linhasSelecionadas.length === 0) return;

    const columns: string[][] = [];

    for (let i = 0; i < headers.length; i++) {
      columns.push([headers[i].text]);
    }

    contentPage.content.forEach((line) => {
      if (linhasSelecionadas.includes(line[key as keyof T] as number)) {
        for (let i = 0; i < headers.length; i++) {
          columns[i].push(line[headers[i].value as keyof T] as string);
        }
      }
    });

    const maxValues: number[] = columns.map((column) =>
      Math.max(...column.map((value) => value.toString().length))
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const linhasTabela = (
    headers: { text: string; value: string }[],
    key: string = "id"
  ) => {
    return contentPage.content.map((linha) => (
      <LinhaTabela
        linhas={contentPage.content}
        key={linha[key as keyof T] as number}
        linhasSelecionadas={linhasSelecionadas}
        setLinhasSelecionadas={setLinhasSelecionadas}
        identificador={linha[key as keyof T] as number}
      >
        {headers.map((header, index) => {
          if (header.value === key) {
            return (
              <td key={index}>
                <span
                  className="text-primary hover:cursor-pointer"
                  onClick={() =>
                    router.push(`/${path}/${linha[key as keyof T]}`)
                  }
                >
                  {linha[key as keyof T] as number}
                </span>
              </td>
            );
          }
          return (
            <td key={index}>{linha[header.value as keyof T] as string}</td>
          );
        })}
      </LinhaTabela>
    ));
  };

  const headerTabela = (headers: { text: string; value: string }[]) => {
    return (
      <thead className="sticky top-0 bg-white dark:bg-boxdark">
        <tr className="title-group">
          {headers.map((header, index) => (
            <TableTitleItem key={index}>{header.text}</TableTitleItem>
          ))}
        </tr>
        <tr className="search-group">
          {headers.map((header, index) => (
            <th key={index}>
              <input
                onChange={(e) => handleChange(header.value, e.target.value)}
                type="search"
              />
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const handleChange = (field: string, value: string) => {
    filter.current[field as keyof F] = value as any;
  };

  const searchInput = () => {
    return (
      <input
        onChange={(e) => handleChange("geral", e.target.value)}
        className="datatable-input  p-5  pt-[10px]  pb-[10px] w-100 "
        placeholder="Pesquisar..."
        type="search"
      />
    );
  };

  return (
    <>
      <DeleteModal
        conteudo={titulo}
        itens={linhasSelecionadas}
        deleteList={service.deleteList}
      />
      <Title titulo={titulo} caminho={caminho} />
      <Table>
        <Top take={take} setTake={setTake}>
          {searchInput()}
          <SearchButton onClick={fetchData} />
          <DeleteButton
            show={linhasSelecionadas.length !== 0}
            onClick={abrirModal}
          />
          <CopyButton
            show={linhasSelecionadas.length !== 0}
            onClick={() => copyToClipboard(headersState)}
          />
        </Top>
        <Content>
          {headerTabela(headersState)}
          <tbody>{linhasTabela(headersState)}</tbody>
        </Content>
        <Bottom
          totalPaginas={contentPage.totalPages}
          paginaAtual={contentPage.number}
          registrosPorPagina={contentPage.size}
          totalRegistros={contentPage.totalElements}
          setPage={setPage}
        />
      </Table>
    </>
  );
};
