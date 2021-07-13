import { useSelector } from "react-redux";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";
import style from "./TableWeekly.module.css";
import TableWeeklyBody from "./TableWeeklyBody/TableWeeklyBody";
import TableWeekHead from "./TableWeeklyHead/TableWeekHead";

function TableWeekly() {
  const meetingList = useSelector(meetingSelectors.getMeetingItems);
  const TIME_LIST = [
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];
  const DAY_LIST = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <table className={style.tableDays}>
      <thead>
        <tr>
          <th>Name</th>
          <TableWeekHead dayList={DAY_LIST} />
        </tr>
      </thead>
      <tbody>
        {TIME_LIST.map((time) => {
          // * фильтруем по времени суток
          const filteredMeetingListByTime = meetingList.filter(
            (item) => item.time === time
          );
          return (
            <TableWeeklyBody
              key={time}
              time={time}
              dayList={DAY_LIST}
              filteredMeetingListByTime={filteredMeetingListByTime}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TableWeekly;
