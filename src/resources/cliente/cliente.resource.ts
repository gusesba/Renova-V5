export class Cliente {
  id?: number;
  nome?: string;
  celular?: string;
  apelido?: string;
  indicacao?: string;
}

export const clientesHeaders = [
  { text: "ID", value: "id" },
  { text: "Nome", value: "nome" },
  { text: "Celular", value: "celular" },
  { text: "Apelido", value: "apelido" },
  { text: "Indicação", value: "indicacao" },
];
