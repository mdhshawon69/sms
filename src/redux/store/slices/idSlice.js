import { createSlice } from "@reduxjs/toolkit";

const idState = {
  id: "",
  studentId: "",
  noticeId: "",
};

const idSlice = createSlice({
  name: "id-slice",
  initialState: idState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload.id;
    },
    setStudentId: (state, { payload }) => {
      state.studentId = payload.studentId;
    },
    setNoticeId: (state, { payload }) => {
      state.noticeId = payload.noticeId;
    },
  },
});

export const idActions = idSlice.actions;
export default idSlice;
