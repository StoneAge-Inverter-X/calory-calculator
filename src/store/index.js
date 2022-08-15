import { configureStore } from "@reduxjs/toolkit";
import foodSliceReducer from "./food-slice.js";
import historySliceReducer from "./history-slice.js";

const store = configureStore({
  reducer: { foodSlice: foodSliceReducer, historySlice: historySliceReducer },
});
export default store;
