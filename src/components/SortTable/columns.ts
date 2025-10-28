import type { Column } from "react-table";
import type { Company } from "../../utils/types";

export const columnsSortTable: Column<Company>[] = [
  {
    Header: "ID",
    accessor: "id",
    disableSortBy: true,
  },
  {
    Header: "Название",
    accessor: "name",
  },
  {
    Header: "Отрасль",
    accessor: "industry",
  },
  {
    Header: "Почта",
    accessor: "email",
  },
  {
    Header: "Телефон",
    accessor: "phone",
  },
  {
    Header: "Адрес",
    accessor: ({ address }) => `${address.city}, ${address.street}`,
  },
  {
    Header: "Сотрудники",
    accessor: "employees",
  },
  {
    Header: "Доход",
    accessor: "revenue",
  },
  {
    Header: "Статус",
    accessor: "status",
  },
];
