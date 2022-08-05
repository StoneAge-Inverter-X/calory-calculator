import { configureStore } from "@reduxjs/toolkit";
import foodSliceReducer from "./food-slice.js";

const store = configureStore({
  reducer: { foodSlice: foodSliceReducer },
});
export default store;
