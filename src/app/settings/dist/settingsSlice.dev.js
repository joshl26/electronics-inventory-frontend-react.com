"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.partsListViewState = exports.colorModeState = exports.settingsSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var settingsSlice = (0, _toolkit.createSlice)({
  name: "settings",
  initialState: {
    userSettings: {
      colorMode: "",
      partsListView: ""
    }
  },
  reducers: {
    colorModeState: function colorModeState(state, action) {
      console.log("Set color mode to: " + action.payload);
      state.colorMode = action.payload;
    },
    partsListViewState: function partsListViewState(state, action) {
      console.log("Set parts list view to: " + action.payload);
      state.partsListView = action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

exports.settingsSlice = settingsSlice;
var _settingsSlice$action = settingsSlice.actions,
    colorModeState = _settingsSlice$action.colorModeState,
    partsListViewState = _settingsSlice$action.partsListViewState;
exports.partsListViewState = partsListViewState;
exports.colorModeState = colorModeState;
var _default = settingsSlice.reducer;
exports["default"] = _default;