webpackJsonp([4],{A48D:function(t,i){},HluD:function(t,i){},OoRg:function(t,i){},WxnW:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n("Xxa5"),e=n.n(s),a=n("exGp"),r=n.n(a),o=n("T/Tv"),c=n("zHag"),d=n("3YjC"),v=n("AE2U"),u=n("yGir"),_=n("zDkF"),l=n("Um5R"),g={props:{item:{type:Object}},name:"",data:function(){return{}}},p={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td qiong-product-msg"},[n("div",{staticClass:"qiong-wide-30"},[t._v("\n        收貨地址: "+t._s(t.item.buyer_addr)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-3"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-25 qiong-pl-5"},[t._v("\n        付款人姓名: "+t._s(t.item.users_permissions_user.username)+"\n    ")])])},staticRenderFns:[]};var m=n("VU/8")(g,p,!1,function(t){n("gw47")},"data-v-4850f120",null).exports,q={components:{LoadingSmall:n("7qUZ").a},props:{src:{type:String}},name:"",data:function(){return{}}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-img-wrapper"},[this.src?i("div",{staticClass:"qiong-img"},[i("img",{attrs:{src:this.src}})]):i("loading-small")],1)},staticRenderFns:[]};var b={components:{QiongImage:n("VU/8")(q,f,!1,function(t){n("dKno")},"data-v-41bd0415",null).exports},props:{item:{type:Object}},name:"",data:function(){return{}},mounted:function(){console.log(this.item)}},h={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td w-full"},[n("div",{staticClass:"qiong-wide-8"},[n("qiong-image",{attrs:{src:t.conf.baseURL+t.item.product.avatar}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-30 qiong-pt-10 qiong-pl-7"},[n("span",{staticClass:"qiong-txt-24 fw-b qiong-txt-primary qiong-txt-shadow"},[t._v("\n            "+t._s(t.item.product.named)+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"qiong-txt-15 pt-1 qiong-txt-primary-sub qiong-blur-1"},[t._v("\n            數量: "+t._s(t.item.num)+"    SKU: "+t._s(t.item.product.sku)+"\n        ")])]),t._v(" "),n("div",{staticClass:"qiong-wide-25 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16"},[t._v("\n        價格/件: "+t._s(t.item.product.price)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-20 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16 "},[t._v("\n        Pv: "+t._s(t.item.product.pv)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16 "},[t._v("\n        總價: "+t._s(t.item.product.pv*t.item.num)+"\n    ")])])},staticRenderFns:[]};var y=n("VU/8")(b,h,!1,function(t){n("OoRg")},"data-v-c6597d08",null).exports,w={props:{item:{type:Object}},name:"",data:function(){return{}}},C={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-td qiong-product-result qiong-sub_header qiong-pt-5"},[n("div",{staticClass:"qiong-wide-22"},[t._v("\n        收貨人信息: "+t._s(t.item.buyer_named)+"\n        "),n("br"),t._v(" "),n("div",{staticClass:"qiong-pt-5"},[t._v("付款方式: "+t._s(t.view.backend.view_pay_way(t.item.pay_way)))])]),t._v(" "),n("div",{staticClass:"qiong-wide-28"},[t._v("\n        "+t._s(t.item.buyer_email)+"\n              \n        "+t._s(t.item.buyer_phoned)+"\n        "),n("br"),t._v(" "),n("div",{staticClass:"qiong-pt-5"},[t._v("\n            "+t._s(t.view.ser_timed(t.item.buy_time,!0,!0))+"\n        ")])]),t._v(" "),n("div",{staticClass:"qiong-wide-30 text-right"},[t._v("\n         \n    ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"qiong-wide-12 text-right qiong-txt-19 fw-b qiong-next_header"},[t._v("\n        HK$"+t._s(t.item.num*t.item.product.price)+"\n        "),n("br"),t._v(" "),n("div",{staticClass:"qiong-pt-7 qiong-txt-primary-sub"},[t._v(t._s(t.item.num*t.item.product.pv))])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-wide-8 text-right qiong-txt-19 fw-b qiong-next_header"},[this._v("\n        結算\n        "),i("br"),this._v(" "),i("div",{staticClass:"qiong-pt-7 qiong-txt-primary-sub"},[this._v("IPV")])])}]};var x=n("VU/8")(w,C,!1,function(t){n("HluD")},"data-v-1debbcc8",null).exports,R={components:{QiongIconFlat:u.a,QiongSpace:l.a,BuysRecordsEveryProduct:y,BuysRecordsEveryMsg:m,BuysRecordsEveryResult:x,QiongEmpty:_.a},props:{buy:{type:Array}},mounted:function(){},name:"",data:function(){return{}}},E={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.buy.length>0?n("div",t._l(t.buy,function(i,s){return n("v-expansion-panels",{key:s,staticClass:"qiong-td qiong-br-0 w-full qiong-ex-panels py-0",class:{"qiong-td-zebra":s%2==0,"qiong-td-light":s%2!=0},attrs:{accordion:"",flat:""}},[n("v-expansion-panel",{staticClass:"qiong-br-0"},[n("v-expansion-panel-header",{staticClass:"qiong-txt-td qiong-td-exp"},[n("div",{staticClass:"qiong-wide-7"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-15 fw-b"},[t._v(t._s(i.order_code)+" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(i.product.price*i.num))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(i.users_permissions_user.number_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-26"},[t._v(t._s(i.users_permissions_user.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(t.view.ser_timed(i.buy_time)))]),t._v(" "),n("div",{staticClass:"qiong-wide-6"},[t._v(t._s(i.product.pv*i.num))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[n("qiong-icon-flat",{attrs:{icon:"mdi-chevron-down",color:"primary"}})],1)]),t._v(" "),n("v-expansion-panel-content",{staticClass:"qiong-primary-shadow-inset"},[n("div",{staticClass:"px-15"},[n("buys-records-every-product",{attrs:{item:i}}),t._v(" "),n("br"),t._v(" "),n("buys-records-every-msg",{attrs:{item:i}}),t._v(" "),n("buys-records-every-result",{attrs:{item:i}})],1)])],1)],1)}),1):n("div",{staticClass:"w-full h-full"},[n("qiong-space",{attrs:{space:"4vh"}}),t._v(" "),n("qiong-empty")],1)},staticRenderFns:[]};var $=n("VU/8")(R,E,!1,function(t){n("fc+B")},"data-v-55c774e7",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"qiong-tr qiong-txt-tr qiong-pb-7 qiong-pt-5"},[n("div",{staticClass:"qiong-wide-7"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("訂單號")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("結算")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("會員編號")]),t._v(" "),n("div",{staticClass:"qiong-wide-26"},[t._v("用戶全稱")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("購買時間")]),t._v(" "),n("div",{staticClass:"qiong-wide-6"},[t._v("ipv")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(" ")])])}]};var F=n("VU/8")({name:"",data:function(){return{}}},U,!1,function(t){n("A48D")},"data-v-5173e08e",null).exports,Q=n("oKCz"),k={components:{QiongPageHeader:c.a,QiongHeader:o.a,QiongPageLing:d.a,QiongPagePanel:v.a,BuyRecordsTableHeader:F,BuysRecordsTable:$,QiongLoading:Q.a},name:"",data:function(){return{buys:null}},mounted:function(){var t=this;return r()(e.a.mark(function i(){return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.buysLoading();case 2:case"end":return i.stop()}},i,t)}))()},methods:{buysLoading:function(){var t=this;return r()(e.a.mark(function i(){var n,s,a,r,o;return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.conn.get(t.api.buys,t.$store.state.token,{chronu:t.$store.state.chronus.id,_sort:"published_at:DESC"});case 2:if((n=i.sent)&&(t.buys=[],s=t.$store.state.transfer))for(a=0;a<s.length;a++)for(r=s[a],o=0;o<n.length;o++)r.unid==n[o].users_permissions_user.unid&&t.buys.push(n[o]);case 4:case"end":return i.stop()}},i,t)}))()}}},P={render:function(){var t=this.$createElement,i=this._self._c||t;return i("v-container",{staticClass:"qiong-txt-td qiong-pt-30",attrs:{fluid:""}},[i("qiong-header",[this._v("購買記錄")]),this._v(" "),i("qiong-page-panel",[i("buy-records-table-header"),this._v(" "),this.buys?i("buys-records-table",{attrs:{buy:this.buys}}):this._e(),this._v(" "),i("div",{staticClass:"qiong-bottom-spce"})],1)],1)},staticRenderFns:[]};var V=n("VU/8")(k,P,!1,function(t){n("YXhG")},"data-v-4fb29dbc",null);i.default=V.exports},YXhG:function(t,i){},dKno:function(t,i){},"fc+B":function(t,i){},gw47:function(t,i){}});
//# sourceMappingURL=4.5e01575b644eb1d2393a.js.map