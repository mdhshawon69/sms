import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Axios } from "../../../core/axios";

const token =
  typeof window !== "undefined" ? localStorage.getItem("jwtToken") || null : "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    token: token,
    user: [],
  },
  reducers: {
    setToken: (state, { payload }) => {
      console.log(state.user);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "jwtToken",
          (state.token = payload?.token?.data.jwtToken)
        );
      }
    },
  },
  
});

export const authActions = authSlice.actions;

export default authSlice;
