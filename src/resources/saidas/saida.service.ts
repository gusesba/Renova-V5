import { PaginatedData, TableService } from "@/components/DataTable";
import { saidasPage } from "@/tempdata/saidas";
import { produtoFilter } from "../produto/produto.service";
import { Saida } from "./saida.resource";

export interface saidasFilter extends produtoFilter {
  comprador?: string;
  data?: string;
  valor?: string;
}

// #TODO - Implementar segurança
export class saidasService implements TableService<Saida, saidasFilter> {
  baseURL: string = "http://localhost:8080/v1/clientes";

  async getPaginated(
    filter: saidasFilter,
    take: number = 10,
    page: number = 0
  ): Promise<PaginatedData<Saida>> {
    return saidasPage;
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

  gerarFiltro(filter: saidasFilter): string {
    var filtro = "";
    if (filter.id) {
      filtro += `id=${filter.id}&`;
    }
    if (filter.tipo) {
      filtro += `tipo=${filter.tipo}&`;
    }
    if (filter.marca) {
      filtro += `marca=${filter.marca}&`;
    }
    if (filter.tamanho) {
      filtro += `tamanho=${filter.tamanho}&`;
    }
    if (filter.preco) {
      filtro += `preco=${filter.preco}&`;
    }
    if (filter.descricao) {
      filtro += `descricao=${filter.descricao}&`;
    }
    if (filter.comprador) {
      filtro += `comprador=${filter.comprador}&`;
    }
    if (filter.data) {
      filtro += `data=${filter.data}&`;
    }
    if (filter.valor) {
      filtro += `valor=${filter.valor}&`;
    }
    return filtro;
  }
}

export const useSaidasService = new saidasService();
