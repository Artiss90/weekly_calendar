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

  return (
    <table className={style.tableDays}>
      <thead>
        <tr>
          <th>Name</th>
          <TableWeekHead dayList={constants.DAY_LIST} />
        </tr>
      </thead>
      <tbody>
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
