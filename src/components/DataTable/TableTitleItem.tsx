interface TableItemProps {
  children?: React.ReactNode;
}

export const TableTitleItem: React.FC<TableItemProps> = ({
  children,
}: TableItemProps) => {
  return (
    <th>
      <div className="flex items-center gap-1.5">
        {children}
        <div className="inline-flex flex-col space-y-[2px]">
          <span className="inline-block">
            <svg
              className="fill-current"
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 0L0 5H10L5 0Z" fill=""></path>
            </svg>
          </span>
          <span className="inline-block">
            <svg
              className="fill-current"
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill=""></path>
            </svg>
          </span>
        </div>
      </div>
    </th>
  );
};
