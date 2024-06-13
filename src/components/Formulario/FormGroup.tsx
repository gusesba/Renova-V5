interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormGroup: React.FC<FormGroupProps> = ({
  ...props
}: FormGroupProps) => {
  return (
    <>
      <div className="mb-4.5 flex flex-col gap-6" {...props}>
        {props.children}
      </div>
    </>
  );
};
