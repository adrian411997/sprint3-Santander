import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllEvents = createAsyncThunk("events/listEvents", async () => {
  const response = await axios
    .get("https://mindhub-xj03.onrender.com/api/amazing")
    .catch((error) => {
      return error.data;
    });
  return response.data.events;
});
const initialState = {
  listEvents: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, () => {
        console.log("Trayendo los eventos wey");
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.listEvents = action.payload;
      });
  },
});
export default eventSlice.reducer;

export const listOfEvents = (state) => state.events.listEvents;
