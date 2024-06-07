import { PaginatedData, TableService } from "@/components/DataTable";
import { gruposSaidasPage } from "@/tempdata/gruposSaidas";
import { produtoPage } from "@/tempdata/produtos";
import { GrupoSaidas } from "./saida.resource";

export interface grupoSaidasFilter {
  id?: string;
  comprador?: string;
  data?: string;
  quantidade?: string;
  valor?: string;
}

// #TODO - Implementar segurança
export class GrupoSaidasService
  implements TableService<GrupoSaidas, grupoSaidasFilter>
{
  baseURL: string = "http://localhost:8080/v1/clientes";

  async getPaginated(
    filter: grupoSaidasFilter,
    take: number = 10,
    page: number = 0
  ): Promise<PaginatedData<GrupoSaidas>> {
    return gruposSaidasPage;
    var filtro = this.gerarFiltro(filter);
    const response = await fetch(
      `${this.baseURL}?size=${take}&page=${page}&${filtro}`
    );
    return await response.json();
  }

  // #TODO - Implementar delete
  async deleteOne(id: number): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(id);
    return;
  }

  // #TODO - Implementar deleteList
  async deleteList(ids: number[]): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(ids);
    return;
  }

  // #TODO - Implementar update
  // #TODO - Implementar create

  gerarFiltro(filter: grupoSaidasFilter): string {
    var filtro = "";
    if (filter.id) {
      filtro += `id=${filter.id}&`;
    }
    if (filter.comprador) {
      filtro += `comprador=${filter.comprador}&`;
    }
    if (filter.data) {
      filtro += `data=${filter.data}&`;
    }
    if (filter.quantidade) {
      filtro += `quantidade=${filter.quantidade}&`;
    }
    if (filter.valor) {
      filtro += `valor=${filter.valor}&`;
    }
    return filtro;
  }
}

export const useGrupoSaidasService = new GrupoSaidasService();
