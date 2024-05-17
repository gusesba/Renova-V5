import { clienteFilter } from "@/resources/cliente/cliente.service";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { abrirModal } from "../Modal/Modal";
import { DeleteButton } from "./DeleteButton";

interface TopProps extends React.HTMLAttributes<HTMLDivElement> {
  take: number;
  setTake: Dispatch<SetStateAction<number>>;
}
export const Top: React.FC<TopProps> = ({
  take,
  setTake,

  ...props
}: TopProps) => {
  const entriesPerPage = () => {
    return (
      <select
        value={take}
        className="datatable-selector focus:outline-none mr-3 dark:bg-inherit"
        onChange={(e) => setTake(parseInt(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    );
  };

  return (
    <>
      <div className="datatable-top h-20 flex items-center justify-between">
        <div className="datatable-search m-7 flex items-center">
          {props.children}
          <DeleteButton onClick={abrirModal} />
        </div>
        <div className="datatable-dropdown m-8">
          {entriesPerPage()}
          <label className="font-medium">
            <span className=" text-black dark:text-white">
              Registros Por Página
            </span>
          </label>
        </div>
      </div>
    </>
  );
};
