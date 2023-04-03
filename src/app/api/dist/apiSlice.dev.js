"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiSlice = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _authSlice = require("../../features/auth/authSlice");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseQuery = (0, _react.fetchBaseQuery)({
  baseUrl: "http://localhost:3500",
  credentials: "include",
  prepareHeaders: function prepareHeaders(headers, _ref) {
    var getState = _ref.getState;
    var token = getState().auth.token;

    if (token) {
      headers.set("authorization", "Bearer ".concat(token));
    }

    console.log(headers);
    return headers;
  }
});

var baseQueryWithReauth = function baseQueryWithReauth(args, api, extraOptions) {
  var result, refreshResult;
  return regeneratorRuntime.async(function baseQueryWithReauth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(baseQuery(args, api, extraOptions));

        case 2:
          result = _context.sent;

          if (!(result.error.status === 403)) {
            _context.next = 17;
            break;
          }

          console.log("sending refresh token"); // send refresh token to get new access token

          _context.next = 7;
          return regeneratorRuntime.awrap(baseQuery("/auth/refresh", api, extraOptions));

        case 7:
          refreshResult = _context.sent;

          if (!refreshResult.data) {
            _context.next = 15;
            break;
          }

          // store the new token
          api.dispatch((0, _authSlice.setCredentials)(_objectSpread({}, refreshResult.data))); // retry original query with new access token

          _context.next = 12;
          return regeneratorRuntime.awrap(baseQuery(args, api, extraOptions));

        case 12:
          result = _context.sent;
          _context.next = 17;
          break;

        case 15:
          if (refreshResult.error.status === 403) {
            refreshResult.error.data.message = "Your login has expired.";
          }

          return _context.abrupt("return", refreshResult);

        case 17:
          return _context.abrupt("return", result);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
};

var apiSlice = (0, _react.createApi)({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Note", "User", "Part"],
  endpoints: function endpoints(builder) {
    return {};
  }
});
exports.apiSlice = apiSlice;