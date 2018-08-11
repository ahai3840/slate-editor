"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slate = require("slate");

var _ = require("../");

var _2 = _interopRequireDefault(_);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("create a Undo icon", function () {
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

  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_2.default, { change: new _slate.Change({ value: initialValue }) }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});