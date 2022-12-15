import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3500";

const initialState = {
  loading: false,
  messages: [],
  errors: {},
};

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async (data) => {
    const { user, company } = data;
    const response = await axios.post(url + "/companyMessagesFetch", {
      user,
      company,
    });
    return response.data;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.errors = action.payload.error)
        : (state.messages = action.payload);
    });
    builder.addCase(fetchMessages, (state, action) => {
      state.loading = false;
      state.errors = action.error;
    });
  },
});

export default messageSlice.reducer;
