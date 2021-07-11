import TableWeekly from "Components/TableWeekly/TableWeekly";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./TimetableView.module.css";

function TimetableView() {
  const [nameSelect, setNameSelect] = useState("All");
  const handleChange = (e) => {
    setNameSelect(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={style.page}>
      <div className={style.calendarHead}>
        <h2>Calendar</h2>
        <div>
          <select
            defaultValue={nameSelect}
            onChange={handleChange}
            aria-label="Default select example"
          >
            <option value="All" selected="selected">
              All members
            </option>
            <option value="Maria">Maria</option>
            <option value="Bob">Bob</option>
            <option value="Alex">Alex</option>
          </select>
          <Link to="/create-meeting" exact="true">
            <button className={style.createBtn}>New event +</button>
          </Link>
        </div>
      </div>
      <TableWeekly />
    </div>
  );
}

export default TimetableView;
