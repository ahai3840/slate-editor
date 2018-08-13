"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (change) {
  var value = change.value;

  if (value.marks) {
    // remove all marks
    value.marks.forEach(function (mark) {
      change.removeMark(mark);
    });
  }

  return change;
};