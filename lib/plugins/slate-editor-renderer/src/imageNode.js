'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var NodeComponent = function NodeComponent(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return React.createElement(ImageNode, _extends({}, props, options));
  };
  return NodeComponent;
};

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _slateReact = require('slate-react');

var _antd = require('antd');

var _reactLoadingImage = require('react-loading-image');

var _reactLoadingImage2 = _interopRequireDefault(_reactLoadingImage);

var _image = require('./components/image');

var _imageModal = require('./components/imageModal');

var _imageModal2 = _interopRequireDefault(_imageModal);

var _imageContainer = require('./components/imageContainer');

var _imageContainer2 = _interopRequireDefault(_imageContainer);

require('react-resizable/css/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ImageNode = function (_React$Component) {
  _inherits(ImageNode, _React$Component);

  function ImageNode(props) {
    _classCallCheck(this, ImageNode);

    var _this = _possibleConstructorReturn(this, (ImageNode.__proto__ || Object.getPrototypeOf(ImageNode)).call(this, props));

    _this.edit = function (e) {
      var editor = _this.props.editor;

      e.preventDefault();
      _this.target = (0, _slateReact.getEventRange)(e, editor.state.value);
      _this.setState({
        isShow: true
      });
    };

    _this.hideModal = function () {
      _this.setState({
        isShow: false
      });
    };

    _this.state = {
      isShow: false
    };
    return _this;
  }

  _createClass(ImageNode, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          node = _props.node,
          getSrc = _props.getSrc,
          getWidth = _props.getWidth,
          getHeight = _props.getHeight,
          attributes = _props.attributes,
          children = _props.children,
          editor = _props.editor;

      var src = getSrc(node);
      var nodeWidth = getWidth(node);
      var nodeHeight = getHeight(node);
      var that = this;

      return React.createElement(
        'span',
        attributes,
        React.createElement(_reactLoadingImage2.default, {
          src: src,
          image: function image(imgProps) {
            var ratio = void 0;
            var width = nodeWidth || imgProps.width;
            var height = nodeHeight || imgProps.height;

            if (width > height && width > 700) {
              ratio = width / 700;
            } else if (height > 500) {
              ratio = height / 500;
            }

            width = Math.round(ratio ? width / ratio : width);
            height = Math.round(ratio ? height / ratio : height);

            return React.createElement(
              React.Fragment,
              null,
              React.createElement(_imageContainer2.default, _extends({}, that.props, {
                src: imgProps.src,
                width: width,
                height: height,
                edit: that.edit
              })),
              React.createElement(_imageModal2.default, {
                change: editor.state.value.change(),
                onChange: editor.change,
                target: _this2.target,
                width: width,
                height: height,
                hideModal: that.hideModal,
                isShow: that.state.isShow
              })
            );
          } // change to your customized component
          , loading: function loading() {
            return React.createElement(_antd.Icon, { type: 'loading', style: { fontSize: 24 }, spin: true });
          },
          error: function error() {
            return React.createElement(
              _image.Alert,
              null,
              '\u56FE\u7247\u52A0\u8F7D\u5931\u8D25'
            );
          }
        }),
        children
      );
    }
  }]);

  return ImageNode;
}(React.Component);