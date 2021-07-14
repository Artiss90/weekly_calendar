import HeadCalendar from "Components/HeadCalendar/HeadCalendar";
import TableWeekly from "Components/TableWeekly/TableWeekly";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import meetingAction from "redux/meetingRedux/meetingAction";
import style from "./TimetableView.module.css";

function TimetableView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meetingAction.openCreateView());
  }, [dispatch]);

  return (
    <div className={style.page}>
      <HeadCalendar />
      <TableWeekly />
    </div>
  );
}

export default TimetableView;
