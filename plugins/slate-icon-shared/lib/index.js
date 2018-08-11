'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ParagraphPlugin = exports.markAttrs = exports.nodeAttrs = exports.markPlugin = exports.markDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

require('slate');

var _basicMarkDecoration = require('./basicMarkDecoration');

var _basicMarkDecoration2 = _interopRequireDefault(_basicMarkDecoration);

var _basicMarkPlugin = require('./basicMarkPlugin');

var _basicMarkPlugin2 = _interopRequireDefault(_basicMarkPlugin);

var _blocks = require('@canner/slate-constant/lib/blocks');

var _marks = require('@canner/slate-constant/lib/marks');

var _quillIcons = require('quill-icons');

var _quillIcons2 = _interopRequireDefault(_quillIcons);

var _commonNode = require('@canner/slate-editor-renderer/lib/commonNode');

var _commonNode2 = _interopRequireDefault(_commonNode);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var markDecorator = exports.markDecorator = _basicMarkDecoration2.default;
var markPlugin = exports.markPlugin = _basicMarkPlugin2.default;

var nodeAttrs = exports.nodeAttrs = {
  textAlign: function textAlign(node) {
    return node.data.get('align');
  },
  paddingLeft: function paddingLeft(node) {
    return node.data.get('indent') ? 3 * node.data.get('indent') + 'em' : undefined;
  },
  lineHeight: function lineHeight(node) {
    return node.data.get('lineHeight');
  },
  width: function width(node) {
    return node.data.get('width');
  },
  height: function height(node) {
    return node.data.get('height');
  }
};

var markAttrs = exports.markAttrs = {
  backgroundColor: function backgroundColor(mark) {
    return mark.data.getIn(['color', 'color']);
  },
  color: function color(mark) {
    return mark.data.getIn(['color', 'color']);
  },
  fontSize: function fontSize(mark) {
    return mark.data.get(_marks.FONTSIZE);
  },
  letterSpacing: function letterSpacing(mark) {
    return mark.data.get(_marks.LETTERSPACING);
  }
};

var ParagraphPlugin = exports.ParagraphPlugin = function ParagraphPlugin(opt) {
  var options = Object.assign(_extends({
    type: _blocks.PARAGRAPH,
    tagName: 'p'
  }, nodeAttrs), opt);

  return {
    renderNode: function renderNode(props) {
      if (props.node.type === options.type) return (0, _commonNode2.default)(options.tagName, (0, _lodash2.default)(options, ['type', 'tagName']))(props);
    }
  };
};

var ToolbarIcon = function (_React$Component) {
  _inherits(ToolbarIcon, _React$Component);

  function ToolbarIcon() {
    _classCallCheck(this, ToolbarIcon);

    return _possibleConstructorReturn(this, (ToolbarIcon.__proto__ || Object.getPrototypeOf(ToolbarIcon)).apply(this, arguments));
  }

  _createClass(ToolbarIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          icon = _props.icon,
          onClick = _props.onClick,
          disabled = _props.disabled,
          isActive = _props.isActive,
          disableClassName = _props.disableClassName,
          activeClassName = _props.activeClassName,
          activeStrokeClassName = _props.activeStrokeClassName,
          activeFillClassName = _props.activeFillClassName,
          activeEvenClassName = _props.activeEvenClassName,
          activeTransparentClassName = _props.activeTransparentClassName,
          activeStrokeMitterClassName = _props.activeStrokeMitterClassName,
          activeColorLabelClassName = _props.activeColorLabelClassName,
          activeThinClassName = _props.activeThinClassName,
          strokeClassName = _props.strokeClassName,
          fillClassName = _props.fillClassName,
          evenClassName = _props.evenClassName,
          transparentClassName = _props.transparentClassName,
          strokeMitterClassName = _props.strokeMitterClassName,
          colorLabelClassName = _props.colorLabelClassName,
          thinClassName = _props.thinClassName,
          className = _props.className,
          colorStyle = _props.colorStyle,
          onChange = _props.onChange;


      var iconClassName = isActive ? activeClassName : className;
      var iconStrokeClassName = isActive ? activeStrokeClassName : strokeClassName;
      var iconStrokeMitterClassName = isActive ? activeStrokeMitterClassName : strokeMitterClassName;
      var iconFillClassName = isActive ? activeFillClassName : fillClassName;
      var iconEvenClassName = isActive ? activeEvenClassName : evenClassName;
      var iconColorLabelClassName = isActive ? activeColorLabelClassName : colorLabelClassName;
      var iconTransparentClassName = isActive ? activeTransparentClassName : transparentClassName;
      var iconThinClassName = isActive ? activeThinClassName : thinClassName;

      var fontElement = React.createElement(_quillIcons2.default[icon], Object.assign({
        onChange: onChange,
        colorStyle: colorStyle,
        className: disabled ? (0, _classnames2.default)(iconClassName, disableClassName) : iconClassName,
        strokeClassName: iconStrokeClassName,
        strokeMitterClassName: iconStrokeMitterClassName,
        fillClassName: iconFillClassName,
        evenClassName: iconEvenClassName,
        colorLabelClassName: iconColorLabelClassName,
        transparentClassName: iconTransparentClassName,
        thinClassName: iconThinClassName
      }));

      return React.createElement(
        'span',
        {
          key: type,
          onClick: onClick,
          onMouseDown: function onMouseDown(e) {
            return e.preventDefault();
          },
          'data-active': isActive || false },
        fontElement
      );
    }
  }]);

  return ToolbarIcon;
}(React.Component);

exports.default = ToolbarIcon;