import * as Yup from "yup";

export interface NovoProdutoForm {
  tipo: string;
  marca: string;
  tamanho: string;
  preco: string;
  descricao: string;
  dataEntrada: string;
}

export const validationScheme = Yup.object().shape({
  tipo: Yup.string().required("O tipo do produto é obrigatório"),
  marca: Yup.string().required("A marca do produto é obrigatória"),
  tamanho: Yup.string().required("O tamanho do produto é obrigatório"),
  preco: Yup.number().required("O preço do produto é obrigatório"),
  descricao: Yup.string().required("A descrição do produto é obrigatória"),
  dataEntrada: Yup.date().required(
    "A data de entrada do produto é obrigatória"
  ),
});

export const formScheme: NovoProdutoForm = {
  tipo: "",
  marca: "",
  tamanho: "",
  preco: "",
  descricao: "",
  dataEntrada: getFormattedDate(),
};

function getFormattedDate() {
  let date = new Date(Date.now());

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11, so we add 1
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
