import { PaginatedData, TableService } from "@/components/DataTable";
import { produtoPage } from "@/tempdata/produtos";
import { Produto } from "./produto.resource";

export interface produtoFilter {
  id?: string;
  tipo?: string;
  marca?: string;
  tamanho?: string;
  preco?: string;
  descricao?: string;
}

export class ProdutoService implements TableService<Produto, produtoFilter> {
  baseURL: string = "http://localhost:8080/v1/clientes";

  async getPaginated(
    filter: produtoFilter,
    take: number = 10,
    page: number = 0
  ): Promise<PaginatedData<Produto>> {
    return produtoPage;
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

  gerarFiltro(filter: produtoFilter): string {
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
    return filtro;
  }
}

export const useProdutoService = new ProdutoService();
