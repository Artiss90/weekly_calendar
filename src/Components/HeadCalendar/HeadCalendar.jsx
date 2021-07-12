import { Link } from "react-router-dom";
import style from "./HeadCalendar.module.css";

function HeadCalendar({ namePerson, handleChange }) {
  return (
    <div className={style.calendarHead}>
      <h2>Calendar</h2>
      <div>
        <select
          value={namePerson}
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option value="All">All members</option>
          <option value="Maria">Maria</option>
          <option value="Bob">Bob</option>
          <option value="Alex">Alex</option>
        </select>
        <Link to="/create-meeting" exact="true">
          <button className={style.createBtn}>New event +</button>
        </Link>
      </div>
    </div>
  );
}

export default HeadCalendar;
