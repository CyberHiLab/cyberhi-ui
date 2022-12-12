"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.NoActions=exports.Default=void 0;var _react=_interopRequireDefault(require("react")),_clientApi=require("@storybook/client-api"),_Modal=require("./Modal");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var _default={title:"Design System/Atoms/Display/Modal",component:_Modal.Modal,argTypes:{open:{name:"Open",type:"boolean",defaultValue:!0},children:{name:"Content",type:"string",defaultValue:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},title:{name:"Title",type:"string",defaultValue:"Modal Title"},description:{name:"Description",type:"string",defaultValue:"Optional modal description."},padding:{name:"Padding",type:"string",defaultValue:void 0},maxWidth:{name:"Max Width",type:"string",defaultValue:void 0},actions:{name:"Actions",defaultValue:[{children:"OK",palette:"accent",confirmation:!0},{children:"Cancel",palette:"plain"}]},transparent:{name:"Transparent",type:"boolean",defaultValue:!1},disabled:{name:"Disabled",type:"boolean",defaultValue:!1},nonDismissable:{name:"Non-dismissable",type:"boolean",defaultValue:!1}}};exports.default=_default;const Template=a=>{const[b,c]=(0,_clientApi.useArgs)();return a.open?_react.default.createElement(_Modal.Modal,_extends({},a,{onClose:()=>c({open:!1}),registerOnClose:a=>{const b=b=>"Escape"===b.key&&a();return document.addEventListener("keyup",b),()=>document.removeEventListener("keyup",b)},registerOnConfirm:a=>{const b=b=>{"Enter"===b.key&&(a(),c({disabled:!0}),setTimeout(close,1e3))};return document.addEventListener("keyup",b),()=>document.removeEventListener("keyup",b)}})):_react.default.createElement(_react.default.Fragment,null)},Default=Template.bind({});exports.Default=Default;const NoActions=Template.bind({});exports.NoActions=NoActions,NoActions.args={actions:void 0,description:void 0,children:"This modal does not have any actions!"};