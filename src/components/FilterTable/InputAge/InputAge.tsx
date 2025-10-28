import type { ColumnFilterT } from "../../../types";
import type { User } from "../../../utils/types";
import "./style.css";

export const InputAge: ColumnFilterT<User> = ({
  column: { filterValue = {}, setFilter },
}) => {
  const { min = "", max = "" } = filterValue;

  return (
    <div className="containerInputs">
      <span>От</span>
      <input
        type="number"
        value={min}
        onChange={(event) => {
          const value = event.target.value;
          setFilter((old = {}) => ({
            ...old,
            min: value ? Number(value) : undefined,
          }));
        }}
        placeholder="Минимальный 20"
      />
      <span>До</span>
      <input
        type="number"
        value={max}
        onChange={(event) => {
          const value = event.target.value;
          setFilter((old = {}) => ({
            ...old,
            max: value ? Number(value) : undefined,
          }));
        }}
        placeholder="Максимальный 56"
      />
    </div>
  );
};
