interface ContentProps {
  children?: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }: ContentProps) => {
  return (
    <>
      <div className="datatable-bottom border-t-gray-1 dark:border-t-graydark border-t-[1px] flex items-center">
        <table className="w-full">{children}</table>
      </div>
    </>
  );
};
