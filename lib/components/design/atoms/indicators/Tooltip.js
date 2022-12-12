"use strict";const _excluded=["div"],_excluded2=["children"],_excluded3=["i18n"],_excluded4=["right"];Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tooltip=Tooltip;var _react=_interopRequireDefault(require("react")),_react2=_interopRequireDefault(require("@tippyjs/react")),_lib=require("../../../../lib");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function Tooltip(a){let{div:b}=a,c=_objectWithoutProperties(a,_excluded);if(b){const{children:a}=c,b=_objectWithoutProperties(c,_excluded2);return _react.default.createElement(Tooltip,b,_react.default.createElement("div",null,a))}if(c.i18n){const a=(0,_lib.useText)(),{i18n:b}=c,d=_objectWithoutProperties(c,_excluded3);return _react.default.createElement(Tooltip,_extends({content:_react.default.createElement(a,{id:b})},d))}const{right:d}=c,e=_objectWithoutProperties(c,_excluded4);return _react.default.createElement(_react2.default,_extends({animation:"shift-away",placement:d?"right":void 0},e))}