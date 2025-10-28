import { useFilters, useTable } from "react-table";
import { columnsFilterTable } from "./columnsFilterTable";
import { dataUsers } from "../../utils/dataFilter";
import { columnDefault } from "./defaultColumn";
import "./styles.css";
import { useFilterTypes } from "./useFilterTypes";

export const FilterTable = () => {
  const { filterTypes } = useFilterTypes();

  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    useTable(
      {
        columns: columnsFilterTable,
        data: dataUsers,
        defaultColumn: columnDefault,
        filterTypes,
      },
      useFilters
    );

  return (
    <>
      <h1>Статистика посещаемости сайта</h1>
      <div className="table-wrapper">
        <table {...getTableProps}>
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
                        <span className="headerFilter">
                          {col.render("Header")}
                          <div>{col.canFilter && col.render("Filter")}</div>
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps}>
            {rows.length > 0 ? (
              rows.map((row) => {
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
              })
            ) : (
              <tr>
                <td colSpan={1000}>
                  <span className="textInfo">Ничего не найдено</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="countRows">
        Количество отфильтрованных строк: {rows.length}
      </p>
    </>
  );
};
