export class Cliente {
  id?: number;
  nome?: string;
  celular?: string;
  apelido?: string;
  indicacao?: string;
}

export class ClientePage {
  content: Cliente[] = [];
  totalElements: number = 0;
  totalPages: number = 1;
  size: number = 0;
  number: number = 0;
  numberOfElements: number = 0;
}
