'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  background: transparent;\n  color: #222;\n  cursor: pointer;\n  -webkit-transition: background 0.2s ease 0s;\n  border-bottom: 0.5px solid #ebebeb;\n\n  &:hover {\n    background: #ebebeb;\n  }\n'], ['\n  display: inline-block;\n  background: transparent;\n  color: #222;\n  cursor: pointer;\n  -webkit-transition: background 0.2s ease 0s;\n  border-bottom: 0.5px solid #ebebeb;\n\n  &:hover {\n    background: #ebebeb;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 35px;\n  width: 1px;\n  margin: 2px 0;\n  background: #ebebeb;\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  height: 35px;\n  width: 1px;\n  margin: 2px 0;\n  background: #ebebeb;\n  display: inline-block;\n  vertical-align: top;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _item = require('./components/item');

var _fullScreen = require('./components/fullScreen');

var _fullScreen2 = _interopRequireDefault(_fullScreen);

var _index = require('./plugins/slate-icon-align/src/index');

var _index2 = require('./plugins/slate-icon-table/src/index');

var _index3 = _interopRequireDefault(_index2);

var _index4 = require('./plugins/slate-icon-header/src/index');

var _index5 = require('./plugins/slate-icon-image/src/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./plugins/slate-icon-list/src/index');

var _index8 = require('./plugins/slate-icon-undo/src/index');

var _index9 = _interopRequireDefault(_index8);

var _index10 = require('./plugins/slate-icon-redo/src/index');

var _index11 = _interopRequireDefault(_index10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconContainer = _styledComponents2.default.div(_templateObject);

var Seperator = _styledComponents2.default.div(_templateObject2);

var Toolbar = function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          goFull = _props.goFull,
          isFull = _props.isFull,
          serviceConfig = _props.serviceConfig,
          galleryConfig = _props.galleryConfig,
          menuToolbarOption = _props.menuToolbarOption;


      var options = menuToolbarOption || [{ type: _index9.default, title: "撤销" }, { type: _index11.default, title: "重做" }, 'seperator', { type: _index4.Header1, title: "标题一" }, { type: _index4.Header2, title: "标题二" }, { type: _index4.Header3, title: "标题三" }, 'seperator', { type: _index.AlignLeft, title: "居左t" }, { type: _index.AlignCenter, title: "居中" }, { type: _index.AlignRight, title: "居右" }, 'seperator', { type: _index7.OlList, title: "编号列表" }, { type: _index7.UlList, title: "项目符号列表" }, 'seperator', { type: _index3.default, title: "表格" }];

      return React.createElement(
        _item.Container,
        null,
        options.map(function (option, i) {
          var Type = typeof option === "string" ? option : option.type || option;
          var title = option.title;

          if (Type === 'seperator') return React.createElement(Seperator, { key: i });
          if (Type === 'fullScreen') {
            return React.createElement(
              IconContainer,
              {
                key: i,
                title: title },
              React.createElement(_fullScreen2.default, { className: '__canner-editor_topToolbarItem', goFull: goFull, isFull: isFull })
            );
          }

          // special plugin
          if (Type === 'image') {
            Type = _index6.default;
          }

          return React.createElement(
            IconContainer,
            {
              key: i,
              title: title },
            React.createElement(Type, {
              change: value.change(),
              onChange: onChange,
              className: '__canner-editor_topToolbarItem',
              disableClassName: '__canner-editor_topToolbarItemDisabled',
              strokeClassName: 'qlStroke',
              serviceConfig: Type === _index6.default && serviceConfig,
              galleryConfig: Type === _index6.default && galleryConfig,
              strokeMitterClassName: 'qlStrokeMitter',
              fillClassName: 'qlFill',
              evenClassName: 'qlEven',
              colorLabelClassName: 'qlColorLabel',
              thinClassName: 'qlThin',
              activeStrokeMitterClassName: 'qlStrokeMitterActive',
              activeClassName: '__canner-editor_topToolbarItem __canner-editor_topToolbarItemActive',
              activeStrokeClassName: 'qlStrokeActive',
              activeFillClassName: 'qlFillActive',
              activeThinClassName: 'qlThinActive',
              activeEvenClassName: 'qlEvenActive'
            })
          );
        })
      );
    }
  }]);

  return Toolbar;
}(React.Component);

exports.default = Toolbar;