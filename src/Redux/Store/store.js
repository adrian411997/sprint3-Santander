import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../Reducers/events";

export const store = configureStore({
  reducer: {
    events: eventSlice,
  },
});
