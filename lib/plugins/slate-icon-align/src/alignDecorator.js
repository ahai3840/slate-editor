'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyChange = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('../../slate-util-have/src/index');

var _index2 = require('../../slate-helper-block-adddata/src/index');

var _index3 = _interopRequireDefault(_index2);

var _index4 = require('../../slate-helper-block-cleardatabykey/src/index');

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var applyChange = exports.applyChange = function applyChange(change, type, align) {
  var isActive = (0, _index.haveDataKeyEqualValueInSomeBlocks)(change, type, align);

  if (isActive) return change.call(_index5.default, type);
  return change.call(_index3.default, { data: _defineProperty({}, type, align) });
};

exports.default = function (type, defaultIcon, align) {
  return function (Block) {
    return function (_React$Component) {
      _inherits(AlignDecorator, _React$Component);

      function AlignDecorator(props) {
        _classCallCheck(this, AlignDecorator);

        var _this = _possibleConstructorReturn(this, (AlignDecorator.__proto__ || Object.getPrototypeOf(AlignDecorator)).call(this, props));

        _this.onClick = function (e) {
          e.preventDefault();
          var _this$props = _this.props,
              change = _this$props.change,
              onChange = _this$props.onChange;


          onChange(applyChange(change, _this.typeName, align));
        };

        _this.typeName = props.type || type;
        return _this;
      }

      _createClass(AlignDecorator, [{
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
          var isActive = (0, _index.haveDataKeyEqualValueInSomeBlocks)(change, type, align);

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

      return AlignDecorator;
    }(React.Component);
  };
};