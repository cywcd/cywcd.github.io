webpackJsonp([59],{1108:function(n,t,e){"use strict";var i=e(1109),o=e(1114),a=e(1117);t.a={components:{Flow:i.a,FlowState:o.a,FlowLine:a.a}}},1109:function(n,t,e){"use strict";function i(n){e(1110)}var o=e(1112),a=e(1113),l=e(0),r=i,s=l(o.a,a.a,!1,r,null,null);t.a=s.exports},1110:function(n,t,e){var i=e(1111);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(227)("bbbbf18a",i,!0)},1111:function(n,t,e){t=n.exports=e(226)(),t.push([n.i,'\n.weui-wepay-flow,\n.weui-wepay-flow-auto {\n  padding: 40px;\n}\n.weui-wepay-flow__bd {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.weui-wepay-flow__li {\n  width: 14px;\n  height: 14px;\n  position: relative;\n  z-index: 1;\n}\n.weui-wepay-flow__li .weui-wepay-flow__state {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 14px;\n  height: 14px;\n  font-size: 10px;\n  line-height: 14px;\n  text-align: center;\n  color: #FFF;\n  border-radius: 7px;\n  box-sizing: border-box;\n}\n.weui-wepay-flow__state {\n  background-color: #E2E2E2;\n}\n.weui-wepay-flow__li_done .weui-wepay-flow__state {\n  background-color: #09bb07;\n}\n[class^="weui-wepay-flow__title-"],\n[class*=" weui-wepay-flow__title-"] {\n  position: absolute;\n  color: #999999;\n  font-size: 14px;\n  font-weight: normal;\n  white-space: nowrap;\n  text-align: center;\n}\n.weui-wepay-flow__title-top {\n  bottom: 20px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.weui-wepay-flow__li_done .weui-wepay-flow__title-top {\n  color: #333;\n}\n.weui-wepay-flow__title-bottom {\n  top: 20px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.weui-wepay-flow__li_done .weui-wepay-flow__title-bottom {\n  color: #333;\n}\n.weui-wepay-flow__title-left {\n  right: 30px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  text-align: right;\n}\n.weui-wepay-flow__li_done .weui-wepay-flow__title-left {\n  color: #333;\n}\n.weui-wepay-flow__title-right {\n  left: 30px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  text-align: left;\n}\n.weui-wepay-flow__li_done .weui-wepay-flow__title-right {\n  color: #333;\n}\n[class^="weui-wepay-flow__intro-"],\n[class*=" weui-wepay-flow__intro-"] {\n  height: 20px;\n  line-height: 20px;\n  background-color: #ff8a00;\n  font-size: 10px;\n  color: #FFF;\n  white-space: nowrap;\n  padding: 0 6px;\n  position: relative;\n  border-radius: 4px;\n}\n[class^="weui-wepay-flow__intro-"]:after,\n[class*=" weui-wepay-flow__intro-"]:after {\n  content: \'\';\n  display: inline-block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  font-size: 0;\n  position: absolute;\n}\n.weui-wepay-flow__intro-top {\n  bottom: 25px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  position: absolute;\n}\n.weui-wepay-flow__intro-top:after {\n  border-color: #ff8a00 transparent transparent transparent;\n  border-style: solid;\n  border-width: 5px 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  bottom: -10px;\n}\n.weui-wepay-flow__intro-bottom {\n  top: 25px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  position: absolute;\n}\n.weui-wepay-flow__intro-bottom:after {\n  border-color: transparent transparent #ff8a00 transparent;\n  border-style: dashed dashed solid dashed;\n  border-width: 5px 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  top: -10px;\n}\n.weui-wepay-flow__intro-right {\n  left: 36px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  position: absolute;\n}\n.weui-wepay-flow__intro-right:after {\n  border-color: transparent #ff8a00 transparent transparent;\n  border-style: solid;\n  border-width: 3px 5px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  left: -10px;\n}\n.weui-wepay-flow__intro-left {\n  right: 36px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  position: absolute;\n}\n.weui-wepay-flow__intro-left:after {\n  border-color: transparent transparent transparent #ff8a00;\n  border-style: solid;\n  border-width: 3px 5px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  right: -10px;\n}\n[class^="weui-wepay-flow__info-"] {\n  height: 14px;\n  line-height: 14px;\n  background-color: #09bb07;\n  font-size: 10px;\n  color: #FFF;\n  white-space: nowrap;\n  padding: 0 6px;\n  position: relative;\n  border-radius: 2px;\n  position: absolute;\n}\n[class^="weui-wepay-flow__info-"]:after {\n  content: \'\';\n  display: inline-block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  font-size: 0;\n  position: absolute;\n}\n.weui-wepay-flow__line_ing [class^="weui-wepay-flow__info-"] {\n  display: block;\n}\n.weui-wepay-flow__info-top {\n  display: none;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  bottom: 11px;\n}\n.weui-wepay-flow__line_ing .weui-wepay-flow__info-top {\n  display: block;\n}\n.weui-wepay-flow__info-top:after {\n  border-color: #09bb07 transparent transparent transparent;\n  border-style: solid;\n  border-width: 5px 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  bottom: -10px;\n}\n.weui-wepay-flow__info-bottom {\n  display: none;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  top: 11px;\n}\n.weui-wepay-flow__line_ing .weui-wepay-flow__info-bottom {\n  display: block;\n}\n.weui-wepay-flow__info-bottom:after {\n  border-color: transparent transparent #09bb07 transparent;\n  border-style: dashed dashed solid dashed;\n  border-width: 5px 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  top: -10px;\n}\n.weui-wepay-flow__info-left {\n  display: none;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  right: 12px;\n}\n.weui-wepay-flow__line_ing .weui-wepay-flow__info-left {\n  display: block;\n}\n.weui-wepay-flow__info-left:after {\n  border-color: transparent transparent transparent #09bb07;\n  border-style: solid;\n  border-width: 3px 5px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  right: -10px;\n}\n.weui-wepay-flow__info-right {\n  display: none;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  left: 12px;\n}\n.weui-wepay-flow__line_ing .weui-wepay-flow__info-right {\n  display: block;\n}\n.weui-wepay-flow__info-right:after {\n  border-color: transparent #09bb07 transparent transparent;\n  border-style: solid;\n  border-width: 3px 5px;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  left: -10px;\n}\n.weui-wepay-flow__line {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  background-color: #E2E2E2;\n  height: 3px;\n  position: relative;\n}\n.weui-wepay-flow__title {\n  color: #999999;\n  font-size: 14px;\n  font-weight: normal;\n}\n.weui-wepay-flow__info {\n  color: #999999;\n  font-size: 12px;\n}\n.weui-wepay-flow__process {\n  display: none;\n  background-color: #09bb07;\n  height: 3px;\n  position: relative;\n}\n.weui-wepay-flow__line_ing .weui-wepay-flow__process {\n  display: block;\n  width: 50%;\n}\n.weui-wepay-flow__line_done .weui-wepay-flow__process {\n  display: block;\n}\n.weui-wepay-flow_custom .weui-wepay-flow__bd {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.weui-wepay-flow_custom .weui-wepay-flow__line {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n          flex: none;\n  width: 100px;\n}\n.weui-wepay-flow_vertical .weui-wepay-flow__bd {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n}\n.weui-wepay-flow_vertical .weui-wepay-flow__line {\n  height: auto;\n  width: 3px;\n}\n.weui-wepay-flow_vertical .weui-wepay-flow__line_ing .weui-wepay-flow__process {\n  height: 50%;\n}\n.weui-wepay-flow_vertical .weui-wepay-flow__process {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.weui-wepay-flow_vertical .weui-wepay-flow__line_done .weui-wepay-flow__process {\n  height: 100%;\n}\n.weui-wepay-flow_vertical-custom .weui-wepay-flow__bd {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n}\n.weui-wepay-flow_vertical-custom .weui-wepay-flow__line {\n  width: 3px;\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n          flex: none;\n}\n.weui-wepay-flow_vertical-custom .weui-wepay-flow__line_ing .weui-wepay-flow__process {\n  height: 50%;\n}\n.weui-wepay-flow_vertical-custom .weui-wepay-flow__process {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.weui-wepay-flow_vertical-custom .weui-wepay-flow__line_done .weui-wepay-flow__process {\n  height: 100%;\n}\n.weui-wepay-flow-auto {\n  position: relative;\n}\n.weui-wepay-flow-auto__bd {\n  position: relative;\n}\n.weui-wepay-flow-auto__state {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  font-size: 10px;\n  line-height: 14px;\n  text-align: center;\n  color: #FFF;\n  border-radius: 7px;\n  background-color: #E2E2E2;\n  z-index: 2;\n}\n.weui-wepay-flow-auto__state_on {\n  background-color: #09bb07;\n}\n.weui-wepay-flow-auto__line {\n  position: absolute;\n  width: 2px;\n  background-color: #dddddd;\n  top: 10px;\n  bottom: -4px;\n  left: 6px;\n  z-index: 1;\n}\n.weui-wepay-flow-auto__line_on {\n  background-color: #09bb07;\n}\n.weui-wepay-flow-auto__li {\n  position: relative;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n.weui-wepay-flow-auto__title {\n  color: #999999;\n  font-size: 14px;\n  font-weight: normal;\n}\n.weui-wepay-flow-auto__info {\n  color: #999999;\n  font-size: 12px;\n}\n',""])},1112:function(n,t,e){"use strict";t.a={name:"flow",props:{orientation:{type:String,default:"horizontal"}}}},1113:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"weui-wepay-flow",class:{"weui-wepay-flow_vertical":"vertical"===n.orientation}},[e("div",{staticClass:"weui-wepay-flow__bd"},[n._t("default")],2)])},o=[],a={render:i,staticRenderFns:o};t.a=a},1114:function(n,t,e){"use strict";var i=e(1115),o=e(1116),a=e(0),l=a(i.a,o.a,!1,null,null,null);t.a=l.exports},1115:function(n,t,e){"use strict";t.a={name:"flow-state",props:{state:[String,Number],title:String,isDone:Boolean},computed:{titlePosition:function(){return"vertical"===this.$parent.orientation?"right":"bottom"}}}},1116:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"weui-wepay-flow__li",class:{"weui-wepay-flow__li_done":n.isDone}},[e("div",{staticClass:"weui-wepay-flow__state"},[n._v(n._s(n.state))]),n._v(" "),e("p",{class:"weui-wepay-flow__title-"+n.titlePosition},[n._v(n._s(n.title))])])},o=[],a={render:i,staticRenderFns:o};t.a=a},1117:function(n,t,e){"use strict";var i=e(1118),o=e(1119),a=e(0),l=a(i.a,o.a,!1,null,null,null);t.a=l.exports},1118:function(n,t,e){"use strict";t.a={name:"flow-line",props:{tip:String,tipDirection:String,isDone:Boolean,lineSpan:[Number,String],processSpan:[Number,String]},methods:{getWidth:function(n){return"number"==typeof n?n+"%":n}},computed:{finalTipDirection:function(){return void 0===this.tipDirection?"vertical"===this.$parent.orientation?"left":"top":this.tipDirection},styles:function(){if(this.lineSpan){var n=this.$parent.orientation,t={flex:"none","-webkit-box-flex":"0"};return"vertical"===n&&(t.width="3px"),this.lineSpan&&("vertical"===n?t.height=this.getWidth(this.lineSpan):t.width=this.getWidth(this.lineSpan)),t}},classes:function(){return this.isDone?"weui-wepay-flow__line_done":!this.isDone&&this.tip?"weui-wepay-flow__line_ing":void 0}}}},1119:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"weui-wepay-flow__line",class:n.classes,style:n.styles},[e("div",{staticClass:"weui-wepay-flow__process",style:{width:n.getWidth(this.processSpan)}}),n._v(" "),n.tip?e("div",{class:"weui-wepay-flow__info-"+n.finalTipDirection,style:{left:n.getWidth(this.processSpan)}},[n._v(n._s(n.tip))]):n._e()])},o=[],a={render:i,staticRenderFns:o};t.a=a},1120:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("flow",[e("flow-state",{attrs:{state:"1",title:"已付款","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"is-done":""}}),n._v(" "),e("flow-state",{attrs:{state:"2",title:"已发货","is-done":""}}),n._v(" "),e("flow-line",{attrs:{tip:"进行中"}}),n._v(" "),e("flow-state",{attrs:{state:"3",title:"待收货"}}),n._v(" "),e("flow-line"),n._v(" "),e("flow-state",{attrs:{state:"4",title:"完成"}})],1),n._v(" "),e("flow",[e("flow-state",{attrs:{title:"已付款","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"is-done":"","line-span":15}}),n._v(" "),e("flow-state",{attrs:{title:"已发货","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"is-done":"","line-span":30}}),n._v(" "),e("flow-state",{attrs:{title:"待收货","is-done":""}}),n._v(" "),e("flow-line",{attrs:{tip:"进行中","tip-direction":"bottom","line-span":45,"process-span":60}}),n._v(" "),e("flow-state",{attrs:{title:"完成"}})],1),n._v(" "),e("flow",{staticStyle:{height:"250px"},attrs:{orientation:"vertical"}},[e("flow-state",{attrs:{state:"1",title:"已付款","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"is-done":""}}),n._v(" "),e("flow-state",{attrs:{state:"2",title:"已发货","is-done":""}}),n._v(" "),e("flow-line",{attrs:{tip:"进行中"}}),n._v(" "),e("flow-state",{attrs:{state:"3",title:"待收货"}}),n._v(" "),e("flow-line"),n._v(" "),e("flow-state",{attrs:{state:"4",title:"完成"}})],1),n._v(" "),e("flow",{staticStyle:{height:"200px"},attrs:{orientation:"vertical"}},[e("flow-state",{attrs:{state:"1",title:"已付款","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"is-done":"","line-span":15}}),n._v(" "),e("flow-state",{attrs:{state:"2",title:"已发货","is-done":""}}),n._v(" "),e("flow-line",{attrs:{"line-span":30}}),n._v(" "),e("flow-state",{attrs:{state:"3",title:"待收货"}}),n._v(" "),e("flow-line",{attrs:{"line-span":45}}),n._v(" "),e("flow-state",{attrs:{state:"4",title:"完成"}})],1)],1)},o=[],a={render:i,staticRenderFns:o};t.a=a},327:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(1108),o=e(1120),a=e(0),l=a(i.a,o.a,!1,null,null,null);t.default=l.exports}});