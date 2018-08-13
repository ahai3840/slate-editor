'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImagePlugin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _src = require('../../slate-icon-shared/src');

var _src2 = _interopRequireDefault(_src);

var _index = require('../../image-upload/src/index');

var _index2 = _interopRequireDefault(_index);

var _inlines = require('../../slate-constant/src/inlines');

var _imageNode = require('../../slate-editor-renderer/src/imageNode');

var _imageNode2 = _interopRequireDefault(_imageNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagePlugin = exports.ImagePlugin = function ImagePlugin(opt) {
  var options = Object.assign({
    type: _inlines.IMAGE,
    getSrc: function getSrc(node) {
      return node.data.get('src');
    },
    getWidth: function getWidth(node) {
      return node.data.get('width');
    },
    getHeight: function getHeight(node) {
      return node.data.get('height');
    },
    getMaxWidth: function getMaxWidth(node) {
      return node.data.get('maxWidth');
    },
    getAlign: function getAlign(node) {
      return node.data.get('align');
    }
  }, opt);

  return {
    renderNode: function renderNode(props) {
      if (props.node.type === options.type) return (0, _imageNode2.default)(options)(props);
    }
  };
};

var ImageInline = (_temp = _class = function (_React$Component) {
  _inherits(ImageInline, _React$Component);

  function ImageInline(props) {
    _classCallCheck(this, ImageInline);

    var _this = _possibleConstructorReturn(this, (ImageInline.__proto__ || Object.getPrototypeOf(ImageInline)).call(this, props));

    _this.onClick = function (e) {
      e.preventDefault();
      _this.setState({
        isShow: true
      });
    };

    _this.hideModal = function () {
      _this.setState({
        isShow: false
      });
    };

    _this.onChange = function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          change = _this$props.change,
          imageSrcKey = _this$props.imageSrcKey,
          imageHeightKey = _this$props.imageHeightKey,
          imageWidthKey = _this$props.imageWidthKey;

      var that = _this;
      var image = new Image();

      image.onload = function () {
        var _data;

        var height = image.height;
        var width = image.width;
        var ratio = void 0;

        if (width > 500) {
          ratio = width / 500;
        }

        onChange(change.insertInline({
          type: 'image',
          isVoid: true,
          data: (_data = {}, _defineProperty(_data, imageSrcKey, value), _defineProperty(_data, imageHeightKey, ratio ? height / ratio : height), _defineProperty(_data, imageWidthKey, ratio ? width / ratio : width), _data)
        }).collapseToStartOfNextText().focus());

        that.hideModal();
      };

      image.src = value[0];
    };

    _this.state = {
      isShow: false
    };

    _this.typeName = _this.props.type || _inlines.IMAGE;
    return _this;
  }

  _createClass(ImageInline, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          serviceConfig = _props.serviceConfig,
          galleryConfig = _props.galleryConfig,
          multiple = _props.multiple,
          rest = _objectWithoutProperties(_props, ['icon', 'serviceConfig', 'galleryConfig', 'multiple']);

      var onClick = function onClick(e) {
        return _this2.onClick(e);
      };

      return React.createElement(
        'div',
        { style: { display: 'inline-block' } },
        React.createElement(_src2.default, _extends({
          type: this.typeName,
          icon: icon || 'Image',
          onClick: onClick,
          isActive: false
        }, rest)),
        React.createElement(_index2.default, {
          serviceConfig: serviceConfig,
          galleryConfig: galleryConfig,
          multiple: multiple,
          onChange: this.onChange,
          closeEditPopup: this.hideModal,
          editPopup: this.state.isShow })
      );
    }
  }]);

  return ImageInline;
}(React.Component), _class.defaultProps = {
  imageSrcKey: 'src',
  imageHeightKey: 'height',
  imageWidthKey: 'width'
}, _temp);
exports.default = ImageInline;