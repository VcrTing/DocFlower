webpackJsonp([0],{"/QE2":function(t,e){},"21rD":function(t,e){},"3YjC":function(t,e,n){"use strict";var s={name:"",props:{ex_class:{type:String}},data:function(){return{}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"py-0 ma-0 pa-0",attrs:{cols:"12"}},[e("div",{staticClass:"qiong-line",class:this.ex_class})])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("rCJK")},"data-v-8711cf2c",null);e.a=r.exports},"4ypK":function(t,e,n){"use strict";var s={props:{eva:{type:Number,default:1},icon:{type:String,default:"mdi-chevron-left"},color:{type:String,default:""},extra_calss:{type:String,default:""},is_fixed:{type:Boolean,default:!1},l_or_r:{type:Boolean,default:!0},is_small:{type:Boolean,default:!0}},name:"",data:function(){return{}},methods:{done:function(t){this.$emit("done_Father",t)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-2 z-L",class:t.extra_calss,attrs:{fab:"",color:t.color,fixed:t.is_fixed,left:t.l_or_r,right:!t.l_or_r,"x-small":t.is_small,elevation:t.eva},on:{click:t.done}},[n("v-icon",[t._v("\n            "+t._s(t.icon)+"\n        ")])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("EF23")},"data-v-316e077c",null);e.a=r.exports},"6I/9":function(t,e){},"6be/":function(t,e){},"7DDG":function(t,e){},"7qUZ":function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"})},staticRenderFns:[]};var i=n("VU/8")({name:"LoadingSmall"},s,!1,function(t){n("acM9")},"data-v-aaa72676",null);e.a=i.exports},"8A96":function(t,e,n){"use strict";var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),o={name:"",data:function(){return{buyed:!1}},methods:{buyLoading:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return a()(i.a.mark(function n(){var s,r;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s={chronu:t.$store.state.chronus.id,_sort:"published_at:DESC"},e?s["users_permissions_user.unid"]=e:s.users_permissions_user=t.$store.state.user_backend.id,n.next=4,t.conn.get(t.api.buys,t.$store.state.token,s);case 4:return(r=n.sent)&&(r.length>0?t.buyed=!0:t.buyed=!1),n.abrupt("return",r);case 7:case"end":return n.stop()}},n,t)}))()}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")(o,c,!1,function(t){n("F1c+")},"data-v-20b11494",null);e.a=d.exports},"8lY0":function(t,e){},AE2U:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[this._t("default")],2)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"",data:function(){return{}}},s,!1,function(t){n("nQ4x")},"data-v-0a956d69",null);e.a=i.exports},BRaR:function(t,e){},EF23:function(t,e){},"F1c+":function(t,e){},F3DL:function(t,e){},FnJI:function(t,e,n){"use strict";var s=n("n7zJ"),i=n("oKCz"),r={components:{Loading:s.a,QiongLoading:i.a},props:{item:{type:Object},loading:{type:Number,default:0}},name:"",data:function(){return{}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("div",{staticClass:"qld-content"},[this._t("default")],2):e("qiong-loading",{attrs:{bigger:this.loading}})},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("u6sY")},"data-v-2118692a",null);e.a=o.exports},FqbQ:function(t,e){},H5yQ:function(t,e){},OcnW:function(t,e){},OhMI:function(t,e,n){"use strict";var s=n("Um5R"),i=n("3YjC"),r={name:"",props:{need_space:{type:Boolean,default:!0},cols:{type:Number,default:12},extra_class:{type:String}},components:{QiongSpace:s.a,QiongPageLing:i.a},data:function(){return{}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",{staticClass:"qiong-panel_element qiong-pl-25 qiong-pr-20",class:this.extra_class},[e("v-col",{staticClass:"px-0 qpe_inner py-0 br-simple",attrs:{cols:this.cols}},[this._t("default")],2),this._v(" "),this.need_space?e("v-col",[e("qiong-space",{attrs:{space:"7vh"}},[this._v(" ")])],1):this._e()],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("k3lC")},"data-v-76bb0f04",null);e.a=o.exports},P6X9:function(t,e){},PAEp:function(t,e){},SPw3:function(t,e){},SfTN:function(t,e){},"T/Tv":function(t,e,n){"use strict";var s=n("zHag"),i=n("3YjC"),r={components:{QiongPageHeader:s.a,QiongPageLing:i.a},name:"",props:{extra_calss:{type:String},cols:{type:Number,default:12}},data:function(){return{}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{staticClass:"qiong-pl-25 qiong-pr-20"},[e("v-col",{staticClass:"fs-20",class:this.extra_calss},[this._t("default")],2)],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("tMOl")},"data-v-01be3e43",null);e.a=o.exports},T5vK:function(t,e,n){"use strict";var s={props:{icon:{type:String,default:"mdi-chevron-double-right"},color:{type:String,default:""},size:{type:String,default:""},space:{type:String,default:"qiong-icon-td"},arg:{type:Object}},name:"",data:function(){return{}},methods:{done:function(){this.$emit("done_Father",this.arg)}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-btn",{staticClass:"mx-2",class:this.space,attrs:{fab:"",icon:"","x-small":"",color:this.color},on:{click:this.done}},[e("v-icon",{class:this.size},[this._v("\n            "+this._s(this.icon)+"\n        ")])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("8lY0")},"data-v-3547cd82",null);e.a=r.exports},TdNa:function(t,e,n){"use strict";var s=n("3YjC"),i=n("Um5R"),r={props:{res:{type:Array},bigger:{type:Number,default:1}},name:"",components:{QiongPageLing:s.a,QiongSpace:i.a},data:function(){return{test:[{txt:"奖金",content:"HK&nbsp;135.0"},{txt:"奖金",content:"HK&nbsp;135.0"}]}},mounted:function(){}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-3 qiong-pt-10"},[1==t.bigger?n("qiong-page-ling"):n("qiong-page-ling",{attrs:{ex_class:"qiong-lineXL"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),n("div",{staticClass:"text-right"},[t._t("default")],2),t._v(" "),1==t.bigger?n("div",t._l(t.res,function(e,s){return n("div",{key:s,staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-63"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v("\n                "+t._s(e.txt)),n("span",{staticClass:"qiong-txt-18"},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"qiong-wide-17 pr-0 text-right qiong-txt-18 ",domProps:{innerHTML:t._s(e.content)}})])}),0):n("div",{staticClass:"text-right"},t._l(t.res,function(e,s){return n("div",{key:s,staticClass:"qiong-tr qiong-txt-tr my-0 py-0"},[n("div",{staticClass:"qiong-wide-70"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v("\n                "+t._s(e.txt)),n("span",{staticClass:"qiong-txt-18"},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"qiong-wide-10 pr-0 qiong-txt-18 ",domProps:{innerHTML:t._s(e.content)}})])}),0),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.7vh"}})],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("kCwU")},"data-v-247307b1",null);e.a=o.exports},Um5R:function(t,e,n){"use strict";var s={props:{space:{type:String,default:"1vw"}},name:"",data:function(){return{}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full"},[e("div",{style:{height:this.space}})])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("yek4")},"data-v-3e1b4bf2",null);e.a=r.exports},ZYHY:function(t,e){},acM9:function(t,e){},ahKV:function(t,e){},cEqP:function(t,e){},cMDu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("oKCz"),i=n("Um5R"),r=n("mvHQ"),a=n.n(r),o=n("Xxa5"),c=n.n(o),d=n("exGp"),u=n.n(d),l={name:"",data:function(){return{bonused:!1}},methods:{bonusLoading:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return u()(c.a.mark(function n(){var s,i;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s={chronu:t.$store.state.chronus.id,_sort:"published_at:DESC"},e?s["user.unid"]=e:s.user=t.$store.state.user_backend.id,n.next=4,t.conn.get(t.api.bonus,t.$store.state.token,s);case 4:return(i=n.sent)&&(i.length>0?t.bonused=!0:t.bonused=!1),n.abrupt("return",i);case 7:case"end":return n.stop()}},n,t)}))()}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var _=n("VU/8")(l,v,!1,function(t){n("swdc")},"data-v-17c7bb7b",null).exports,f=n("8A96"),p={name:"",data:function(){return{chronued:!1}},methods:{chronuLoading:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return u()(c.a.mark(function n(){var s,i;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(s={}).id=e||t.$store.state.chronus.id,n.next=4,t.conn.get(t.api.chronus,t.$store.state.token,s);case 4:return(i=n.sent)&&(i.length>0?t.chronued=!0:t.chronued=!1),n.abrupt("return",i);case 7:case"end":return n.stop()}},n,t)}))()}}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var h=n("VU/8")(p,g,!1,function(t){n("SPw3")},"data-v-182e8981",null).exports,m={name:"",data:function(){return{userd:!1}},methods:{userLoading:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return u()(c.a.mark(function n(){var s,i;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(s={}).unid=e||t.$store.state.user_backend.unid,n.next=4,t.conn.get(t.api.users,t.$store.state.token,s);case 4:return(i=n.sent)&&(i.length>0?t.userd=!0:t.userd=!1),n.abrupt("return",i);case 7:case"end":return n.stop()}},n,t)}))()}}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var C=n("VU/8")(m,b,!1,function(t){n("ipfU")},"data-v-1e2bbfb6",null).exports,q={name:"",props:{need_res:{type:Boolean,default:!1},res:{type:String}},data:function(){return{}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-td pdf-px pdf-py"},[n("div",{staticClass:"qiong-wide-50 pr-0 fw-b"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"qiong-wide-28"}),t._v(" "),t.need_res?n("div",{staticClass:"qiong-wide-9 text-right pr-0"},[t._v("\n        Total\n    ")]):t._e(),t._v(" "),t.need_res?n("div",{staticClass:"qiong-wide-13 text-right pdf-px"},[t._v("\n        "+t._s(t.res)+"\n    ")]):t._e()])},staticRenderFns:[]};var y=n("VU/8")(q,w,!1,function(t){n("vhR7")},"data-v-3d11777e",null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pdf-font",attrs:{fluid:""}},[t._t("starter"),t._v(" "),n("v-row",{staticClass:"pb-6 mb-6 px-6"},[n("v-col",{staticClass:"mt-L",attrs:{cols:"12"}},[t._t("header")],2),t._v(" "),n("v-col",{staticClass:"ma-0 pt-1 mt-1 fs-L",attrs:{cols:"12"}},[t._t("content_1")],2),t._v(" "),n("v-col",{staticClass:"ma-0 pt-1 mt-1 fs-L",attrs:{cols:"12"}},[t._t("content_2")],2),t._v(" "),n("v-col",{staticClass:"mt-XL",attrs:{cols:"12"}},[t._t("footer")],2)],1)],2)},staticRenderFns:[]};var E=n("VU/8")({name:"",data:function(){return{}}},x,!1,function(t){n("cEqP")},"data-v-6f5026a2",null).exports,$={props:{is_block:{type:Boolean,default:!1},is_center:{type:Boolean,default:!0},size:{type:String,default:"24px"}},name:"",data:function(){return{}}},P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"title pl-4 mt-2 pt-2",class:{"text-center":this.is_center,"d-inline":this.is_block},style:{"font-size":this.size}},[this._t("default")],2)},staticRenderFns:[]};var U=n("VU/8")($,P,!1,function(t){n("oeux")},"data-v-58947e4f",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pdf-panel pdf-px"},[this._t("default")],2)},staticRenderFns:[]};var S=n("VU/8")({name:"",data:function(){return{}}},R,!1,function(t){n("g87y")},"data-v-2a6d2c93",null).exports,F={props:{res:{type:Array}},name:"",components:{},data:function(){return{test:[{txt:"奖金",content:"HK&nbsp;135.0"},{txt:"奖金",content:"HK&nbsp;135.0"}]}},mounted:function(){}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-right"},t._l(t.res,function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-60"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-28"},[t._v("\n            "+t._s(e.txt)+":\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12 pr-0 fw-b",domProps:{innerHTML:t._s(e.content)}})])}),0)},staticRenderFns:[]};var k=n("VU/8")(F,L,!1,function(t){n("PAEp")},"data-v-6587dd60",null).exports,O={components:{PdfPanel:S,QiongSpace:i.a,PdfResult:k},name:"",props:{_childs_s:{type:Array},_user:{type:Object},_mine:{type:Object},_bonus:{type:Object}},created:function(){this.ratios=this.bonus.conf.RECOMMEND_RATIOS},data:function(){return{buying:null,ratios:[],total:0}},mounted:function(){this.buying=this.buyingLoading()},computed:{result:function(){return this.total=this._mine.bonus.usd_active_house/this.bonus.conf.ACTIVE_USD,[{txt:"Total Active Branch Credit",content:""+this.total},{txt:"Total Bonus",content:"US$ "+this._mine.bonus.usd_active_house}]}},methods:{buyingLoading:function(){var t,e=this,n=[];return this._childs_s.filter(function(t){if(t.index-e._mine.index<=2)return!0}).map((t=u()(c.a.mark(function t(s){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.$store.state.chronus.id,users_permissions_user:s.id,_sort:"published_at:DESC"});case 2:(i=t.sent)&&i.map(function(t){t.user_sponser=s,n.push(t)});case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)})),n}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pdf-panel",[n("div",{staticClass:"qiong-tr"},[n("div",{staticClass:"qiong-wide-10"},[t._v("Member ID")]),t._v(" "),n("div",{staticClass:"qiong-wide-40"},[t._v("Member Name")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("Payment Level")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("Order No.")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("Order Pv")]),t._v(" "),n("div",{staticClass:"qiong-wide-12 pr-0"},[t._v("Bonus Pv")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("div",t._l(t.buying,function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-10"},[t._v(t._s(e.users_permissions_user.number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-40"},[t._v(t._s(e.users_permissions_user.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.user_sponser.index-t._mine.index))]),t._v(" "),n("div",{staticClass:"qiong-wide-13 pr-0"},[t._v(t._s(e.order_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(e.product.pv*e.num)+" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(e.user_sponser.bonus.usd_active_house))])])}),0)],1),t._v(" "),n("pdf-result",{attrs:{res:t.result}})],1)},staticRenderFns:[]};var V=n("VU/8")(O,M,!1,function(t){n("ahKV")},"data-v-5983ac7d",null).exports,B={components:{PdfPanel:S,QiongSpace:i.a,PdfResult:k},name:"",props:{_childs_e:{type:Array},_user:{type:Object},_mine:{type:Object},_bonus:{type:Object}},created:function(){this.ratios=this.bonus.conf.RECOMMEND_RATIOS},data:function(){return{buying:null,ratios:[],total:0}},mounted:function(){this.buying=this.buyingLoading()},computed:{result:function(){return[{txt:"Total Pv",content:""+this.total},{txt:"Total Bonus",content:"US$ "+this._mine.bonus.usd_recommend}]}},methods:{buyingLoading:function(){var t,e=this,n=[];return this._childs_e.filter(function(t){if(t.ipv_first>0)return!0}).map((t=u()(c.a.mark(function t(s){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.$store.state.chronus.id,users_permissions_user:s.id,_sort:"published_at:DESC"});case 2:(i=t.sent)&&i.map(function(t){t.user_enroller=s,n.push(t),e.total=e.view.floatAdd(e.total,t.product.pv*t.num)});case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)})),n}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pdf-panel",[n("div",{staticClass:"qiong-tr"},[n("div",{staticClass:"qiong-wide-10"},[t._v("Member ID")]),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v("Member Name")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 pr-0"},[t._v("Payment Level")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("Order No.")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("Order Pv")]),t._v(" "),n("div",{staticClass:"qiong-wide-16 pr-0"},[t._v("Bonus Percentage")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("Bonus Pv")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("div",t._l(t.buying,function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-10"},[t._v(t._s(e.users_permissions_user.number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v(t._s(e.users_permissions_user.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.user_enroller.index-t._mine.index))]),t._v(" "),n("div",{staticClass:"qiong-wide-10 pr-0"},[t._v(t._s(e.order_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(t._s(e.product.pv*e.num)+" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-16"},[t._v(" "+t._s(t.view.floatMul(t.ratios[e.user_enroller.index-t._mine.index-1],100))+"%")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(t.view.floatMul(t.ratios[e.user_enroller.index-t._mine.index-1],e.user_enroller.ipv)))])])}),0)],1),t._v(" "),n("pdf-result",{attrs:{res:t.result}})],1)},staticRenderFns:[]};var D=n("VU/8")(B,N,!1,function(t){n("s1Ef")},"data-v-61517547",null).exports,j={props:{is_print:{type:Boolean}},name:"",data:function(){return{}},mounted:function(){this.is_print&&setTimeout(function(t){print()},2400)}},T={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var Q=n("VU/8")(j,T,!1,function(t){n("P6X9")},"data-v-767cad2f",null).exports,A={components:{PdfPanel:S,QiongSpace:i.a,PdfPrinter:Q,PdfResult:k},name:"",props:{_childs_s:{type:Array},_user:{type:Object},_mine:{type:Object},_bonus:{type:Object}},created:function(){this.ratios=this.bonus.conf.RECOMMEND_RATIOS},data:function(){return{buying:null,ratios:[],ken:-1,total:0}},mounted:function(){this.buying=this.buyingLoading()},computed:{result:function(){return[{txt:"Total Pv",content:""+this.total},{txt:"Total Bonus",content:"US$ "+this._mine.bonus.usd_team_layer}]}},methods:{buyingLoading:function(){var t,e=this,n=[];return this._childs_s.filter(function(t){if(t.index-e._mine.index<=2)return!0}).map((t=u()(c.a.mark(function t(s){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.$store.state.chronus.id,users_permissions_user:s.id,_sort:"published_at:DESC"});case 2:(i=t.sent)&&i.map(function(t){t.user_sponser=s,n.push(t),e.ken+=1,e.total=e.view.floatAdd(e.total,t.product.pv*t.num)});case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)})),n}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pdf-panel",[n("div",{staticClass:"qiong-tr"},[n("div",{staticClass:"qiong-wide-10"},[t._v("Member ID")]),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v("Member Name")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 pr-0"},[t._v("Payment Level")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("Order No.")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("Order Pv")]),t._v(" "),n("div",{staticClass:"qiong-wide-16 pr-0"},[t._v("Bonus Percentage")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("Bonus Pv")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("div",t._l(t.buying,function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-10"},[t._v(t._s(e.users_permissions_user.number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v(t._s(e.users_permissions_user.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.user_sponser.temporary_index))]),t._v(" "),n("div",{staticClass:"qiong-wide-10 pr-0"},[t._v(t._s(e.order_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(t._s(e.product.pv*e.num)+" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-16"},[t._v(" "+t._s(t.view.floatMul(t._mine.vip.ratio[e.user_sponser.temporary_index-1],100))+"%")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.view.floatMul(t._mine.vip.ratio[e.user_sponser.temporary_index-1],e.user_sponser.ipv)))]),t._v(" "),s+1===t.ken?n("div",{staticClass:"qiong-wide-1"}):t._e()])}),0)],1),t._v(" "),t.buying?n("pdf-printer",{attrs:{is_print:!0}}):t._e(),t._v(" "),n("pdf-result",{attrs:{res:t.result}})],1)},staticRenderFns:[]};var H=n("VU/8")(A,I,!1,function(t){n("6be/")},"data-v-41d0b5c2",null).exports,z={components:{PdfPanel:S,QiongSpace:i.a},name:"",props:{_buy:{type:Array},_user:{type:Object},_mine:{type:Object},_bonus:{type:Object}},data:function(){return{}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pdf-panel",[n("div",[n("div",{staticClass:"qiong-tr"},[n("div",{staticClass:"qiong-wide-24"},[t._v("Order Date:")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("Member ID")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("Role")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("Order No.")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("Order Points")]),t._v(" "),n("div",{staticClass:"qiong-wide-19"})]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("div",t._l(t._buy,function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-24"},[t._v(t._s(t.view.ser_timed(e.buy_time,!0)))]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v(t._s(e.origin_buyer_number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(t.bonus.has.order_role(e.role)))]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v(t._s(e.order_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-15 pr-0"},[t._v(t._s(e.num*e.product.pv)+"PV")]),t._v(" "),n("div",{staticClass:"qiong-wide-19"})])}),0)],1)])},staticRenderFns:[]};var Y=n("VU/8")(z,K,!1,function(t){n("ZYHY")},"data-v-13413871",null).exports,X={name:"",components:{PdfHeader:y,PdfPanel:S},props:{_mine:{type:Object}},data:function(){return{}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pdf-header",[t._v("Bonus Eligibility: \n        "),t._mine.ipv>=t.bonus.conf.USER_PV_LIMIT?n("span",[t._v("Active")]):n("span",[t._v("Non Active")])]),t._v(" "),n("div",{staticClass:"pdf-px"},[n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-24"},[t._v("\n                Individual Credit: "+t._s(t._mine.ipv)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-26"},[t._v("\n                Organization Credit: "+t._s(t._mine.son_pv)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-40"},[t._v("\n                Direct Enroll Member (active): "+t._s(t._mine.son_can_num)+"\n            ")])])])],1)},staticRenderFns:[]};var J=n("VU/8")(X,G,!1,function(t){n("/QE2")},"data-v-96247640",null).exports,Z={name:"",props:{me:{type:Object}},computed:{resault:function(){var t=0;return this.me&&(t=this.view.floatAdd(this.me.bonus.usd_recommend,this.me.bonus.usd_team_layer),t=this.view.floatAdd(t,this.me.bonus.usd_active_house)),t}},data:function(){return{}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fs-L"},[n("div",{staticClass:"pdf-px"},[n("div",{staticClass:"fs-XL fw-b"},[t._v("NOTES")]),t._v(" "),n("div",[t._v("\n            1. Current month excahnge rate          \n            US$    \n                            "),n("span",{staticClass:"fw-b"},[t._v("\n                                "+t._s(t.resault)+"\n                            ")])]),t._v(" "),n("div",[t._v("\n            2. Please examine this statement at once. If no error is reported within 14 days, it will be considered as correct.\n        ")]),t._v(" "),n("div",[t._v("\n            3. Please print out this statement for your own retention.\n        ")])])])},staticRenderFns:[]};var tt=n("VU/8")(Z,W,!1,function(t){n("iLgg")},"data-v-392eb98c",null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qiong-logo"},[e("img",{attrs:{src:"/static/Logo_S.png"}})])}]};var nt={components:{QiongLogo:n("VU/8")({name:"",data:function(){return{}}},et,!1,function(t){n("uvN9")},"data-v-367e04e6",null).exports},name:"",data:function(){return{icon:""}},mounted:function(){document.title="Essence Global Co., Limited"}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-8"},[e("qiong-logo")],1),this._v(" "),e("div",{staticClass:"qiong-wide-12"}),this._v(" "),e("div",{staticClass:"qiong-wide-60 fs-XXL text-center logo-title"},[this._v("\n            Essence Global Co. Limited\n        ")]),this._v(" "),e("div",{staticClass:"qiong-wide-20"})]),this._v(" "),e("div",{staticClass:"lt-inner"},[this._v("Bonus Statement")])])},staticRenderFns:[]};var it=n("VU/8")(nt,st,!1,function(t){n("F3DL")},"data-v-0685e932",null).exports,rt={components:{PdfPanel:S,LevelViewing:n("jOJ2").a},name:"",props:{_user:{type:Object},_mine:{type:Object},_bonus:{type:Object}},data:function(){return{}}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pdf-panel",[t._bonus?n("div",[n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-30"},[t._v("\n                User Name: "+t._s(t._user.username)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v("\n                Member ID: "+t._s(t._user.number_code)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-30"}),t._v(" "),n("div",{staticClass:"qiong-wide-10"})]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-30"},[t._v("\n                Payment Title: "),n("level-viewing",{staticClass:"d-inline",attrs:{item:t._mine.vip.named+"_"+t._mine.vip.star}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-70"},[t._v("\n                Member Name: "+t._s(t._user.display_name)+"\n            ")])]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-30"},[t._v("\n                Print Date: "+t._s(t.view.getTodayEn())+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-70"},[t._v("\n                Bonus Period: "+t._s(t.view.ser_timed(t._bonus.chronu.start,!0))+"至 "+t._s(t.view.ser_timed(t._bonus.chronu.end,!0))+"\n            ")])])]):t._e()])},staticRenderFns:[]};var ot=n("VU/8")(rt,at,!1,function(t){n("H5yQ")},"data-v-15965192",null).exports,ct={props:{_unid:{type:String,default:""}},components:{PdfTemplate:E,UiPageHeader:U,PdfUserFooter:tt,BuyMe:f.a,BonusMe:_,UserMe:C,PdfUserMsg:ot,ChronuMe:h,PdfHeader:y,QiongSpace:i.a,PdfUserBuy:Y,PdfUserCredit:J,PdfUserEnrollerRef:D,PdfUserActiveHouse:V,PdfUserTeamLayer:H,PdfUserHeader:it},name:"",data:function(){return{unid:null,chronu_id:null,bonusing:null,buying:null,user:null,mine:null,chornu:null,childrens_sponser:null,childrens_enroller:null}},created:function(){this.valuation(this._unid)},mounted:function(){console.log("打印"),this.dataLoading()},methods:{valuation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.unid=t||this.$store.state.user_backend.unid},dataLoading:function(){var t=this;return u()(c.a.mark(function e(){var n,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.refBonusMe.bonusLoading(t.unid);case 2:return n=e.sent,e.next=5,t.$refs.refBuyMe.buyLoading(t.unid);case 5:return t.buying=e.sent,e.next=8,t.$refs.refUserMe.userLoading(t.unid);case 8:s=e.sent,t.user=s[0],t.bonusing=n[0],console.log(t.unid),t.lockingMine(),t.switchChildren("SPONSER"),t.switchChildren("ENROLLER"),t.$refs.refBonusMe.bonused&&t.$refs.refBuyMe.buyed,console.log("fecthing DATA =",t.buying,"bonus =",t.bonusing,t.childrens_enroller);case 17:case"end":return e.stop()}},e,t)}))()},lockingMine:function(){var t=this;return u()(c.a.mark(function e(){var n,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,s=t.$store.state.users_sponser,i=t.$store.state.transfer,!s){e.next=9;break}return t.bonus._build_res(s,i,function(t,e){t.unid==n.unid&&(n.mine=JSON.parse(a()(t)))}),e.next=7,t.bonus.team_layer([t.mine],i);case 7:return e.next=9,t.bonus.recommend([t.mine],i);case 9:case"end":return e.stop()}},e,t)}))()},switchChildren:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER",e=this,n=this.$store.state.transfer;"SPONSER"==t?(this.$store.state.users_sponser,this.childrens_sponser=[],this.bonus._build_res([this.mine],n,function(t,n){t.unid!=e.mine.unid&&e.childrens_sponser.push(t)})):(this.$store.state.users_enroller,this.childrens_enroller=[],this.bonus._build_res([this.mine],n,function(t,n){t.unid!=e.mine.unid&&e.childrens_enroller.push(t)}))}}},dt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pdf-template",[n("div",{attrs:{slot:"starter"},slot:"starter"},[n("buy-me",{ref:"refBuyMe"}),t._v(" "),n("user-me",{ref:"refUserMe"}),t._v(" "),n("bonus-me",{ref:"refBonusMe"}),t._v(" "),n("chronu-me",{attrs:{red:"refChronuMe"}})],1),t._v(" "),n("div",{attrs:{slot:"header"},slot:"header"},[n("pdf-user-header")],1),t._v(" "),n("div",{attrs:{slot:"content_1"},slot:"content_1"},[n("pdf-header",[t._v("Member Detail")]),t._v(" "),t.bonusing?n("pdf-user-msg",{attrs:{_mine:t.mine,_user:t.user,_bonus:t.bonusing}}):t._e(),t._v(" "),n("qiong-space",{attrs:{space:"1vw"}}),t._v(" "),n("pdf-header",[t._v("Individual Pv")]),t._v(" "),t.bonusing?n("pdf-user-buy",{attrs:{_buy:t.buying,_mine:t.mine,_user:t.user,_bonus:t.bonusing}}):t._e(),t._v(" "),n("qiong-space",{attrs:{space:"1vw"}}),t._v(" "),t.mine?n("pdf-user-credit",{attrs:{_mine:t.mine}}):t._e(),t._v(" "),n("qiong-space",{attrs:{space:"2.4vw"}})],1),t._v(" "),n("div",{attrs:{slot:"content_2"},slot:"content_2"},[n("div",{staticClass:"pdf-px"},[t._v("Bonus Detail")]),t._v(" "),n("qiong-space",{attrs:{space:"1.4vw"}}),t._v(" "),t.mine?n("pdf-header",[t._v("Enroller Referral bonus for first purchase")]):t._e(),t._v(" "),t.childrens_enroller?n("pdf-user-enroller-ref",{attrs:{_user:t.user,_mine:t.mine,_bonus:t.bonusing,_childs_e:t.childrens_enroller}}):t._e(),t._v(" "),n("qiong-space",{attrs:{space:"1.8vw"}}),t._v(" "),n("pdf-header",[t._v("Active Branch Bonus")]),t._v(" "),t.childrens_sponser?n("pdf-user-active-house",{attrs:{_user:t.user,_mine:t.mine,_bonus:t.bonusing,_childs_s:t.childrens_sponser}}):t._e(),t._v(" "),n("qiong-space",{attrs:{space:"1.8vw"}}),t._v(" "),n("pdf-header",[t._v("Organization Bonus")]),t._v(" "),t.childrens_sponser?n("pdf-user-team-layer",{attrs:{_user:t.user,_mine:t.mine,_bonus:t.bonusing,_childs_s:t.childrens_sponser}}):t._e()],1),t._v(" "),t.mine?n("pdf-user-footer",{attrs:{slot:"footer",me:t.mine},slot:"footer"}):t._e()],1)},staticRenderFns:[]};var ut={components:{PdfUserInner:n("VU/8")(ct,dt,!1,function(t){n("BRaR")},"data-v-04de7fc4",null).exports,QiongSpace:i.a,QiongLoading:s.a},name:"",data:function(){return{unid:null}},created:function(){var t=this.$route.query.unid;t&&(this.unid=t)},methods:{}},lt={render:function(){var t=this.$createElement,e=this._self._c||t;return this.unid?e("div",[this.$store.state.users_sponser?e("pdf-user-inner",{attrs:{_unid:this.unid}}):e("div",[e("qiong-space",{attrs:{space:"12vh"}}),this._v(" "),e("qiong-loading")],1)],1):e("div")},staticRenderFns:[]};var vt=n("VU/8")(ut,lt,!1,function(t){n("7DDG")},"data-v-10a4e459",null);e.default=vt.exports},g87y:function(t,e){},gk0o:function(t,e){},hG9S:function(t,e,n){"use strict";var s={props:{named:{type:String},index:{type:Number},need_icon:{type:Boolean,default:!0}},name:"",data:function(){return{}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline-block"},[t._l(t.index,function(t){return n("div",{key:t,staticClass:"qiong-named_space"})}),t._v(" "),n("div",{staticClass:"qiong-named_icon"},[t.need_icon?n("v-icon",{staticClass:"qiong-icon-primary-thin qiong-txt-shadow-T"},[t._v("mdi-minus-circle-outline")]):t._e()],1),t._v("\n    "+t._s(t.named)+"\n")],2)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("21rD")},"data-v-c637bfa4",null);e.a=r.exports},iLgg:function(t,e){},ipfU:function(t,e){},jOJ2:function(t,e,n){"use strict";var s=n("Xejt"),i={components:{LoadingSmall:n("7qUZ").a},props:{item:{type:String},def:{type:String,default:"普通成員"}},name:"",data:function(){return{}},mounted:function(){},computed:{result:function(){if(void 0!=this.item&&"undefined_0"!=this.item){var t=s.a.vip_view.split_code(this.item);return(t=s.a.vip_view.code_to_content(t))?t.name:this.def}return null}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return null!=this.result?e("div",{staticClass:"level-viewing"},[this._v(this._s(this.result))]):e("div",{staticClass:"level-viewing"},[this._v(this._s(this.def))])},staticRenderFns:[]};var a=n("VU/8")(i,r,!1,function(t){n("FqbQ")},"data-v-20a43590",null);e.a=a.exports},k3lC:function(t,e){},kCwU:function(t,e){},n7zJ:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading def-shadow"})},staticRenderFns:[]};var i=n("VU/8")({name:"LoadingSmall"},s,!1,function(t){n("6I/9")},"data-v-3d091060",null);e.a=i.exports},nQ4x:function(t,e){},oeux:function(t,e){},rCJK:function(t,e){},s1Ef:function(t,e){},swdc:function(t,e){},"tE//":function(t,e){},tMOl:function(t,e){},u6sY:function(t,e){},uvN9:function(t,e){},vhR7:function(t,e){},vs4I:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qiong-page_header"},[this._t("default"),this._v(" "),e("div",{staticClass:"qiong-line"})],2)},staticRenderFns:[]};var i=n("VU/8")({props:{},name:"",data:function(){return{}}},s,!1,function(t){n("SfTN")},"data-v-e744e502",null).exports,r=n("yGir"),a=n("4ypK"),o={components:{QiongPageLing:n("3YjC").a,QiongPageHeader:i,QiongIconFlat:r.a,QiongIconOutline:a.a},props:{},inject:["reload"],name:"",data:function(){return{}},methods:{done:function(){this.$router.back()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"qiong-pt-10"},[n("v-col",{staticClass:"pa-0 qiong-td",attrs:{cols:"12"}},[n("div",{staticClass:"qiong-wide-9"},[this.$route.query.id?n("qiong-icon-outline",{attrs:{is_fixed:!0,l_or_r:!1,is_small:!1,color:"primary",extra_calss:"right_20 top_80 mr-0 qiong-btn-fixed-shadow bg-fixed-btn"},on:{done_Father:t.done}}):t._e()],1),t._v(" "),n("div",{staticClass:"qiong-wide-90"},[n("div",{staticClass:"qiong-txt-page-header"},[t._t("header")],2)])]),t._v(" "),n("v-col",{staticClass:"pa-0 qiong-td"},[n("div",{staticClass:"qiong-wide-9"}),t._v(" "),n("div",{staticClass:"qiong-wide-91 qiong-pt-5"},[t._t("content")],2)]),t._v(" "),n("v-col",{staticClass:"qiong-td qiong-pt-10 mt-1",attrs:{cols:"12"}},[n("div",{staticClass:"qiong-wide-2"}),t._v(" "),n("div",{staticClass:"qiong-wide-96"},[n("qiong-page-ling")],1),t._v(" "),n("div",{staticClass:"qiong-wide-2"})])],1)},staticRenderFns:[]};var d=n("VU/8")(o,c,!1,function(t){n("OcnW")},"data-v-49819bf8",null);e.a=d.exports},yGir:function(t,e,n){"use strict";var s={props:{icon:{type:String,default:"mdi-chevron-right"},color:{type:String,default:""}},name:"",data:function(){return{}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-btn",{staticClass:"mx-2",attrs:{fab:"",icon:"",small:"",color:this.color}},[e("v-icon",[this._v("\n            "+this._s(this.icon)+"\n        ")])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("tE//")},"data-v-95504ba6",null);e.a=r.exports},yek4:function(t,e){},yifk:function(t,e){},zDkF:function(t,e,n){"use strict";var s={name:"LoadingSmall",props:{bigger:{type:Number,default:1}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return-1==this.bigger?e("div",{staticClass:"loading-small"}):1==this.bigger?e("div",{staticClass:"loading-huge"}):e("div",{staticClass:"loading"})},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("gk0o")},"data-v-f4edc9e2",null);e.a=r.exports},zHag:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("v-col",{staticClass:"qiong-page_header pb-0 qiong-txt-page-header px-0",attrs:{cols:"12"}},[this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")({props:{},name:"",data:function(){return{}}},s,!1,function(t){n("yifk")},"data-v-536df77b",null);e.a=i.exports}});
//# sourceMappingURL=0.64a4059ec9346d338788.js.map