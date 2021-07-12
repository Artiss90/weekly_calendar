import HeadCalendar from "Components/HeadCalendar/HeadCalendar";
import TableWeekly from "Components/TableWeekly/TableWeekly";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import meetingAction from "redux/meetingRedux/meetingAction";
import style from "./TimetableView.module.css";

function TimetableView() {
  const dispatch = useDispatch();
  const [nameSelect, setNameSelect] = useState("All");
  const handleChangeName = (e) => {
    setNameSelect(e.target.value);
  };

  useEffect(() => {
    dispatch(meetingAction.openCreateView());
  }, [dispatch]);

  return (
    <div className={style.page}>
      <HeadCalendar namePerson={nameSelect} handleChange={handleChangeName} />
      <TableWeekly />
    </div>
  );
}

export default TimetableView;
