import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/Auth/AuthSlice";
import companyReducer from "../features/Company/companySlice";
import messagesReducer from "../features/Messages/messageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messagesReducer,
    company: companyReducer,
  },
});

export default store;
