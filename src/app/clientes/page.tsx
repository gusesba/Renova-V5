"use client";
import { Cliente } from "@/resources/cliente/cliente.resource";
import { useClienteService } from "@/resources/cliente/cliente.service";
import { useEffect, useState } from "react";

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

const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const router = useRouter();
  const [linhasSelecionadas] = useDataTable();

  const clienteService = useClienteService;

  //fetching data
  useEffect(() => {
    clienteService.getClientes().then((data) => {
      setClientes(data);
    });
  }, [clienteService]);

  const linhasTabela = () => {
    return clientes.map((cliente) => (
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
      <thead>
        <tr className="title-group">
          <TableTitleItem>ID</TableTitleItem>
          <TableTitleItem>Nome</TableTitleItem>
          <TableTitleItem>Celular</TableTitleItem>
          <TableTitleItem>Apelido</TableTitleItem>
          <TableTitleItem>Indicação</TableTitleItem>
        </tr>
        <tr className="search-group">
          <th>
            <input type="search" />
          </th>
          <th>
            <input type="search" />
          </th>
          <th>
            <input type="search" />
          </th>
          <th>
            <input type="search" />
          </th>
          <th>
            <input type="search" />
          </th>
        </tr>
      </thead>
    );
  };

  return (
    <>
      <DeleteModal itens={linhasSelecionadas} clienteService={clienteService} />
      <Title titulo="Clientes" caminho="Clientes / " />
      <Table>
        <Top />
        <Content>
          {headerTabela()}
          <tbody>{linhasTabela()}</tbody>
        </Content>
        <Bottom />
      </Table>
    </>
  );
};

export default Clientes;
