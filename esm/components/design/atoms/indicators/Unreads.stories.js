import React from"react";import{Unreads}from"./Unreads";import{Avatar}from"../display/Avatar";import{MaskDecorator}from"../../../../lib/internal";export default{title:"Design System/Atoms/Indicators/Unreads",component:Unreads,argTypes:{unread:{name:"Unread",defaultValue:!0}},decorators:[MaskDecorator]};var Template=function(a){return React.createElement(Avatar,{size:256,holepunch:(a.unread||0<a.count)&&"top-right",overlay:React.createElement(Unreads,a)})};export var Default=Template.bind({});