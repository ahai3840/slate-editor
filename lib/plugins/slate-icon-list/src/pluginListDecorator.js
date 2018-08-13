'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _slateEditList = require('slate-edit-list');

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _src = require('../../slate-helper-block-list/src');

var _src2 = _interopRequireDefault(_src);

var _blocks = require('../../slate-constant/src/blocks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isList = (0, _slateEditList2.default)(_src.DEFAULT).utils.isList;

exports.default = function (type, defaultIcon) {
  return function (Block) {
    return function (_React$Component) {
      _inherits(pluginDecoration, _React$Component);

      function pluginDecoration(props) {
        _classCallCheck(this, pluginDecoration);

        var _this = _possibleConstructorReturn(this, (pluginDecoration.__proto__ || Object.getPrototypeOf(pluginDecoration)).call(this, props));

        _this.onClick = function (e, opts) {
          var _this$props = _this.props,
              change = _this$props.change,
              onChange = _this$props.onChange;

          e.preventDefault();
          onChange((0, _src2.default)(change, opts));
        };

        _this.typeName = _this.props.type || type;
        return _this;
      }

      _createClass(pluginDecoration, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _props = this.props,
              change = _props.change,
              icon = _props.icon,
              rest = _objectWithoutProperties(_props, ['change', 'icon']);

          var typeOpts = void 0;
          if (defaultIcon === 'ListOrdered') {
            // ol list
            typeOpts = {
              typeOL: this.typeName,
              typeUL: _blocks.UL_LIST,
              typeItem: _blocks.LIST_ITEM,
              ordered: true
            };
          } else if (defaultIcon === 'ListBullet') {
            // ul list
            typeOpts = {
              typeUL: this.typeName,
              typeOL: _blocks.OL_LIST,
              typeItem: _blocks.LIST_ITEM,
              ordered: false
            };
          }
          var onClick = function onClick(e) {
            return _this2.onClick(e, typeOpts);
          };

          return (
            // $FlowFixMe
            React.createElement(Block, _extends({}, rest, {
              type: this.typeName,
              icon: icon || defaultIcon,
              onClick: onClick,
              isActive: isList(change, this.typeName, typeOpts)
            }))
          );
        }
      }]);

      return pluginDecoration;
    }(React.Component);
  };
};