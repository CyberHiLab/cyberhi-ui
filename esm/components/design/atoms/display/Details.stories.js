var _excluded=["summary","children"];function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}import React from"react";import{ChevronDown}from"@styled-icons/boxicons-regular";import{Details}from"./Details";export default{title:"Design System/Atoms/Display/Details",component:Details,argTypes:{children:{name:"Content",type:"string",defaultValue:"Textual Content"},summary:{name:"Summary",type:"string",defaultValue:"Details Component"},sticky:{name:"Sticky",type:"boolean",defaultValue:!1},large:{name:"Large",type:"boolean",defaultValue:!1}}};var Template=function(a){var b=a.summary,c=a.children,d=_objectWithoutProperties(a,_excluded);return React.createElement("div",{style:{color:"var(--foreground)"}},React.createElement(Details,d,React.createElement("summary",null,React.createElement(ChevronDown,{size:20})," ",b),c))};export var Default=Template.bind({});