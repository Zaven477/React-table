import { usePagination, useTable } from "react-table";
import { columnsPaginationTable } from "./columns";
import { dataUsersPagination } from "../../utils/dataPagination";
import { Pagination } from "./Pagination";

export const PaginationTable = () => {
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    state: { pageIndex, pageSize },
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns: columnsPaginationTable,
      data: dataUsersPagination,
      initialState: {
        pageSize: 10,
      },
    },
    usePagination
  );

  return (
    <>
      <h1>Таблица с пагинацией</h1>
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: keyHeader, ...props } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={keyHeader} {...props}>
                  {headerGroup.headers.map((col) => {
                    const { key: keyCol, ...props } = col.getHeaderProps();
                    return (
                      <th key={keyCol} {...props}>
                        {col.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              const { key: keyRow, ...props } = row.getRowProps();
              return (
                <tr key={keyRow} {...props}>
                  {row.cells.map((cell) => {
                    const { key: keyCell, ...props } = cell.getCellProps();
                    return (
                      <td key={keyCell} {...props}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};
