import { useDispatch, useSelector } from "react-redux";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";
import constants from "helper/constants";
import TableWeeklyBody from "./TableWeeklyBody/TableWeeklyBody";
import TableWeekHead from "./TableWeeklyHead/TableWeekHead";
import style from "./TableWeekly.module.css";
import meetingOperations from "redux/meetingRedux/meetingOperations";
import { useState } from "react";

function TableWeekly() {
  const dispatch = useDispatch();
  const meetingList = useSelector(meetingSelectors.getMeetingItems);
  const visibleMeetingList = useSelector(
    meetingSelectors.getVisibleFilterMeeting
  );
  const [nextDate, setNextDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const addSelect = (e) => e.target.classList.add("selected");
  const removeSelect = (e) => e.target.classList.remove("selected");
  const moveMeeting = (e) => {
    e.preventDefault();
    // *Находим перемещаемый элемент
    const activeElement = document.querySelector(".selected");
    // *Находим элемент, над которым в данный момент находится курсор
    const currentElement = e.target;
    //*Проверяем, что событие сработало не на том элементе, который мы перемещаем
    // *Проверяем, что событие сработало именно на ячейке улавливателя таблицы
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.hasAttribute("data-day-time");
    if (!isMoveable) {
      return;
    }
    // *Запишем дату ячейки в которую перемещаем
    const nextDateCell = currentElement.getAttribute("data-day-time");
    // *Запишем дату текущей ячейки которую перемещаем
    const currentDateCell = activeElement.getAttribute("data-date");
    // *Проверяем, что ячейка не занята
    if (meetingList.find((meeting) => meeting.date === nextDateCell)) {
      return;
    }
    // ? если все условия соблюдены - запишем в State
    // *Сохраняем дату ячейки в которую перемещаем
    setNextDate(nextDateCell);
    // *Сохраняем дату текущей ячейки которую перемещаем
    setCurrentDate(currentDateCell);
  };

  const editMeeting = (e) => {
    e.preventDefault();
    dispatch(
      meetingOperations.changeMeeting(nextDate, currentDate, meetingList)
    );
  };
  return (
    <table className={style.tableDays}>
      <thead>
        <tr>
          <th>Name</th>
          <TableWeekHead dayList={constants.DAY_LIST} />
        </tr>
      </thead>
      <tbody
        data-event-wrapper
        onDragStart={addSelect}
        onDragEnd={removeSelect}
        onDragOver={moveMeeting}
        onDrop={editMeeting}
      >
        {constants.TIME_LIST.map((time) => {
          // * фильтруем по времени суток
          const filteredMeetingListByTime = visibleMeetingList.filter(
            (item) => item.time === time
          );
          return (
            <TableWeeklyBody
              key={time}
              time={time}
              dayList={constants.DAY_LIST}
              filteredMeetingListByTime={filteredMeetingListByTime}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TableWeekly;
