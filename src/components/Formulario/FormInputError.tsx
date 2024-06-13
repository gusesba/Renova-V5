import React from "react";

interface FormInputErrorProps extends React.HTMLProps<HTMLSpanElement> {}

export const FormInputError: React.FC<FormInputErrorProps> = ({
  ...props
}: FormInputErrorProps) => {
  return <span className="ml-1 text-sm text-meta-1">{props.children}</span>;
};
