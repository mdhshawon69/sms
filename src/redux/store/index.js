import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import idSlice from "./slices/idSlice";
import uiSlice from "./slices/uiSlices";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    id: idSlice.reducer,
  },
});

export default store;
