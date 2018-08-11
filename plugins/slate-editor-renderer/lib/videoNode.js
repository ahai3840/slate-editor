'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (type, options) {
  var NodeComponent = function NodeComponent(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return React.createElement(VideoNode, _extends({}, props, options, { type: type }));
  };
  return NodeComponent;
};

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _antd = require('antd');

var _trashO = require('react-icons/lib/fa/trash-o');

var _trashO2 = _interopRequireDefault(_trashO);

var _edit = require('react-icons/lib/fa/edit');

var _edit2 = _interopRequireDefault(_edit);

var _externalLink = require('react-icons/lib/fa/external-link');

var _externalLink2 = _interopRequireDefault(_externalLink);

var _videoModal = require('./components/videoModal');

var _videoModal2 = _interopRequireDefault(_videoModal);

var _image = require('./components/image');

require('react-resizable/css/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import {Resizable} from 'react-resizable';


var DEFAULT = exports.DEFAULT = {
  youtube: 'youtube',
  dailymotion: 'dailymotion',
  youku: 'youku',
  vimeo: 'vimeo'
};

var VideoNode = (_temp = _class = function (_React$Component) {
  _inherits(VideoNode, _React$Component);

  function VideoNode(props) {
    _classCallCheck(this, VideoNode);

    var _this = _possibleConstructorReturn(this, (VideoNode.__proto__ || Object.getPrototypeOf(VideoNode)).call(this, props));

    _this.remove = function () {
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;

      editor.change(function (change) {
        return change.removeNodeByKey(node.key);
      });
    };

    _this.edit = function (e) {
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

    _this.state = {
      width: null,
      height: null,
      isShow: false
    };
    return _this;
  }

  _createClass(VideoNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          node = _props.node,
          type = _props.type,
          attributes = _props.attributes,
          children = _props.children,
          editor = _props.editor,
          readOnly = _props.readOnly,
          isSelected = _props.isSelected,
          getId = _props.getId,
          getWidth = _props.getWidth,
          getHeight = _props.getHeight,
          youtubeType = _props.youtubeType,
          dailymotionType = _props.dailymotionType,
          youkuType = _props.youkuType,
          vimeoType = _props.vimeoType,
          idKey = _props.idKey;

      var link = void 0;
      var id = getId(node);
      var width = this.state.width || getWidth(node) || 560;
      var height = this.state.height || getHeight(node) || 315;

      if (type === 'youtube') {
        link = 'https://www.youtube.com/embed/' + id;
      } else if (type === 'dailymotion') {
        link = 'https://www.dailymotion.com/embed/video/' + id;
      } else if (type === 'vimeo') {
        link = 'https://player.vimeo.com/video/' + id;
      } else if (type === 'youku') {
        link = 'https://player.youku.com/embed/' + id;
      }

      return React.createElement(
        'span',
        attributes,
        !isSelected || readOnly ? React.createElement(
          _image.ImageNodeInActive,
          {
            width: width,
            height: height },
          React.createElement('iframe', {
            style: { pointerEvents: 'none' },
            src: link })
        ) : React.createElement(
          _image.ImageNodeActive,
          {
            width: width,
            height: height },
          React.createElement(
            _image.Toolbar,
            null,
            React.createElement(
              _image.ToolbarItem,
              null,
              React.createElement(
                _antd.Tooltip,
                { title: 'Open in new window' },
                React.createElement(_externalLink2.default, {
                  onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                  },
                  onClick: function onClick() {
                    var win = window.open(link, '_blank');
                    win.focus();
                  } })
              )
            ),
            React.createElement(
              _image.ToolbarItem,
              null,
              React.createElement(
                _antd.Tooltip,
                { title: 'Edit' },
                React.createElement(_edit2.default, {
                  onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                  },
                  onClick: this.edit })
              )
            ),
            React.createElement(
              _image.ToolbarItem,
              null,
              React.createElement(
                _antd.Tooltip,
                { title: 'Remove' },
                React.createElement(_trashO2.default, {
                  onMouseDown: function onMouseDown(e) {
                    return e.preventDefault();
                  },
                  onClick: this.remove })
              )
            )
          ),
          React.createElement('iframe', {
            style: { pointerEvents: 'none' },
            src: link })
        ),
        React.createElement(_videoModal2.default, {
          youkuType: youkuType,
          youtubeType: youtubeType,
          vimeoType: vimeoType,
          dailymotionType: dailymotionType,
          idKey: idKey,
          onChange: editor.onChange,
          change: editor.state.value.change(),
          initialValue: link,
          node: node,
          width: width,
          height: height,
          hideModal: this.hideModal,
          isShow: this.state.isShow }),
        children
      );
    }
  }]);

  return VideoNode;
}(React.Component), _class.defaultProps = {
  youtubeType: DEFAULT.youtube,
  dailymotionType: DEFAULT.dailymotion,
  youkuType: DEFAULT.youku,
  vimeoType: DEFAULT.vimeo,
  idKey: 'id'
}, _temp);