import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

function useDataTable<A>(
  headers: { text: string; value: string }[]
): [
  number[],
  Dispatch<SetStateAction<number[]>>,
  number,
  Dispatch<SetStateAction<number>>,
  number,
  Dispatch<SetStateAction<number>>,
  MutableRefObject<A>,
  { text: string; value: string }[],
  Dispatch<SetStateAction<{ text: string; value: string }[]>>
] {
  const [linhasSelecionadas, setLinhasSelecionadas] = useState<number[]>([]);
  const [take, setTake] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [header, setHeader] =
    useState<{ text: string; value: string }[]>(headers);
  const filter = useRef<A>({} as A);

  return [
    linhasSelecionadas,
    setLinhasSelecionadas,
    take,
    setTake,
    page,
    setPage,
    filter,
    header,
    setHeader,
  ];
}

export default useDataTable;
