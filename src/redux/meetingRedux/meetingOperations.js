import meetingAction from "./meetingAction";
import meetingSelectors from "./meetingSelectors";

const fetchAllMeeting = () => (dispatch) => {
  dispatch(meetingAction.fetchMeetingRequest());
  try {
    const items = meetingSelectors.getMeetingItems();
    dispatch(meetingAction.fetchMeetingSuccess(items));
  } catch (error) {
    meetingAction.fetchMeetingError(error);
  }
};

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

const deleteMeeting = (date) => (dispatch) => {
  dispatch(meetingAction.deleteMeetingRequest());
  try {
    dispatch(meetingAction.deleteMeetingSuccess(date));
  } catch (error) {
    meetingAction.deleteMeetingError(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addMeeting, deleteMeeting, fetchAllMeeting };
