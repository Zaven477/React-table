import type { ColumnFilterT } from "../../../types";
import type { User } from "../../../utils/types";
import "./styles.css";

export const InputVisits: ColumnFilterT<User> = ({
  column: { preFilteredRows, setFilter },
}) => {
  const visits = preFilteredRows.map((row) => row.original.visits);
  const countUniquesVisits = [...new Set(visits)];

  return (
    <select
      onChange={(event) => {
        const value = event.target.value;
        setFilter(value ? Number(event.target.value) : undefined);
      }}
      className="selectInput"
    >
      <option value="">Количество</option>
      {countUniquesVisits.map((visit, index) => (
        <option key={index}>{visit}</option>
      ))}
    </select>
  );
};
