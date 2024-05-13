export const Content = () => {
  return (
    <>
      <div className="datatable-bottom border-t-gray-1 dark:border-t-graydark border-t-[1px] flex items-center">
        <table className="w-full">
          <thead>
            <tr className="title-group">
              <th>Name/ID</th>
              <th>Position</th>
              <th>BDay</th>
              <th>Email/Phone</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
            <tr className="search-group">
              <th>
                <input type="search" />
              </th>
              <th>
                <input type="search" />
              </th>
              <th>
                <input type="search" />
              </th>
              <th>
                <input type="search" />
              </th>
              <th>
                <input type="search" />
              </th>
              <th>
                <input type="search" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group">
              <td>Waylon Kihn</td>
              <td>Developer</td>
              <td>25 Nov, 1975</td>
              <td>Waylon@gmail.com</td>
              <td>Block A, Demo Park</td>
              <td>Full-time</td>
            </tr>
            <tr className="border-t-gray-1 dark:border-t-graydark border-t-[1px] hover:bg-primary/5 line-group">
              <td>Waylon Kihn</td>
              <td>Developer</td>
              <td>25 Nov, 1975</td>
              <td>Waylon@gmail.com</td>
              <td>Block A, Demo Park</td>
              <td>Full-time</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
