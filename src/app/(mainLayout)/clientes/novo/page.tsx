"use client";
import { Label } from "@/components/Formulario/Label";
import { Formulario } from "@/components/Formulario/Formulario";
import { Title } from "@/components/Utils/Title";
import { FormGroup } from "@/components/Formulario/FormGroup";
import { FormComponent } from "@/components/Formulario/FormComponent";
import { ButtonPrimary } from "@/components/Utils/ButtonPrimary";
import { Input } from "@/components/Formulario/Input";
import { Panel } from "@/components/Utils/Panel";
import { FormEvent, useState } from "react";
import { formScheme, NovoClienteForm, validationScheme } from "./formScheme";
import { Cliente } from "@/resources/cliente/cliente.resource";
import { useFormik } from "formik";
import { FormInputError } from "@/components/Formulario/FormInputError";
import { useClienteService } from "@/resources/cliente/cliente.service";

export default function Novo() {
  const clienteService = useClienteService();
  const [enableValidation, setEnableValidation] = useState(false);
  const onSubmit = async (values: NovoClienteForm) => {
    const cliente: Cliente = {
      nome: values.nome,
      celular: values.celular,
      apelido: values.apelido,
    };
    clienteService.create(cliente);
  };

  const { values, handleChange, handleSubmit, errors } =
    useFormik<NovoClienteForm>({
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
    obrigatorio,
  }: {
    id: string;
    placeholder?: string;
    Icon?: any;
    label?: string;
    obrigatorio?: boolean;
  }) => {
    label = label || id.charAt(0).toUpperCase() + id.slice(1);
    placeholder = placeholder || label;
    return (
      <FormComponent>
        <Label label={label} obrigatorio={obrigatorio} />
        <div className="relative">
          <Input
            onChange={handleChange}
            value={values[id as keyof NovoClienteForm]}
            id={id}
            placeholder={placeholder}
          />
          <FormInputError>{errors[id as keyof NovoClienteForm]}</FormInputError>

          <span className="absolute right-4 top-4">
            {Icon && (
              <Icon
                className={
                  errors[id as keyof NovoClienteForm]
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
    <>
      <div className="w-150">
        <Title titulo="Novo Cliente" caminho="Clientes / " />

        <Panel>
          <Formulario onSubmit={handleFormSubmit}>
            <FormGroup>
              {inputHolder({
                id: "nome",
                placeholder: "Nome Completo",
                obrigatorio: true,
              })}

              {inputHolder({
                id: "celular",
                obrigatorio: true,
              })}
            </FormGroup>

            <FormGroup>
              {inputHolder({
                id: "apelido",
              })}
            </FormGroup>

            <ButtonPrimary>Adicionar</ButtonPrimary>
          </Formulario>
        </Panel>
      </div>
    </>
  );
}
