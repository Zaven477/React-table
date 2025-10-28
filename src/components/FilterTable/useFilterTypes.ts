import type { FilterTypes } from "react-table";
import type { User } from "../../utils/types";

export const useFilterTypes = () => {
  const filterTypes: FilterTypes<User> = {
    betweenAges: (rows, ids, filterValue) => {
      const { min, max } = filterValue;

      return rows.filter((row) => {
        const age = row.values[ids[0]];
        if (age !== undefined && age < min) {
          return false;
        } else if (age !== undefined && age > max) {
          return false;
        }
        return true;
      });
    },

    visitsByCount: (rows, ids, filterValue) => {
      return rows.filter((row) => row.values[ids[0]] === filterValue);
    },

    progressByCount: (rows, ids, filterValue) => {
      return rows.filter((row) => row.values[ids[0]] === filterValue);
    },
  };

  return { filterTypes };
};
