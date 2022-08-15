import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = {
  history: [
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
      console.log(action.payload);
      state.history.push(action.payload);
      console.log(state.history.length);
    },
  },
});

export const historySliceActions = historySlice.actions;

export default historySlice.reducer;
