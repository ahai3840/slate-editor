'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options, hotkey) {
  return {
    renderMark: function renderMark(props) {
      if (props.mark.type === options.type) return (0, _commonMark2.default)(options.tagName)(props);
    },
    onKeyDown: function onKeyDown(event, change) {
      if ((0, _isHotkey2.default)(hotkey, event)) {
        change.call(function (change) {
          return change.toggleMark(options.type);
        });
      }
    }
  };
};

var _commonMark = require('../../slate-editor-renderer/src/commonMark');

var _commonMark2 = _interopRequireDefault(_commonMark);

var _isHotkey = require('is-hotkey');

var _isHotkey2 = _interopRequireDefault(_isHotkey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }