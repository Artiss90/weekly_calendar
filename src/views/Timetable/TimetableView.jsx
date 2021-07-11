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
      <table className={style.tableDays}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>10.00</th>
            <td data-day-time="Mon-10">Mon-10</td>
            <td data-day-time="Tue-10">Tue-10</td>
            <td data-day-time="Wed-10">Wed-10</td>
            <td data-day-time="Thu-10">Thu-10</td>
            <td data-day-time="Fri-10">Fri-10</td>
          </tr>
          <tr>
            <th>11.00</th>
            <td data-day-time="Mon-11">Mon-11</td>
            <td data-day-time="Tue-11">Tue-11</td>
            <td data-day-time="Wed-11">Wed-11</td>
            <td data-day-time="Thu-11">Thu-11</td>
            <td data-day-time="Fri-11">Fri-11</td>
          </tr>
          <tr>
            <th>12.00</th>
            <td data-day-time="Mon-12">Mon-12</td>
            <td data-day-time="Tue-12">Tue-12</td>
            <td data-day-time="Wed-12">Wed-12</td>
            <td data-day-time="Thu-12">Thu-12</td>
            <td data-day-time="Fri-12">Fri-12</td>
          </tr>
          <tr>
            <th>13.00</th>
            <td data-day-time="Mon-13">Mon-13</td>
            <td data-day-time="Tue-13">Tue-13</td>
            <td data-day-time="Wed-13">Wed-13</td>
            <td data-day-time="Thu-13">Thu-13</td>
            <td data-day-time="Fri-13">Fri-13</td>
          </tr>
          <tr>
            <th>14.00</th>
            <td data-day-time="Mon-14">Mon-14</td>
            <td data-day-time="Tue-14">Tue-14</td>
            <td data-day-time="Wed-14">Wed-14</td>
            <td data-day-time="Thu-14">Thu-14</td>
            <td data-day-time="Fri-14">Fri-14</td>
          </tr>
          <tr>
            <th>15.00</th>
            <td data-day-time="Mon-15">Mon-15</td>
            <td data-day-time="Tue-15">Tue-15</td>
            <td data-day-time="Wed-15">Wed-15</td>
            <td data-day-time="Thu-15">Thu-15</td>
            <td data-day-time="Fri-15">Fri-15</td>
          </tr>
          <tr>
            <th>16.00</th>
            <td data-day-time="Mon-16">Mon-16</td>
            <td data-day-time="Tue-16">Tue-16</td>
            <td data-day-time="Wed-16">Wed-16</td>
            <td data-day-time="Thu-16">Thu-16</td>
            <td data-day-time="Fri-16">Fri-16</td>
          </tr>
          <tr>
            <th>17.00</th>
            <td data-day-time="Mon-17">Mon-17</td>
            <td data-day-time="Tue-17">Tue-17</td>
            <td data-day-time="Wed-17">Wed-17</td>
            <td data-day-time="Thu-17">Thu-17</td>
            <td data-day-time="Fri-17">Fri-17</td>
          </tr>
          <tr>
            <th>18.00</th>
            <td data-day-time="Mon-18">Mon-18</td>
            <td data-day-time="Tue-18">Tue-18</td>
            <td data-day-time="Wed-18">Wed-18</td>
            <td data-day-time="Thu-18">Thu-18</td>
            <td data-day-time="Fri-18">Fri-18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimetableView;
