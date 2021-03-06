'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../slate-icon-shared/src/index');

var _index2 = _interopRequireDefault(_index);

var _blocks = require('../../slate-constant/src/blocks');

var _headerDecorator = require('./headerDecorator');

var _headerDecorator2 = _interopRequireDefault(_headerDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading3 = (_dec = (0, _headerDecorator2.default)(_blocks.HEADING_3, 'Header3'), _dec(_class = function (_Component) {
  _inherits(Heading3, _Component);

  function Heading3() {
    _classCallCheck(this, Heading3);

    return _possibleConstructorReturn(this, (Heading3.__proto__ || Object.getPrototypeOf(Heading3)).apply(this, arguments));
  }

  _createClass(Heading3, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, this.props);
    }
  }]);

  return Heading3;
}(_react.Component)) || _class);
exports.default = Heading3;