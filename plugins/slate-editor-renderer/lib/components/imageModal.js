"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _slateHelperInlineAdddata = require("@canner/slate-helper-inline-adddata");

var _slateHelperInlineAdddata2 = _interopRequireDefault(_slateHelperInlineAdddata);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var ImageModal = (_dec = _antd.Form.create(), _dec(_class = function (_React$Component) {
  _inherits(ImageModal, _React$Component);

  function ImageModal(props) {
    _classCallCheck(this, ImageModal);

    var _this = _possibleConstructorReturn(this, (ImageModal.__proto__ || Object.getPrototypeOf(ImageModal)).call(this, props));

    _this.handleCancel = function () {
      _this.props.form.resetFields();
      _this.props.hideModal();
    };

    _this.handleChange = function (key) {
      return function (value) {
        _this.setState(_defineProperty({}, key, value));
        var _this$state = _this.state,
            restrict = _this$state.restrict,
            ratio = _this$state.ratio,
            width = _this$state.width,
            height = _this$state.height;

        if (key === 'width') {
          _this.props.form.setFieldsValue({
            width: value,
            height: restrict ? value / ratio : height
          });
        } else {
          _this.props.form.setFieldsValue({
            width: restrict ? value * ratio : height,
            height: value
          });
        }
      };
    };

    _this.handleRestrict = function (e) {
      _this.setState({
        restrict: e.target.checked
      });
    };

    _this.handleOk = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          change = _this$props.change,
          hideModal = _this$props.hideModal,
          form = _this$props.form,
          target = _this$props.target;

      change.select(target);

      form.validateFields(function (err, values) {
        if (!err) {
          var _width = values.width,
              _height = values.height;

          onChange(function (change) {
            change.call(_slateHelperInlineAdddata2.default, {
              data: {
                width: Math.round(_width),
                height: Math.round(_height)
              }
            });
          });
          form.resetFields();
          hideModal();
        }
      });
    };

    var originHeight = _this.props.height;
    var originWidth = _this.props.width;
    _this.state = {
      restrict: true,
      originWidth: originWidth,
      originHeight: originHeight,
      width: _this.props.width,
      height: _this.props.height,
      ratio: originHeight !== 0 ? originWidth / originHeight : 1
    };
    return _this;
  }

  _createClass(ImageModal, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var isShow = this.props.isShow;
      var _state = this.state,
          restrict = _state.restrict,
          width = _state.width,
          height = _state.height;

      return React.createElement(
        _antd.Modal,
        {
          visible: isShow,
          zIndex: 10000,
          title: "\u8BBE\u7F6E\u56FE\u7247\u5C3A\u5BF8",
          onCancel: this.handleCancel,
          footer: [React.createElement(
            _antd.Button,
            {
              key: "back",
              type: "ghost",
              size: "large",
              onClick: this.handleCancel
            },
            "\u53D6\u6D88"
          ), React.createElement(
            _antd.Button,
            {
              key: "submit",
              type: "primary",
              size: "large",
              onClick: this.handleOk
            },
            "\u786E\u5B9A"
          )]
        },
        React.createElement(
          _antd.Form,
          { horizontal: "true" },
          React.createElement(
            FormItem,
            null,
            React.createElement(
              _antd.Checkbox,
              { onChange: this.handleRestrict, checked: restrict },
              "\u7EA6\u675F\u6BD4\u4F8B"
            )
          ),
          React.createElement(
            FormItem,
            { label: "\u5BBD\u5EA6:", hasFeedback: true },
            getFieldDecorator("width", {
              rules: [{
                required: true,
                message: "请输入图片宽度"
              }],
              initialValue: width
            })(React.createElement(_antd.InputNumber, { onChange: this.handleChange('width'), onClick: function onClick(e) {
                return e.preventDefault();
              } }))
          ),
          React.createElement(
            FormItem,
            { label: "\u9AD8\u5EA6:", hasFeedback: true },
            getFieldDecorator("height", {
              rules: [{
                required: true,
                message: "请输入图片高度"
              }],
              initialValue: height
            })(React.createElement(_antd.InputNumber, { onChange: this.handleChange('height'), onClick: function onClick(e) {
                return e.preventDefault();
              } }))
          )
        )
      );
    }
  }]);

  return ImageModal;
}(React.Component)) || _class);
exports.default = ImageModal;