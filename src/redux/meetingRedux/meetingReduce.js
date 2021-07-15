import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import meetingAction from "./meetingAction";

const itemsRedux = createReducer([], {
  [meetingAction.fetchMeetingSuccess]: (_, { payload }) => payload,

  [meetingAction.addMeetingSuccess]: (_, { payload }) =>
    // * добавляем новую встречу в список встреч
    [..._, payload],

  [meetingAction.deleteMeetingSuccess]: (_, { payload }) =>
    // * выводим все кроме совпадающего
    _.filter((meeting) => meeting.date !== payload),

  [meetingAction.changeMeetingSuccess]: (_, { payload }) =>
    // * выводим все кроме совпадающего и добавляем новый
    [..._.filter((meeting) => meeting.date !== payload.date), payload.item],
});

const filterRedux = createReducer("", {
  [meetingAction.changeFilter]: (_, { payload }) => payload,
});

const openCreateView = createReducer(true, {
  [meetingAction.closeCreateView]: () => false,
  [meetingAction.openCreateView]: () => true,
});

const errorRedux = createReducer(null, {
  [meetingAction.fetchMeetingError]: (_, { payload }) =>
    "fetchMeetingError: " + payload.message,
  [meetingAction.addMeetingError]: (_, { payload }) =>
    "addMeetingError: " + payload.message,
  [meetingAction.deleteMeetingError]: (_, { payload }) =>
    "deleteMeetingError: " + payload.message,
});

export default combineReducers({
  items: itemsRedux,
  filter: filterRedux,
  error: errorRedux,
  openCreateView: openCreateView,
});
