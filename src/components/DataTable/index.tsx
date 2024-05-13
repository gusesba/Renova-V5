"use client";
import { Cliente } from "@/resources/cliente/cliente.resource";
import { useClienteService } from "@/resources/cliente/cliente.service";
import { useEffect, useState } from "react";
import { Bottom } from "./Bottom";
import { Content } from "./Content";
import { LinhaTabela } from "./LinhaTabela";
import { Table } from "./Table";
import { TableTitleItem } from "./TableTitleItem";
import { Title } from "./Title";
import { Top } from "./Top";

export const DataTable = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const clientesService = useClienteService;

  useEffect(() => {
    clientesService.getClientes().then((data) => {
      setClientes(data);
    });
  }, []);

  const linhasTabela = () => {
    return clientes.map((cliente) => (
      <LinhaTabela key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.celular}</td>
        <td>{cliente.apelido}</td>
        <td>{cliente.indicacao}</td>
      </LinhaTabela>
    ));
  };

  return (
    <>
      <Title titulo="Clientes" caminho="Tabelas /" />
      <Table>
        <Top />
        <Content>
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
          <tbody>{linhasTabela()}</tbody>
        </Content>
        <Bottom />
      </Table>
    </>
  );
};
