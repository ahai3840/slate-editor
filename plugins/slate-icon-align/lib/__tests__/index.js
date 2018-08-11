"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slate = require("slate");

var _path = require("path");

var _ = require("../");

var _iconTest = require("test/icon-test");

var _iconTest2 = _interopRequireDefault(_iconTest);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChange = function onChange(arg) {
  return arg;
};

test("create a AlignCenter icon", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.AlignCenter, {
    change: new _slate.Change({ value: new _slate.Value() }),
    onChange: onChange
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a AlignLeft icon", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.AlignLeft, {
    change: new _slate.Change({ value: new _slate.Value() }),
    onChange: onChange
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a AlignRight icon", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.AlignRight, {
    change: new _slate.Change({ value: new _slate.Value() }),
    onChange: onChange
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("click AlignCenter icon", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignCenter,
    expectedPath: (0, _path.join)(__dirname, "expected-center.yaml"),
    callback: done
  });
});

test("click AlignCenter icon use customized type", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignCenter,
    type: "customizeAlign",
    expectedPath: (0, _path.join)(__dirname, "custom-expected-center.yaml"),
    callback: done
  });
});

test("click AlignLeft icon", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignLeft,
    expectedPath: (0, _path.join)(__dirname, "expected-left.yaml"),
    callback: done
  });
});

test("click AlignLeft icon use customized type", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignLeft,
    type: "customizeAlign",
    expectedPath: (0, _path.join)(__dirname, "custom-expected-left.yaml"),
    callback: done
  });
});

test("click AlignRight icon", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignRight,
    expectedPath: (0, _path.join)(__dirname, "expected-right.yaml"),
    callback: done
  });
});

test("click AlignRight icon use customized type", function (done) {
  (0, _iconTest2.default)({
    icon: _.AlignRight,
    type: "customizeAlign",
    expectedPath: (0, _path.join)(__dirname, "custom-expected-right.yaml"),
    callback: done
  });
});