import { Produto } from "../produto/produto.resource";

export class GrupoSaidas {
  id?: number;
  comprador?: string;
  data?: string;
  quantidade?: number;
  valor?: number;
}

export const grupoSaidasHeaders = [
  { text: "ID", value: "id" },
  { text: "Comprador", value: "comprador" },
  { text: "Data", value: "data" },
  { text: "Quantidade", value: "quantidade" },
  { text: "Valor", value: "valor" },
];

export class Saida extends Produto {
  comprador?: string;
  data?: string;
  valor?: number;
}

export const saidaHeaders = [
  { text: "ID", value: "id" },
  { text: "Tipo", value: "tipo" },
  { text: "Marca", value: "marca" },
  { text: "Tamanho", value: "tamanho" },
  { text: "Preço Inicial", value: "preco" },
  { text: "Descrição", value: "descricao" },
  { text: "Comprador", value: "comprador" },
  { text: "Data Entrada", value: "dataEntrada" },
  { text: "Data Saída", value: "data" },
  { text: "Preço Venda", value: "valor" },
];
