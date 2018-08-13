"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconContainer = exports.Divider = exports.Item = exports.ToolbarContainer = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 100000;\n  margin-top: -6px;\n  color: #bbb;\n  cursor: auto;\n  border-radius: 5px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n\n  ", ";\n"], ["\n  position: absolute;\n  z-index: 100000;\n  margin-top: -6px;\n  color: #bbb;\n  cursor: auto;\n  border-radius: 5px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: inline-block;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 30px;\n  width: 10px;\n"], ["\n  display: inline-block;\n  height: 30px;\n  width: 10px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n\n  .__slate-toolbar-slateToolbarItem {\n    padding: 3px 5px;\n  }\n\n  .__slate-toolbar-slateToolbarItem,\n  .__slate-toolbar-slateToolbarItemActive {\n    height: 30px;\n    width: 30px;\n  }\n\n  .qlStroke {\n    stroke: #bbb;\n    fill: transparent;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1px;\n  }\n\n  .qlStrokeActive {\n    stroke: #fff;\n    fill: transparent;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1.5px;\n  }\n\n  .qlStrokeMitter {\n    stroke: #bbb;\n    fill: transparent;\n  }\n\n  .qlStrokeMitterActive {\n    stroke: #fff;\n    fill: transparent;\n  }\n\n  .qlFill {\n    fill: #bbb;\n  }\n\n  .qlFillActive {\n    fill: #fff;\n  }\n\n  .qlEven {\n    stroke: #bbb;\n    fill: #464646;\n  }\n\n  .qlEvenActive {\n    stroke: #fff;\n    fill: #464646;\n  }\n\n  .qlColorLabel {\n    fill: #464646;\n    opacity: 0.2;\n  }\n\n  .qlTransparent {\n    opacity: 0.2;\n  }\n\n  .qlThin {\n    stroke: #bbb;\n    fill: transparent;\n    stroke-width: 1;\n  }\n\n  .qlThinActive {\n    stroke: #fff;\n    fill: transparent;\n    stroke-width: 1;\n  }\n"], ["\n  display: inline-block;\n\n  .__slate-toolbar-slateToolbarItem {\n    padding: 3px 5px;\n  }\n\n  .__slate-toolbar-slateToolbarItem,\n  .__slate-toolbar-slateToolbarItemActive {\n    height: 30px;\n    width: 30px;\n  }\n\n  .qlStroke {\n    stroke: #bbb;\n    fill: transparent;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1px;\n  }\n\n  .qlStrokeActive {\n    stroke: #fff;\n    fill: transparent;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1.5px;\n  }\n\n  .qlStrokeMitter {\n    stroke: #bbb;\n    fill: transparent;\n  }\n\n  .qlStrokeMitterActive {\n    stroke: #fff;\n    fill: transparent;\n  }\n\n  .qlFill {\n    fill: #bbb;\n  }\n\n  .qlFillActive {\n    fill: #fff;\n  }\n\n  .qlEven {\n    stroke: #bbb;\n    fill: #464646;\n  }\n\n  .qlEvenActive {\n    stroke: #fff;\n    fill: #464646;\n  }\n\n  .qlColorLabel {\n    fill: #464646;\n    opacity: 0.2;\n  }\n\n  .qlTransparent {\n    opacity: 0.2;\n  }\n\n  .qlThin {\n    stroke: #bbb;\n    fill: transparent;\n    stroke-width: 1;\n  }\n\n  .qlThinActive {\n    stroke: #fff;\n    fill: transparent;\n    stroke-width: 1;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToolbarContainer = exports.ToolbarContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.position === "top" ? "\n    &:after {\n      top: 100%;\n      left: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-top-color: #151515;\n      border-width: 5px;\n      margin-left: -5px;\n    }\n  " : "\n    &:after {\n      bottom: 100%;\n      left: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-bottom-color: #151515;\n      border-width: 5px;\n      margin-left: -5px;\n    }\n  ";
});

var Item = exports.Item = _styledComponents2.default.div(_templateObject2);

var Divider = exports.Divider = _styledComponents2.default.div(_templateObject3);

var IconContainer = exports.IconContainer = _styledComponents2.default.div(_templateObject4);