import type { Column } from "react-table";
import type { User } from "../../utils/types";
import { InputAge } from "./InputAge/InputAge";
import { InputVisits } from "./InputVisits/InputVisits";
import { InputProgress } from "./InputProgress/InputProgress";

export const columnsFilterTable: Column<User>[] = [
  {
    Header: "ID",
    accessor: "id",
    disableFilters: true,
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
        Filter: InputAge,
        filter: "betweenAges",
      },
      {
        Header: "Посещение",
        accessor: "visits",
        Filter: InputVisits,
        filter: "visitsByCount",
      },
      {
        Header: "Прогресс",
        accessor: "progress",
        Filter: InputProgress,
        filter: "progressByCount",
      },
    ],
  },
];
