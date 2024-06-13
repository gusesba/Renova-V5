"use client";

import { FormComponent } from "@/components/Formulario/FormComponent";
import { FormGroup } from "@/components/Formulario/FormGroup";
import { FormInputError } from "@/components/Formulario/FormInputError";
import { Formulario } from "@/components/Formulario/Formulario";
import { Input } from "@/components/Formulario/Input";
import { Label } from "@/components/Formulario/Label";
import { Cadeado } from "@/components/Icones/Cadeado";
import { Mail } from "@/components/Icones/Mail";
import { User } from "@/components/Icones/User";
import { ButtonPrimary } from "@/components/Utils/ButtonPrimary";
import { Panel } from "@/components/Utils/Panel";
import { Title } from "@/components/Utils/Title";
import { useAuth } from "@/resources/user/authentication.service";
import { Credentials, UserSignUp } from "@/resources/user/users.resource";
import { useFormik } from "formik";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { formScheme, SignUpForm, validationScheme } from "./formScheme";

export default function Signup() {
  const auth = useAuth();
  const [enableValidation, setEnableValidation] = useState(false);

  const onSubmit = async (values: SignUpForm) => {
    const credentials: UserSignUp = {
      nome: values.nome,
      email: values.email,
      password: values.password,
      repPassword: values.repPassword,
    };
  };

  const { values, handleChange, handleSubmit, errors } = useFormik<SignUpForm>({
    initialValues: formScheme,
    validationSchema: validationScheme,
    onSubmit: onSubmit,
    validateOnChange: enableValidation,
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnableValidation(true);
    handleSubmit(e);
  };

  const inputHolder = ({
    id,
    placeholder,
    Icon,
    label,
  }: {
    id: string;
    placeholder?: string;
    Icon?: any;
    label?: string;
  }) => {
    label = label || id.charAt(0).toUpperCase() + id.slice(1);
    placeholder = placeholder || label;
    return (
      <FormComponent>
        <Label label={label} obrigatorio />
        <div className="relative">
          <Input
            onChange={handleChange}
            value={values[id as keyof SignUpForm]}
            id={id}
            placeholder={placeholder}
          />
          <FormInputError>{errors[id as keyof SignUpForm]}</FormInputError>

          <span className="absolute right-4 top-4">
            {Icon && (
              <Icon
                className={
                  errors[id as keyof SignUpForm]
                    ? "fill-meta-1"
                    : "fill-current"
                }
              />
            )}
          </span>
        </div>
      </FormComponent>
    );
  };

  return (
    <div className="w-150">
      <Title titulo="Novo Usuário" caminho="Segurança / " />
      <Panel>
        <Formulario onSubmit={handleFormSubmit}>
          <FormGroup>
            {inputHolder({
              id: "nome",
              placeholder: "Nome Completo",
              Icon: User,
            })}
          </FormGroup>

          <FormGroup>
            {inputHolder({
              id: "email",
              Icon: Mail,
            })}
          </FormGroup>

          <FormGroup>
            {inputHolder({
              id: "password",
              Icon: Cadeado,
            })}
          </FormGroup>

          <FormGroup>
            {inputHolder({
              id: "repPassword",
              label: "Repita a senha",
              placeholder: "Repita a senha",
              Icon: Cadeado,
            })}
          </FormGroup>

          <ButtonPrimary>Criar Conta</ButtonPrimary>
        </Formulario>
      </Panel>
    </div>
  );
}
