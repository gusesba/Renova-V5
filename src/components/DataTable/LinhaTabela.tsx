import { useState } from "react";

interface LinhaTabelaProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export const LinhaTabela: React.FC<LinhaTabelaProps> = ({
  children,
  ...props
}: LinhaTabelaProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <tr
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className={
        isSelected
          ? "border-t-gray-1 dark:border-t-graydark border-t-[1px] bg-primary/20 line-group"
          : "border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group"
      }
      {...props}
    >
      {children}
    </tr>
  );
};
