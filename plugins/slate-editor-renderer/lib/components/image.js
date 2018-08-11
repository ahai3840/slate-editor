"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarItem = exports.Toolbar = exports.ImageNodeActive = exports.ImageNodeInActive = exports.ImageNodeShared = exports.Alert = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #ffa39e;\n  background-color: #fff1f0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  border-radius: 4px;\n  padding: 8px 15px;\n"], ["\n  border: 1px solid #ffa39e;\n  background-color: #fff1f0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  border-radius: 4px;\n  padding: 8px 15px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n\n  display: inline-block;\n  position: relative;\n\n  img,\n  iframe {\n    position: absolute;\n    border: 0px;\n    top: 5px;\n    left: 5px;\n    max-width: calc(100% - 10px) !important;\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n\n  display: inline-block;\n  position: relative;\n\n  img,\n  iframe {\n    position: absolute;\n    border: 0px;\n    top: 5px;\n    left: 5px;\n    max-width: calc(100% - 10px) !important;\n    width: ", "px;\n    height: ", "px;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  border: 2px solid #fff;\n"], ["\n  border: 2px solid #fff;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  border: 2px solid #ef6942;\n"], ["\n  border: 2px solid #ef6942;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: -40px;\n  z-index: 100;\n"], ["\n  z-index: 1000;\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: -40px;\n  z-index: 100;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  color: #fff;\n  padding: 6px;\n  margin: 3px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n"], ["\n  display: inline-flex;\n  color: #fff;\n  padding: 6px;\n  margin: 3px;\n  background-image: linear-gradient(180deg, #464646, #151515);\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Alert = exports.Alert = _styledComponents2.default.span(_templateObject);

var ImageNodeShared = exports.ImageNodeShared = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.width + 20;
}, function (props) {
  return props.height + 20;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var ImageNodeInActive = exports.ImageNodeInActive = ImageNodeShared.extend(_templateObject3);

var ImageNodeActive = exports.ImageNodeActive = ImageNodeShared.extend(_templateObject4);

var Toolbar = exports.Toolbar = _styledComponents2.default.span(_templateObject5);

var ToolbarItem = exports.ToolbarItem = _styledComponents2.default.span(_templateObject6);