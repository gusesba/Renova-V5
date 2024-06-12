import * as Yup from "yup";

export interface LoginForm {
  email: string;
  password: string;
}

export const validationScheme = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email inválido!")
    .required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
});

export const formScheme: LoginForm = { email: "", password: "" };
