'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header6 = exports.Header5 = exports.Header4 = exports.Header3 = exports.Header2 = exports.Header1 = exports.HeaderSixPlugin = exports.HeaderFivePlugin = exports.HeaderFourPlugin = exports.HeaderThreePlugin = exports.HeaderTwoPlugin = exports.HeaderOnePlugin = undefined;

var _header = require('./header1');

var _header2 = _interopRequireDefault(_header);

var _header3 = require('./header2');

var _header4 = _interopRequireDefault(_header3);

var _header5 = require('./header3');

var _header6 = _interopRequireDefault(_header5);

var _header7 = require('./header4');

var _header8 = _interopRequireDefault(_header7);

var _header9 = require('./header5');

var _header10 = _interopRequireDefault(_header9);

var _header11 = require('./header6');

var _header12 = _interopRequireDefault(_header11);

var _headerDecorator = require('./headerDecorator');

var _blocks = require('@canner/slate-constant/lib/blocks');

var _isHotkey = require('is-hotkey');

var _isHotkey2 = _interopRequireDefault(_isHotkey);

var _commonNode = require('@canner/slate-editor-renderer/lib/commonNode');

var _commonNode2 = _interopRequireDefault(_commonNode);

var _slateIconShared = require('@canner/slate-icon-shared');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = function plugin(type, tagName, hotkey) {
  return {
    renderNode: function renderNode(props) {
      if (props.node.type === type) return (0, _commonNode2.default)(tagName, _slateIconShared.nodeAttrs)(props);
    },
    onKeyDown: function onKeyDown(e, change) {
      if (e.key === 'Enter') {
        var value = change.value;
        var blocks = value.blocks;

        var getCurrentblock = blocks.get(0);

        if (getCurrentblock.type === type) return change.splitBlock().setBlock(_blocks.PARAGRAPH);
      } else if ((0, _isHotkey2.default)(hotkey, e)) {
        change.call(_headerDecorator.applyChange, type);
        return false;
      }
    }
  };
};

var HeaderOnePlugin = exports.HeaderOnePlugin = function HeaderOnePlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_1;
  return plugin(type, 'h1', 'ctrl+opt+1');
};
var HeaderTwoPlugin = exports.HeaderTwoPlugin = function HeaderTwoPlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_2;
  return plugin(type, 'h2', 'ctrl+opt+2');
};
var HeaderThreePlugin = exports.HeaderThreePlugin = function HeaderThreePlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_3;
  return plugin(type, 'h3', 'ctrl+opt+3');
};
var HeaderFourPlugin = exports.HeaderFourPlugin = function HeaderFourPlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_4;
  return plugin(type, 'h4', 'ctrl+opt+4');
};
var HeaderFivePlugin = exports.HeaderFivePlugin = function HeaderFivePlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_5;
  return plugin(type, 'h5', 'ctrl+opt+5');
};
var HeaderSixPlugin = exports.HeaderSixPlugin = function HeaderSixPlugin() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _blocks.HEADING_6;
  return plugin(type, 'h6', 'ctrl+opt+6');
};

var Header1 = exports.Header1 = _header2.default;
var Header2 = exports.Header2 = _header4.default;
var Header3 = exports.Header3 = _header6.default;
var Header4 = exports.Header4 = _header8.default;
var Header5 = exports.Header5 = _header10.default;
var Header6 = exports.Header6 = _header12.default;