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

  const openDropDownSearch = (id: string) => {
    const dropSearch = document.getElementById(
      `drop-search-${id}`
    ) as HTMLDivElement;
    dropSearch.classList.remove("hidden");
    dropSearch.classList.add("absolute");
  };

  const closeDropDownSearch = (id: string) => {
    const dropSearch = document.getElementById(
      `drop-search-${id}`
    ) as HTMLDivElement;
    dropSearch.classList.add("closing");
    dropSearch.addEventListener(
      "animationend",
      () => {
        dropSearch.classList.remove("closing");
        dropSearch.classList.add("hidden");
        dropSearch.classList.remove("absolute");
      },
      { once: true }
    );
  };

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
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
    dropdown = false,
  }: {
    id: string;
    placeholder?: string;
    Icon?: any;
    label?: string;
    obrigatorio?: boolean;
    dropdown?: boolean;
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
            onBlur={(e) => {
              dropdown &&
                setTimeout(() => {
                  closeDropDownSearch(id);
                }, 100);
            }}
            onFocus={(e) => {
              dropdown && openDropDownSearch(id);
            }}
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

  const dropDownSearch = (itens: string[], id: string) => {
    return (
      <div
        id={`drop-search-${id}`}
        className="drop-animation top-[92px] z-999 rounded-b-lg bg-slate-50 dark:bg-boxdark shadow-2xl w-full h-60 hidden overflow-auto border-t border-primary/20"
      >
        {itens.map((item, index) => (
          <div
            key={index}
            onClick={() => setFieldValue(id, item)}
            className="hover:bg-primary/10 hover:cursor-pointer flex items-center px-10 h-15"
          >
            <h1 className="font-medium text-l ml-2 ">{item}</h1>
          </div>
        ))}
      </div>
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
                id: "fornecedor",
              })}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "tipo",
              })}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "marca",
              })}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "cor",
                dropdown: true,
              })}
              {dropDownSearch(["Azul", "Verde"], "cor")}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "tamanho",
                dropdown: true,
              })}
              {dropDownSearch(["P", "PP"], "tamanho")}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "preco",
              })}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "descricao",
              })}
            </FormGroup>
            <FormGroup>
              {inputHolder({
                id: "dataEntrada",
                label: "Data Entrada",
                placeholder: "Data Entrada",
              })}
            </FormGroup>

            <ButtonPrimary>Adicionar</ButtonPrimary>
          </Formulario>
        </Panel>
      </div>
    </>
  );
}
