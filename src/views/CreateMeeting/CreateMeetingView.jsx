import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./CreateMeetingView.module.css";

function CreateMeetingView() {
  const [titleSelect, setTitleSelect] = useState("");
  const [nameSelect, setNameSelect] = useState("");
  const [daySelect, setDaySelect] = useState("Mon");
  const [timeSelect, setTimeSelect] = useState("10.00");

  const handleChangeTitle = (e) => {
    setTitleSelect(e.target.value);
  };

  const handleChangeName = (e) => {
    console.log(
      "🚀 ~ file: CreateMeetingView.jsx ~ line 11 ~ CreateMeetingView ~ nameSelect",
      nameSelect
    );
    if (nameSelect === "") {
      return setNameSelect(e.target.value);
    }
    if (!nameSelect.includes(e.target.value)) {
      setNameSelect(`${nameSelect}, ${e.target.value}`);
    }
    if (nameSelect === e.target.value) {
      return setNameSelect("");
    }
    if (nameSelect.includes(e.target.value)) {
      const arrayNames = nameSelect.split(", ");
      const filterNames = arrayNames.filter((item) => {
        return item !== e.target.value;
      });
      console.log(
        "🚀 ~ file: CreateMeetingView.jsx ~ line 23 ~ CreateMeetingView ~ filterNames",
        filterNames
      );
      return setNameSelect(filterNames.join(", "));
    }
  };

  const handleChangeDay = (e) => {
    setDaySelect(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTimeSelect(e.target.value);
    console.log(e.target.value);
  };

  const toggleMenu = () => {
    const menuNamesRef = document.querySelector("#list-group");
    console.log(
      "🚀 ~ file: CreateMeetingView.jsx ~ line 37 ~ CreateMeetingView ~ menuNamesRef",
      menuNamesRef
    );
    menuNamesRef.classList.toggle("active");
  };

  const submitMeeting = (e) => {
    e.preventDefault();
    console.log({
      title: titleSelect,
      names: nameSelect,
      day: daySelect,
      time: timeSelect,
    });
  };
  return (
    <>
      <form className={style.formCreateMeeting} onSubmit={submitMeeting}>
        <label className={style.formLabel}>
          Name of the event:
          <input
            name="event-name"
            required
            type="text"
            className={style.inputField}
            value={titleSelect}
            onChange={handleChangeTitle}
          />
        </label>

        <label className={style.labelGroup}>
          Participants:
          <button
            type="button"
            className={style.btnDropdown}
            onClick={() => toggleMenu()}
          >
            {nameSelect}{" "}
          </button>
          <ul id="list-group" className={style.listGroup}>
            <li>
              <label className={style.itemGroup}>
                <input
                  className={style.inputGroup}
                  type="checkbox"
                  value="Maria"
                  onChange={handleChangeName}
                />{" "}
                Maria
              </label>
            </li>
            <li>
              <label className={style.itemGroup}>
                <input
                  className={style.inputGroup}
                  type="checkbox"
                  value="Bob"
                  onChange={handleChangeName}
                />{" "}
                Bob
              </label>
            </li>
            <li>
              <label className={style.itemGroup}>
                <input
                  className={style.inputGroup}
                  type="checkbox"
                  value="Alex"
                  onChange={handleChangeName}
                />{" "}
                Alex
              </label>
            </li>
          </ul>
        </label>
        <label className={style.formLabel}>
          Day:
          <select
            defaultValue={daySelect}
            onChange={handleChangeDay}
            required
            className={style.selectDay}
            aria-label="Default select example"
          >
            <option value="Mon" selected="selected">
              Monday
            </option>
            <option value="Tue">Tuesday</option>
            <option value="Wed">Wednesday</option>
            <option value="Thu">Thursday</option>
            <option value="Fri">Friday</option>
          </select>
        </label>

        <label className={style.formLabel}>
          Time:
          <select
            defaultValue={timeSelect}
            onChange={handleChangeTime}
            required
            className={style.selectTime}
            aria-label="Default select example"
          >
            <option value="10.00" selected="selected">
              10.00
            </option>
            <option value="11.00">11.00</option>
            <option value="12.00">12.00</option>
            <option value="13.00">13.00</option>
            <option value="14.00">14.00</option>
            <option value="15.00">15.00</option>
            <option value="16.00">16.00</option>
            <option value="17.00">17.00</option>
            <option value="18.00">18.00</option>
          </select>
        </label>

        <div className={style.formBtn}>
          <Link to="/" exact="true">
            {" "}
            <button
              type="button"
              className={style.cancelBtn}
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </Link>

          <button type="submit" className={style.createBtn}>
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateMeetingView;
