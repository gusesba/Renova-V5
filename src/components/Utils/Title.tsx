interface TitleProps {
  titulo: string;
  caminho: string;
}
export const Title: React.FC<TitleProps> = ({
  titulo,
  caminho,
}: TitleProps) => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">
          {titulo}
        </h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="#">
                {caminho}
              </a>
            </li>
            <li className="font-medium text-primary">{titulo}</li>
          </ol>
        </nav>
      </div>
    </>
  );
};
