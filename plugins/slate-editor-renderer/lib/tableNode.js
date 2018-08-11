'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableCellNode = exports.tableRowNode = exports.tableNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* eslint-disable react/display-name */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _table = require('./components/table');

var _table2 = _interopRequireDefault(_table);

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tableNode = exports.tableNode = function tableNode(options) {
  return function (props) {
    return React.createElement(_table2.default, _extends({}, props, { tableOptions: options }));
  };
};

var tableRowNode = exports.tableRowNode = function tableRowNode() {
  return function (_ref) {
    var attributes = _ref.attributes,
        children = _ref.children;

    return React.createElement(
      'tr',
      attributes,
      children
    );
  };
};

var tableCellNode = exports.tableCellNode = function tableCellNode(stylesAttr) {
  return function (_ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        node = _ref2.node;

    return React.createElement(
      'td',
      _extends({
        style: Object.assign((0, _lodash2.default)(stylesAttr, function (val) {
          return val && val(node);
        }), { minWidth: '50px' })
      }, attributes),
      children
    );
  };
};