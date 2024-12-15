import { createSlice } from "@reduxjs/toolkit";
import { read_cookie, bake_cookie } from "sfcookies";

export const Reminders = createSlice({
  name: "Reminders",
  initialState: {
    items: read_cookie("Reminders") || [], // Read cookies on initial load
  },
  reducers: {
    addReminder: (state, action) => {
      state.items.push(action.payload);
      bake_cookie("Reminders", state.items); // Save items to cookies
    },
    deleteReminder: (state, action) => {
      state.items = state.items.filter(
        (reminder) => reminder.id !== action.payload
      );
      bake_cookie("Reminders", state.items); // Save items to cookies
    },
    clear: (state) => {
      state.items = [];
      bake_cookie("Reminders", state.items); // Save items to cookies
    },
  },
});

export const { addReminder, deleteReminder, clear } = Reminders.actions;
export default Reminders.reducer;
