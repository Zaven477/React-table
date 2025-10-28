import type { PaginationProps } from "./types";
import "./style.css";

export const Pagination = (props: PaginationProps) => {
  const goToPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;

    props.gotoPage(page);
  };

  const setPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const size = Number(event.target.value);

    props.setPageSize(size);
  };

  const goToLastPage = () => props.gotoPage(props.pageCount - 1);

  const goToFirstPage = () => props.gotoPage(0);

  return (
    <div className="wrapper">
      <div className="containerBtnPages">
        <button
          className="btnPage"
          onClick={goToFirstPage}
          disabled={!props.canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          className="btnPage"
          onClick={props.previousPage}
          disabled={!props.canPreviousPage}
        >
          {"<"}
        </button>
        <button
          className="btnPage"
          onClick={props.nextPage}
          disabled={!props.canNextPage}
        >
          {">"}
        </button>
        <button
          className="btnPage"
          onClick={goToLastPage}
          disabled={!props.canNextPage}
        >
          {">>"}
        </button>
      </div>
      <span className="textPages">
        Страница {props.pageIndex + 1} из {props.pageCount}
      </span>
      <label className="currentContainer">
        <span className="textGoTo">Перейти на страницу:</span>
        <input
          type="number"
          className="inputPages"
          defaultValue={props.pageIndex + 1}
          onChange={goToPage}
        />
      </label>
      <div className="containerShowInput">
        <span className="textShow">Показать:</span>
        <select
          className="selectInput"
          onChange={setPage}
          value={props.pageSize}
        >
          {[5, 10].map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
