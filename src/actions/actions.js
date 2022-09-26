import { async } from "@firebase/util";
import * as api from "../api/Api";

// Action Creators
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error);
  }
};

export const signinUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.signinUser(user);

    dispatch({ type: "AUTH", data });
  } catch (error) {
    dispatch({ type: "AUTH", data: error.response.data });
  }
};

export const fetchCompanyData = (user) => async (dispatch) => {
  try {
    const { data } = await api.fetchCompanies(user);

    dispatch({ type: "FETCH_COMPANY_DATA", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_COMPANY_DATA", data: error.response.data });
  }
};

export const fetchCompanyMessages = (user, company) => async (dispatch) => {
  try {
    const { data } = await api.fetchCompanyMessages(user, company);

    dispatch({ type: "FETCH_COMPANY_MESSAGES", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_COMPANY_MESSAGES", data: error.response.data });
  }
};

export const addCompany = (userTempId, user) => async (dispatch) => {
  try {
    const { data } = await api.addCompany(userTempId, user);

    dispatch({ type: "ADD_COMPANY", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_COMPANY", data: error.response.data });
  }
};
