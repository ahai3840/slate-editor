'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _src = require('../../slate-icon-shared/src');

var _src2 = _interopRequireDefault(_src);

var _alignDecorator = require('./alignDecorator');

var _alignDecorator2 = _interopRequireDefault(_alignDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlignCenter = (_dec = (0, _alignDecorator2.default)('align', 'AlignCenter', 'center'), _dec(_class = function (_Component) {
  _inherits(AlignCenter, _Component);

  function AlignCenter() {
    _classCallCheck(this, AlignCenter);

    return _possibleConstructorReturn(this, (AlignCenter.__proto__ || Object.getPrototypeOf(AlignCenter)).apply(this, arguments));
  }

  _createClass(AlignCenter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_src2.default, this.props);
    }
  }]);

  return AlignCenter;
}(_react.Component)) || _class);
exports.default = AlignCenter;