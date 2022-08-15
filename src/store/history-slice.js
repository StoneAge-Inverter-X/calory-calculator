import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = {
  history: [
    "abc",
    "123",
    // {
    //   historyID: "0",
    //   userName: "",
    //   title: "",
    //   dateTimeOfMeal: "",
    //   userInput: "",
    //   apiResult: [], //same as apiOutput in food-slice.js
    //   totalCalory: 0,
    //   timeSaved: "",
    // },
  ],
};

const historySlice = createSlice({
  name: "history",
  initialState: initialHistoryState,
  reducers: {
    addToHistory(state, action) {
      state.history.push(action.payload);
    },
  },
});

export const historySliceActions = historySlice.actions;

export default historySlice.reducer;
