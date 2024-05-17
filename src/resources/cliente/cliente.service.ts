import { clientes } from "@/tempdata/clientes";
import { Cliente } from "./cliente.resource";

export class ClienteService {
  baseURL: string = "http://localhost:8080/v1/images";

  async getClientes(): Promise<Cliente[]> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    return clientes;
  }

  async deleteCliente(id: number): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(id);
    return;
  }

  async deleteClientes(ids: number[]): Promise<void> {
    //const response = await fetch(this.baseURL);
    //return await response.json();
    console.log(ids);
    return;
  }
}

export const useClienteService = new ClienteService();
