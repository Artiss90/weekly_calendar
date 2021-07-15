import { createAction } from "@reduxjs/toolkit";

const fetchMeetingRequest = createAction("meeting/fetchMeetingRequest");
const fetchMeetingSuccess = createAction("meeting/fetchMeetingSuccess");
const fetchMeetingError = createAction("meeting/fetchMeetingError");

const addMeetingRequest = createAction("meeting/addMeetingRequest");
const addMeetingSuccess = createAction("meeting/addMeetingSuccess");
const addMeetingError = createAction("meeting/addMeetingError");

const deleteMeetingRequest = createAction("meeting/deleteMeetingRequest");
const deleteMeetingSuccess = createAction("meeting/deleteMeetingSuccess");
const deleteMeetingError = createAction("meeting/deleteMeetingError");

const changeMeetingRequest = createAction("meeting/changeMeetingRequest");
const changeMeetingSuccess = createAction("meeting/changeMeetingSuccess");
const changeMeetingError = createAction("meeting/changeMeetingError");

const changeFilter = createAction("meeting/change_filter");

const openCreateView = createAction("meeting/open");
const closeCreateView = createAction("meeting/close");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchMeetingRequest,
  fetchMeetingSuccess,
  fetchMeetingError,
  addMeetingRequest,
  addMeetingSuccess,
  addMeetingError,
  deleteMeetingRequest,
  deleteMeetingSuccess,
  deleteMeetingError,
  changeMeetingRequest,
  changeMeetingSuccess,
  changeMeetingError,
  changeFilter,
  openCreateView,
  closeCreateView,
};
