interface LinhaTabelaProps {
  children?: React.ReactNode;
}

export const LinhaTabela: React.FC<LinhaTabelaProps> = ({
  children,
}: LinhaTabelaProps) => {
  return (
    <tr className="border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group">
      {children}
    </tr>
  );
};
