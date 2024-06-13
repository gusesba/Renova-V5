export class Cliente {
  id?: number;
  nome?: string;
  celular?: string;
  apelido?: string;
}

export const clientesHeaders = [
  { text: "ID", value: "id" },
  { text: "Nome", value: "nome" },
  { text: "Celular", value: "celular" },
  { text: "Apelido", value: "apelido" },
];
