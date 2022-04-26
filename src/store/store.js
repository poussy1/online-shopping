import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../store/orderSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});
