"use client";
import { LoginForm, formScheme, validationScheme } from "./formScheme";
import { useFormik } from "formik";
import { useAuth } from "@/resources/user/authentication.service";
import { useRouter } from "next/navigation";
import { Credentials, AccessToken } from "@/resources/user/users.resource";

const Login = () => {
  const auth = useAuth();
  const router = useRouter();

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
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
          ></input>
        </label>
        <label>
          Password:{" "}
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
          ></input>
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Login;
