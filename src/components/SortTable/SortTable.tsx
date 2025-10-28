import { useSortBy, useTable } from "react-table";
import { columnsSortTable } from "./columns";
import { companiesData } from "../../utils/dataSort";
import { BiSortAlt2, BiSortDown, BiSortUp } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import "./styles.css";

export const SortTable = () => {
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    useTable(
      {
        columns: columnsSortTable,
        data: companiesData,
      },
      useSortBy
    );

  return (
    <>
      <h1>Таблица с описаниями компаний</h1>
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: keyHeader, ...props } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={keyHeader} {...props}>
                  {headerGroup.headers.map((col) => {
                    const { key: keyCol, ...props } = col.getHeaderProps(
                      col.getSortByToggleProps()
                    );
                    return (
                      <th key={keyCol} {...props}>
                        <span className="header-icons">
                          {col.render("Header")}
                          {col.canSort &&
                            (col.isSorted ? (
                              col.isSortedDesc ? (
                                <BiSortUp color="white" />
                              ) : (
                                <BiSortDown color="white" />
                              )
                            ) : (
                              <>
                                <BiSortAlt2 id="iconSort" color="white" />
                                <Tooltip
                                  content="Сортировка по возрастанию/убыванию"
                                  anchorSelect="#iconSort"
                                />
                              </>
                            ))}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps}>
            {rows.map((row) => {
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
      </div>
    </>
  );
};
