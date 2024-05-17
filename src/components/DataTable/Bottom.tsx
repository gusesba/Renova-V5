export const Bottom = () => {
  const paginas = () => {
    return (
      <ul className="flex">
        <li className="page-item">{"‹"}</li>
        <li className="page-item selected">1</li>
        <li className="page-item">2</li>
        <li className="page-item">{"›"}</li>
      </ul>
    );
  };

  return (
    <>
      <div className="datatable-bottom h-20 border-t-gray-1 dark:border-t-graydark border-t-[1px] flex justify-between items-center">
        <nav className="m-7">{paginas()}</nav>
        <div className="datatable-info m-8 font-medium">
          Mostrando 1 à 10 de 16 registros
        </div>
      </div>
    </>
  );
};
