interface TableProps {
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return (
    <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="data-table-common data-table-one max-w-full overflow-x-auto">
          <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
