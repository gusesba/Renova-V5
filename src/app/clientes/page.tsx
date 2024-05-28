"use client";
import { Cliente, ClientePage } from "@/resources/cliente/cliente.resource";
import {
  clienteFilter,
  useClienteService,
} from "@/resources/cliente/cliente.service";
import { useCallback, useEffect, useRef, useState } from "react";

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

const Clientes = () => {
  const [clientes, setClientes] = useState<ClientePage>({
    content: [],
    totalElements: 0,
    totalPages: 1,
    size: 0,
    number: 0,
    numberOfElements: 0,
  });
  const router = useRouter();
  const [linhasSelecionadas, take, setTake, page, setPage, filter] =
    useDataTable<clienteFilter>();
  const clienteService = useClienteService;

  const fetchClientes = useCallback(() => {
    clienteService.getClientes(filter.current, take, page).then((data) => {
      setClientes(data);
    });
  }, [filter, take, page]);

  //fetching data
  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  const linhasTabela = () => {
    return clientes.content.map((cliente) => (
      <LinhaTabela
        key={cliente.id}
        linhasSelecionadas={linhasSelecionadas}
        identificador={cliente.id as number}
        onDoubleClick={() => router.push(`/clientes/${cliente.id}`)}
      >
        <td>{cliente.id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.celular}</td>
        <td>{cliente.apelido}</td>
        <td>{cliente.indicacao}</td>
      </LinhaTabela>
    ));
  };

  const headerTabela = () => {
    return (
      <thead className="sticky top-0 bg-white dark:bg-boxdark">
        <tr className="title-group">
          <TableTitleItem>ID</TableTitleItem>
          <TableTitleItem>Nome</TableTitleItem>
          <TableTitleItem>Celular</TableTitleItem>
          <TableTitleItem>Apelido</TableTitleItem>
          <TableTitleItem>Indicação</TableTitleItem>
        </tr>
        <tr className="search-group">
          <th>
            <input
              onChange={(e) => handleChange("id", e.target.value)}
              type="search"
            />
          </th>
          <th>
            <input
              onChange={(e) => handleChange("nome", e.target.value)}
              type="search"
            />
          </th>
          <th>
            <input
              onChange={(e) => handleChange("celular", e.target.value)}
              type="search"
            />
          </th>
          <th>
            <input
              onChange={(e) => handleChange("apelido", e.target.value)}
              type="search"
            />
          </th>
          <th>
            <input
              onChange={(e) => handleChange("indicacao", e.target.value)}
              type="search"
            />
          </th>
        </tr>
      </thead>
    );
  };

  const handleChange = (field: keyof clienteFilter, value: string) => {
    filter.current[field] = value;
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
      <DeleteModal itens={linhasSelecionadas} clienteService={clienteService} />
      <Title titulo="Clientes" caminho="Clientes / " />
      <Table>
        <Top take={take} setTake={setTake}>
          {searchInput()}
          <SearchButton onClick={fetchClientes} />
        </Top>
        <Content>
          {headerTabela()}
          <tbody>{linhasTabela()}</tbody>
        </Content>
        <Bottom
          totalPaginas={clientes.totalPages}
          paginaAtual={clientes.number}
          registrosPorPagina={clientes.size}
          totalRegistros={clientes.totalElements}
          setPage={setPage}
        />
      </Table>
    </>
  );
};

export default Clientes;
