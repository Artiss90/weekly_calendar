import HeadCalendar from "Components/HeadCalendar/HeadCalendar";
import TableWeekly from "Components/TableWeekly/TableWeekly";
import { useState } from "react";
import style from "./TimetableView.module.css";

function TimetableView() {
  const [nameSelect, setNameSelect] = useState("All");
  const handleChangeName = (e) => {
    setNameSelect(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={style.page}>
      <HeadCalendar namePerson={nameSelect} handleChange={handleChangeName} />
      <TableWeekly />
    </div>
  );
}

export default TimetableView;
