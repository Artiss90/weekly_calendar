import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import meetingAction from "redux/meetingRedux/meetingAction";
import meetingOperations from "redux/meetingRedux/meetingOperations";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";
import constants from "helper/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./CreateMeetingView.module.css";

function CreateMeetingView() {
  const dispatch = useDispatch();
  const meetings = useSelector(meetingSelectors.getMeetingItems);
  const [titleSelect, setTitleSelect] = useState("");
  const [nameSelect, setNameSelect] = useState("");
  const [daySelect, setDaySelect] = useState("Mon");
  const [timeSelect, setTimeSelect] = useState("10.00");

  const handleChangeTitle = (e) => {
    setTitleSelect(e.target.value);
  };

  const handleChangeName = (e) => {
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
      return setNameSelect(filterNames.join(", "));
    }
  };

  const handleChangeDay = (e) => {
    setDaySelect(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTimeSelect(e.target.value);
  };

  const toggleMenu = () => {
    const menuNamesRef = document.querySelector("#list-group");
    menuNamesRef.classList.toggle("active");
  };

  const submitMeeting = (e) => {
    e.preventDefault();
    if (
      // * проверка на повторение даты
      meetings.find((meeting) => meeting.date === `${daySelect}-${timeSelect}`)
    ) {
      notifyDate(`${daySelect}-${timeSelect}`);
      return;
    }
    if (
      // * проверяем, выбрали ли участника встречи
      nameSelect === ""
    ) {
      notifyParticipant();
      return;
    }

    const meetingForm = {
      title: titleSelect,
      names: nameSelect,
      day: daySelect,
      time: timeSelect,
      date: `${daySelect}-${timeSelect}`,
    };

    dispatch(meetingOperations.addMeeting(meetingForm));
    closeCreateView();
    reset();
  };
  const closeCreateView = () => dispatch(meetingAction.closeCreateView());

  const reset = () => {
    setTitleSelect("");
    setNameSelect("");
    setDaySelect("Mon");
    setTimeSelect("10.00");
  };
  const notifyDate = (text) =>
    toast.warn(`Date(${text}) is already in meetings!`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyParticipant = (text) =>
    toast.warn("please, make a choice participant", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <ToastContainer />
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
            {nameSelect || "please, make a choice"}
          </button>
          <ul id="list-group" className={style.listGroup}>
            {constants.PARTICIPANT_LIST.map((nameParticipant) => (
              <li key={nameParticipant}>
                <label className={style.itemGroup}>
                  <input
                    className={style.inputGroup}
                    type="checkbox"
                    value={nameParticipant}
                    onChange={handleChangeName}
                  />
                  {nameParticipant}
                </label>
              </li>
            ))}
          </ul>
        </label>
        <label className={style.formLabel}>
          Day:
          <select
            value={daySelect}
            onChange={handleChangeDay}
            required
            className={style.selectDay}
            aria-label="Default select example"
          >
            {constants.DAY_LIST.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <label className={style.formLabel}>
          Time:
          <select
            value={timeSelect}
            onChange={handleChangeTime}
            required
            className={style.selectTime}
            aria-label="Default select example"
          >
            {constants.TIME_LIST.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        <div className={style.formBtn}>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={closeCreateView}
          >
            Cancel
          </button>

          <button type="submit" className={style.createBtn}>
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateMeetingView;
