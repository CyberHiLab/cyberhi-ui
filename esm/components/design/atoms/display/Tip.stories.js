import React from"react";import{Tip}from"./Tip";export default{title:"Design System/Atoms/Display/Tip",component:Tip,argTypes:{children:{name:"Content",type:"string",defaultValue:"This is a tip for demonstration purposes."},palette:{name:"Palette",control:"radio",options:["primary","success","warning","error"],defaultValue:"primary"}}};var Template=function(a){return React.createElement(Tip,a)};export var Default=Template.bind({});