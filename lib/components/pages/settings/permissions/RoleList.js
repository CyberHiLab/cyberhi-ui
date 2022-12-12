"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleList=void 0;var _react=_interopRequireWildcard(require("react")),_mobxReactLite=require("mobx-react-lite"),_styledComponents=_interopRequireDefault(require("styled-components")),_design=require("../../../design"),_boxiconsSolid=require("@styled-icons/boxicons-solid");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const Base=_styledComponents.default.div.withConfig({displayName:"Base",componentId:"sc-9cd2y5-0"})(["gap:4px;display:flex;flex-direction:column;button{text-align:left;gap:4px;display:flex;align-items:center;flex-direction:row;}"]),Rank=_styledComponents.default.span.withConfig({displayName:"Rank",componentId:"sc-9cd2y5-1"})(["font-size:0.8em;color:var(--tertiary-foreground);"]),RoleList=(0,_mobxReactLite.observer)(a=>{let{server:b,showDefault:c,selected:d,rank:e,onSelect:f,onCreateRole:g}=a;return(0,_react.useLayoutEffect)(()=>{b.roles&&("default"===d||b.roles[d]||f("default"))},[b.roles,d]),_react.default.createElement(Base,null,b.orderedRoles.map(a=>{var b;const c=null!==(b=a.rank)&&void 0!==b?b:0;return _react.default.createElement(_design.ButtonItem,{key:a.id,selected:a.id===d,style:{color:a.colour},onClick:()=>null===f||void 0===f?void 0:f(a.id)},_react.default.createElement(Rank,null,c),a.name,"number"==typeof e&&c<=e&&_react.default.createElement(_boxiconsSolid.Lock,{size:16}))}),c&&_react.default.createElement(_design.ButtonItem,{selected:"default"===d,onClick:()=>null===f||void 0===f?void 0:f("default")},"Default"),g&&_react.default.createElement(_design.Button,{palette:"plain-secondary",onClick:()=>g(f)},"Create Role"))});exports.RoleList=RoleList;