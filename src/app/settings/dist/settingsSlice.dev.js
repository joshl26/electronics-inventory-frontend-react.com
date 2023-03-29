"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pomoIncrementByAmount = exports.pomoIncrement = exports.settingsSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var settingsSlice = (0, _toolkit.createSlice)({
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
      partSMT: false
    }
  },
  reducers: {
    pomoIncrement: function pomoIncrement(state) {
      console.log("Pomo increment..."); //limit pomodoro state to 40 minutes (max)

      if (Number(state.pomodoro) >= 40) {
        state.pomodoro = 40;
      } else {
        state.pomodoro += 1;
      }
    },
    pomoIncrementByAmount: function pomoIncrementByAmount(state, action) {
      console.log("Pomo increment by amount: " + action.payload);
      state.pomodoro += action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

exports.settingsSlice = settingsSlice;
var _settingsSlice$action = settingsSlice.actions,
    pomoIncrement = _settingsSlice$action.pomoIncrement,
    pomoIncrementByAmount = _settingsSlice$action.pomoIncrementByAmount;
exports.pomoIncrementByAmount = pomoIncrementByAmount;
exports.pomoIncrement = pomoIncrement;
var _default = settingsSlice.reducer;
exports["default"] = _default;