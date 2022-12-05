import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/Auth/AuthSlice";
import messagesReducer from "../features/Messages/messageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messagesReducer,
  },
});

export default store;
