export const Bottom = () => {
  return (
    <>
      <div className="datatable-bottom h-20 border-t-gray-1 border-t-[1px] flex justify-between items-center">
        <nav className="m-7">
          <ul className="flex">
            <li className="page-item">{"‹"}</li>
            <li className="page-item selected">1</li>
            <li className="page-item">2</li>
            <li className="page-item">{"›"}</li>
          </ul>
        </nav>
        <div className="datatable-info m-8 font-medium">
          Showing 1 to 10 of 16 entries
        </div>
      </div>
    </>
  );
};
