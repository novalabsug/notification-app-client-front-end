import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://mail-app-server.onrender.com";

// const url = "http://localhost:3500";

const initialState = {
  loading: false,
  messages: [],
  response: "",
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

export const readMail = createAsyncThunk("message/readMail", async (ID) => {
  const response = await axios.post(url + "/readMailPost", { ID });
  return response.data;
});

const messageSlice = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    // fetch messages cases
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.errors = action.payload.error)
        : (state.messages = action.payload);
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error;
    });

    // read mail cases
    builder.addCase(readMail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readMail.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.errors = action.payload.error)
        : (state.response = action.payload.response);
    });
    builder.addCase(readMail.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error;
    });
  },
});

export default messageSlice.reducer;
