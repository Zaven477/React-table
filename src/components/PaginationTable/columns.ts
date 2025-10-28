import type { Column } from "react-table";
import type { User } from "../../utils/types";

export const columnsPaginationTable: Column<User>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Пользователь",
    columns: [
      {
        Header: "Имя",
        accessor: "firstName",
      },
      {
        Header: "Фамилия",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Информация",
    columns: [
      {
        Header: "Возраст",
        accessor: "age",
      },
      {
        Header: "Посещение",
        accessor: "visits",
      },
      {
        Header: "Прогресс",
        accessor: "progress",
      },
    ],
  },
];
