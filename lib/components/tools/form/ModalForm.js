"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalForm=ModalForm;var _mobx=require("mobx"),_react=_interopRequireWildcard(require("react")),_lib=require("../../../lib"),_design=require("../../design"),_Form=require("./Form");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function ModalForm(a){var b;const c=(0,_react.useMemo)(()=>(0,_mobx.observable)((0,_Form.getInitialValues)(a.schema,a.defaults)),[]),[d,e]=(0,_react.useState)(null),[f,g]=(0,_react.useState)(!1),h=(0,_lib.useText)(),i=(0,_react.useCallback)(async()=>{try{return g(!0),await a.callback(c),!0}catch(a){return e(""+a),g(!1),!1}},[]);return _react.default.createElement(_design.Modal,_extends({},a,{disabled:f,actions:[_objectSpread({onClick:i,children:"Submit",confirmation:!0},a.submit),...(null!==(b=a.actions)&&void 0!==b?b:[{onClick:()=>!0,children:"Cancel",palette:"plain"}])]}),_react.default.createElement(_Form.Form,_extends({},a,{observed:c})),d&&_react.default.createElement(_design.Category,null,_react.default.createElement(_design.Error,{error:_react.default.createElement(h,{id:d,children:d})})))}