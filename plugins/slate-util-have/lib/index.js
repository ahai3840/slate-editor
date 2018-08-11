"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var haveMarks = exports.haveMarks = function haveMarks(_ref, type) {
  var value = _ref.value;

  if (value.marks.size > 0) {
    return value.marks.some(function (mark) {
      return mark.type === type;
    });
  }

  return false;
};

var haveBlocks = exports.haveBlocks = function haveBlocks(_ref2, type) {
  var value = _ref2.value;

  if (value.blocks.size > 0) {
    return value.blocks.some(function (node) {
      return node.type === type || node.type.indexOf("" + type) === 0;
    });
  }

  return false;
};

var haveInlines = exports.haveInlines = function haveInlines(_ref3, type) {
  var value = _ref3.value;

  if (value.inlines.size > 0) {
    return value.inlines.some(function (inline) {
      return inline.type === type;
    });
  }

  return false;
};

var haveDataKeyInSomeBlocks = exports.haveDataKeyInSomeBlocks = function haveDataKeyInSomeBlocks(_ref4, dataKey) {
  var value = _ref4.value;

  if (value.blocks.size > 0) {
    return value.blocks.some(function (block) {
      return block.get("data").has(dataKey) && block.get("data").get(dataKey);
    });
  }

  return false;
};

var haveDataKeyInSomeMarks = exports.haveDataKeyInSomeMarks = function haveDataKeyInSomeMarks(_ref5, dataKey) {
  var value = _ref5.value;

  if (value.marks.size > 0) {
    return value.marks.some(function (mark) {
      return mark.get("data").has(dataKey) && mark.get("data").get(dataKey);
    });
  }

  return false;
};

var haveDataKeyEqualValueInSomeBlocks = exports.haveDataKeyEqualValueInSomeBlocks = function haveDataKeyEqualValueInSomeBlocks(_ref6, dataKey, dataValue) {
  var value = _ref6.value;

  if (value.blocks.size > 0) {
    return value.blocks.some(function (block) {
      return block.get("data").has(dataKey) && block.get("data").get(dataKey) === dataValue;
    });
  }

  return false;
};