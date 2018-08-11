"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _jsVideoUrlParser = require("js-video-url-parser");

var _jsVideoUrlParser2 = _interopRequireDefault(_jsVideoUrlParser);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var VideoModal = (_dec = _antd.Form.create(), _dec(_class = function (_React$Component) {
  _inherits(VideoModal, _React$Component);

  function VideoModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoModal.__proto__ || Object.getPrototypeOf(VideoModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function () {
      _this.props.form.resetFields();
      _this.props.hideModal();
    }, _this.handleOk = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          change = _this$props.change,
          hideModal = _this$props.hideModal,
          form = _this$props.form,
          initialValue = _this$props.initialValue,
          node = _this$props.node,
          width = _this$props.width,
          height = _this$props.height,
          youtubeType = _this$props.youtubeType,
          dailymotionType = _this$props.dailymotionType,
          youkuType = _this$props.youkuType,
          vimeoType = _this$props.vimeoType,
          idKey = _this$props.idKey;


      form.validateFields(function (err, values) {
        if (!err) {
          var href = values.href;
          if (href) {
            var videoObj = _jsVideoUrlParser2.default.parse(href);
            var slateObj = {};

            if (videoObj && videoObj.provider === "youtube") {
              slateObj = {
                type: youtubeType,
                isVoid: true,
                data: _defineProperty({}, idKey, videoObj.id)
              };
            } else if (videoObj && videoObj.provider === "dailymotion") {
              slateObj = {
                type: dailymotionType,
                isVoid: true,
                data: _defineProperty({}, idKey, videoObj.id)
              };
            } else if (videoObj && videoObj.provider === "vimeo") {
              slateObj = {
                type: youkuType,
                isVoid: true,
                data: _defineProperty({}, idKey, videoObj.id)
              };
            } else if (videoObj && videoObj.provider === "youku") {
              slateObj = {
                type: vimeoType,
                isVoid: true,
                data: _defineProperty({}, idKey, videoObj.id)
              };
            }

            if (slateObj && slateObj.data) {
              if (_typeof(slateObj.data) === "object" && width) {
                slateObj.data.width = width;
              }

              if (_typeof(slateObj.data) === "object" && height) {
                slateObj.data.height = height;
              }
            }

            if (initialValue) {
              // update link
              var newChange = change.removeNodeByKey(node.key).insertInline(slateObj);

              onChange(newChange);
            } else {
              onChange(change.insertInline(slateObj).collapseToStartOfNextText().focus());
            }
            form.resetFields();
          }

          hideModal();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoModal, [{
    key: "checkSource",
    value: function checkSource(rule, value, callback) {
      try {
        var videoObj = _jsVideoUrlParser2.default.parse(value);

        if (videoObj && videoObj.provider === "youtube" || videoObj.provider === "dailymotion" || videoObj.provider === "vimeo" || videoObj.provider === "youku") {
          callback();
          return;
        }

        return callback("URL not support");
      } catch (e) {
        return callback("URL not support");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _props = this.props,
          isShow = _props.isShow,
          initialValue = _props.initialValue;

      return React.createElement(
        _antd.Modal,
        {
          visible: isShow,
          title: "Add Video",
          onCancel: this.handleCancel,
          footer: [React.createElement(
            _antd.Button,
            {
              key: "back",
              type: "ghost",
              size: "large",
              onClick: this.handleCancel
            },
            "Cancel"
          ), React.createElement(
            _antd.Button,
            {
              key: "submit",
              type: "primary",
              size: "large",
              onClick: this.handleOk
            },
            "Ok"
          )]
        },
        React.createElement(
          _antd.Form,
          { horizontal: "true" },
          React.createElement(
            FormItem,
            {
              label: "Enter video URL (support Vimeo, Youtube, Dailymotion, Youku):",
              hasFeedback: true
            },
            getFieldDecorator("href", {
              rules: [{
                type: "url",
                message: "The input is not valid url!"
              }, {
                required: true,
                message: "Please input your url"
              }, {
                validator: this.checkSource
              }],
              initialValue: initialValue
            })(React.createElement(_antd.Input, { onClick: function onClick(e) {
                return e.preventDefault();
              } }))
          )
        )
      );
    }
  }]);

  return VideoModal;
}(React.Component)) || _class);
exports.default = VideoModal;