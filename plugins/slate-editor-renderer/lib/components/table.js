"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToolbarItem = exports.Toolbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  border: 2px solid #ef6942;\n"], ["\n  position: relative;\n  border: 2px solid #ef6942;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: -40px;\n  z-index: 100;\n"], ["\n  z-index: 1000;\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: -40px;\n  z-index: 100;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  color: #fff;\n  padding: 3px;\n  margin: 3px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n  font-size: 16px;\n  border-radius: 5px;\n  display: inline-flex;\n  cursor: pointer;\n\n  .__table-quill-class {\n    margin: 2px;\n  }\n\n  .__table-quill-fa-class {\n    margin: 3px;\n  }\n\n  .__table-quill-fill {\n    fill: #fff;\n  }\n\n  .__table-quill-transparent {\n    fill: #ccc;\n  }\n\n  .__table-quill-row-transparent {\n    fill: #151515;\n  }\n\n  .__table-quill-stroke {\n    stroke: #fff;\n  }\n"], ["\n  color: #fff;\n  padding: 3px;\n  margin: 3px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n  font-size: 16px;\n  border-radius: 5px;\n  display: inline-flex;\n  cursor: pointer;\n\n  .__table-quill-class {\n    margin: 2px;\n  }\n\n  .__table-quill-fa-class {\n    margin: 3px;\n  }\n\n  .__table-quill-fill {\n    fill: #fff;\n  }\n\n  .__table-quill-transparent {\n    fill: #ccc;\n  }\n\n  .__table-quill-row-transparent {\n    fill: #151515;\n  }\n\n  .__table-quill-stroke {\n    stroke: #fff;\n  }\n"]);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _antd = require("antd");

var _quillIcons = require("quill-icons");

var _quillIcons2 = _interopRequireDefault(_quillIcons);

var _trashO = require("react-icons/lib/fa/trash-o");

var _trashO2 = _interopRequireDefault(_trashO);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _slateEditTable = require("slate-edit-table");

var _slateEditTable2 = _interopRequireDefault(_slateEditTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableActiveContainer = _styledComponents2.default.div(_templateObject);

var Toolbar = exports.Toolbar = _styledComponents2.default.span(_templateObject2);

var ToolbarItem = exports.ToolbarItem = _styledComponents2.default.span(_templateObject3);

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.onRemove = function () {
      var change = _this.props.editor.change;

      change(_this.editTable.changes.removeTable);
    };

    _this.onRemoveColumn = function () {
      var change = _this.props.editor.change;

      change(_this.editTable.changes.removeColumn);
    };

    _this.onRemoveRow = function () {
      var change = _this.props.editor.change;

      change(_this.editTable.changes.removeRow);
    };

    _this.onInsertColumn = function () {
      var change = _this.props.editor.change;

      change(_this.editTable.changes.insertColumn);
    };

    _this.onInsertRow = function () {
      var change = _this.props.editor.change;

      change(_this.editTable.changes.insertRow);
    };

    _this.editTable = (0, _slateEditTable2.default)(props.tableOptions);
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          children = _props.children,
          isSelected = _props.isSelected,
          readOnly = _props.readOnly;


      if (!isSelected || readOnly) {
        return React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            attributes,
            children
          )
        );
      }

      return React.createElement(
        TableActiveContainer,
        null,
        React.createElement(
          Toolbar,
          null,
          React.createElement(
            ToolbarItem,
            null,
            React.createElement(
              _antd.Tooltip,
              { title: "\u5220\u9664\u4E00\u5217" },
              React.createElement(_quillIcons2.default.TableDeleteColumns, {
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                onClick: this.onRemoveColumn,
                className: "__table-quill-class",
                fillClassName: "__table-quill-fill",
                transparentClassName: "__table-quill-transparent"
              })
            )
          ),
          React.createElement(
            ToolbarItem,
            null,
            React.createElement(
              _antd.Tooltip,
              { title: "\u5220\u9664\u4E00\u884C" },
              React.createElement(_quillIcons2.default.TableDeleteRows, {
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                onClick: this.onRemoveRow,
                className: "__table-quill-class",
                strokeClassName: "__table-quill-stroke",
                fillClassName: "__table-quill-fill",
                transparentClassName: "__table-quill-row-transparent"
              })
            )
          ),
          React.createElement(
            ToolbarItem,
            null,
            React.createElement(
              _antd.Tooltip,
              { title: "\u63D2\u5165\u4E00\u5217" },
              React.createElement(_quillIcons2.default.TableInsertColumns, {
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                onClick: this.onInsertColumn,
                className: "__table-quill-class",
                fillClassName: "__table-quill-fill",
                transparentClassName: "__table-quill-transparent"
              })
            )
          ),
          React.createElement(
            ToolbarItem,
            null,
            React.createElement(
              _antd.Tooltip,
              { title: "\u63D2\u5165\u4E00\u884C" },
              React.createElement(_quillIcons2.default.TableInsertRows, {
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                onClick: this.onInsertRow,
                className: "__table-quill-class",
                strokeClassName: "__table-quill-stroke",
                fillClassName: "__table-quill-fill",
                transparentClassName: "__table-quill-row-transparent"
              })
            )
          ),
          React.createElement(
            ToolbarItem,
            null,
            React.createElement(
              _antd.Tooltip,
              { title: "\u5220\u9664\u8868\u683C" },
              React.createElement(_trashO2.default, {
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                onClick: this.onRemove,
                className: "__table-quill-fa-class"
              })
            )
          )
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            attributes,
            children
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

exports.default = Table;