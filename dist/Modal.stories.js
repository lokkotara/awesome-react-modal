"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  title: "Example/Modal",
  component: _Modal["default"],
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "My Modal"
};