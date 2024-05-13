import { clientes } from "@/tempdata/clientes";
import { Cliente } from "./cliente.resource";

class ClienteService {
  baseURL: string = "http://localhost:8080/v1/images";

  async getClientes(): Promise<Cliente[]> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    return clientes;
  }
}

export const useClienteService = new ClienteService();
