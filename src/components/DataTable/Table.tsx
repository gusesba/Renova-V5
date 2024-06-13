import { Panel } from "../Utils/Panel";

interface TableProps {
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return (
    <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10 tabela w-full h-full">
      <Panel>
        <div className="data-table-common data-table-one max-w-full overflow-x-auto">
          <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
            {children}
          </div>
        </div>
      </Panel>
    </div>
  );
};
