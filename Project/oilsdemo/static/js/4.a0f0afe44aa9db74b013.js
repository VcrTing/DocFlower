webpackJsonp([4],{"6iEe":function(t,s){},"7nNV":function(t,s){},"8cm2":function(t,s){},HREl:function(t,s){},HeVP:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("mvHQ"),n=i.n(e),a=i("Xxa5"),o=i.n(a),r=i("exGp"),c=i.n(r),d=i("3YjC"),l={components:{QiongPageLing:d.a},name:"",data:function(){return{}}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("v-row",{staticClass:"qiong-pt-10"},[s("v-col",{staticClass:"qiong-pt-10 mt-1 pa-0",attrs:{cols:"6"}},[this._t("title")],2),this._v(" "),s("v-col",{staticClass:"text-right pb-0 pr-0",attrs:{cols:"6"}},[this._t("things")],2),this._v(" "),s("qiong-page-ling")],1)},staticRenderFns:[]};var _=i("VU/8")(l,u,!1,function(t){i("8cm2")},"data-v-c33e74de",null).exports,g=i("zDkF"),p=i("oKCz"),m=i("Um5R"),q={props:{size_class:{type:String,default:"qiong-txt-42"}},name:"",data:function(){return{}}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{class:this.size_class},[this._t("default")],2)])},staticRenderFns:[]};var b=i("VU/8")(q,h,!1,function(t){i("xdbQ")},"data-v-1d10bc01",null).exports,f={props:{extra_class:{type:String}},name:"",data:function(){return{}}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"qiong-txt-22 fw-b text-center w-full qiong-pt-10 mt-2",class:this.extra_class},[this._t("default")],2)])},staticRenderFns:[]};var w=i("VU/8")(f,C,!1,function(t){i("ce1g")},"data-v-58b488ee",null).exports,y={props:{res:{type:Array}},name:"",components:{QiongPageLing:d.a,QiongSpace:m.a},data:function(){return{test:[{txt:"奖金",content:"HK&nbsp;135.0"},{txt:"奖金",content:"HK&nbsp;135.0"}]}},mounted:function(){}},x={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mb-5 qiong-pt-10"},[i("qiong-page-ling"),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),t._l(t.res,function(s,e){return i("div",{key:e,staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-63"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-20"},[t._v("\n            "+t._s(s.txt)),i("span",{staticClass:"qiong-txt-18"},[t._v(" ")])]),t._v(" "),i("div",{staticClass:"qiong-wide-17 pr-0 text-right qiong-txt-18",domProps:{innerHTML:t._s(s.content)}})])}),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.7vh"}})],2)},staticRenderFns:[]};var k=i("VU/8")(y,x,!1,function(t){i("7nNV")},"data-v-2eda64b7",null).exports,$={components:{QiongTitleElement:w,QiongPageLing:d.a,QiongEmpty:g.a,QiongSpace:m.a,QiongLoading:p.a,QiongSubResult:k},props:{me:{type:Object},childs:{type:Array}},name:"",data:function(){return{buying:null,ratios:[],total:0}},mounted:function(){this.childs?this.buyingLoading():this.buying=[]},computed:{result:function(){var t=[];return this.me&&(t=[{txt:"活躍分店消費獎勵",content:"US$ "+this.me.bonus.usd_active_house},{txt:"訂單點數總和",content:""+this.total}]),t}},methods:{buyingLoading:function(){var t,s=this;this.total=0,this.buying=[],this.childs.map((t=c()(o.a.mark(function t(i){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i.index-s.me.index<=2)){t.next=5;break}return t.next=3,s.conn.get(s.api.buys,s.$store.state.token,{chronu:s.$store.state.chronus.id,users_permissions_user:i.id,_sort:"published_at:DESC"});case 3:(e=t.sent)&&e.map(function(t){t.user_sponser=i,s.buying.push(t),s.total=s.view.floatAdd(s.total,t.product.pv*t.num)});case 5:case"end":return t.stop()}},t,s)})),function(s){return t.apply(this,arguments)}))}}},E={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-col",{attrs:{cols:"12"}},[i("qiong-title-element",{attrs:{extra_class:"qiong-txt-primary"}},[t._v("\n        活躍分店消費獎勵\n    ")]),t._v(" "),i("div",{staticClass:"qiong-pt-15 mb-5"},[i("div",{staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("會員號碼")]),t._v(" "),i("div",{staticClass:"qiong-wide-40"},[t._v("會員名稱")]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v("層數")]),t._v(" "),i("div",{staticClass:"qiong-wide-13"},[t._v("訂單號碼")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("訂單點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])]),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.4vh"}}),t._v(" "),t.buying?i("div",[t._l(t.buying,function(s,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.users_permissions_user.number_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-40"},[t._v(t._s(s.users_permissions_user.display_name))]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v(t._s(s.user_sponser.index-t.me.index))]),t._v(" "),i("div",{staticClass:"qiong-wide-13"},[t._v(t._s(s.order_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.product.pv*s.num))]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])])}),t._v(" "),t.buying.length<0?i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-empty",{attrs:{bigger:0}})],1):t._e()],2):i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-loading")],1)],1),t._v(" "),i("div",{staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"}),t._v(" "),i("div",{staticClass:"qiong-wide-84 pr-0"},[i("qiong-sub-result",{attrs:{res:t.result}})],1),t._v(" "),i("div",{staticClass:"qiong-wide-6"})])],1)},staticRenderFns:[]};var L=i("VU/8")($,E,!1,function(t){i("nh3K")},"data-v-6e7e143d",null).exports,Q=i("jOJ2"),R={components:{QiongTitleElement:w,QiongPageLing:d.a,QiongEmpty:g.a,QiongSpace:m.a,QiongLoading:p.a,QiongSubResult:k,LevelViewing:Q.a},props:{me:{type:Object},childs:{type:Array}},name:"",data:function(){return{buying:null,pv_Limit:100,unLive:[],total:0}},mounted:function(){this.pv_Limit=this.bonus.conf.USER_PV_LIMIT,this.buyingLoading()},computed:{result:function(){var t=[];return this.me&&(t=[{txt:"非活跃人数",content:this.unLive.length},{txt:"订单点数总和",content:this.total}]),t}},methods:{buyingLoading:function(){var t,s=this;this.buying=[],this.unLive=[],this.childs.map((t=c()(o.a.mark(function t(i){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i.ipv<s.pv_Limit)){t.next=6;break}return t.next=3,s.conn.get(s.api.buys,s.$store.state.token,{chronu:s.$store.state.chronus.id,users_permissions_user:i.id,_sort:"published_at:DESC"});case 3:(e=t.sent)&&(e.map(function(t){t.user_sponser=i,s.buying.push(t),s.total+=t.v.product.pv*v.num}),s.unLive.push(i)),console.log(i);case 6:case"end":return t.stop()}},t,s)})),function(s){return t.apply(this,arguments)}))}}},S={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-col",{attrs:{cols:"12"}},[i("qiong-title-element",{staticClass:"mt-4 qiong-pt-10"},[t._v("\n        非活跃下线\n    ")]),t._v(" "),i("div",{staticClass:"qiong-pt-15 mb-5"},[i("div",{staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("會員號碼")]),t._v(" "),i("div",{staticClass:"qiong-wide-35"},[t._v("會員名稱")]),t._v(" "),i("div",{staticClass:"qiong-wide-13"},[t._v("层数")]),t._v(" "),i("div",{staticClass:"qiong-wide-15"},[t._v("支付级别")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("訂單點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])]),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.4vh"}}),t._v(" "),t.buying?i("div",[t._l(t.buying,function(s,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.users_permissions_user.number_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-35"},[t._v(t._s(s.users_permissions_user.display_name))]),t._v(" "),i("div",{staticClass:"qiong-wide-13"},[t._v(t._s(s.user_sponser.index-t.me.index))]),t._v(" "),i("div",{staticClass:"qiong-wide-15"},[i("level-viewing",{attrs:{item:s.user_sponser.vip.named+"_"+s.user_sponser.vip.star}})],1),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.product.pv*s.num))]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])])}),t._v(" "),t.buying.length<0?i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-empty",{attrs:{bigger:0}})],1):t._e()],2):i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-loading")],1)],1),t._v(" "),i("div",{staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"}),t._v(" "),i("div",{staticClass:"qiong-wide-84 pr-0"},[i("qiong-sub-result",{attrs:{res:t.result}})],1),t._v(" "),i("div",{staticClass:"qiong-wide-6"})])],1)},staticRenderFns:[]};var V=i("VU/8")(R,S,!1,function(t){i("JsM4")},"data-v-2d310b66",null).exports,A={components:{QiongTitleElement:w,QiongPageLing:d.a,QiongEmpty:g.a,QiongSpace:m.a,QiongLoading:p.a,QiongSubResult:k},props:{me:{type:Object},childs:{type:Array}},name:"",data:function(){return{buying:null,ratios:[],total:0}},computed:{result:function(){var t=[];return this.me&&(t=[{txt:"首購推薦獎金",content:"US$ "+this.me.bonus.usd_recommend},{txt:"訂單點數總和",content:""+this.total}]),t}},mounted:function(){this.ratios=this.bonus.conf.RECOMMEND_RATIOS,this.childs?this.buyingLoading():this.buying=[]},methods:{buyingLoading:function(){var t,s=this;this.total=0,this.buying=[],this.childs.map((t=c()(o.a.mark(function t(i){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i.ipv_first>0)){t.next=5;break}return t.next=3,s.conn.get(s.api.buys,s.$store.state.token,{chronu:s.$store.state.chronus.id,users_permissions_user:i.id,_sort:"published_at:DESC"});case 3:(e=t.sent)&&e.map(function(t){t.user_sponser=i,s.buying.push(t),s.total=s.view.floatAdd(s.total,t.product.pv*t.num)});case 5:case"end":return t.stop()}},t,s)})),function(s){return t.apply(this,arguments)}))}}},M={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-col",{attrs:{cols:"12"}},[i("qiong-title-element",{attrs:{extra_class:"qiong-txt-primary"}},[t._v("\n        首購直接推薦獎金\n    ")]),t._v(" "),i("div",{staticClass:"qiong-pt-15 mb-5"},[i("div",{staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("會員編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v("會員名稱")]),t._v(" "),i("div",{staticClass:"qiong-wide-9"},[t._v("支付代數")]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v("訂單編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v("訂單點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("獎金百分比")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("獎金點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])]),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.4vh"}}),t._v(" "),t.buying?i("div",[t._l(t.buying,function(s,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.users_permissions_user.number_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v(t._s(s.users_permissions_user.display_name))]),t._v(" "),i("div",{staticClass:"qiong-wide-9"},[t._v(t._s(s.user_sponser.index-t.me.index))]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v(t._s(s.order_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v(t._s(s.product.pv*s.num)+" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.view.floatMul(t.ratios[s.user_sponser.index-t.me.index-1],100))+"%")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.view.floatMul(t.ratios[s.user_sponser.index-t.me.index-1],s.user_sponser.ipv)))]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])])}),t._v(" "),t.buying.length<0?i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-empty",{attrs:{bigger:0}})],1):t._e()],2):i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-loading")],1)],1),t._v(" "),i("div",{staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"}),t._v(" "),i("div",{staticClass:"qiong-wide-84 pr-0"},[i("qiong-sub-result",{attrs:{res:t.result}})],1),t._v(" "),i("div",{staticClass:"qiong-wide-6"})])],1)},staticRenderFns:[]};var U=i("VU/8")(A,M,!1,function(t){i("VHvk")},"data-v-26726733",null).exports,F={components:{QiongTitleElement:w,QiongPageLing:d.a,QiongEmpty:g.a,QiongSpace:m.a,QiongLoading:p.a,QiongSubResult:k},props:{me:{type:Object},childs:{type:Array}},name:"",data:function(){return{buying:null,ratios:[],total:0}},mounted:function(){this.childs?this.buyingLoading():this.buying=[]},computed:{result:function(){var t=[];return this.me&&(t=[{txt:"團隊銷售獎金",content:"US$ "+this.me.bonus.usd_team_layer},{txt:"訂單點數總和",content:""+this.total}]),t}},methods:{buyingLoading:function(){var t,s=this;this.buying=[],this.childs.map((t=c()(o.a.mark(function t(i){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.conn.get(s.api.buys,s.$store.state.token,{chronu:s.$store.state.chronus.id,users_permissions_user:i.id,_sort:"published_at:DESC"});case 2:(e=t.sent)&&e.map(function(t){t.user_sponser=i,s.buying.push(t),s.total=s.view.floatAdd(s.total,t.product.pv*t.num)});case 4:case"end":return t.stop()}},t,s)})),function(s){return t.apply(this,arguments)}))}}},O={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-col",{attrs:{cols:"12"}},[i("qiong-title-element",{attrs:{extra_class:"qiong-txt-primary"}},[t._v("\n        團隊獎金\n    ")]),t._v(" "),i("div",{staticClass:"qiong-pt-15 mb-5"},[i("div",{staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("會員編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v("會員名稱")]),t._v(" "),i("div",{staticClass:"qiong-wide-9"},[t._v("支付代數")]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v("訂單編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v("訂單點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("獎金百分比")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v("獎金點數")]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])]),t._v(" "),i("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),i("qiong-space",{attrs:{space:"0.4vh"}}),t._v(" "),t.buying?i("div",[t._l(t.buying,function(s,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(s.users_permissions_user.number_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v(t._s(s.users_permissions_user.display_name))]),t._v(" "),i("div",{staticClass:"qiong-wide-9"},[t._v(t._s(s.user_sponser.temporary_index))]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v(t._s(s.order_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-10"},[t._v(t._s(s.product.pv*s.num))]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.view.floatMul(t.me.vip.ratio[s.user_sponser.temporary_index-1],100))+"%")]),t._v(" "),i("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.view.floatMul(t.me.vip.ratio[s.user_sponser.temporary_index-1],s.user_sponser.ipv)))]),t._v(" "),i("div",{staticClass:"qiong-wide-5"},[t._v(" ")])])}),t._v(" "),t.buying.length<0?i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-empty",{attrs:{bigger:0}})],1):t._e()],2):i("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[i("qiong-loading")],1)],1),t._v(" "),i("div",{staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-10"}),t._v(" "),i("div",{staticClass:"qiong-wide-84 pr-0"},[i("qiong-sub-result",{attrs:{res:t.result}})],1),t._v(" "),i("div",{staticClass:"qiong-wide-6"})])],1)},staticRenderFns:[]};var H=i("VU/8")(F,O,!1,function(t){i("beRD")},"data-v-21ab7584",null).exports,T={props:{me:{type:Object},childs:{type:Array},_buyed:{type:Boolean},_bonused:{type:Boolean}},name:"",mounted:function(){},data:function(){return{}}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("v-row",{staticClass:"qiong-pt-10 mt-4"},[this._buyed?this._e():s("v-col",{staticClass:"pa-0"},[s("v-alert",{attrs:{border:"left",type:"warning"}},[this._v("\n            本季度您没有任何的消费！！！这将导致您的某些分红金额等于”0“，并且在将来或不能免费领取某项优惠。\n        ")])],1)],1)},staticRenderFns:[]};var P=i("VU/8")(T,j,!1,function(t){i("6iEe")},"data-v-220de187",null).exports,z={props:{first_class:{type:String,default:"ec-wide-4chart"},second_class:{type:String,default:""}},name:"",data:function(){return{}}},D={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"qiong-td qiong-line-hight-15"},[s("div",{class:this.first_class},[this._t("label")],2),this._v(" "),s("div",{class:this.second_class},[this._t("content")],2)])},staticRenderFns:[]};var J=i("VU/8")(z,D,!1,function(t){i("REcz")},"data-v-f007e0c0",null).exports,K={components:{QiongLoading:p.a},props:{_me:{type:Object},_buys:{type:Array}},name:"",data:function(){return{}},mounted:function(){},methods:{}},N={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),t.$store.state.user_backend?i("div",t._l(t._buys,function(s,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-35"},[t._v(t._s(t.view.ser_timed(s.buy_time,!0)))]),t._v(" "),i("div",{staticClass:"qiong-wide-17"},[t._v(t._s(s.origin_buyer_number_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v(t._s(t.bonus.has.order_role(s.role)))]),t._v(" "),i("div",{staticClass:"qiong-wide-15"},[t._v(t._s(s.order_code))]),t._v(" "),i("div",{staticClass:"qiong-wide-10 text-right pr-0"},[t._v(t._s(s.num*s.product.pv)+"PV")])])}),0):i("div",[i("qiong-loading")],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"qiong-tr ec-mb-2"},[i("div",{staticClass:"qiong-wide-35"},[t._v("領取獎金資格訂單日期")]),t._v(" "),i("div",{staticClass:"qiong-wide-17"},[t._v("會員編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-22"},[t._v("Role")]),t._v(" "),i("div",{staticClass:"qiong-wide-14"},[t._v("訂單編號")]),t._v(" "),i("div",{staticClass:"qiong-wide-12 text-right pr-0"},[t._v("訂單點數")])])}]};var B=i("VU/8")(K,N,!1,function(t){i("wsg3")},"data-v-b82e1bda",null).exports,I={props:{me:{type:Object}},components:{QiongTitle:b,LevelViewing:Q.a,QiongEqualContent:J,AsTopMsgOrder:B},name:"",data:function(){return{}},mounted:function(){this.buysLoading()},methods:{buysLoading:function(){var t=this;return c()(o.a.mark(function s(){var i;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.conn.get(t.api.buys,t.$store.state.token,{chronu:t.$store.state.chronus.id,users_permissions_user:t.$store.state.user_backend.id});case 2:(i=s.sent)&&(i.length>0?t.buys=i.filter(function(s){var i=t.view.floatMul(s.num,s.product.pv);return!!t.bonus.has.team_layer(i)}):t.$emit("buyed_Father",!1));case 4:case"end":return s.stop()}},s,t)}))()}}},G={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-row",{staticClass:"qiong-pt-5 mt-3"},[i("v-col",{staticClass:"px-0 qiong-pt-15 pb-0",attrs:{cols:"12"}},[i("qiong-title",{attrs:{size_class:"qiong-txt-22"}},[t._v("\n            "+t._s(t.me.display_name)+"\n        ")])],1),t._v(" "),i("v-col",{staticClass:"pa-0 qiong-td mt-2",attrs:{cols:"12"}},[i("div",{staticClass:"qiong-wide-27 "},[i("qiong-equal-content",{staticClass:"fw-b qiong-txt-tr",attrs:{second_class:"ec-mb-2"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("會員編號")]),t._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.me.number_code)+" ")])]),t._v(" "),i("qiong-equal-content",{attrs:{second_class:"ec-mb-1"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("用戶名稱")]),t._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.me.username))])]),t._v(" "),i("qiong-equal-content",{attrs:{second_class:"ec-mb-1"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("職位")]),t._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("level-viewing",{attrs:{item:t.$store.state.bonus.vip}})],1)])],1),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[i("qiong-equal-content",{staticClass:"fw-b qiong-txt-tr",attrs:{first_class:"ec-wide-6chart",second_class:"ec-mb-2"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("本周支付級別")]),t._v(" "),t.$store.state.bonus?i("div",{attrs:{slot:"content"},slot:"content"},[i("level-viewing",{attrs:{item:t.$store.state.bonus.vip}})],1):t._e()]),t._v(" "),i("qiong-equal-content",{attrs:{first_class:"ec-wide-6chart"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("個人點數")]),t._v(" "),t.me?i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.me.ipv)+" ")]):t._e()]),t._v(" "),i("qiong-equal-content",{attrs:{first_class:"ec-wide-6chart"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("團隊點數")]),t._v(" "),t.me?i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.me.son_pv)+" ")]):t._e()]),t._v(" "),i("qiong-equal-content",{attrs:{first_class:"ec-wide-6chart"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("合資格下線")]),t._v(" "),t.me?i("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.me.son_can_num)+" ")]):t._e()]),t._v(" "),i("qiong-equal-content",{attrs:{first_class:"ec-wide-6chart"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("領取獎金資格")]),t._v(" "),t.me?i("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(t.bonus.has.team_layer(t.me.ipv))+" ")]):t._e()])],1),t._v(" "),i("div",{staticClass:"qiong-wide-50 pr-0"},[i("as-top-msg-order",{attrs:{_me:t.me}})],1)])],1)},staticRenderFns:[]};var X={components:{QiongHeaderFunc:_,QiongTitle:b,AsTopMsg:i("VU/8")(I,G,!1,function(t){i("HREl")},"data-v-120a3bc2",null).exports,AsRecommend:U,AsActiveHouse:L,AsTeamLayer:H,AsCanNumSon:V,QiongSpace:m.a,QiongLoading:p.a,QiongEmpty:g.a,AsDialog:P},name:"",props:{user_Sending:{type:Object,default:null}},data:function(){return{mine:null,childrens:null,user_back:null,buyed:!0,bonused:!0}},watch:{},mounted:function(){var t=this;return c()(o.a.mark(function s(){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return null!=t.user_Sending?t.user_back=t.user_Sending:t.user_back=t.$store.state.user_backend,console.log(t.user_Sending,t.user_back,t.$store.state.token),s.next=4,t.buyLoding();case 4:case"end":return s.stop()}},s,t)}))()},methods:{buyLoding:function(){var t=this;return c()(o.a.mark(function s(){var i;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.conn.get(t.api.bonus,t.$store.state.token,{chronu:t.$store.state.chronus.id,user:t.user_back.id});case 2:return(i=s.sent)&&(i.length>0?t.$store.commit("saveBonus",i[0]):t.bonused=!1),s.next=6,t.lockMine();case 6:case"end":return s.stop()}},s,t)}))()},lockMe:function(t,s){if(t.unid==this.user_back.unid){var i=JSON.parse(n()(t));this.mine=i}},lockChilds:function(t,s){t.unid!=this.mine.unid&&this.childrens.push(t)},lockMine:function(){var t=this;return c()(o.a.mark(function s(){var i,e;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=t.$store.state.users_sponser,e=t.$store.state.transfer,i&&t.bonus._build_res(i,e,t.lockMe),s.next=5,t.bonus.team_layer([t.mine],e);case 5:return s.sent,s.next=8,t.bonus.recommend([t.mine],e);case 8:s.sent,t.mine&&(t.childrens=[],t.bonus._build_res([t.mine],e,t.lockChilds));case 10:case"end":return s.stop()}},s,t)}))()},back:function(){this.$router.push({path:"/home/account"})},buyedLocation:function(t){this.buyed=t}}},Y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[i("qiong-header-func",{staticClass:"qiong-pl-25 qiong-pr-25"},[i("qiong-title",{attrs:{slot:"title"},slot:"title"},[t._v("\n            獎金報表\n        ")]),t._v(" "),i("div",{attrs:{slot:"things"},slot:"things"},[i("div",[t._v("\n                "+t._s(t.view.getTodayEn())+"\n            ")]),t._v(" "),t.$store.state.bonus.chronu?i("div",{staticClass:"mt-1"},[t._v("\n                獎金周期 : 由"+t._s(t.view.ser_timed(t.$store.state.bonus.chronu.start,!0))+"至 "+t._s(t.view.ser_timed(t.$store.state.bonus.chronu.end,!0))+"\n            ")]):i("div",[t._v(" ")])])],1),t._v(" "),t.user_back?i("as-top-msg",{staticClass:"qiong-pl-25 qiong-pr-25",attrs:{me:t.user_back},on:{buyed_Father:t.buyedLocation}}):t._e(),t._v(" "),i("as-dialog",{staticClass:"qiong-pl-25 qiong-pr-25",attrs:{_buyed:t.buyed,_bonused:t.bonused}}),t._v(" "),i("v-row",{staticClass:"qiong-pt-15 mt-6"},[i("as-recommend",{staticClass:"qiong-pager-zebra qiong-pl-25 qiong-pr-25",attrs:{me:t.mine,childs:t.childrens}}),t._v(" "),i("as-active-house",{staticClass:"qiong-pl-25 qiong-pr-25",attrs:{me:t.mine,childs:t.childrens}}),t._v(" "),i("as-team-layer",{staticClass:"qiong-pager-zebra qiong-pl-25 qiong-pr-25",attrs:{me:t.mine,childs:t.childrens}}),t._v(" "),i("qiong-space",{staticClass:"qiong-pager-zebra",attrs:{space:"5vh"}})],1)],1)},staticRenderFns:[]};var W=i("VU/8")(X,Y,!1,function(t){i("xvHr")},"data-v-ace053ae",null);s.default=W.exports},JsM4:function(t,s){},REcz:function(t,s){},VHvk:function(t,s){},beRD:function(t,s){},ce1g:function(t,s){},nh3K:function(t,s){},wsg3:function(t,s){},xdbQ:function(t,s){},xvHr:function(t,s){}});
//# sourceMappingURL=4.a0f0afe44aa9db74b013.js.map