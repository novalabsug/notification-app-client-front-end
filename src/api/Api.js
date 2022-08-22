import axios from "axios";

const url = "http://localhost:3500";

export const createUser = (newUser) => axios.post(url + "/register", newUser);

export const signinUser = (newUser) => axios.post(url + "/signin", newUser);
