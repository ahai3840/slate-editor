"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * this delete a data key in current block type
 *
 * @param {Slate.state} state
 * @param {Datakey} dataKey
 * @return {Slate.state}
 **/
exports.default = function (change, dataKey) {
  var value = change.value;
  var blocks = value.blocks;

  // if have blocks

  if (blocks) {
    blocks.forEach(function (type) {
      var typeOriginalData = type.get("data");
      var newData = typeOriginalData.delete(dataKey);

      var newType = type.set("data", newData);
      // reset current type with new data
      change.setBlocks(newType);
    });
  }

  return change;
};