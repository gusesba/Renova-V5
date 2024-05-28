import { Search as SearchIcon } from "../Icones/Search";

interface SearchButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const SearchButton: React.FC<SearchButtonProps> = ({
  ...props
}: SearchButtonProps) => {
  return (
    <button
      {...props}
      className="decoration-none w-8 h-8 rounded flex items-center justify-center ml-2 hover:bg-primary/15 transition-all hover:scale-110"
    >
      <SearchIcon />
    </button>
  );
};
