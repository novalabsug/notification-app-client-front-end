import axios from "axios";

const url = "http://localhost:3500";

export const createUser = (newUser) => axios.post(url + "/register", newUser);

export const signinUser = (newUser) => axios.post(url + "/signin", newUser);

export const fetchCompanies = (user) => axios.post(url + "/companyFetch", user);

export const fetchCompanyMessages = (user, company) =>
  axios.post(url + "/companyMessagesFetch", { user, company });

export const addCompany = (userTempId, user) =>
  axios.post(url + "/addCompany", { userTempId, userId: user });
