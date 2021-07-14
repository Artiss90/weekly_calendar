import EventCatcher from "../EventCatcher/EventCatcher";
import TableCell from "../TableCell/TableCell";

function TableWeeklyBody({ time, dayList, filteredMeetingListByTime }) {
  return (
    <tr>
      <th>{time}</th>
      {dayList.map((day) => {
        const date = `${day}-${time}`;
        // * ставим условие, что если есть нужный массив не пустой
        if (filteredMeetingListByTime.length > 0) {
          const meetingByDate = filteredMeetingListByTime.find(
            (item) => item.date === date
          );
          // * ставим условие в тернарном операторе, чтоб рендерил заголовок если совпадение есть (meetingByDate !== false)
          return (
            <td key={date} data-day-time={date}>
              {meetingByDate ? (
                <TableCell title={meetingByDate.title} date={date} />
              ) : (
                <EventCatcher date={date} />
              )}
            </td>
          );
        }
        // * если встречи нет, то рендерим улавливатель событии(EventCatcher)
        return (
          <td key={date} data-day-time={date}>
            <EventCatcher date={date} />
          </td>
        );
      })}
    </tr>
  );
}

export default TableWeeklyBody;
