import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    newPart: {
      partName: "",
      partNumber: "",
      partDescription: "",
      partQty: 0,
      partStocked: false,
      partPackageStyle: "",
      partImages: [],
      partKeyWords: [],
      partSMT: false,
    },
  },
  reducers: {
    pomoIncrement: (state) => {
      console.log("Pomo increment...");
      //limit pomodoro state to 40 minutes (max)
      if (Number(state.pomodoro) >= 40) {
        state.pomodoro = 40;
      } else {
        state.pomodoro += 1;
      }
    },
    pomoIncrementByAmount: (state, action) => {
      console.log("Pomo increment by amount: " + action.payload);

      state.pomodoro += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pomoIncrement, pomoIncrementByAmount } = settingsSlice.actions;

export default settingsSlice.reducer;
