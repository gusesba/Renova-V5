interface FormComponentProps {
  children?: React.ReactNode;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  children,
}: FormComponentProps) => {
  return (
    <>
      <div className="w-full lg:w-1/2">{children}</div>
    </>
  );
};
