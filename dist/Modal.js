"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    body = _ref.body,
    title = _ref.title,
    icon = _ref.icon,
    closeButton = _ref.closeButton,
    modalStyle = _ref.modalStyle,
    titleStyle = _ref.titleStyle,
    bodyStyle = _ref.bodyStyle,
    iconStyle = _ref.iconStyle,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onClose();
  };
  (0, _react.useEffect)(function () {
    setIsModalOpen(isOpen);
  }, [isOpen]);
  if (isModalOpen) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal",
      onClick: function onClick(e) {
        return handleClick(e);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalContent",
      style: modalStyle
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalHeader",
      style: titleStyle
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "modalTitle"
    }, title), closeButton === undefined || closeButton ? /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320.15 320.15",
      className: "modalCloseButton",
      onClick: function onClick() {
        onClose();
      }
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "cross-icon-container",
      "data-name": "cross icon container"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "cross-icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      id: "cross-icon",
      d: "M310.68,54.68a32,32,0,0,0-45.3-45.3L160.08,114.77,54.67,9.47A32,32,0,0,0,9.38,54.77l105.39,105.3L9.48,265.47a32,32,0,0,0,45.29,45.3l105.31-105.4L265.47,310.68a32,32,0,0,0,45.3-45.3L205.38,160.07Z"
    })))) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalBody",
      style: bodyStyle
    }, icon && icon === "success" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        fill: "green"
      }
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "success-icon-container",
      "data-name": "success icon container"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "success-icon",
      "data-name": "success icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512ZM369,209,241,337a23.9,23.9,0,0,1-33.9,0l-64-64A24,24,0,0,1,177,239.1l47,47L335,175a24,24,0,1,1,33.9,33.9Z"
    }))))) : icon && icon === "error" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        fill: "red"
      }
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "error-icon-container",
      "data-name": "error icon container"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "error-icon",
      "data-name": "error-icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512ZM175,175a23.9,23.9,0,0,1,33.9,0l47,47,47-47a24,24,0,1,1,33.9,33.9l-47,47,47,47a24,24,0,1,1-33.9,33.9l-47-47-47,47A24,24,0,1,1,175,302.9l47-47-47-47A23.9,23.9,0,0,1,175,175Z"
    }))))) : icon && icon === "info" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        fill: "lightblue"
      }
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "info-icon-container",
      "data-name": "info icon container"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "info-icon",
      "data-name": "info icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512ZM216,336h24V272H216a24,24,0,0,1,0-48h48a23.94,23.94,0,0,1,24,24v88h8a24,24,0,0,1,0,48H216a24,24,0,0,1,0-48Zm40-144a32,32,0,1,1,32-32A32,32,0,0,1,256,192Z"
    }))))) : icon && icon === "danger" ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalIcon",
      style: iconStyle ? iconStyle : {
        fill: "yellow"
      }
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "danger-icon-container",
      "data-name": "danger icon container"
    }, /*#__PURE__*/_react["default"].createElement("g", {
      id: "danger-icon",
      "data-name": "danger icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512Zm0-384a23.94,23.94,0,0,1,24,24V264a24,24,0,0,1-48,0V152A23.94,23.94,0,0,1,256,128Zm32,224a32,32,0,1,1-32-32A32,32,0,0,1,288,352Z"
    }))))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modalBodyContent"
    }, typeof body === "string" ? /*#__PURE__*/_react["default"].createElement("span", null, body) : body))));
  } else {
    return null;
  }
}