"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _react=_interopRequireDefault(require("react")),_clientApi=require("@storybook/client-api"),_RoleList=require("./RoleList");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var _default={title:"Pages/Settings/Permissions/Role List",component:_RoleList.RoleList,args:_objectSpread({server:{orderedRoles:[{id:"a",name:"Admin",permissions:{a:0,d:0},colour:"rgb(123, 104, 238)",rank:1},{id:"b",name:"Moderator",permissions:{a:0,d:0},colour:"rgb(253, 102, 113)",rank:2},{id:"c",name:"Bot",permissions:{a:0,d:0},colour:"rgb(52, 152, 219)",rank:3}]},rank:2,showDefault:!0,selected:"default"},{})};exports.default=_default;const Default=a=>{const[b,c]=(0,_clientApi.useArgs)();return _react.default.createElement(_RoleList.RoleList,_extends({},a,{onSelect:a=>c({selected:a})}))};exports.Default=Default;