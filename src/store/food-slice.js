import { createSlice } from "@reduxjs/toolkit";

const initialFoodState = {
  isAuthed: false,
  currentUser: "",
  userInput: "",
  apiOutput: [],
  totalCalory: 0,
  isLoading: true,
  cacheFoodNames: [],
  cacheFoodData: {},
};

const foodSlice = createSlice({
  name: "food",
  initialState: initialFoodState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsAuthed(state, action) {
      state.isAuthed = action.payload;
    },

    setIsloading(state, action) {
      state.isLoading = action.payload;
    },
    setUserInput(state, action) {
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
    setCacheFoodNames(state, action) {
      console.log(action.payload);

      state.cacheFoodNames.push(action.payload);
      // console.log(state.cacheFoodNames);
    },
    setCacheFoodData(state, action) {
      console.log(action.payload);
      state.cacheFoodData[action.payload[0]] = action.payload[1];
      //console.log(state.cacheFoodData);
    },
  },
});

export const foodSliceActions = foodSlice.actions;

export default foodSlice.reducer;
