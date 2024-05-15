interface FormGroupProps {
  children?: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
}: FormGroupProps) => {
  return (
    <>
      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">{children}</div>
    </>
  );
};
