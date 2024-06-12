"use client";
import { DataTable } from "@/components/DataTable";
import { useGrupoSaidasService } from "@/resources/saidas/grupoSaida.service";

import { grupoSaidasFilter } from "@/resources/saidas/grupoSaida.service";
import {
  GrupoSaidas,
  grupoSaidasHeaders,
} from "@/resources/saidas/saida.resource";

const Grupo = () => {
  const grupoSaidasService = useGrupoSaidasService;
  return (
    <DataTable<GrupoSaidas, grupoSaidasFilter>
      titulo="Grupo de Saídas"
      caminho="Saídas /"
      headers={grupoSaidasHeaders}
      path="saidas/grupo"
      service={grupoSaidasService}
    />
  );
};

export default Grupo;
