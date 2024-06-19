"use client";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function useDataTable<A>(
  headers: { text: string; value: string }[],
  path: string
): {
  linhasSelecionadas: number[];
  setLinhasSelecionadas: Dispatch<SetStateAction<number[]>>;
  take: number;
  setTake: Dispatch<SetStateAction<number>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  filter: MutableRefObject<A>;
  header: { text: string; value: string }[];
  updateHeader: Dispatch<SetStateAction<{ text: string; value: string }[]>>;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
} {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [linhasSelecionadas, setLinhasSelecionadas] = useState<number[]>([]);
  const [take, setTake] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [header, setHeader] =
    useState<{ text: string; value: string }[]>(headers);
  const filter = useRef<A>({} as A);

  useEffect(() => {
    const headerStorage = localStorage.getItem(`header-${path}`);
    if (headerStorage) {
      setHeader(JSON.parse(headerStorage));
    }
  }, [path]);

  const updateHeader = (
    setStateAction: SetStateAction<
      {
        text: string;
        value: string;
      }[]
    >
  ) => {
    const newValue =
      typeof setStateAction === "function"
        ? setStateAction(header)
        : setStateAction;
    localStorage.setItem(`header-${path}`, JSON.stringify(newValue));
    setHeader(newValue);
  };

  return {
    linhasSelecionadas,
    setLinhasSelecionadas,
    take,
    setTake,
    page,
    setPage,
    filter,
    header,
    updateHeader,
    isEditing,
    setIsEditing,
  };
}

export default useDataTable;
