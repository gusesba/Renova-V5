import { LabelInput } from "@/components/Formulario/LabelInput";
import { Formulario } from "@/components/Formulario/Formulario";
import { Title } from "@/components/Utils/Title";
import { FormGroup } from "@/components/Formulario/FormGroup";
import { FormComponent } from "@/components/Formulario/FormComponent";
import { ButtonPrimary } from "@/components/Utils/ButtonPrimary";

export default function Novo() {
  return (
    <>
      <Title titulo="Novo Cliente" caminho="Clientes / " />

      <Formulario>
        <FormGroup>
          <FormComponent>
            <LabelInput label="Nome" placeholder="Nome" obrigatorio />
          </FormComponent>

          <FormComponent>
            <LabelInput label="Celular" placeholder="Celular" obrigatorio />
          </FormComponent>
        </FormGroup>

        <FormGroup>
          <FormComponent>
            <LabelInput label="Apelido" placeholder="Apelido" />
          </FormComponent>

          <FormComponent>
            <LabelInput label="Indicação" placeholder="Indicação" />
          </FormComponent>
        </FormGroup>

        <ButtonPrimary>Adicionar</ButtonPrimary>
      </Formulario>
    </>
  );
}
