import meetingAction from "./meetingAction";

const addMeeting = (text) => (dispatch) => {
  dispatch(meetingAction.addMeetingRequest());
  try {
    const meeting = {
      title: text.title,
      names: text.names,
      day: text.day,
      time: text.time,
      date: text.date,
    };
    dispatch(meetingAction.addMeetingSuccess(meeting));
  } catch (error) {
    meetingAction.addMeetingError(error);
  }
};

const changeMeeting = (nextDate, currentDate, listAllMeeting) => (dispatch) => {
  dispatch(meetingAction.changeMeetingRequest());
  try {
    const meetingActual = listAllMeeting.find(
      (item) => item.date === currentDate
    );
    // ! dataItem это всегда строка, где первых 3 символа - день, потом дефис, потом время в формате ГГ.ММ пример "Mon-12.00"
    const dayItem = nextDate.split("-")[0];
    const timeItem = nextDate.split("-")[1];
    const meetingEdit = {
      title: meetingActual.title,
      names: meetingActual.names,
      day: dayItem,
      time: timeItem,
      date: nextDate,
    };
    dispatch(
      meetingAction.changeMeetingSuccess({
        date: currentDate,
        meeting: meetingEdit,
      })
    );
  } catch (error) {
    meetingAction.changeMeetingError(error);
  }
};

const deleteMeeting = (date) => (dispatch) => {
  dispatch(meetingAction.deleteMeetingRequest());
  try {
    dispatch(meetingAction.deleteMeetingSuccess(date));
  } catch (error) {
    meetingAction.deleteMeetingError(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addMeeting, deleteMeeting, changeMeeting };
