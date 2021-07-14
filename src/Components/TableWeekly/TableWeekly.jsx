import { useSelector } from "react-redux";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";
import constants from "helper/constants";
import TableWeeklyBody from "./TableWeeklyBody/TableWeeklyBody";
import TableWeekHead from "./TableWeeklyHead/TableWeekHead";
import style from "./TableWeekly.module.css";

function TableWeekly() {
  const visibleMeetingList = useSelector(
    meetingSelectors.getVisibleFilterMeeting
  );
  const addSelect = (e) => e.target.classList.add(`selected`);
  const removeSelect = (e) => e.target.classList.remove(`selected`);
  const pasteMeeting = (e) => {
    e.preventDefault();

    // *Находим перемещаемый элемент
    const activeElement = document.querySelector(`.selected`);
    // *Находим элемент, над которым в данный момент находится курсор
    const currentElement = e.target;
    // *Проверяем, что событие сработало именно на ячейке улавливателя таблицы
    // *Проверяем, что ячейка не занята
    // *Переписываем данные
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
