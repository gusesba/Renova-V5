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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="white"
        width="1.2rem"
        height="1.2rem"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </button>
  );
};
