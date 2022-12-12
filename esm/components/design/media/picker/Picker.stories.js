function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}import React,{memo}from"react";import{InjectMockClient}from"../../../../lib/internal";import{emojiDictionary,parseEmoji}from"../../../../lib/internal/emojis";import{Picker}from"./Picker";export default{title:"Design System/Media/Picker",component:Picker,argTypes:{emojis:{name:"Emoji Dictionary",defaultValue:{a:[{id:"0",name:"el_gato"}],default:Object.keys(emojiDictionary).map(function(a){return{id:a}})}},categories:{name:"Categories",type:"symbol"},renderEmoji:{name:"Emoji Component",type:"symbol",defaultValue:memo(function(a){var b=a.emoji;return React.createElement("img",{src:"0"===b?"https://autumn.revolt.chat/attachments/fTs2qDi4ix0i_BDzJ-WwX2Hgvbr5KRL47dMKyD13Je/image.png":parseEmoji(emojiDictionary[b])})})}},decorators:[]};var Template=function(a){return React.createElement(InjectMockClient,null,function(b){var c=b.client;return React.createElement("div",{style:{width:"100%",height:"75vh",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{background:"var(--primary-background)",flexGrow:1}}),React.createElement("div",{style:{position:"relative"}},React.createElement(Picker,_extends({},a,{categories:[{id:"a",name:"My Server",iconURL:c.servers.values().next().value.generateIconURL()},{id:"default",name:"Default",emoji:"smiley"},{id:"b",name:"Deez Nuts"},{id:"c",name:"C"},{id:"d",name:"D"},{id:"e",name:"E"},{id:"f",name:"F"},{id:"g",name:"G"},{id:"h",name:"H"}]}))),React.createElement("div",{style:{height:"48px",background:"var(--message-box)",flexShrink:0}}))})};export var Default=Template.bind({});