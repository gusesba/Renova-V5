import { useState } from "react";

interface LinhaTabelaProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  linhasSelecionadas: number[];
  identificador: number;
}

export const LinhaTabela: React.FC<LinhaTabelaProps> = ({
  children,
  linhasSelecionadas,
  identificador,
  ...props
}: LinhaTabelaProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <tr
      onClick={() => {
        setIsSelected(!isSelected);
        if (isSelected) {
          linhasSelecionadas.splice(
            linhasSelecionadas.indexOf(identificador),
            1
          );
        } else {
          linhasSelecionadas.push(identificador);
        }
        if (linhasSelecionadas.length === 0)
          document.getElementById("delete")?.classList.toggle("hidden");
        else document.getElementById("delete")?.classList.remove("hidden");
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
