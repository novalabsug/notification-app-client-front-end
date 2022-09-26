const Client = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMPANY_DATA":
      return action?.data;
    case "ADD_COMPANY":
      return [...state, { ...action?.data }];
    default:
      return state;
  }
};

export default Client;
