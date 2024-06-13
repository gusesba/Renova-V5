import * as Yup from "yup";

export interface NovoClienteForm {
  nome: string;
  celular: string;
  apelido: string;
}

export const validationScheme = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório!"),
  celular: Yup.string().required("Celular é obrigatório!"),
  apelido: Yup.string(),
});

export const formScheme: NovoClienteForm = {
  nome: "",
  celular: "",
  apelido: "",
};
