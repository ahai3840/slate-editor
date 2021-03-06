"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  width: 400px;\n  height: 300px;\n  margin-right: auto;\n  margin-left: auto;\n"], ["\n  width: 400px;\n  height: 300px;\n  margin-right: auto;\n  margin-left: auto;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin: 10px;\n"], ["\n  margin: 10px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIntl = require("react-intl");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dragger = _antd.Upload.Dragger;

var FileUploadContainer = _styledComponents2.default.div(_templateObject);

var FileUploadContent = _styledComponents2.default.div(_templateObject2);

var UploadImage = function (_React$Component) {
  _inherits(UploadImage, _React$Component);

  function UploadImage(props) {
    _classCallCheck(this, UploadImage);

    var _this = _possibleConstructorReturn(this, (UploadImage.__proto__ || Object.getPrototypeOf(UploadImage)).call(this, props));

    _this.uploadFile = _this.uploadFile.bind(_this);
    _this.finishSuccessEdit = _this.finishSuccessEdit.bind(_this);
    _this.state = {
      fileList: []
    };
    return _this;
  }

  _createClass(UploadImage, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.fileList.length > 0 && nextState.fileList === 0) {
        return false;
      }

      return true;
    }
  }, {
    key: "finishSuccessEdit",
    value: function finishSuccessEdit(e) {
      var _props = this.props,
          onChange = _props.onChange,
          finishEdit = _props.finishEdit;

      var urls = this.state.fileList.map(function (file) {
        return file.url;
      });

      onChange(urls);
      this.setState({
        fileList: []
      }, finishEdit(e));
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(info) {
      var fileList = info.fileList;
      // see issue: https://github.com/ant-design/ant-design/issues/2423#issuecomment-233523579
      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-3);

      // 2. read from response and show file link
      fileList = fileList.map(function (file) {
        if (file.response && file.response.data) {
          // Component will show file.url as link
          file.url = file.response.data.link;
        }
        return file;
      });

      this.setState({
        fileList: fileList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          multiple = _props2.multiple,
          finishEdit = _props2.finishEdit,
          serviceConfig = _props2.serviceConfig;
      var fileList = this.state.fileList;

      var content = void 0;
      var finish = void 0;
      var disabled = false;
      var props = _extends({
        multiple: multiple
      }, serviceConfig, {
        onChange: this.uploadFile
      });

      if (fileList && fileList.length) {
        content = fileList.map(function (file) {
          var percent = file.percent;
          var info = void 0;
          disabled = true;

          if (file.status === "error") {
            info = _react2.default.createElement(
              "div",
              { key: file.name },
              _react2.default.createElement(_antd.Alert, {
                message: _react2.default.createElement(_reactIntl.FormattedMessage, {
                  id: "imgupload.upload.error.info"
                }),
                type: "error",
                showIcon: true
              }),
              _react2.default.createElement(
                _antd.Button,
                { type: "primary", onClick: finishEdit },
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.btn.confirm" })
              )
            );
          } else if (file.status === "uploading") {
            info = _react2.default.createElement(
              "div",
              { key: file.name },
              _react2.default.createElement(_antd.Alert, {
                message: _react2.default.createElement(_reactIntl.FormattedMessage, {
                  id: "imgupload.upload.uploading.info",
                  values: { filename: file.name }
                }),
                type: "info",
                showIcon: true
              }),
              _react2.default.createElement(_antd.Progress, { percent: Math.round(percent) })
            );
          } else if (file.status === "done") {
            info = _react2.default.createElement(
              "div",
              { key: file.name },
              _react2.default.createElement(_antd.Alert, {
                message: _react2.default.createElement(_reactIntl.FormattedMessage, {
                  id: "imgupload.upload.success.info",
                  values: { filename: file.name }
                }),
                type: "success",
                showIcon: true
              })
            );
          }

          return info;
        });

        if (fileList.every(function (file) {
          return file.status === "done";
        })) {
          finish = _react2.default.createElement(
            _antd.Button,
            {
              type: "primary",
              onClick: this.finishSuccessEdit,
              style: { margin: "10px" }
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.upload.success" })
          );
        }
      } else {
        content = _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(_antd.Icon, { type: "inbox", style: { fontSize: 70 } })
          ),
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: "imgupload.upload.info" })
        );
      }
      return _react2.default.createElement(
        _antd.Row,
        null,
        _react2.default.createElement(
          FileUploadContainer,
          null,
          _react2.default.createElement(
            Dragger,
            _extends({}, props, { fileList: fileList, disabled: disabled }),
            _react2.default.createElement(
              FileUploadContent,
              null,
              content,
              finish
            )
          )
        )
      );
    }
  }]);

  return UploadImage;
}(_react2.default.Component);

exports.default = UploadImage;