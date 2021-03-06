"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require("immutable");

exports.default = function (change, _ref) {
  var data = _ref.data;
  var value = change.value;

  var blocks = value.blocks;
  // if have blocks
  if (blocks) {
    blocks.forEach(function (type) {
      var mapData = (0, _immutable.Map)(data);
      var originalDataAttr = type.get("data") || (0, _immutable.Map)({});
      var newData = originalDataAttr.merge(mapData);

      var newType = type.set("data", newData);
      // reset current type with new data
      change.setBlocks(newType);
    });
  }

  return change;
}; /**
    * this update current type with additional data, this could be useful in align...
    **/