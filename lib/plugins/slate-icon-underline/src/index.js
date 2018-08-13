'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnderlinePlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../slate-icon-shared/src/index');

var _index2 = _interopRequireDefault(_index);

var _marks = require('../../slate-constant/src/marks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnderlinePlugin = exports.UnderlinePlugin = function UnderlinePlugin(opt) {
  var options = Object.assign({
    type: _marks.UNDERLINE,
    tagName: 'u'
  }, opt);

  return (0, _index.markPlugin)(options, 'cmd+u');
};
var Underline = (_dec = (0, _index.markDecorator)(_marks.UNDERLINE, 'Underline'), _dec(_class = function (_Component) {
  _inherits(Underline, _Component);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  _createClass(Underline, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, this.props);
    }
  }]);

  return Underline;
}(_react.Component)) || _class);
exports.default = Underline;