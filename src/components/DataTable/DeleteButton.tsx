import { Delete } from "../Icones/Delete";

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  show: boolean;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  show,
  ...props
}: DeleteButtonProps) => {
  return (
    <button
      id="data-table-delete"
      className={
        show
          ? "bg-rose-800 w-8 h-8 rounded flex items-center justify-center hover:bg-rose-700 ml-2 transition-all hover:scale-110"
          : "hidden"
      }
      {...props}
    >
      <Delete />
    </button>
  );
};
