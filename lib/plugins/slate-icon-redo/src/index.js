'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RedoPlugin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('../../slate-icon-shared/src/index');

var _index2 = _interopRequireDefault(_index);

var _isHotkey = require('is-hotkey');

var _isHotkey2 = _interopRequireDefault(_isHotkey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedoPlugin = exports.RedoPlugin = function RedoPlugin() {
  return {
    onKeyDown: function onKeyDown(event, change) {
      if ((0, _isHotkey2.default)('cmd+shift+y', event)) {
        change.call(function (change) {
          return change.redo();
        });
      }
    }
  };
};

var Redo = function (_React$Component) {
  _inherits(Redo, _React$Component);

  function Redo(props) {
    _classCallCheck(this, Redo);

    var _this = _possibleConstructorReturn(this, (Redo.__proto__ || Object.getPrototypeOf(Redo)).call(this, props));

    _this.onClick = function (e) {
      var _this$props = _this.props,
          change = _this$props.change,
          onChange = _this$props.onChange;

      e.preventDefault();
      onChange(change.redo());
    };

    _this.typeName = _this.props.type || 'redo';
    return _this;
  }

  _createClass(Redo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          change = _props.change,
          rest = _objectWithoutProperties(_props, ['icon', 'change']);

      var onClick = function onClick(e) {
        return _this2.onClick(e);
      };
      return React.createElement(_index2.default, _extends({
        type: this.typeName,
        icon: icon || 'Redo',
        onClick: onClick,
        disabled: !change.value.hasRedos,
        change: change
      }, rest));
    }
  }]);

  return Redo;
}(React.Component);

exports.default = Redo;