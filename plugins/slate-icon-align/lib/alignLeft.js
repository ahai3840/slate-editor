'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateIconShared = require('@canner/slate-icon-shared');

var _slateIconShared2 = _interopRequireDefault(_slateIconShared);

var _alignDecorator = require('./alignDecorator');

var _alignDecorator2 = _interopRequireDefault(_alignDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlignLeft = (_dec = (0, _alignDecorator2.default)('align', 'AlignLeft', 'left'), _dec(_class = function (_Component) {
  _inherits(AlignLeft, _Component);

  function AlignLeft() {
    _classCallCheck(this, AlignLeft);

    return _possibleConstructorReturn(this, (AlignLeft.__proto__ || Object.getPrototypeOf(AlignLeft)).apply(this, arguments));
  }

  _createClass(AlignLeft, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_slateIconShared2.default, this.props);
    }
  }]);

  return AlignLeft;
}(_react.Component)) || _class);
exports.default = AlignLeft;