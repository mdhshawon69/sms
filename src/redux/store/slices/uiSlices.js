import { createSlice } from "@reduxjs/toolkit";

const uiState = {
  showLayout: true,
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: uiState,
  reducers: {
    setLayout: (state) => {
      state.showLayout = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
