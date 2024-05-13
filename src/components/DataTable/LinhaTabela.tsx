interface LinhaTabelaProps {
  children?: React.ReactNode;
  key: any;
}

export const LinhaTabela: React.FC<LinhaTabelaProps> = ({
  children,
  key,
}: LinhaTabelaProps) => {
  return (
    <tr
      key={key}
      className="border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group"
    >
      {children}
    </tr>
  );
};
