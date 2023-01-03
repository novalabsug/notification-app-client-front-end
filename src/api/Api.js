import axios from "axios";

// const url = "https://mail-app-server.onrender.com";

const url = "http://localhost:3500";

export const createUser = (newUser) => axios.post(url + "/register", newUser);

export const signinUser = (newUser) => {
  console.log(newUser);
  axios.post(url + "/signin", newUser).then((response) => response.data);
};

export const fetchCompanies = (user) => axios.post(url + "/companyFetch", user);

export const fetchCompanyMessages = (user, company) =>
  axios.post(url + "/companyMessagesFetch", { user, company });

export const addCompany = (userTempId, user) =>
  axios.post(url + "/addCompany", { userTempId, userId: user });
