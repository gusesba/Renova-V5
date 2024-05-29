import { PaginatedData, TableService } from "@/components/DataTable";
import { clientePage, clientes } from "@/tempdata/clientes";
import { Cliente } from "./cliente.resource";
export interface clienteFilter {
  nome?: string;
  id?: string;
  celular?: string;
  apelido?: string;
  indicacao?: string;
  geral?: string;
}

export class ClienteService implements TableService<Cliente, clienteFilter> {
  baseURL: string = "http://localhost:8080/v1/clientes";

  async getPaginated(
    filter: clienteFilter,
    take: number = 10,
    page: number = 0
  ): Promise<PaginatedData<Cliente>> {
    return clientePage;
    var filtro = this.gerarFiltro(filter);
    const response = await fetch(
      `${this.baseURL}?size=${take}&page=${page}&${filtro}`
    );
    return await response.json();
  }

  async deleteOne(id: number): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(id);
    return;
  }

  async deleteList(ids: number[]): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(ids);
    return;
  }

  gerarFiltro(filter: clienteFilter): string {
    var filtro = "";
    if (filter.nome) {
      filtro += `nome=${filter.nome}&`;
    }
    if (filter.id) {
      filtro += `id=${filter.id}&`;
    }
    if (filter.celular) {
      filtro += `celular=${filter.celular}&`;
    }
    if (filter.apelido) {
      filtro += `apelido=${filter.apelido}&`;
    }
    if (filter.indicacao) {
      filtro += `indicacao=${filter.indicacao}&`;
    }
    if (filter.geral) {
      filtro += `geral=${filter.geral}&`;
    }
    return filtro;
  }
}

export const useClienteService = new ClienteService();
