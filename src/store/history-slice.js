import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = {
  history: [
    // {
    //   historyID: "ab date time",
    //   userName: "ab",
    //   title: "",
    //   dateTimeOfMeal: "",
    //   userInput: "",
    //   apiResult: [], //same as apiOutput in food-slice.js
    //   totalCalory: 0,
    //   timeSaved: "",
    // },
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
      state.history.unshift(action.payload);
      console.log(state.history.length);
    },
    deletHistoryByIndex(state, action) {
      state.history.splice(action.payload, 1);
    },
  },
});

export const historySliceActions = historySlice.actions;

export default historySlice.reducer;
