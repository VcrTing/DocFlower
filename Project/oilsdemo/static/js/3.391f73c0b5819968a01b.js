webpackJsonp([3],{"2L7I":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("mvHQ"),s=n.n(e),a={name:"",data:function(){return{}},methods:{lockMine:function(){var t=void 0,i=void 0,n=this;t="SPONSER"==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER")?this.$store.state.users_sponser:this.$store.state.users_enroller;var e=this.$store.state.transfer;return t&&this.bonus._build_res(t,e,function(t,e){t.unid==n.$store.state.user_backend.unid&&(i=JSON.parse(s()(t)))}),i}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var o=n("VU/8")(a,r,!1,function(t){n("FUcK")},"data-v-3bc02dce",null).exports,c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticClass:"qiong-line-border-L hand"},[this._t("default")],2)])},staticRenderFns:[]};var d=n("VU/8")({props:{},name:"",data:function(){return{}}},c,!1,function(t){n("bOyW")},"data-v-a327c2c4",null).exports,v=n("OhMI"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("v-row",{staticClass:"qiong-pl-25 qiong-pr-20"},[this._t("default")],2)},staticRenderFns:[]};var u=n("VU/8")({name:"",data:function(){return{}}},l,!1,function(t){n("hY2T")},"data-v-479aeffa",null).exports,_=n("T/Tv"),p=n("AE2U"),g=n("Um5R"),f=n("PRgY"),h=n("T5vK"),m=n("zDkF"),b=n("oKCz"),q={components:{LevelViewing:n("jOJ2").a,QiongIconInset:h.a,QiongSpace:g.a,QiongLoading:b.a,QiongEmpty:m.a},name:"",data:function(){return{loading:!0,childrens:[]}},mounted:function(){this.switchChildren()},methods:{switchChildren:function(){var t=this;this.loading=!0;var i=this,n=this.$store.state.users_enroller[0],e=this.$store.state.users_enroller;e&&(this.childrens=[],this.bonus._build_res(e,null,function(t,e){t.unid!=n.unid&&t.index-n.index<2&&t.ipv>=i.bonus.conf.USER_PV_LIMIT&&i.childrens.push(t)}),setTimeout(function(){t.loading=!1},600))},openCenter:function(t){}}},x={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t._m(0),t._v(" "),n("qiong-space",{attrs:{space:"1vh"}}),t._v(" "),t.loading?n("qiong-loading"):n("div",[t.childrens.length>0?n("div",t._l(t.childrens,function(i,e){return n("div",{key:e,staticClass:"qiong-td qiong-txt-td qiong-line-hight-20"},[n("div",{staticClass:"qiong-wide-35 pl-7"},[t._v(t._s(i.username))]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v(t._s(i.number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v(t._s(i.ipv))]),t._v(" "),n("div",{staticClass:"qiong-wide-25"},[n("level-viewing",{attrs:{item:i.vip.named+"_"+i.vip.star}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-0"})])}),0):n("qiong-empty",{attrs:{bigger:0}})],1),t._v(" "),n("qiong-space",{attrs:{space:"3vh"}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-tr qiong-txt-tr"},[i("div",{staticClass:"qiong-wide-35"},[i("div",{staticClass:"pl-7"},[this._v("用戶名稱")])]),this._v(" "),i("div",{staticClass:"qiong-wide-20"},[this._v("用戶編號")]),this._v(" "),i("div",{staticClass:"qiong-wide-20"},[this._v("iPV")]),this._v(" "),i("div",{staticClass:"qiong-wide-25"},[this._v("支付級別")])])}]};var C=n("VU/8")(q,x,!1,function(t){n("DnAR")},"data-v-34f213ba",null).exports,y=n("Xxa5"),w=n.n(y),R=n("exGp"),E=n.n(R),$=n("8A96"),U={props:{index:{type:Number},buy:{type:Object}},name:"",data:function(){return{}}},k={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td qiong-pt-15 qiong-pb-10 qiong-zebra-L"},[n("div",{staticClass:"qiong-wide-10"}),t._v(" "),n("div",{staticClass:"qiong-wide-63"},[n("div",[t._v("\n            訂單編號：\n            "),n("span",[t._v("\n                "+t._s(t.view.if_def(t.buy.order_code))+"\n            ")])]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-40"},[t._v("\n                付款人："+t._s(t.view.if_def(t.buy.Origin_buyer_number_code))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-60"},[t._v("\n                Role："+t._s(t.view.if_def(t.buy.role))+"\n            ")])]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-40"},[t._v("\n                收貨人："+t._s(t.view.if_def(t.buy.buyer_named))+" "+t._s(t.view.if_def(t.buy.buyer_phoned,t.buy.buyer_email))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-60"},[t._v("\n                收貨地址："+t._s(t.view.if_def(t.buy.buyer_addr))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"qiong-wide-27 text-right pr-12"},[n("div",[t._v("\n             \n        ")]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-40 pr-0"},[t._v("支付方式：")]),t._v(" "),n("div",{staticClass:"qiong-wide-60 pr-0"},[t._v(t._s(t.view.backend.view_pay_way(t.buy.pay_way)))])]),t._v(" "),n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-40 pr-0"},[t._v("支付金額：")]),t._v(" "),n("div",{staticClass:"qiong-wide-60 pr-0"},[t._v("HK$ "+t._s(t.view.floatMul(t.buy.num,t.buy.product.price)))])])])])},staticRenderFns:[]};var V=n("VU/8")(U,k,!1,function(t){n("ueCk")},"data-v-5409e9b0",null).exports,L={props:{src:{type:String},extra_calss:{type:String}},name:"",data:function(){return{}}},O={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-avatar-wrapper"},[this.src?i("div",{class:this.extra_calss},[i("img",{attrs:{src:this.src}})]):this._e(),this._v(" "),i("div",{staticClass:"qiong-image-blue",class:this.extra_calss},[this._v("\n         \n    ")])])},staticRenderFns:[]};var F=n("VU/8")(L,O,!1,function(t){n("pGST")},"data-v-16875b14",null).exports,P={props:{index:{type:Number},buy:{type:Object}},components:{QiongAvatarColor:F},name:"",data:function(){return{}}},Q={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td qiong-txt-td pr-0"},[n("div",{staticClass:"qiong-wide-10 qiong-txt-18"}),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[n("qiong-avatar-color",{attrs:{src:t.conf.apiURL+t.buy.product.avatar}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-50 qiong-pt-10"},[n("div",{staticClass:"qiong-txt-22"},[t._v("\n            "+t._s(t.buy.product.named)+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-pt-5 deep-header mt-1"},[n("span",[t._v("數量："+t._s(t.buy.num))]),t._v(" "),n("span",{staticClass:"sub-header"},[t._v("， ")]),t._v(" "),n("span",[t._v("價格：$"+t._s(t.buy.product.price))])])]),t._v(" "),n("div",{staticClass:"qiong-wide-28 text-right qiong-pt-10 pr-6 user-sub-header qiong-txt-td"},[n("div",[n("v-icon",{staticClass:"user-sub-header",attrs:{size:"16"}},[t._v("mdi-calendar")]),t._v("\n            "+t._s(t.view.ser_timed(t.buy.buy_time,!0,!0))+"購\n        ")],1),t._v(" "),n("div",{staticClass:"text-right qiong-txt-14 qiong-pt-10 txt-money"},[t._v("\n            + "+t._s(this.view.floatMul(t.buy.num,t.buy.product.pv))+"PV \n        ")])])])},staticRenderFns:[]};var S=n("VU/8")(P,Q,!1,function(t){n("Dix2")},"data-v-08d9ad10",null).exports,N={components:{BuyMe:$.a,QiongSpace:g.a,QiongEmpty:m.a,QiongLoading:b.a,UcOrderItemContent:V,UcOrderItemHeader:S},name:"",data:function(){return{buying:[],loading:!0}},mounted:function(){this.dataLoading()},methods:{dataLoading:function(){var t=this;return E()(w.a.mark(function i(){return w.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.loading=!0,i.next=3,t.$refs.buyMe.buyLoading();case 3:t.buying=i.sent,setTimeout(function(){t.loading=!1},700);case 5:case"end":return i.stop()}},i,t)}))()}}},I={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t.loading?n("qiong-loading"):n("div",[t.buying.length>0?n("div",t._l(t.buying,function(i,e){return n("div",{key:e,staticClass:"clearfix mb-1-px"},[n("v-expansion-panels",{staticClass:"pa-0 qiong-ex-panel",attrs:{accordion:"",flat:""}},[n("v-expansion-panel",{class:{"qiong-zebra-L":e%2!=0}},[n("v-expansion-panel-header",[n("uc-order-item-header",{attrs:{index:e,buy:i}})],1),t._v(" "),n("v-expansion-panel-content",{staticClass:"item-border"},[n("uc-order-item-content",{attrs:{index:e,buy:i}})],1)],1)],1)],1)}),0):n("qiong-empty",{attrs:{bigger:0}})],1),t._v(" "),n("buy-me",{ref:"buyMe"})],1)},staticRenderFns:[]};var M=n("VU/8")(N,I,!1,function(t){n("WAy3")},"data-v-0364810a",null).exports,z={name:"",props:{rec:{type:Number},target:{type:Number}},computed:{is_finished:function(){return this.rec>=this.target}}},A={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[this.is_finished?i("div",{staticClass:"qiong-btn btn-finished "},[i("div",{staticClass:"d-inline"},[i("v-icon",{attrs:{size:"16"}},[this._v("mdi-check")])],1),this._v(" "),i("div",{staticClass:"d-inline-block qiong-txt-12"},[this._v("\n            已完成\n        ")])]):i("div",{staticClass:"qiong-btn btn-unfinished qiong-txt-12"},[i("div",{staticClass:"d-inline"},[i("v-icon",{attrs:{size:"16"}},[this._v("mdi-window-close")])],1),this._v(" "),i("div",{staticClass:"d-inline-block"},[this._v("\n            未完成\n        ")])])])},staticRenderFns:[]};var T=n("VU/8")(z,A,!1,function(t){n("g9WH")},"data-v-48f17481",null).exports,B={components:{QiongAvatarColor:F,LevelImageViewing:n("+Wze").a,FinisedBtnViewing:T},props:{me:{type:Object}},name:"",data:function(){return{next_vip:null,finished:!1,next_vip_condition:null,vip_items:[]}},computed:{result:function(){if(this.next_vip)return[{txt:"每周期個人銷售活躍點數",content:this.me.ipv,target:this.next_vip.condition[0],unit:"PV"},{txt:"每周期團隊銷售點數",content:this.me.transfer.son_pv_SPONSER,target:this.next_vip.condition[1],unit:"PV"},{txt:"合資格下線",content:this.me.transfer.son_can_num_ENROLLER,target:this.next_vip.condition[2],unit:""},{txt:"合資格下線團隊銷售點數",content:this.me.transfer.ipv_next_only_ENROLLER,target:this.next_vip.condition[3],unit:"PV"}]}},mounted:function(){this.next_vip=this.bonus.vip_view.vip_next(this.me.bonus.vip),this.finished=this.bonus.vip_view.finished_vip(this.me.vip.name,this.me.vip.star),console.log(this.me.bonus.vip," 下一個VIP =",this.next_vip.name,this.finished)}},H={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td-fix qiong-pt-10 pl-7 pr-7"},[n("div",{staticClass:"qiong-txt-td mb-1"},[t._v("\n        現在個人支付級別\n    ")]),t._v(" "),n("div",{staticClass:"br-simple circle-XL qiong-pl-20 qiong-pr-20 pt-3 pb-3 bg-simple"},[n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-25 flex-center pr-0 qiong-pt-5"},[n("level-image-viewing",{staticClass:"w-full",attrs:{bigger:2,item:t.me.vip.named+"_"+t.me.vip.star,extra_class:"vip_showing"}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-75 fw-b"},[n("table",{staticClass:"w-full qiong-line-hight-15"},t._l(t.result,function(i,e){return n("tr",{key:e},[n("td",[t._v(t._s(i.txt))]),t._v(" "),n("td",{staticClass:"text-right"},[t._v(t._s(i.content))])])}),0)])])]),t._v(" "),n("div",{staticClass:"qiong-txt-td mb-1 qiong-pt-10 mt-2"},[t.next_vip?n("div",[t._v("\n            到達下一級 \n                "),n("div",{staticClass:"d-inline txt-focus"},[t._v(t._s(t.next_vip.nick))]),t._v(" "),t._v("\n             所需要完成的任務\n        ")]):n("div",[t._v("\n            您現在已是最高會員等級 "),t.next_vip?n("div",{staticClass:"d-inline txt-focus"},[t._v(t._s(t.next_vip.nick))]):t._e()])]),t._v(" "),t._l(t.result,function(i,e){return n("div",{key:e},[n("div",{staticClass:"bg-simple qiong-mb-10 circle-XL pt-1 pb-1"},[n("div",{staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-48 qiong-pl-20 pr-0"},[t._v("\n                    "+t._s(i.txt)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-27 text-right pr-1"},[t._v("\n                    "+t._s(i.content)+"/"+t._s(i.target)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-25 qiong-table-fix pr-0"},[n("finised-btn-viewing",{attrs:{rec:Number.parseInt(i.content),target:Number.parseInt(i.target)}})],1)])])])})],2)},staticRenderFns:[]};var W=n("VU/8")(B,H,!1,function(t){n("ZkcY")},"data-v-819162fc",null).exports,X={components:{QiongRowElement:u,QiongPagePanel:p.a,UcActiveUnderLine:C,UcBuyRecord:M,QiongInnerHeaderElement:d,QiongSpace:g.a,AlertBuyNone:f.a,UcNumberMsg:W,Mine:o,QiongPanelElement:v.a,QiongHeader:_.a},name:"",data:function(){return{mine:null}},mounted:function(){this.mine=this.$refs.mine.lockMine()}},Y={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("qiong-header",{attrs:{extra_calss:"qiong-primay-bg-title pl-7"}},[t._v("合資格活躍下線")]),t._v(" "),n("qiong-panel-element",{attrs:{need_space:!1}},[t.$store.state.user_backend?n("uc-active-under-line",{staticClass:"qiong-pt-10"}):t._e()],1)],1),t._v(" "),n("v-col",{staticClass:"pl-0",attrs:{cols:"6"}},[n("qiong-header",{attrs:{extra_calss:"qiong-primay-bg-title pl-7"}},[t._v("任務列表")]),t._v(" "),n("qiong-panel-element",{attrs:{need_space:!1}},[t.mine?n("uc-number-msg",{attrs:{me:t.mine}}):t._e()],1),t._v(" "),n("qiong-space",{attrs:{space:"0.5vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"1.5vh"}})],1)],1),t._v(" "),n("qiong-header",{attrs:{extra_calss:"qiong-primay-bg-title pl-7"}},[t._v("我的購買")]),t._v(" "),n("qiong-panel-element",[t.$store.state.user_backend?n("uc-buy-record",{ref:"buyRecord",staticClass:"qiong-pt-10"}):t._e()],1),t._v(" "),n("mine",{ref:"mine"})],1)},staticRenderFns:[]};var j=n("VU/8")(X,Y,!1,function(t){n("XyXl")},"data-v-5e0cce44",null);i.default=j.exports},Dix2:function(t,i){},DnAR:function(t,i){},FUcK:function(t,i){},GzE6:function(t,i){},PRgY:function(t,i,n){"use strict";var e={props:{_buyed:{type:Boolean},_bonused:{type:Boolean},is_simpler:{type:Boolean,default:!1}},name:"",mounted:function(){},data:function(){return{}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("v-row",[this._buyed?this._e():i("v-col",{staticClass:"pa-0 qiong-pt-10 mt-4"},[i("v-alert",{attrs:{border:"bottom","colored-border":this.is_simpler,type:"warning",dark:"",dismissible:""}},[this._v("本季度您沒有任何的消費！！！這將導致您的某些分紅金額等於”0“，並且在將來或不能免費領取大量優惠。\n        ")])],1)],1)},staticRenderFns:[]};var a=n("VU/8")(e,s,!1,function(t){n("GzE6")},"data-v-cac80922",null);i.a=a.exports},WAy3:function(t,i){},XyXl:function(t,i){},ZkcY:function(t,i){},bOyW:function(t,i){},g9WH:function(t,i){},hY2T:function(t,i){},pGST:function(t,i){},ueCk:function(t,i){}});
//# sourceMappingURL=3.391f73c0b5819968a01b.js.map