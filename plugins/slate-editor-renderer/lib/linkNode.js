'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var LinkNode = function LinkNode(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children,
        node = _ref.node;

    return React.createElement(
      _antd.Tooltip,
      { title: options.getHref(node) },
      React.createElement(
        'a',
        _extends({}, attributes, {
          href: options.getHref(node),
          'data-slate-type': 'link' }),
        children
      )
    );
  };

  LinkNode.displayName = 'link-node';

  return LinkNode;
};

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _antd = require('antd');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }