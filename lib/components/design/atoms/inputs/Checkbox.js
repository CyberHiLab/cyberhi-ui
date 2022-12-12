"use strict";const _excluded=["disabled","title","description","value","onChange"];Object.defineProperty(exports,"__esModule",{value:!0}),exports.Checkbox=Checkbox;var _react=_interopRequireDefault(require("react")),_styledComponents=_interopRequireWildcard(require("styled-components")),_boxiconsRegular=require("@styled-icons/boxicons-regular");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}const Base=_styledComponents.default.label.withConfig({displayName:"Base",componentId:"sc-9eyqvs-0"})(["gap:10px;padding:4px;display:flex;cursor:pointer;user-select:none;align-items:center;border-radius:var(--border-radius);transition:0.1s ease background-color;input{display:none;}&:hover{background:var(--secondary-background);.playSound{visibility:visible;opacity:1;}.check{visibility:visible;opacity:1;}}&[disabled]{opacity:0.8;cursor:not-allowed;}"]),Content=_styledComponents.default.div.withConfig({displayName:"Content",componentId:"sc-9eyqvs-1"})(["flex-direction:column;display:flex;flex-grow:1;gap:3px;"]),TitleContent=_styledComponents.default.div.withConfig({displayName:"TitleContent",componentId:"sc-9eyqvs-2"})(["display:flex;align-items:center;gap:8px;color:var(--foreground);"]),Title=_styledComponents.default.div.withConfig({displayName:"Title",componentId:"sc-9eyqvs-3"})(["font-size:0.9375rem;font-weight:600;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"]),TitleAction=_styledComponents.default.div.withConfig({displayName:"TitleAction",componentId:"sc-9eyqvs-4"})(["display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;height:20px;visibility:hidden;opacity:0;transition:0.1s ease-in-out all;border-radius:var(--border-radius);&:hover{background-color:rgba(255,255,255,0.2);}&:active{background-color:rgba(255,255,255,0.15);}"]),Description=_styledComponents.default.div.withConfig({displayName:"Description",componentId:"sc-9eyqvs-5"})(["font-size:0.75rem;font-weight:500;color:var(--secondary-foreground);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;"]),Checkmark=_styledComponents.default.div.withConfig({displayName:"Checkmark",componentId:"sc-9eyqvs-6"})(["display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:2px solid var(--tertiary-foreground);border-radius:var(--border-radius);background:var(--secondary-background);flex-shrink:0;margin:4px;transition:0.1s ease-in-out all;.check{transition:inherit;color:var(--tertiary-foreground);visibility:hidden;opacity:0;}",""],a=>a.value&&(0,_styledComponents.css)(["border-color:var(--accent);background:var(--accent);.check{visibility:visible;opacity:1;color:var(--accent-contrast);}"]));function Checkbox(a){let{disabled:b,title:c,description:d,value:e,onChange:f}=a,g=_objectWithoutProperties(a,_excluded);return _react.default.createElement(Base,g,_react.default.createElement(Content,null,c&&_react.default.createElement(TitleContent,null,_react.default.createElement(Title,null,c)),d&&_react.default.createElement(Description,null,d)),_react.default.createElement("input",{type:"checkbox",checked:e,onChange:()=>!b&&f(!e)}),_react.default.createElement(Checkmark,{value:e,className:"checkmark"},_react.default.createElement(_boxiconsRegular.Check,{size:20,className:"check"})))}