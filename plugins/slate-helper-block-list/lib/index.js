"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable new-cap */


var _slateEditList = require("slate-edit-list");

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _blocks = require("@canner/slate-constant/lib/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT = exports.DEFAULT = {
  types: [_blocks.OL_LIST, _blocks.UL_LIST],
  typeItem: _blocks.LIST_ITEM,
  typeDefault: _blocks.PARAGRAPH,
  ordered: true
};

exports.default = function (change) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT;

  var options = _extends({}, DEFAULT, opt);
  var types = options.types,
      ordered = options.ordered;

  var _EditList = (0, _slateEditList2.default)(options),
      utils = _EditList.utils,
      changes = _EditList.changes;

  var currentType = ordered ? types[0] : types[1];
  var newChange = void 0;

  if (utils.isSelectionInList(change.value)) {
    if (utils.getCurrentList(change.value).type !== currentType) {
      newChange = changes.wrapInList(change, currentType);
    } else {
      newChange = changes.unwrapList(change);
    }
  } else {
    newChange = changes.wrapInList(change, currentType);
  }

  return newChange;
};