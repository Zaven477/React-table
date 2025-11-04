import { FilterTable } from "../FilterTable/FilterTable";
import type { DisplayTablesProps } from "../Header/types";
import { PaginationTable } from "../PaginationTable/PaginationTable";
import { SortTable } from "../SortTable/SortTable";

export const DisplayTables = ({ activeTab }: DisplayTablesProps) => {
  const tabs = {
    sorting: SortTable(),
    filtration: FilterTable(),
    pagination: PaginationTable(),
  };

  return <>{tabs[activeTab]}</>;
};
