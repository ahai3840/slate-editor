'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UlList = exports.OlList = exports.ListPlugin = undefined;

var _olList = require('./olList');

var _olList2 = _interopRequireDefault(_olList);

var _ulList = require('./ulList');

var _ulList2 = _interopRequireDefault(_ulList);

var _blocks = require('../../slate-constant/src/blocks');

var _index = require('../../slate-icon-shared/src/index');

var _commonNode = require('../../slate-editor-renderer/src/commonNode');

var _commonNode2 = _interopRequireDefault(_commonNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListPlugin = exports.ListPlugin = function ListPlugin(opt) {
  var options = Object.assign({
    olType: _blocks.OL_LIST,
    ulType: _blocks.UL_LIST,
    liType: _blocks.LIST_ITEM
  }, opt);

  return {
    renderNode: function renderNode(props) {
      if (props.node.type === options.ulType) return (0, _commonNode2.default)('ul', _index.nodeAttrs)(props);else if (props.node.type === options.olType) return (0, _commonNode2.default)('ol', _index.nodeAttrs)(props);else if (props.node.type === options.liType) return (0, _commonNode2.default)('li', _index.nodeAttrs)(props);
    }
  };
};

var OlList = exports.OlList = _olList2.default;
var UlList = exports.UlList = _ulList2.default;