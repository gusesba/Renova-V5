export class Produto {
  id?: number;
  tipo?: string;
  marca?: string;
  tamanho?: string;
  preco?: number;
  descricao?: string;
}

export const produtosHeaders = [
  { text: "ID", value: "id" },
  { text: "Tipo", value: "tipo" },
  { text: "Marca", value: "marca" },
  { text: "Tamanho", value: "tamanho" },
  { text: "Preço", value: "preco" },
  { text: "Descrição", value: "descricao" },
];
