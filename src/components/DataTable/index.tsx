import { Bottom } from "./Bottom";
import { Content } from "./Content";
import { Title } from "./Title";
import { Top } from "./Top";

export const DataTable = () => {
  return (
    <>
      <Title />
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="data-table-common data-table-one max-w-full overflow-x-auto">
            <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
              <Top />
              <Content />
              <Bottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
