import { Delete } from "../Icones/Delete";

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  ...props
}: DeleteButtonProps) => {
  return (
    <button
      id="data-table-delete"
      className="bg-rose-800 w-8 h-8 rounded flex items-center justify-center hover:bg-rose-700 hidden ml-2 transition-all hover:scale-110"
      {...props}
    >
      <Delete />
    </button>
  );
};
