'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (Tag, stylesAttr) {
  var NodeComponent = function NodeComponent(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children,
        node = _ref.node;

    return React.createElement(
      Tag,
      _extends({}, attributes, {
        'data-slate-type': Tag,
        style: (0, _lodash2.default)(stylesAttr, function (val) {
          return val && val(node);
        })
      }),
      children
    );
  };

  NodeComponent.displayName = Tag + '-node';

  return NodeComponent;
};

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _lodash = require('lodash.mapvalues');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }