import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

function useDataTable<A>(): [
  number[],
  Dispatch<SetStateAction<number[]>>,
  number,
  Dispatch<SetStateAction<number>>,
  number,
  Dispatch<SetStateAction<number>>,
  MutableRefObject<A>
] {
  const [linhasSelecionadas, setLinhasSelecionadas] = useState<number[]>([]);
  const [take, setTake] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const filter = useRef<A>({} as A);

  return [
    linhasSelecionadas,
    setLinhasSelecionadas,
    take,
    setTake,
    page,
    setPage,
    filter,
  ];
}

export default useDataTable;
