"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0 auto;\n  height: 200px;\n  width: 100%;\n  cursor: pointer;\n"], ["\n  background-image: url(", ");\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0 auto;\n  height: 200px;\n  width: 100%;\n  cursor: pointer;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabPane = _antd.Tabs.TabPane;

var DefaultImage = _styledComponents2.default.div(_templateObject, function (props) {
  return props.url;
});

var Gallery = (_temp = _class = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.generateContent = _this.generateContent.bind(_this);
    _this.generateGallery = _this.generateGallery.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: "handleClick",
    value: function handleClick(data) {
      this.props.onChange([data.url]);
    }
  }, {
    key: "generateContent",
    value: function generateContent(gallery) {
      var that = this;
      var tabs = [];
      gallery.forEach(function (item, key) {
        tabs.push(_react2.default.createElement(
          TabPane,
          { key: key, tab: item.name },
          that.generateGallery(item.gallery)
        ));
      });

      return tabs;
    }
  }, {
    key: "generateGallery",
    value: function generateGallery(gallery) {
      var _this2 = this;

      return _react2.default.createElement(
        _antd.Row,
        null,
        gallery.map(function (datum, i) {
          return _react2.default.createElement(
            _antd.Col,
            {
              style: { padding: "5px" },
              span: 8,
              key: i,
              onClick: function onClick() {
                return _this2.handleClick(datum);
              }
            },
            _react2.default.createElement(DefaultImage, { url: datum.url })
          );
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var galleryConfig = this.props.galleryConfig;


      return _react2.default.createElement(
        _antd.Tabs,
        { tabPosition: "top" },
        this.generateContent(galleryConfig)
      );
    }
  }]);

  return Gallery;
}(_react.Component), _class.defaultProps = {
  galleryConfig: _config2.default
}, _temp);
exports.default = Gallery;