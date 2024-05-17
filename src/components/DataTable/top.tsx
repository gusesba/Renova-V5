import { abrirModal } from "../Modal/Modal";
import { DeleteButton } from "./DeleteButton";

interface TopProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Top: React.FC<TopProps> = ({ ...props }: TopProps) => {
  const searchInput = () => {
    return (
      <input
        className="datatable-input  p-5  pt-[10px]  pb-[10px] w-100 "
        placeholder="Pesquisar..."
        type="search"
      />
    );
  };

  const entriesPerPage = () => {
    return (
      <select
        defaultValue={10}
        className="datatable-selector focus:outline-none mr-3 dark:bg-inherit"
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
          {searchInput()}
          <DeleteButton onClick={abrirModal} />
          {props.children}
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
