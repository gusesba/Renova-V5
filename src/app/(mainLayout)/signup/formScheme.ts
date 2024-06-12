import * as Yup from "yup";

export interface SignUpForm {
  nome: string;
  repPassword: string;
  email: string;
  password: string;
}

export const validationScheme = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório!"),
  email: Yup.string()
    .trim()
    .email("Email inválido!")
    .required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
  repPassword: Yup.string()
    .required("Campo Obrigatório")
    .oneOf([Yup.ref("password")], "Senhas precisam ser iguais!"),
});

export const formScheme: SignUpForm = {
  email: "",
  password: "",
  nome: "",
  repPassword: "",
};
