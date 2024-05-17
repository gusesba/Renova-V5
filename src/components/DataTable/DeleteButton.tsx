import { Delete } from "../Icones/Delete";

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  ...props
}: DeleteButtonProps) => {
  return (
    <button
      id="data-table-delete"
      className="bg-rose-800 w-8 h-8 rounded flex items-center justify-center hidden ml-2"
      {...props}
    >
      <Delete />
    </button>
  );
};
