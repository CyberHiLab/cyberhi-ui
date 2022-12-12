import React from"react";import{Check,Square,X}from"@styled-icons/boxicons-regular";import styled,{css}from"styled-components";var SwitchContainer=styled.div.attrs({role:"radiogroup","aria-orientiation":"horizontal"}).withConfig({displayName:"SwitchContainer",componentId:"sc-g5noy9-0"})(["flex-shrink:0;width:fit-content;display:flex;margin:4px 0;overflow:hidden;border-radius:var(--border-radius);background:var(--secondary-background);border:1px solid var(--tertiary-background);",""],function(a){return a["aria-disabled"]&&css(["pointer-events:none;opacity:0.6;"])}),Switch=styled.div.attrs({role:"radio"}).withConfig({displayName:"Switch",componentId:"sc-g5noy9-1"})(["padding:4px;cursor:pointer;transition:0.2s ease all;color:",";"," &:hover{filter:brightness(0.8);}"],function(a){return"Allow"===a.state?"var(--success)":"Deny"===a.state?"var(--error)":"var(--tertiary-foreground)"},function(a){return a.selected&&css(["color:white;background:",";"],"Allow"===a.state?"var(--success)":"Deny"===a.state?"var(--error)":"var(--primary-background)")});export function OverrideSwitch(a){var b=a.state,c=a.disabled,d=a.onChange;return React.createElement(SwitchContainer,{"aria-disabled":c},React.createElement(Switch,{onClick:function onClick(){return d("Deny")},state:"Deny",selected:"Deny"===b},React.createElement(X,{size:24})),React.createElement(Switch,{onClick:function onClick(){return d("Neutral")},state:"Neutral",selected:"Neutral"===b},React.createElement(Square,{size:24})),React.createElement(Switch,{onClick:function onClick(){return d("Allow")},state:"Allow",selected:"Allow"===b},React.createElement(Check,{size:24})))}