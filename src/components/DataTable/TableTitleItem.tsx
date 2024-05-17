import { ArrowDown } from "../Icones/ArrowDown";
import { ArrowUp } from "../Icones/ArrowUp";

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
            <ArrowUp />
          </span>
          <span className="inline-block">
            <ArrowDown />
          </span>
        </div>
      </div>
    </th>
  );
};
