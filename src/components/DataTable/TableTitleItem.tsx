import { Dispatch, SetStateAction } from "react";
import { ArrowDown } from "../Icones/ArrowDown";
import { ArrowUp } from "../Icones/ArrowUp";
import { X } from "../Icones/X";
import { headers } from "next/headers";

interface TableItemProps {
  children?: React.ReactNode;
  setHeaders: Dispatch<
    SetStateAction<
      {
        text: string;
        value: string;
      }[]
    >
  >;
  index: number;
}

export const TableTitleItem: React.FC<TableItemProps> = ({
  children,
  setHeaders,
  index,
}: TableItemProps) => {
  return (
    <th>
      <div
        className="flex items-center justify-between"
        onDragStart={() => console.log("teste")}
        draggable
      >
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
        <button
          onClick={() =>
            setHeaders((headers) => headers.filter((_, i) => i !== index))
          }
        >
          <X />
        </button>
      </div>
    </th>
  );
};
