"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.OnlyError=exports.Default=exports.ContentPassthrough=void 0;var _react=_interopRequireDefault(require("react")),_Error=require("./Error");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _default={title:"Design System/Atoms/Display/Error",component:_Error.Error,argTypes:{children:{name:"Content",type:"string",defaultValue:"Child Element"},error:{name:"Error",type:"string",defaultValue:"Something went wrong!"}}};exports.default=_default;const Template=a=>_react.default.createElement(_Error.Error,a),Default=Template.bind({});exports.Default=Default;const ContentPassthrough=Template.bind({});exports.ContentPassthrough=ContentPassthrough,ContentPassthrough.args={error:""};const OnlyError=Template.bind({});exports.OnlyError=OnlyError,OnlyError.args={children:""};