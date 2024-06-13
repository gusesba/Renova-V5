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
import { formScheme, NovoProdutoForm, validationScheme } from "./formScheme";
import { useFormik } from "formik";
import { FormInputError } from "@/components/Formulario/FormInputError";
import { useProdutoService } from "@/resources/produto/produto.service";
import { Produto } from "@/resources/produto/produto.resource";

export default function Novo() {
  const produtoService = useProdutoService();
  const [enableValidation, setEnableValidation] = useState(false);
  const onSubmit = async (values: NovoProdutoForm) => {
    const produto: Produto = {
      tipo: values.tipo,
      marca: values.marca,
      tamanho: values.tamanho,
      preco: parseInt(values.preco),
      descricao: values.descricao,
      dataEntrada: new Date(values.dataEntrada),
    };
    produtoService.create(produto);
  };

  const { values, handleChange, handleSubmit, errors } =
    useFormik<NovoProdutoForm>({
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
            value={values[id as keyof NovoProdutoForm]}
            id={id}
            placeholder={placeholder}
          />
          <FormInputError>{errors[id as keyof NovoProdutoForm]}</FormInputError>

          <span className="absolute right-4 top-4">
            {Icon && (
              <Icon
                className={
                  errors[id as keyof NovoProdutoForm]
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
        <Title titulo="Novo Produto" caminho="Produtos / " />

        <Panel>
          <Formulario onSubmit={handleFormSubmit}>
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
