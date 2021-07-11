import meetingAction from "./meetingAction";
import meetingSelectors from "./meetingSelectors";

const fetchMeeting = () => async (dispatch) => {
  dispatch(meetingAction.fetchMeetingRequest());
  try {
    const items = await meetingSelectors.getMeetingItems();
    dispatch(meetingAction.fetchMeetingSuccess(items));
  } catch (error) {
    console.error(error);
  }
};

const addMeeting = (text) => async (dispatch) => {
  console.log("no async", text);
  console.log(
    "🚀 ~ file: meetingOperations.js ~ line 15 ~ addMeeting ~ text",
    text
  );
  dispatch(meetingAction.addMeetingRequest());
  try {
    const meeting = {
      title: text.titleSelect,
      names: text.nameSelect,
      day: text.daySelect,
      time: text.timeSelect,
    };
    dispatch(meetingAction.addMeetingSuccess(meeting));
  } catch (error) {
    console.error(error);
  }
};

const deleteMeeting = (id) => async (dispatch) => {
  dispatch(meetingAction.deleteMeetingRequest());
  try {
    dispatch(meetingAction.addMeetingSuccess(id));
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addMeeting, deleteMeeting, fetchMeeting };
