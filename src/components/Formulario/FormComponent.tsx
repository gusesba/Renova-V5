interface FormComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormComponent: React.FC<FormComponentProps> = ({
  ...props
}: FormComponentProps) => {
  return (
    <>
      <div className="w-full">{props.children}</div>
    </>
  );
};
