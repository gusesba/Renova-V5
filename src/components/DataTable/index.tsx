"use client";
import { Cliente } from "@/resources/cliente/cliente.resource";
import { useClienteService } from "@/resources/cliente/cliente.service";
import { useEffect, useState } from "react";
import { Bottom } from "./Bottom";
import { Content } from "./Content";
import { LinhaTabela } from "./LinhaTabela";
import { Table } from "./Table";
import { TableTitleItem } from "./TableTitleItem";
import { Title } from "../Utils/Title";
import { Top } from "./Top";
import { useRouter } from "next/navigation";
import useDataTable from "@/hooks/useDataTable";
import { DeleteButton } from "./DeleteButton";
import { abrirModal, DeleteModal } from "./DeleteModal";

export const DataTable = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const router = useRouter();

  const clientesService = useClienteService;

  const [linhasSelecionadas] = useDataTable();

  useEffect(() => {
    clientesService.getClientes().then((data) => {
      setClientes(data);
    });
  }, []);

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

  return (
    <>
      <DeleteModal itens={linhasSelecionadas} />
      <Title titulo="Clientes" caminho="Clientes / " />
      <Table>
        <Top>
          <DeleteButton onClick={abrirModal} />
        </Top>
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
