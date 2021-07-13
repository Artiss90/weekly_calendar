import meetingAction from "./meetingAction";
import meetingSelectors from "./meetingSelectors";

const fetchAllMeeting = () => (dispatch) => {
  dispatch(meetingAction.fetchMeetingRequest());
  try {
    const items = meetingSelectors.getMeetingItems();
    dispatch(meetingAction.fetchMeetingSuccess(items));
  } catch (error) {
    console.error(error);
  }
};

const addMeeting = (text) => (dispatch) => {
  console.log("no async", text);
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
    console.error(error);
  }
};

const deleteMeeting = (id) => (dispatch) => {
  dispatch(meetingAction.deleteMeetingRequest());
  try {
    dispatch(meetingAction.addMeetingSuccess(id));
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addMeeting, deleteMeeting, fetchAllMeeting };
