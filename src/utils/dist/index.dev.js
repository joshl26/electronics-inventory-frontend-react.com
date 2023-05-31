"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arraySearch = void 0;

var arraySearch = function arraySearch(array, keyword) {
  var searchTerm = keyword.toLowerCase();
  return array.filter(function (value) {
    return value.col1.toLowerCase().match(new RegExp(searchTerm, "g"));
  });
};

exports.arraySearch = arraySearch;