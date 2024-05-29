"use client";
import { DataTable } from "@/components/DataTable";
import { Cliente, clientesHeaders } from "@/resources/cliente/cliente.resource";
import {
  clienteFilter,
  useClienteService,
} from "@/resources/cliente/cliente.service";

const Clientes = () => {
  const clientesService = useClienteService;
  return (
    <DataTable<Cliente, clienteFilter>
      titulo="Clientes"
      caminho="Clientes /"
      headers={clientesHeaders}
      path="clientes"
      service={clientesService}
    />
  );
};

export default Clientes;
