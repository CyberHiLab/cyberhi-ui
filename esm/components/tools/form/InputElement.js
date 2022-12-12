var _excluded=["type","value","onChange"],_excluded2=["options"],_excluded3=["name","value"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}import{observer}from"mobx-react-lite";import React from"react";import{Category,Checkbox,ColourSwatches,Column,ComboBox,InputBox,Radio}from"../../design";export function emptyValue(a){return"custom"===a?void 0:"checkbox"!=a&&""}export function InputElement(a){var b=a.type,c=a.value,d=a.onChange,e=_objectWithoutProperties(a,_excluded),f="function"==typeof c?c():c,g=null;switch(b){case"text":{g=React.createElement(InputBox,_extends({value:f,onChange:function onChange(a){return d(a.currentTarget.value)}},e));break}case"checkbox":{g=React.createElement(Checkbox,_extends({value:f,onChange:function onChange(a){return d(a)}},e));break}case"colour":{g=React.createElement(ColourSwatches,_extends({value:f,onChange:function onChange(a){return d(a)}},e));break}case"combo":{var h=e,i=h.options,j=_objectWithoutProperties(h,_excluded2);g=React.createElement(ComboBox,_extends({value:f,onChange:function onChange(a){return d(a.currentTarget.value)}},j),i.map(function(a){return React.createElement("option",{key:a.value,value:a.value},a.name)}));break}case"radio":{var k=e.choices;g=React.createElement(Column,null,k.map(function(a){var b=a.name,c=a.value,e=_objectWithoutProperties(a,_excluded3);return React.createElement(Radio,_extends({key:c,title:b,value:c===f,onSelect:function onSelect(){return d(c)}},e))}));break}case"custom":{g=e.element;break}}return e.field?React.createElement("div",null,React.createElement(Category,null,e.field),g):g}export var ObservedInputElement=observer(InputElement);