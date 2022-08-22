import * as api from "../api/Api";

// Action Creators
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signinUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.signinUser(user);

    dispatch({ type: "SIGNIN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
