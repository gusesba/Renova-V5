"use client";
import { DataTable } from "@/components/DataTable";
import { Saida, saidaHeaders } from "@/resources/saidas/saida.resource";
import {
  saidasFilter,
  useSaidasService,
} from "@/resources/saidas/saida.service";

const Saidas = () => {
  const saidasService = useSaidasService;
  return (
    <DataTable<Saida, saidasFilter>
      titulo="Saídas"
      caminho="Saídas /"
      headers={saidaHeaders}
      path="saidas"
      service={saidasService}
    />
  );
};

export default Saidas;
