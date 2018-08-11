"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slate = require("slate");

var _ = require("../");

var _path = require("path");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _iconTest = require("../../../../test/icon-test");

var _iconTest2 = _interopRequireDefault(_iconTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("create a OlList icon", function () {
  var initialValue = _slate.Value.fromJSON({
    document: {
      nodes: [{
        object: "block",
        type: "paragraph",
        nodes: [{
          object: "text",
          leaves: [{
            text: "A line of text in a paragraph."
          }]
        }]
      }]
    }
  });

  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.OlList, { change: new _slate.Change({ value: initialValue }) }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a UlList icon", function () {
  var initialValue = _slate.Value.fromJSON({
    document: {
      nodes: [{
        object: "block",
        type: "paragraph",
        nodes: [{
          object: "text",
          leaves: [{
            text: "A line of text in a paragraph."
          }]
        }]
      }]
    }
  });

  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.UlList, { change: new _slate.Change({ value: initialValue }) }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("simulate click ulList icon", function (done) {
  (0, _iconTest2.default)({
    icon: _.UlList,
    expectedPath: (0, _path.join)(__dirname, "expectedUlList.yaml"),
    callback: done
  });
});

test("simulate click olList icon", function (done) {
  (0, _iconTest2.default)({
    icon: _.OlList,
    expectedPath: (0, _path.join)(__dirname, "expectedOlList.yaml"),
    callback: done
  });
});