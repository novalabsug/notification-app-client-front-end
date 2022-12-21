import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { readMail } from "../Messages/messageSlice";

const url = "http://localhost:3500";

const initialState = {
  loading: false,
  companies: [],
  error: {},
  success: "",
};

export const fetchCompanies = createAsyncThunk(
  "company/fetchCompanies",
  async (data) => {
    const response = await axios.post(url + "/companyFetch", data);
    return response.data;
  }
);

export const addCompany = createAsyncThunk(
  "company/addCompany",
  async (data) => {
    const { userTempId, user } = data;
    const response = await axios.post(url + "/addCompany", {
      userTempId,
      user,
    });
    return response.data;
  }
);

const companySlice = createSlice({
  name: "company",
  initialState,
  extraReducers: (builder) => {
    // --------- fetchCompanies
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.companies = action.payload);
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // ------------- addCompany
    builder.addCase(addCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCompany.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.error
        ? (state.error = action.payload.error)
        : action.payload.addCompanyError
        ? (state.error = action.payload)
        : (state.success = action.payload);
    });
    builder.addCase(addCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // // --------- read main action
    // builder.addCase(readMail.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.companies.CompanyUnread = {...state.companies.CompanyUnread, }
    // })
  },
});

export default companySlice.reducer;
