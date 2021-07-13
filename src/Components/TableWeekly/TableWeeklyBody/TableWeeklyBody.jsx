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
          // * ставим условие в тернарном операторе, чтоб рендерил заголовок если совпадение есть (filteredMeetingListByTime !== false)
          return (
            <td key={date} data-day-time={date}>
              {meetingByDate ? (
                <TableCell title={meetingByDate.title} date={date} />
              ) : (
                <TableCell date={date} />
              )}
            </td>
          );
        }
        return (
          <td key={date} data-day-time={date}>
            {date}
          </td>
        );
      })}
    </tr>
  );
}

export default TableWeeklyBody;
