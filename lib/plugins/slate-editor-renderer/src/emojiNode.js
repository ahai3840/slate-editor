'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var getEmoji = _ref.getEmoji;

  var EmojiComponent = function EmojiComponent(_ref2) {
    var attributes = _ref2.attributes,
        node = _ref2.node;

    return React.createElement(
      'span',
      _extends({}, attributes, {
        style: { display: 'inline-block' },
        'data-slate-type': 'emoji' }),
      React.createElement(_emojiMart.Emoji, { emoji: getEmoji(node), size: 18 })
    );
  };

  EmojiComponent.displayName = 'emoji-node';

  return EmojiComponent;
};

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _emojiMart = require('emoji-mart');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }