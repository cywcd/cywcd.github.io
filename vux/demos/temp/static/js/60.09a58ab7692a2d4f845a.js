webpackJsonp([60],{272:function(t,e,s){"use strict";function n(t){s(825)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(827),r=s(832),a=s(0),o=n,c=a(i.a,r.a,!1,o,"data-v-263773e2",null);e.default=c.exports},365:function(t,e,s){t.exports={default:s(366),__esModule:!0}},366:function(t,e,s){s(367),t.exports=s(11).Object.keys},367:function(t,e,s){var n=s(39),i=s(14);s(368)("keys",function(){return function(t){return i(n(t))}})},368:function(t,e,s){var n=s(22),i=s(11),r=s(12);t.exports=function(t,e){var s=(i.Object||{})[t]||Object[t],a={};a[t]=e(s),n(n.S+n.F*r(function(){s(1)}),"Object",a)}},554:function(t,e,s){"use strict";function n(){}function i(t,e,s){var n=!0;if(t){var i=0,r=t.length,a=e[0],o=e[1],c=e[2];switch(e.length){case 0:for(;i<r;i+=2)n=!1!==t[i].call(t[i+1]||s)&&n;break;case 1:for(;i<r;i+=2)n=!1!==t[i].call(t[i+1]||s,a)&&n;break;case 2:for(;i<r;i+=2)n=!1!==t[i].call(t[i+1]||s,a,o)&&n;break;case 3:for(;i<r;i+=2)n=!1!==t[i].call(t[i+1]||s,a,o,c)&&n;break;default:for(;i<r;i+=2)n=!1!==t[i].apply(t[i+1]||s,e)&&n}}return n}function r(t){return"[object Function]"===Object.prototype.toString.call(t)}var a=s(365),o=s.n(a),c=/\s+/;n.prototype.on=function(t,e,s){var n,i,r;if(!e)return this;for(n=this.__events||(this.__events={}),t=t.split(c);i=t.shift();)r=n[i]||(n[i]=[]),r.push(e,s);return this},n.prototype.once=function(t,e,s){var n=this,i=function i(){n.off(t,i),e.apply(s||n,arguments)};return this.on(t,i,s)},n.prototype.off=function(t,e,s){var n,i,r,a;if(!(n=this.__events))return this;if(!(t||e||s))return delete this.__events,this;for(t=t?t.split(c):l(n);i=t.shift();)if(r=n[i])if(e||s)for(a=r.length-2;a>=0;a-=2)e&&r[a]!==e||s&&r[a+1]!==s||r.splice(a,2);else delete n[i];return this},n.prototype.trigger=function(t){var e,s,n,r,a,o,l=[],u=!0;if(!(e=this.__events))return this;for(t=t.split(c),a=1,o=arguments.length;a<o;a++)l[a-1]=arguments[a];for(;s=t.shift();)(n=e.all)&&(n=n.slice()),(r=e[s])&&(r=r.slice()),"all"!==s&&(u=i(r,l,this)&&u),u=i(n,[s].concat(l),this)&&u;return u},n.prototype.emit=n.prototype.trigger;var l=o.a;l||(l=function(t){var e=[];for(var s in t)t.hasOwnProperty(s)&&e.push(s);return e}),n.mixTo=function(t){var e=n.prototype;if(r(t))for(var s in e)e.hasOwnProperty(s)&&(t.prototype[s]=e[s]);else{var i=new n;for(var a in e)e.hasOwnProperty(a)&&function(s){t[s]=function(){return e[s].apply(i,Array.prototype.slice.call(arguments)),this}}(a)}},e.a=n},825:function(t,e,s){var n=s(826);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(227)("e6c3c9a4",n,!0)},826:function(t,e,s){e=t.exports=s(226)(),e.push([t.i,"\n.day[data-v-263773e2] {\n  background-color:#000;\n  color:#fff;\n  text-align:center;\n  display:inline-block;\n  padding:0 3px;\n  border-radius:3px;\n}\n",""])},827:function(t,e,s){"use strict";var n=s(828),i=s(60),r=s(59);e.a={components:{Clocker:n.a,Cell:i.a,Group:r.a},ready:function(){var t=this;setTimeout(function(){t.time1="2017-08-13 22:54"},5e3)},data:function(){return{time1:"2017-07-13 21:54"}}}},828:function(t,e,s){"use strict";var n=s(829),i=s(831),r=s(0),a=r(n.a,i.a,!1,null,null,null);e.a=a.exports},829:function(t,e,s){"use strict";var n=s(830);e.a={name:"clocker",mounted:function(){var t=this;this.$nextTick(function(){t.slot=t.$el.querySelector(".vux-clocker-tpl"),t.slotString=t.slot.innerHTML,""!==t.slotString&&(t.showTimeString=!1),t.render()})},methods:{render:function(){var t=this;this.time&&(this.clocker=new n.a(this.time).on("tick",function(e){t.update(e),t.$emit("on-tick",e)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start())},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var e=t.strftime(this.slotString);e!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=e)}}},props:{time:[String,Number],format:{type:String,default:"%D 天 %H 小时 %M 分 %S 秒"}},watch:{time:function(){this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker.remove(),this.clocker=null}}},830:function(t,e,s){"use strict";function n(t){if(t instanceof Date)return t;if(String(t).match(u))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/-/)&&(t=String(t).replace(/-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function i(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function r(t){return function(e){var s=e.match(/%(-|!)?[A-Z]{1}(:[^]+)?/gi);if(s)for(var n=0,r=s.length;n<r;++n){var o=s[n].match(/%(-|!)?([a-zA-Z]{1})(:[^]+)?/),c=i(o[0]),l=o[1]||"",u=o[3]||"",h=null;o=o[2],f.hasOwnProperty(o)&&(h=f[o],h=Number(t[h])),null!==h&&("!"===l&&(h=a(u,h)),""===l&&h<10&&(h="0"+h.toString()),e=e.replace(c,h.toString()))}return e=e.replace("%_M1",t.minutes_1).replace("%_M2",t.minutes_2).replace("%_S1",t.seconds_1).replace("%_S2",t.seconds_2).replace("%_H1",t.hours_1).replace("%_H2",t.hours_2).replace("%_D1",t.days_1).replace("%_D2",t.days_2),e=e.replace(/%%/,"%")}}function a(t,e){var s="s",n="";return t&&(t=t.replace(/(:||\s)/gi,"").split(/,/),1===t.length?s=t[0]:(n=t[0],s=t[1])),1===Math.abs(e)?n:s}function o(t){return t+="",t=(1===t.length?"0"+t:t)+"",t.split("")}var c=s(554),l=[],u=[];u.push(/^[0-9]*$/.source),u.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),u.push(/[0-9]{4}([\/-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),u=new RegExp(u.join("|"));var f={Y:"years",m:"months",w:"weeks",D:"days",H:"hours",M:"minutes",S:"seconds"},h=function(t,e){e=e||{},this.PRECISION=e.precision||100,this.interval=null,this.offset={},this.instanceNumber=l.length,l.push(this),this.setFinalDate(t)};c.a.mixTo(h);var p=h.prototype,v={start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;return this.update(),this.interval=setInterval(function(){t.update()},this.PRECISION),this},stop:function(){return clearInterval(this.interval),this.interval=null,this._dispatchEvent("stoped"),this},toggle:function(){return this.interval?this.stop():this.start(),this},pause:function(){return this.stop()},resume:function(){return this.start()},remove:function(){this.stop(),l[this.instanceNumber]=null},setFinalDate:function(t){return this.finalDate=n(t),this},getOffset:function(){return this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,{seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)}},update:function(){this.offset=this.getOffset();for(var t=["days","hours","minutes","seconds"],e=0;e<t.length;e++){var s=t[e],n=o(this.offset[s]);this.offset[s+"_1"]=n[0],this.offset[s+"_2"]=n[1]}return 0===this.totalSecsLeft?(this.stop(),this._dispatchEvent("finish")):this._dispatchEvent("update"),this},_dispatchEvent:function(t){var e={};e.finalDate=this.finalDate,e.offset=this.offset,e.strftime=r(this.offset),this.emit(t,e),this.emit("tick",e)}};for(var _ in v)p[_]=v[_];e.a=h},831:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{display:"inline-block"}},[t.showTimeString?s("span",[t._v(t._s(t.timeString))]):t._e(),t._v(" "),s("div",{staticClass:"vux-clocker-tpl"},[t._t("default")],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},832:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticStyle:{padding:"15px"}},[s("span",[t._v("Normal Usage")]),t._v(" "),s("clocker",{attrs:{time:t.time1}})],1),t._v(" "),s("group",{attrs:{title:"Use in cell"}},[s("cell",{attrs:{title:"Date:0801"}},[s("clocker",{attrs:{slot:"value",time:"2017-08-01"},slot:"value"})],1)],1),t._v(" "),s("group",{attrs:{title:"custom template"}},[s("cell",{attrs:{title:"Date:0801"}},[s("clocker",{attrs:{slot:"value",time:"2017-08-01"},slot:"value"},[s("span",{staticStyle:{color:"red"}},[t._v("%D 天")]),t._v(" "),s("span",{staticStyle:{color:"green"}},[t._v("%H 小时")]),t._v(" "),s("span",{staticStyle:{color:"blue"}},[t._v("%M 分 %S 秒")])])],1),t._v(" "),s("cell",{attrs:{title:"20180808"}},[s("clocker",{attrs:{slot:"value",time:"2018-08-08"},slot:"value"},[s("span",{staticClass:"day"},[t._v("%_D1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_D2")]),t._v("天\n        "),s("span",{staticClass:"day"},[t._v("%_H1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_H2")]),t._v("时\n        "),s("span",{staticClass:"day"},[t._v("%_M1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_M2")]),t._v("分\n        "),s("span",{staticClass:"day"},[t._v("%_S1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_S2")]),t._v("秒\n      ")])],1)],1)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r}});