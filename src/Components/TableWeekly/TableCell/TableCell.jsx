import { useDispatch } from "react-redux";
import meetingOperations from "redux/meetingRedux/meetingOperations";
import style from "./TableCell.module.css";
function TableCell({ title, date }) {
  const dispatch = useDispatch();
  const getDeleteMeeting = (date) =>
    dispatch(meetingOperations.deleteMeeting(date));

  return (
    <div className={style.cell} draggable="true" data-date={date}>
      <p>{title}</p>
      <button
        className={style.btnDelete}
        type="button"
        onClick={() => getDeleteMeeting(date)}
        aria-label="get delete meeting"
      >
        &#10006;
      </button>
    </div>
  );
}

export default TableCell;
