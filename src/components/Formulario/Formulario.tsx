interface FormularioProps extends React.HTMLAttributes<HTMLFormElement> {}
export const Formulario: React.FC<FormularioProps> = ({
  ...props
}: FormularioProps) => {
  return (
    <>
      <form {...props}>
        <div className="p-6.5">{props.children}</div>
      </form>
    </>
  );
};
