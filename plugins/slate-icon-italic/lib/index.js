'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ItalicPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateIconShared = require('@canner/slate-icon-shared');

var _slateIconShared2 = _interopRequireDefault(_slateIconShared);

var _marks = require('@canner/slate-constant/lib/marks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItalicPlugin = exports.ItalicPlugin = function ItalicPlugin(opt) {
  var options = _extends({
    type: _marks.ITALIC,
    tagName: 'i'
  }, opt);

  return (0, _slateIconShared.markPlugin)(options, 'cmd+i');
};
var Italic = (_dec = (0, _slateIconShared.markDecorator)(_marks.ITALIC, 'Italic'), _dec(_class = function (_Component) {
  _inherits(Italic, _Component);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  _createClass(Italic, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_slateIconShared2.default, this.props);
    }
  }]);

  return Italic;
}(_react.Component)) || _class);
exports.default = Italic;