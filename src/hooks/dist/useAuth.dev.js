"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _authSlice = require("../features/auth/authSlice");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useAuth = function useAuth() {
  var token = (0, _reactRedux.useSelector)(_authSlice.selectCurrentToken);
  var isManager = false;
  var isAdmin = false;
  var status = "Employee"; // Assign value to a key

  sessionStorage.setItem("token", token);

  if (token) {
    var decoded = (0, _jwtDecode["default"])(token);
    var _decoded$UserInfo = decoded.UserInfo,
        username = _decoded$UserInfo.username,
        roles = _decoded$UserInfo.roles;
    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");
    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";
    return {
      username: username,
      roles: roles,
      status: status,
      isManager: isManager,
      isAdmin: isAdmin
    };
  }

  return {
    username: "",
    roles: [],
    isManager: isManager,
    isAdmin: isAdmin,
    status: status
  };
};

var _default = useAuth;
exports["default"] = _default;