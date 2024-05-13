export const Top = () => {
  return (
    <>
      <div className="datatable-top h-20 flex items-center justify-between">
        <div className="datatable-search m-7">
          <input
            className="datatable-input  p-5  pt-[10px]  pb-[10px] w-100 "
            placeholder="Search..."
            type="search"
            title="Search within table"
            aria-controls="dataTableOne"
          />
        </div>
        <div className="datatable-dropdown m-8">
          <label className="font-medium">
            <select className="datatable-selector focus:outline-none mr-3 dark:bg-inherit">
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="-1">All</option>
            </select>
            <span className=" text-black dark:text-white">
              Entries Per Page
            </span>
          </label>
        </div>
      </div>
    </>
  );
};
