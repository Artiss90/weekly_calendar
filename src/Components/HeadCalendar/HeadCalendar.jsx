import { Link } from "react-router-dom";
import constants from "helper/constants";
import style from "./HeadCalendar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import meetingAction from "redux/meetingRedux/meetingAction";

function HeadCalendar() {
  const [nameSelect, setNameSelect] = useState("All");
  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    setNameSelect(e.target.value);

    if (e.target.value === "All") {
      // * если выбираем всех, то передаем в фильтр пустую строку
      return dispatch(meetingAction.changeFilter(""));
    }
    dispatch(meetingAction.changeFilter(e.target.value));
  };

  return (
    <div className={style.calendarHead}>
      <h2>Calendar</h2>
      <div>
        <select
          value={nameSelect}
          onChange={handleChangeName}
          aria-label="Default select example"
        >
          <option value="All">All members</option>
          {constants.PARTICIPANT_LIST.map((nameParticipant) => (
            <option key={nameParticipant} value={nameParticipant}>
              {nameParticipant}
            </option>
          ))}
        </select>
        <Link to="/create-meeting" exact="true">
          <button className={style.createBtn}>New event +</button>
        </Link>
      </div>
    </div>
  );
}

export default HeadCalendar;
