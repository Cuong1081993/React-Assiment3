import toggleDetailReducer from "./detail-product";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    showHideDetail: toggleDetailReducer,
  },
});
export default store;
