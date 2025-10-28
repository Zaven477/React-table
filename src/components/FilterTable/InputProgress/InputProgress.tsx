import type { ColumnFilterT } from "../../../types";
import type { User } from "../../../utils/types";

export const InputProgress: ColumnFilterT<User> = ({
  column: { preFilteredRows, setFilter },
}) => {
  const progress = preFilteredRows.map((row) => row.original.progress);
  const countUniquesProgresses = [...new Set(progress)];

  return (
    <select
      onChange={(event) => {
        const value = event.target.value;
        setFilter(value ? Number(event.target.value) : undefined);
      }}
      className="selectInput"
    >
      <option value="">Прогресс</option>
      {countUniquesProgresses.map((progress, index) => (
        <option key={index}>{progress}</option>
      ))}
    </select>
  );
};
