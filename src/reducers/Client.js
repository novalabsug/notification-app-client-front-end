const Client = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMPANY_DATA":
      return { ...state, data: action?.data };
    case "ADD_COMPANY":
      return { ...state, data: action?.data };
    default:
      return state;
  }
};

export default Client;
