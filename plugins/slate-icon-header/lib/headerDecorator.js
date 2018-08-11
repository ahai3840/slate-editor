'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyChange = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _blocks = require('@canner/slate-constant/lib/blocks');

var _slateUtilHave = require('@canner/slate-util-have');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var applyChange = exports.applyChange = function applyChange(change, type) {
  var isActive = (0, _slateUtilHave.haveBlocks)(change, type);
  return change.setBlocks(isActive ? _blocks.PARAGRAPH : type);
};

exports.default = function (type, defaultIcon) {
  return function (Block) {
    return function (_React$Component) {
      _inherits(HeaderDecorator, _React$Component);

      function HeaderDecorator(props) {
        _classCallCheck(this, HeaderDecorator);

        var _this = _possibleConstructorReturn(this, (HeaderDecorator.__proto__ || Object.getPrototypeOf(HeaderDecorator)).call(this, props));

        _this.onClick = function (e) {
          var _this$props = _this.props,
              change = _this$props.change,
              onChange = _this$props.onChange;

          e.preventDefault();

          onChange(applyChange(change, _this.typeName));
        };

        _this.typeName = _this.props.type || type;
        return _this;
      }

      _createClass(HeaderDecorator, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _props = this.props,
              change = _props.change,
              icon = _props.icon,
              rest = _objectWithoutProperties(_props, ['change', 'icon']);

          var onClick = function onClick(e) {
            return _this2.onClick(e);
          };
          var isActive = (0, _slateUtilHave.haveBlocks)(change, this.typeName);

          return (
            // $FlowFixMe
            React.createElement(Block, _extends({
              type: this.typeName,
              icon: icon || defaultIcon,
              onClick: onClick,
              isActive: isActive
            }, rest))
          );
        }
      }]);

      return HeaderDecorator;
    }(React.Component);
  };
};