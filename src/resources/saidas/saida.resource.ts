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
