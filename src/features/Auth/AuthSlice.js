import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const url = "https://mail-app-server.onrender.com";

// const url = "http://localhost:3500";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: [],
  error: "",
};

export const signinAuthUser = createAsyncThunk(
  "auth/signinAuthUser",
  async (data) => {
    const response = await axios.post(url + "/signin", data);
    return response.data;
  }
);

export const signupAuthUser = createAsyncThunk(
  "auth/signupAuthUser",
  async (data) => {
    const response = await axios.post(url + "/register", data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // signin reducers
    builder.addCase(signinAuthUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signinAuthUser.fulfilled, (state, action) => {
      state.loading = false;
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

    // signup reducers
    builder.addCase(signupAuthUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signupAuthUser.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.user = action.payload);

      action.payload.result
        ? (state.isLoggedIn = true)
        : (state.isLoggedIn = false);
    });

    builder.addCase(signupAuthUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
