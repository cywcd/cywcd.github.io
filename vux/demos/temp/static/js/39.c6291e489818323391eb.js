webpackJsonp([39],{244:function(t,e,n){"use strict";function i(t){n(707)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(709),o=n(716),s=n(0),a=i,l=s(r.a,o.a,!1,a,"data-v-2ff4b7a0",null);e.default=l.exports},365:function(t,e,n){t.exports={default:n(366),__esModule:!0}},366:function(t,e,n){n(367),t.exports=n(11).Object.keys},367:function(t,e,n){var i=n(39),r=n(14);n(368)("keys",function(){return function(t){return r(i(t))}})},368:function(t,e,n){var i=n(22),r=n(11),o=n(12);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*o(function(){n(1)}),"Object",s)}},380:function(t,e,n){"use strict";function i(t){n(381)}var r=n(383),o=n(384),s=n(0),a=i,l=s(r.a,o.a,!1,a,null,null);e.a=l.exports},381:function(t,e,n){var i=n(382);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("236f82f2",i,!0)},382:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.vux-flexbox {\n  width: 100%;\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n  box-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.vux-flexbox .vux-flexbox-item {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-flex: 1;\n  min-width: 20px;\n  width: 0%;\n}\n.vux-flexbox .vux-flexbox-item:first-child {\n  margin-left: 0!important;\n  margin-top: 0!important;\n}\n.vux-flex-col {\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.vux-flex-col > .vux-flexbox-item {\n  width: 100%;\n}\n.vux-flex-row {\n  box-direction: row;\n  box-orient: horizontal;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n",""])},383:function(t,e,n){"use strict";e.a={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},384:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},r=[],o={render:i,staticRenderFns:r};e.a=o},385:function(t,e,n){"use strict";var i=n(386),r=n(387),o=n(0),s=o(i.a,r.a,!1,null,null,null);e.a=s.exports},386:function(t,e,n){"use strict";var i=["-moz-box-","-webkit-box-",""];e.a={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={};if(t["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var e=0;e<i.length;e++)t[i[e]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},387:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},r=[],o={render:i,staticRenderFns:r};e.a=o},554:function(t,e,n){"use strict";function i(){}function r(t,e,n){var i=!0;if(t){var r=0,o=t.length,s=e[0],a=e[1],l=e[2];switch(e.length){case 0:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n)&&i;break;case 1:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s)&&i;break;case 2:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s,a)&&i;break;case 3:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s,a,l)&&i;break;default:for(;r<o;r+=2)i=!1!==t[r].apply(t[r+1]||n,e)&&i}}return i}function o(t){return"[object Function]"===Object.prototype.toString.call(t)}var s=n(365),a=n.n(s),l=/\s+/;i.prototype.on=function(t,e,n){var i,r,o;if(!e)return this;for(i=this.__events||(this.__events={}),t=t.split(l);r=t.shift();)o=i[r]||(i[r]=[]),o.push(e,n);return this},i.prototype.once=function(t,e,n){var i=this,r=function r(){i.off(t,r),e.apply(n||i,arguments)};return this.on(t,r,n)},i.prototype.off=function(t,e,n){var i,r,o,s;if(!(i=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(l):u(i);r=t.shift();)if(o=i[r])if(e||n)for(s=o.length-2;s>=0;s-=2)e&&o[s]!==e||n&&o[s+1]!==n||o.splice(s,2);else delete i[r];return this},i.prototype.trigger=function(t){var e,n,i,o,s,a,u=[],c=!0;if(!(e=this.__events))return this;for(t=t.split(l),s=1,a=arguments.length;s<a;s++)u[s-1]=arguments[s];for(;n=t.shift();)(i=e.all)&&(i=i.slice()),(o=e[n])&&(o=o.slice()),"all"!==n&&(c=r(o,u,this)&&c),c=r(i,[n].concat(u),this)&&c;return c},i.prototype.emit=i.prototype.trigger;var u=a.a;u||(u=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),i.mixTo=function(t){var e=i.prototype;if(o(t))for(var n in e)e.hasOwnProperty(n)&&(t.prototype[n]=e[n]);else{var r=new i;for(var s in e)e.hasOwnProperty(s)&&function(n){t[n]=function(){return e[n].apply(r,Array.prototype.slice.call(arguments)),this}}(s)}},e.a=i},707:function(t,e,n){var i=n(708);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("393abb8e",i,!0)},708:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.center[data-v-2ff4b7a0] {\n  text-align: center;\n  padding-top: 20px;\n  color: #fff;\n  font-size: 18px;\n}\n.center img[data-v-2ff4b7a0] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 4px solid #ececec;\n}\n",""])},709:function(t,e,n){"use strict";var i=n(380),r=n(385),o=n(710);e.a={components:{Blur:o.a,Flexbox:i.a,FlexboxItem:r.a},data:function(){return{images:["https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg","https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg","https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg"],url:"https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"}}}},710:function(t,e,n){"use strict";function i(t){n(711)}var r=n(713),o=n(715),s=n(0),a=i,l=s(r.a,o.a,!1,a,null,null);e.a=l.exports},711:function(t,e,n){var i=n(712);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("03e63818",i,!0)},712:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.vux-bg-blur {\n  z-index: -2;\n  opacity: 0;\n  position: absolute;\n  min-height: 100%;\n  display: block;\n  top: 0;\n  max-height: none;\n  /* Add this CSS to remove transparent border around the image */\n  left: -20%;\n  top: -20%;\n  width: 140%;\n  height: 140%;\n  -webkit-transition: opacity linear 0.8s;\n  transition: opacity linear 0.8s;\n}\n/*\nAn element with this class is added by the plugin to provide an overlay above the blurred image\nIt could drastically improve the appearance of the blurred image for content readability\n*/\n.vux-bg-blur-overlay {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.15) 0%, #000000 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, #000000 100%);\n}\n",""])},713:function(t,e,n){"use strict";var i=n(714);e.a={name:"blur",mounted:function(){var t=this;this.$nextTick(function(){t._blur=new i.a(t.$el,{url:t.url,blurAmount:t.blurAmount,imageClass:"vux-bg-blur",duration:100,opacity:1})})},props:{blurAmount:{type:Number,default:10},url:{type:String,required:!0},height:{type:Number,default:200}},watch:{blurAmount:function(t){this._blur.setBlurAmount(t),this._blur.generateBlurredImage(this.url)},url:function(t){this._blur.generateBlurredImage(t)}}}},714:function(t,e,n){"use strict";function i(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)}var r=n(42),o=n.n(r),s=n(554),a=function(){return"_"+Math.random().toString(36).substr(2,9)},l={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var n=document.createElementNS(l.svgns,t);return e&&l.setAttr(n,e),n},setAttr:function(t,e){for(var n in e)"href"===n?t.setAttributeNS(l.xlink,n,e[n]):t.setAttribute(n,e[n]);return t}},u=function t(e,n){this.internalID=a(),this.element=e,this.width=e.offsetWidth,this.height=e.offsetHeight,this.element=e,this.parent=this.element.parentNode,this.options=o()({},t.DEFAULTS,n),this.overlayEl=this.createOverlay(),this.blurredImage=null,this.attachListeners(),this.generateBlurredImage(this.options.url)};u.VERSION="0.0.1",s.a.mixTo(u),u.DEFAULTS={url:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},u.prototype.setBlurAmount=function(t){this.options.blurAmount=t},u.prototype.attachListeners=function(){this.on("ui.blur.loaded",this.fadeIn.bind(this)),this.on("ui.blur.unload",this.fadeOut.bind(this))},u.prototype.fadeIn=function(){},u.prototype.fadeOut=function(){},u.prototype.generateBlurredImage=function(t){var e=this.blurredImage;this.internalID=a(),e&&e.parentNode.removeChild(e),this.blurredImage=this.createSVG(t,this.width,this.height)},u.prototype.createOverlay=function(){if(this.options.overlayClass&&""!==this.options.overlayClass){var t=document.createElement("div");return t.classList.add(this.options.overlayClass),this.parent.insertBefore(t,this.element),t}return!1},u.prototype.createSVG=function(t,e,n){var r=this,o=l.createElement("svg",{xmlns:l.svgns,version:"1.1",width:e,height:n,id:"blurred"+this.internalID,class:this.options.imageClass,viewBox:"0 0 "+e+" "+n,preserveAspectRatio:"none"}),s="blur"+this.internalID,a=l.createElement("filter",{id:s}),u=l.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:this.options.blurAmount}),c=l.createElement("image",{x:0,y:0,width:e,height:n,externalResourcesRequired:"true",href:t,style:"filter:url(#"+s+")",preserveAspectRatio:"none"});return c.addEventListener("load",function(){r.emit("ui.blur.loaded")},!0),c.addEventListener("SVGLoad",function(){r.emit("ui.blur.loaded")},!0),a.appendChild(u),o.appendChild(a),o.appendChild(c),r.options.duration&&r.options.duration>0&&(o.style.opacity=0,window.setTimeout(function(){"0"===i(o,"opacity")&&(o.style.opacity=1)},this.options.duration+100)),this.element.insertBefore(o,this.element.firstChild),o},u.prototype.createIMG=function(t,e,n){var r=this,o=this.prependImage(t),s=2*this.options.blurAmount>100?100:2*this.options.blurAmount,a={filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+s+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:n+2.5*this.options.blurAmount};for(var l in a)o.style[l]=a[l];return o.setAttribute("id",this.internalID),o.onload=function(){r.trigger("ui.blur.loaded")},this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===i(o,"opacity")&&(o.style.opacity=1)},this.options.duration+100),o},u.prototype.prependImage=function(t){var e=document.createElement("img");return e.url=t,e.setAttribute("id",this.internalID),e.classList.add(this.options.imageClass),this.overlayEl?this.parent.insertBefore(e,this.overlayEl):this.parent.insertBefore(e,this.parent.firstChild),e},e.a=u},715:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{height:t.height+"px",position:"relative",overflow:"hidden"}},[t._t("default")],2)},r=[],o={render:i,staticRenderFns:r};e.a=o},716:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("blur",{attrs:{"blur-amount":40,url:t.url}},[n("p",{staticClass:"center"},[n("img",{attrs:{src:t.url}})])]),t._v(" "),n("flexbox",{attrs:{gutter:0}},t._l(t.images,function(e,i){return n("flexbox-item",{key:i},[n("img",{staticStyle:{width:"100%"},attrs:{src:e},on:{click:function(n){t.url=e}}})])}))],1)},r=[],o={render:i,staticRenderFns:r};e.a=o}});