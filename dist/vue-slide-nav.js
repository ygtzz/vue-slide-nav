!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSlideNav=e():t.VueSlideNav=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.slideNav=void 0;var s=n(1),a=i(s);e.slideNav=a.default},function(t,e,n){var i,s;n(2),i=n(3);var a=n(4);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-1422c174",t.exports=i},function(t,e){},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"we-slide-nav",created:function(){},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs.list.firstChild;e&&e.click()})},destroyed:function(){},props:{items:{type:Array,default:[]},offset:{type:Number,default:8},backClass:{type:String,default:"backBar"}},data:function(){return{backStyle:{}}},computed:{},methods:{fItemClick:function(t,e){t&&t.preventDefault();var n=t.target,i=n.offsetLeft,s=n.offsetWidth,a=this.offset;this.backStyle={left:i-a+"px",width:s+2*a+"px"},e.callback&&e.callback()}},components:{}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-nav"},[n("ul",{ref:"list",staticClass:"list"},[t._l(t.items,function(e){return n("li",{key:"item"+t.$index,staticClass:"item",on:{click:function(n){t.fItemClick(n,e)}}},[n("a",{staticClass:"item-link",attrs:{href:"javascript:;"}},[t._v(t._s(e.text))])])}),t._v(" "),n("div",{ref:"back",staticClass:"back",class:[t.backClass],style:t.backStyle})],2)])},staticRenderFns:[]}}])});