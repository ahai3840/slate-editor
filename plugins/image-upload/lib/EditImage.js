"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _templateObject = _taggedTemplateLiteral(["\n  padding: 30px;\n"], ["\n  padding: 30px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _reactIntl = require("react-intl");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _UploadImage = require("./UploadImage");

var _UploadImage2 = _interopRequireDefault(_UploadImage);

var _DefaultImage = require("./DefaultImage");

var _DefaultImage2 = _interopRequireDefault(_DefaultImage);

var _UrlImage = require("./UrlImage");

var _UrlImage2 = _interopRequireDefault(_UrlImage);

var _en = require("./locale/en");

var _en2 = _interopRequireDefault(_en);

var _en3 = require("react-intl/locale-data/en");

var _en4 = _interopRequireDefault(_en3);

var _zh = require("react-intl/locale-data/zh");

var _zh2 = _interopRequireDefault(_zh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TabPane = _antd.Tabs.TabPane;

(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en4.default), _toConsumableArray(_zh2.default)));

var Container = _styledComponents2.default.div(_templateObject);

var EditImage = (_temp2 = _class = function (_Component) {
  _inherits(EditImage, _Component);

  function EditImage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditImage.__proto__ || Object.getPrototypeOf(EditImage)).call.apply(_ref, [this].concat(args))), _this), _this.finishEdit = function (e) {
      var closeEditPopup = _this.props.closeEditPopup;

      e.preventDefault();
      e.stopPropagation();
      if (closeEditPopup) {
        closeEditPopup();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditImage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          locale = _props.locale,
          localeMessages = _props.localeMessages,
          editPopup = _props.editPopup,
          multiple = _props.multiple,
          onChange = _props.onChange,
          closeEditPopup = _props.closeEditPopup,
          serviceConfig = _props.serviceConfig,
          galleryConfig = _props.galleryConfig;

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        {
          locale: locale,
          defaultLocale: "en",
          messages: localeMessages },
        _react2.default.createElement(
          _antd.Modal,
          {
            visible: editPopup,
            closable: true,
            width: 700,
            onCancel: closeEditPopup,
            title: _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.title" }),
            footer: null,
            maskClosable: true
          },
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _antd.Tabs,
              { type: "card" },
              _react2.default.createElement(
                TabPane,
                { tab: _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.tab1.title" }), key: "1" },
                _react2.default.createElement(_UploadImage2.default, {
                  multiple: multiple,
                  serviceConfig: serviceConfig,
                  onChange: onChange,
                  finishEdit: this.finishEdit
                })
              ),
              galleryConfig !== null && _react2.default.createElement(
                TabPane,
                { tab: _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.tab2.title" }), key: "2" },
                _react2.default.createElement(_DefaultImage2.default, {
                  galleryConfig: galleryConfig,
                  onChange: onChange
                })
              ),
              _react2.default.createElement(
                TabPane,
                { tab: _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.tab3.title" }), key: "3" },
                _react2.default.createElement(_UrlImage2.default, { onChange: onChange, closeEditPopup: closeEditPopup })
              )
            )
          )
        )
      );
    }
  }]);

  return EditImage;
}(_react.Component), _class.defaultProps = {
  locale: 'en',
  multiple: false,
  localeMessages: _en2.default,
  onChange: function onChange(arg) {
    return arg;
  },
  editProps: false,
  galleryConfig: null
}, _temp2);
exports.default = EditImage;