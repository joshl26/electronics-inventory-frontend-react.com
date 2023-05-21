import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    userSettings: {
      colorMode: "",
      partsListView: "",
    },
  },
  reducers: {
    colorModeState: (state, action) => {
      console.log("Set color mode to: " + action.payload);
      state.colorMode = action.payload;
    },
    partsListViewState: (state, action) => {
      console.log("Set parts list view to: " + action.payload);
      state.partsListView = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { colorModeState, partsListViewState } = settingsSlice.actions;

export default settingsSlice.reducer;
