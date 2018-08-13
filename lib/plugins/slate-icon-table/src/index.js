'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TablePlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _createTablePicker = require('create-table-picker');

var _createTablePicker2 = _interopRequireDefault(_createTablePicker);

var _index = require('../../slate-icon-shared/src/index');

var _index2 = _interopRequireDefault(_index);

var _blocks = require('../../slate-constant/src/blocks');

var _slateEditTable = require('slate-edit-table');

var _slateEditTable2 = _interopRequireDefault(_slateEditTable);

var _tableNode = require('../../slate-editor-renderer/src/tableNode');

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TablePlugin = exports.TablePlugin = function TablePlugin(opt) {
  var options = Object.assign(_extends({
    typeTable: _blocks.TABLE,
    typeRow: _blocks.TABLE_ROW,
    typeCell: _blocks.TABLE_CELL
  }, _createTablePicker.nodeAttrs), opt);

  return {
    renderNode: function renderNode(props) {
      if (props.node.type === options.typeTable) return (0, _tableNode.tableNode)(options)(props);else if (props.node.type === options.typeRow) return (0, _tableNode.tableRowNode)()(props);else if (props.node.type === options.typeCell) return (0, _tableNode.tableCellNode)((0, _lodash2.default)(options, ['typeTable', 'typeRow', 'typeCell']))(props);
    }
  };
};

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.onChange = function (data) {
      var _this$props = _this.props,
          change = _this$props.change,
          onChange = _this$props.onChange;

      onChange(_this.editTable.changes.insertTable(change, data.columnNumber + 1, data.rowNumber + 1));
    };

    _this.typeName = _this.props.typeTable || _blocks.TABLE;

    _this.editTable = (0, _slateEditTable2.default)(_this.props.options || {});
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          rest = _objectWithoutProperties(_props, ['icon']);

      return React.createElement(
        _createTablePicker2.default,
        {
          style: { zIndex: 10000 },
          onChange: this.onChange },
        React.createElement(_index2.default, _extends({
          type: this.typeName,
          icon: icon || 'Table',
          isActive: false
        }, rest))
      );
    }
  }]);

  return Table;
}(React.Component);

exports.default = Table;