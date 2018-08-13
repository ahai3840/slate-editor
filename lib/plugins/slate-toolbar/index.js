"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactWindowDetectDimensions = require("react-window-detect-dimensions");

var _reactWindowDetectDimensions2 = _interopRequireDefault(_reactWindowDetectDimensions);

var _getSelectionRange = require("get-selection-range");

var _container = require("./container");

var _index = require("../slate-icon-bold/src/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../slate-icon-underline/src/index");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../slate-icon-shared/src/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultPlugins = [(0, _index5.ParagraphPlugin)(), (0, _index.BoldPlugin)(), (0, _index3.UnderlinePlugin)()];

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$icons = options.icons,
      icons = _options$icons === undefined ? [_index2.default, Italic, _index4.default] : _options$icons,
      _options$position = options.position,
      position = _options$position === undefined ? "top" : _options$position,
      _options$disabledType = options.disabledTypes,
      disabledTypes = _options$disabledType === undefined ? [] : _options$disabledType;

  var i = 0;

  return function (Editor) {
    var Toolbar = function (_React$Component) {
      _inherits(Toolbar, _React$Component);

      function Toolbar(props) {
        _classCallCheck(this, Toolbar);

        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

        _this.renderButton = function (Type) {
          var _this$props = _this.props,
              value = _this$props.value,
              onChange = _this$props.onChange;


          if (Type === "divider") {
            return React.createElement(_container.Divider, { key: i++ });
          }

          return React.createElement(
            _container.IconContainer,
            null,
            React.createElement(Type, {
              change: value.change(),
              onChange: onChange,
              key: i++,
              className: "__slate-toolbar-slateToolbarItem",
              strokeClassName: "qlStroke",
              strokeMitterClassName: "qlStrokeMitter",
              fillClassName: "qlFill",
              evenClassName: "qlEven",
              colorLabelClassName: "qlColorLabel",
              thinClassName: "qlThin",
              activeStrokeMitterClassName: "qlStrokeMitterActive",
              activeClassName: "__slate-toolbar-slateToolbarItem",
              activeStrokeClassName: "qlStrokeActive",
              activeFillClassName: "qlFillActive",
              activeThinClassName: "qlThinActive",
              activeEvenClassName: "qlEvenActive"
            })
          );
        };

        _this.renderMenu = function () {
          var value = _this.props.value;


          return value.isExpanded && value.isFocused && React.createElement(
            _container.ToolbarContainer,
            {
              position: position,
              innerRef: function innerRef(node) {
                return _this.toolbarContainerNode = node;
              }
            },
            React.createElement(
              "div",
              { style: { display: "block" } },
              icons.length && React.createElement(
                _container.Item,
                null,
                icons.map(_this.renderButton)
              )
            )
          );
        };

        return _this;
      }

      _createClass(Toolbar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          window.addEventListener("scroll", function () {
            return _this2.componentDidUpdate();
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;

          window.removeEventListener("scroll", function () {
            return _this3.componentDidUpdate();
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var value = this.props.value;

          var rect = (0, _getSelectionRange.getVisibleSelectionRect)();
          if (!rect || !this.toolbarContainerNode || !this.containerNode) {
            return;
          }

          if (value.blocks.find(function (block) {
            return disabledTypes.find(function (type) {
              return type === value.document.getParent(block.key).type;
            });
          }) || value.blocks.find(function (block) {
            return disabledTypes.find(function (type) {
              return type === block.type;
            });
          })) {
            this.toolbarContainerNode.style.display = "none";
            return;
          }

          this.toolbarContainerNode.style.display = "block";

          // $FlowFixMe
          var containerBound = this.containerNode.getBoundingClientRect();
          var containerBoundLeft = containerBound.left,
              containerBoundTop = containerBound.top;


          var left = rect.left + rect.width / 2 - containerBoundLeft - this.toolbarContainerNode.offsetWidth / 2;
          this.toolbarContainerNode.style.left = left + "px";

          if (position === "bottom") {
            var top = rect.top - containerBoundTop + this.toolbarContainerNode.offsetHeight;
            this.toolbarContainerNode.style.top = top + "px";
          } else if (position === "top") {
            var _top = rect.top - containerBoundTop - this.toolbarContainerNode.offsetHeight;
            this.toolbarContainerNode.style.top = _top + "px";
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;

          return React.createElement(
            "div",
            {
              style: { position: "relative" },
              ref: function ref(node) {
                return _this4.containerNode = node;
              }
            },
            this.renderMenu(),
            React.createElement(Editor, this.props)
          );
        }
      }]);

      return Toolbar;
    }(React.Component);

    return function (_React$Component2) {
      _inherits(SlateToolbarDecorator, _React$Component2);

      function SlateToolbarDecorator() {
        _classCallCheck(this, SlateToolbarDecorator);

        return _possibleConstructorReturn(this, (SlateToolbarDecorator.__proto__ || Object.getPrototypeOf(SlateToolbarDecorator)).apply(this, arguments));
      }

      _createClass(SlateToolbarDecorator, [{
        key: "render",
        value: function render() {
          var _this6 = this;

          return React.createElement(
            _reactWindowDetectDimensions2.default,
            null,
            function (_ref) {
              var windowWidth = _ref.windowWidth,
                  windowHeight = _ref.windowHeight;
              return React.createElement(Toolbar, _extends({}, _this6.props, {
                plugins: _this6.props.plugins || defaultPlugins,
                windowWidth: windowWidth,
                windowHeight: windowHeight
              }));
            }
          );
        }
      }]);

      return SlateToolbarDecorator;
    }(React.Component);
  };
};