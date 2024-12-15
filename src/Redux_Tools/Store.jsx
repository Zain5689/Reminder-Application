import { configureStore } from "@reduxjs/toolkit";
import Reminders from "./Reminders";

const Store = configureStore({
  reducer: {
    Reminders: Reminders,
  },
});

export default Store;
