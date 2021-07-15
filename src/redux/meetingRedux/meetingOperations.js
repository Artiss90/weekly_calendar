import meetingAction from "./meetingAction";
import meetingSelectors from "./meetingSelectors";

// const fetchAllMeeting = () => (dispatch) => {
//   dispatch(meetingAction.fetchMeetingRequest());
//   try {
//     const items = meetingSelectors.getMeetingItems();
//     dispatch(meetingAction.fetchMeetingSuccess(items));
//   } catch (error) {
//     meetingAction.fetchMeetingError(error);
//   }
// };

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

const changeMeeting = (dateItem) => (dispatch) => {
  dispatch(meetingAction.changeMeetingRequest());
  try {
    const meetingList = meetingSelectors.getMeetingItems();
    const meetingActual = meetingList.find((item) => item.date === dateItem);
    // ! dataItem это всегда строка, где первых 3 символа - день, потом дефис, потом время в формате ГГ.ММ пример "Mon-12.00"
    const dayItem = dateItem.split("-")[0];
    const timeItem = dateItem.split("-")[1];
    const meetingEdit = {
      title: meetingActual.title,
      names: meetingActual.names,
      day: dayItem,
      time: timeItem,
      date: dateItem,
    };
    dispatch(meetingAction.changeMeetingSuccess({ dateItem, meetingEdit }));
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
