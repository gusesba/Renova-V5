"use client";
import { DataTable } from "@/components/DataTable";
import { Produto, produtosHeaders } from "@/resources/produto/produto.resource";
import {
  produtoFilter,
  useProdutoService,
} from "@/resources/produto/produto.service";

const Produtos = () => {
  const produtosService = useProdutoService;
  return (
    <DataTable<Produto, produtoFilter>
      titulo="Produtos"
      caminho="Produtos /"
      headers={produtosHeaders}
      path="produtos"
      service={produtosService}
    />
  );
};

export default Produtos;
