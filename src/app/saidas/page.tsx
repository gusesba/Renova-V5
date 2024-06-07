"use client";
import { DataTable } from "@/components/DataTable";
import { useGrupoSaidasService } from "@/resources/saidas/grupoSaida.service";

import { grupoSaidasFilter } from "@/resources/saidas/grupoSaida.service";
import {
  GrupoSaidas,
  grupoSaidasHeaders,
} from "@/resources/saidas/saida.resource";

const Saidas = () => {
  const grupoSaidasService = useGrupoSaidasService;
  return (
    <DataTable<GrupoSaidas, grupoSaidasFilter>
      titulo="Grupo de Saídas"
      caminho="Saídas /"
      headers={grupoSaidasHeaders}
      path="saidas"
      service={grupoSaidasService}
    />
  );
};

export default Saidas;
