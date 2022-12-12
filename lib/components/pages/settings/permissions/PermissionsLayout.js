"use strict";const _excluded=["channel","server","editor"];Object.defineProperty(exports,"__esModule",{value:!0}),exports.PermissionsLayout=PermissionsLayout;var _react=_interopRequireWildcard(require("react")),_styledComponents=_interopRequireDefault(require("styled-components")),_RoleList=require("./RoleList");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}const Base=_styledComponents.default.div.withConfig({displayName:"Base",componentId:"sc-dyplrg-0"})(["gap:24px;padding:8px;display:flex;> :nth-child(1){width:120px;flex-shrink:0;}> :nth-child(2){flex-grow:1;}"]);function PermissionsLayout(a){let{channel:b,server:c,editor:d}=a,e=_objectWithoutProperties(a,_excluded);const[f,g]=(0,_react.useState)("default"),h=_react.default.createElement(d,{selected:f}),i=null!==c&&void 0!==c?c:null===b||void 0===b?void 0:b.server;return i?_react.default.createElement(Base,null,_react.default.createElement(_RoleList.RoleList,_extends({showDefault:!0,server:i,selected:f,onSelect:g},e)),h):h}