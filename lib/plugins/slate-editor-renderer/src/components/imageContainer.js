"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _antd = require("antd");

var _trashO = require("react-icons/lib/fa/trash-o");

var _trashO2 = _interopRequireDefault(_trashO);

var _edit = require("react-icons/lib/fa/edit");

var _edit2 = _interopRequireDefault(_edit);

var _image = require("./image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageContainer = function (_React$Component) {
  _inherits(ImageContainer, _React$Component);

  function ImageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageContainer.__proto__ || Object.getPrototypeOf(ImageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.remove = function () {
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;

      editor.change(function (change) {
        return change.removeNodeByKey(node.key);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          node = _props.node,
          readOnly = _props.readOnly,
          isSelected = _props.isSelected,
          getSrc = _props.getSrc,
          edit = _props.edit,
          width = _props.width,
          height = _props.height;

      var src = getSrc(node);

      return React.createElement(
        "span",
        null,
        !isSelected || readOnly ? React.createElement(
          _image.ImageNodeInActive,
          { width: width, height: height },
          React.createElement("img", { src: src })
        ) : React.createElement(
          _image.ImageNodeActive,
          { width: width, height: height },
          React.createElement(
            _image.Toolbar,
            null,
            React.createElement(
              _image.ToolbarItem,
              null,
              React.createElement(
                _antd.Tooltip,
                { title: "\u5220\u9664" },
                React.createElement(_trashO2.default, {
                  onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                  },
                  onClick: this.remove
                })
              )
            ),
            React.createElement(
              _image.ToolbarItem,
              null,
              React.createElement(
                _antd.Tooltip,
                { title: "\u7F16\u8F91\u56FE\u7247\u5C3A\u5BF8" },
                React.createElement(_edit2.default, {
                  onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                  },
                  onClick: edit
                })
              )
            )
          ),
          React.createElement("img", { src: src })
        )
      );
    }
  }]);

  return ImageContainer;
}(React.Component);

exports.default = ImageContainer;