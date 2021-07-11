import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import meetingReduce from "redux/meetingRedux/meetingReduce";

const store = configureStore({
  reducer: { meetings: meetingReduce },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export default store;
