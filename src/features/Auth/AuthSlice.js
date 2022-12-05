import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const url = "http://localhost:3500";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: [],
  error: {},
};

export const signinAuthUser = createAsyncThunk(
  "auth/signinAuthUser",
  async (data) => {
    const response = await axios.post(url + "/signin", data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signinAuthUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signinAuthUser.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action);
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.user = action.payload);

      action.payload.result
        ? (state.isLoggedIn = true)
        : (state.isLoggedIn = false);
    });
    builder.addCase(signinAuthUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
