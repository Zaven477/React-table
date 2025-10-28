import type { TableInstance } from "react-table";
import type { User } from "../../utils/types";

export type PaginationProps = Pick<
  TableInstance<User>,
  | "pageIndex"
  | "pageSize"
  | "canPreviousPage"
  | "canNextPage"
  | "pageCount"
  | "gotoPage"
  | "nextPage"
  | "previousPage"
  | "setPageSize"
>;
