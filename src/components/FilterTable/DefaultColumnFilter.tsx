import type { ColumnFilterT } from "../../types";
import type { User } from "../../utils/types";
import './styles.css'

export const DefaultColumnFilter: ColumnFilterT<User> = ({
  column: { filterValue, setFilter },
}) => {
  return (
    <input
      className="inputColumnFilter"
      type="text"
      value={filterValue || ""}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
};
