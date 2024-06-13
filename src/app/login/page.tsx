"use client";
import { LoginForm, formScheme, validationScheme } from "./formScheme";
import { useFormik } from "formik";
import { useAuth } from "@/resources/user/authentication.service";
import { useRouter } from "next/navigation";
import { Credentials, AccessToken } from "@/resources/user/users.resource";
import { FormEvent, useState } from "react";
import { Formulario } from "@/components/Formulario/Formulario";
import { FormComponent } from "@/components/Formulario/FormComponent";
import { Label } from "@/components/Formulario/Label";
import { Input } from "@/components/Formulario/Input";
import { FormInputError } from "@/components/Formulario/FormInputError";
import { FormGroup } from "@/components/Formulario/FormGroup";
import { Cadeado } from "@/components/Icones/Cadeado";
import { Mail } from "@/components/Icones/Mail";
import { ButtonPrimary } from "@/components/Utils/ButtonPrimary";
import { Title } from "@/components/Utils/Title";
import { Panel } from "@/components/Utils/Panel";

const Login = () => {
  const auth = useAuth();
  const router = useRouter();
  const [enableValidation, setEnableValidation] = useState(false);

  const onSubmit = async (values: LoginForm) => {
    const credentials: Credentials = {
      email: values.email,
      password: values.password,
    };

    try {
      const accessToken: AccessToken = await auth.authenticate(credentials);
      router.push("/produtos");
    } catch (error: any) {
      console.log("teste");
      const message = error?.message;
      console.log(message);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik<LoginForm>({
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
        <Label label={label} />
        <div className="relative">
          <Input
            onChange={handleChange}
            value={values[id as keyof LoginForm]}
            id={id}
            placeholder={placeholder}
          />
          <FormInputError>{errors[id as keyof LoginForm]}</FormInputError>

          <span className="absolute right-4 top-4">
            {Icon && (
              <Icon
                className={
                  errors[id as keyof LoginForm] ? "fill-meta-1" : "fill-current"
                }
              />
            )}
          </span>
        </div>
      </FormComponent>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Title titulo="Entrar" caminho="Segurança / " />
        <Panel>
          <div className="w-full p-4 sm:p-12.5">
            <Formulario onSubmit={handleFormSubmit}>
              <FormGroup>
                {inputHolder({ id: "email", Icon: Mail })}
                {inputHolder({ id: "password", Icon: Cadeado })}
              </FormGroup>
              <ButtonPrimary>Entrar</ButtonPrimary>
              <div className="mt-6 text-center">
                <p>Não tem uma conta? Entre em contato com o administrador.</p>
              </div>
            </Formulario>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Login;
