import { createSelector } from "reselect";

const getMeetingItems = (state) => state.meetings.items;
const getMeetingFilter = (state) => state.meetings.filter;
const getMeetingError = (state) => state.meetings.error;
const getOpenCreateView = (state) => state.meetings.openCreateView;

const getVisibleFilterMeeting = createSelector(
  [getMeetingFilter, getMeetingItems],
  (filter, allMeeting) => {
    const normalizedFilter = filter.toLowerCase();
    return allMeeting.filter((meeting) =>
      meeting.names.toLowerCase().includes(normalizedFilter)
    );
  }
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMeetingFilter,
  getMeetingItems,
  getMeetingError,
  getOpenCreateView,
  getVisibleFilterMeeting,
};
