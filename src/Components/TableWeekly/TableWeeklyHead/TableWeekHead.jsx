function TableWeekHead({ dayList }) {
  return (
    <>
      {dayList.map((day) => (
        <th key={day}>{day}</th>
      ))}
    </>
  );
}

export default TableWeekHead;
