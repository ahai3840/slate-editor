'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignRightPlugin = exports.AlignLeftPlugin = exports.AlignCenterPlugin = exports.AlignRight = exports.AlignLeft = exports.AlignCenter = undefined;

var _alignCenter = require('./alignCenter');

var _alignCenter2 = _interopRequireDefault(_alignCenter);

var _alignLeft = require('./alignLeft');

var _alignLeft2 = _interopRequireDefault(_alignLeft);

var _alignRight = require('./alignRight');

var _alignRight2 = _interopRequireDefault(_alignRight);

var _alignDecorator = require('./alignDecorator');

var _isHotkey = require('is-hotkey');

var _isHotkey2 = _interopRequireDefault(_isHotkey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = function plugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'align';
  var hotkey = arguments[1];
  var align = arguments[2];

  return {
    onKeyDown: function onKeyDown(event, change) {
      if ((0, _isHotkey2.default)(hotkey, event)) {
        (0, _alignDecorator.applyChange)(change, type, align);
      }
    }
  };
};

var AlignCenter = exports.AlignCenter = _alignCenter2.default;
var AlignLeft = exports.AlignLeft = _alignLeft2.default;
var AlignRight = exports.AlignRight = _alignRight2.default;

var AlignCenterPlugin = exports.AlignCenterPlugin = function AlignCenterPlugin(type) {
  return plugin(type, 'ctrl+opt+c', 'center');
};

var AlignLeftPlugin = exports.AlignLeftPlugin = function AlignLeftPlugin(type) {
  return plugin(type, 'ctrl+opt+l', 'left');
};

var AlignRightPlugin = exports.AlignRightPlugin = function AlignRightPlugin(type) {
  return plugin(type, 'ctrl+opt+r', 'right');
};