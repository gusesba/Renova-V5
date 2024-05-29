import { Dispatch, SetStateAction, useState } from "react";

interface LinhaTabelaProps extends React.HTMLAttributes<HTMLTableRowElement> {
  linhas: any[];
  linhasSelecionadas: number[];
  setLinhasSelecionadas: Dispatch<SetStateAction<number[]>>;
  identificador: number;
}

export const LinhaTabela: React.FC<LinhaTabelaProps> = ({
  linhas,
  linhasSelecionadas,
  setLinhasSelecionadas,
  identificador,
  ...props
}: LinhaTabelaProps) => {
  const isSelected = linhasSelecionadas.includes(identificador);

  const toggleSelecionarLinha = (e: any) => {
    if (!e.ctrlKey) {
      if (isSelected) {
        setLinhasSelecionadas(
          linhasSelecionadas.filter((id) => id !== identificador)
        );
      } else {
        setLinhasSelecionadas([...linhasSelecionadas, identificador]);
      }
    } else {
      if (isSelected) {
        const lastSelected = linhasSelecionadas[linhasSelecionadas.length - 1];

        const firstIndex = linhas.findIndex(
          (linha) => linha.id === lastSelected
        );
        const lastIndex = linhas.findIndex(
          (linha) => linha.id === identificador
        );
        const novasLinhas: number[] = [];
        for (
          let i = Math.min(firstIndex, lastIndex);
          i <= Math.max(firstIndex, lastIndex);
          i++
        ) {
          novasLinhas.push(linhas[i].id);
        }
        setLinhasSelecionadas(
          linhasSelecionadas.filter((id) => !novasLinhas.includes(id))
        );
      } else {
        const lastSelected = linhasSelecionadas[linhasSelecionadas.length - 1];

        const firstIndex = linhas.findIndex(
          (linha) => linha.id === lastSelected
        );

        const lastIndex = linhas.findIndex(
          (linha) => linha.id === identificador
        );
        let novasLinhas = [];
        for (
          let i = Math.min(firstIndex, lastIndex);
          i <= Math.max(firstIndex, lastIndex);
          i++
        ) {
          novasLinhas.push(linhas[i].id);
        }
        novasLinhas.push(...linhasSelecionadas);
        novasLinhas = novasLinhas.filter(
          (value, index, self) => self.indexOf(value) === index
        );
        novasLinhas.slice(novasLinhas.indexOf(identificador), 1);
        novasLinhas.push(identificador);

        setLinhasSelecionadas(novasLinhas);
      }
    }
  };

  return (
    <tr
      onClick={toggleSelecionarLinha}
      className={
        isSelected
          ? "border-t-gray-1 dark:border-t-graydark border-t-[1px] bg-primary/20 dark:bg-bodydark/20 line-group"
          : "border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group"
      }
      {...props}
    >
      {props.children}
    </tr>
  );
};
