export default (company = [], action) => {
  switch (action.type) {
    case "FETCH_COMPANY_MESSAGES":
      return action?.data;
    default:
      return company;
  }
};
