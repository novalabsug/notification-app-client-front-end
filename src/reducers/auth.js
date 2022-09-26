const authReducer = (auth = { authData: [] }, action) => {
  switch (action.type) {
    case "AUTH":
      if (action?.data.result) {
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return { ...auth, authData: action?.data };
      }

      return { ...auth, authData: action.data.error };
    case "LOGOUT":
      localStorage.setItem("profile", "");

      return { ...auth, authData: null };
    default:
      return auth;
  }
};

export default authReducer;
