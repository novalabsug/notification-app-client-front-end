import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3500";

const initialState = {
  loading: false,
  chats: [],
  errors: {},
};

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (data) => {
    const response = await axios.post(url + "/companyMessagesFetch", data);
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
  },
});

export default messageSlice.reducer;
