import style from "./TableCell.module.css";
function TableCell({ title, date }) {
  // ? если есть title, то добавляем кнопку удаления
  return (
    <>
      <p>{title}</p>
      {title && (
        <button
          className={style.btnDelete}
          type="button"
          onClick={() => console.log(date)}
        >
          &#10006;
        </button>
      )}
    </>
  );
}

export default TableCell;
