'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeLineNode = exports.codeBlockNode = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  font-size: 14px;\n  padding: 4px;\n  background-color: #EEE;\n  color: #555;\n  border-radius: 3px;\n  text-transform: uppercase;\n'], ['\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  font-size: 14px;\n  padding: 4px;\n  background-color: #EEE;\n  color: #555;\n  border-radius: 3px;\n  text-transform: uppercase;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CodeblockContainer = _styledComponents2.default.div(_templateObject);

var CodeblockLang = _styledComponents2.default.div(_templateObject2);

var codeBlockNode = exports.codeBlockNode = function codeBlockNode(options) {
  var CodeBlockComponent = function CodeBlockComponent(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children,
        node = _ref.node;

    var syntax = options.getSyntax(node);
    return React.createElement(
      CodeblockContainer,
      null,
      React.createElement(
        CodeblockLang,
        { contentEditable: false },
        syntax || 'TXT'
      ),
      React.createElement(
        'pre',
        null,
        React.createElement(
          'code',
          attributes,
          children
        )
      )
    );
  };

  CodeBlockComponent.displayName = 'codeblock-node';

  return CodeBlockComponent;
};

var codeLineNode = exports.codeLineNode = function codeLineNode() {
  var CodeLineComponent = function CodeLineComponent(_ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children;

    return React.createElement(
      'div',
      attributes,
      children
    );
  };

  CodeLineComponent.displayName = 'codeline-node';

  return CodeLineComponent;
};