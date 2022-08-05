import { createSlice } from "@reduxjs/toolkit";

const initialFoodState = {
  userInput: [],
  apiOutput: [],
  totalCalory: 0,
  isLoading: true,
};

const foodSlice = createSlice({
  name: "food",
  initialState: initialFoodState,
  reducers: {
    setIsloading(state) {
      state.isLoading = false;
    },
    setUserInput(state, action) {
      console.log(action.payload);

      state.userInput = action.payload;
      console.log(state.userInput);
    },

    setApiOutput(state, action) {
      console.log(action.payload);

      state.apiOutput = action.payload;
    },

    setTotalCalory(state, action) {
      state.totalCalory = action.payload;
    },
  },
});

export const foodSliceActions = foodSlice.actions;

export default foodSlice.reducer;
