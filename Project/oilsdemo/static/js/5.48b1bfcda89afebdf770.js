webpackJsonp([5],{A48D:function(t,i){},HJcs:function(t,i){},"O+lu":function(t,i){},WxnW:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("Xxa5"),e=s.n(n),a=s("exGp"),r=s.n(a),o=s("T/Tv"),c=s("zHag"),d=s("3YjC"),v=s("AE2U"),u=s("yGir"),_=s("zDkF"),l=s("Um5R"),g={props:{item:{type:Object}},name:"",data:function(){return{}}},p={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"qiong-td qiong-product-msg"},[s("div",{staticClass:"qiong-wide-30"},[t._v("\n        收貨地址: "+t._s(t.item.buyer_addr)+"\n    ")]),t._v(" "),s("div",{staticClass:"qiong-wide-3"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"qiong-wide-25 qiong-pl-5"},[t._v("\n        付款人姓名: "+t._s(t.item.users_permissions_user.username)+"\n    ")])])},staticRenderFns:[]};var m=s("VU/8")(g,p,!1,function(t){s("gw47")},"data-v-4850f120",null).exports,q=s("oKCz"),f={components:{QiongLoading:q.a},props:{src:{type:String}},name:"",data:function(){return{}}},b={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-img-wrapper"},[this.src?i("div",{staticClass:"qiong-img"},[i("img",{attrs:{src:this.src}})]):this._e(),this._v(" "),i("qiong-loading",{attrs:{bigger:-1}})],1)},staticRenderFns:[]};var h={components:{QiongImage:s("VU/8")(f,b,!1,function(t){s("oVfn")},"data-v-e012f302",null).exports},props:{item:{type:Object}},name:"",data:function(){return{}},mounted:function(){console.log(this.item)}},y={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"qiong-td w-full"},[s("div",{staticClass:"qiong-wide-8"},[s("qiong-image",{attrs:{src:t.conf.apiURL+t.item.product.avatar}})],1),t._v(" "),s("div",{staticClass:"qiong-wide-40 qiong-pt-10 qiong-pl-7"},[s("span",{staticClass:"qiong-txt-24 fw-b qiong-txt-shadow"},[t._v("\n            "+t._s(t.item.product.named)+"\n        ")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"qiong-txt-15 pt-1 qiong-txt-primary-sub qiong-blur-1"},[t._v("\n            數量: "+t._s(t.item.num)+"    SKU: "+t._s(t.item.product.sku)+"\n        ")])]),t._v(" "),s("div",{staticClass:"qiong-wide-20 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16"},[t._v("\n        價格/件: "+t._s(t.item.product.price)+"\n    ")]),t._v(" "),s("div",{staticClass:"qiong-wide-15 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16 "},[t._v("\n        Pv: "+t._s(t.item.product.pv)+"\n    ")]),t._v(" "),s("div",{staticClass:"qiong-wide-17 qiong-sub_header qiong-pt-10 mt-3 qiong-txt-16 "},[t._v("\n        總價: "+t._s(t.item.product.pv*t.item.num)+"\n    ")])])},staticRenderFns:[]};var w=s("VU/8")(h,y,!1,function(t){s("O+lu")},"data-v-ed4628c0",null).exports,C={props:{item:{type:Object}},name:"",data:function(){return{}}},x={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"qiong-td qiong-product-result qiong-sub_header qiong-pt-5"},[s("div",{staticClass:"qiong-wide-22"},[t._v("\n        收貨人信息: "+t._s(t.item.buyer_named)+"\n        "),s("br"),t._v(" "),s("div",{staticClass:"qiong-pt-5"},[t._v("付款方式: "+t._s(t.view.backend.view_pay_way(t.item.pay_way)))])]),t._v(" "),s("div",{staticClass:"qiong-wide-28"},[t._v("\n        "+t._s(t.item.buyer_email)+"\n              \n        "+t._s(t.item.buyer_phoned)+"\n        "),s("br"),t._v(" "),s("div",{staticClass:"qiong-pt-5"},[t._v("\n            "+t._s(t.view.ser_timed(t.item.buy_time,!0,!0))+"\n        ")])]),t._v(" "),s("div",{staticClass:"qiong-wide-20 text-right"},[t._v("\n         \n    ")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"qiong-wide-17 text-right qiong-txt-19 fw-b qiong-next_header pr-0"},[t._v("\n        HK$"+t._s(t.item.num*t.item.product.price)+"\n        "),s("br"),t._v(" "),s("div",{staticClass:"qiong-pt-7 qiong-txt-primary-sub"},[t._v(t._s(t.item.num*t.item.product.pv))])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"qiong-wide-13 text-right qiong-txt-19 fw-b qiong-next_header pr-0"},[this._v("\n        結算\n        "),i("br"),this._v(" "),i("div",{staticClass:"qiong-pt-7 qiong-txt-primary-sub"},[this._v("IPV")])])}]};var E=s("VU/8")(C,x,!1,function(t){s("vmk/")},"data-v-1a1c43b0",null).exports,R={components:{QiongIconFlat:u.a,QiongSpace:l.a,BuysRecordsEveryProduct:w,BuysRecordsEveryMsg:m,BuysRecordsEveryResult:E,QiongEmpty:_.a},props:{buy:{type:Array}},mounted:function(){},name:"",data:function(){return{}}},$={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.buy.length>0?s("div",t._l(t.buy,function(i,n){return s("v-expansion-panels",{key:n,staticClass:"qiong-td qiong-br-0 w-full qiong-ex-panels py-0",class:{"qiong-td-zebra":n%2==0,"qiong-td-light":n%2!=0},attrs:{accordion:"",flat:""}},[s("v-expansion-panel",{staticClass:"qiong-br-0"},[s("v-expansion-panel-header",{staticClass:"qiong-txt-td qiong-td-exp"},[s("div",{staticClass:"qiong-wide-7"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"qiong-wide-15 fw-b"},[t._v(t._s(i.order_code)+" ")]),t._v(" "),s("div",{staticClass:"qiong-wide-11"},[t._v(t._s(i.product.price*i.num))]),t._v(" "),s("div",{staticClass:"qiong-wide-13"},[t._v(t._s(i.users_permissions_user.number_code))]),t._v(" "),s("div",{staticClass:"qiong-wide-26"},[t._v(t._s(i.users_permissions_user.display_name))]),t._v(" "),s("div",{staticClass:"qiong-wide-13"},[t._v(t._s(t.view.ser_timed(i.buy_time)))]),t._v(" "),s("div",{staticClass:"qiong-wide-6"},[t._v(t._s(i.product.pv*i.num))]),t._v(" "),s("div",{staticClass:"qiong-wide-9"},[s("qiong-icon-flat",{attrs:{icon:"mdi-chevron-down",color:"primary"}})],1)]),t._v(" "),s("v-expansion-panel-content",{staticClass:"qiong-primary-shadow-inset"},[s("div",{staticClass:"px-15"},[s("buys-records-every-product",{attrs:{item:i}}),t._v(" "),s("br"),t._v(" "),s("buys-records-every-msg",{attrs:{item:i}}),t._v(" "),s("buys-records-every-result",{attrs:{item:i}})],1)])],1)],1)}),1):s("div",{staticClass:"w-full h-full mb-4"},[s("qiong-empty",{staticClass:"mb-4"}),t._v(" "),s("qiong-space",{attrs:{space:"4vh"}})],1)},staticRenderFns:[]};var k=s("VU/8")(R,$,!1,function(t){s("o7kW")},"data-v-2eb47274",null).exports,Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"qiong-tr qiong-txt-tr qiong-pb-7 qiong-pt-5"},[s("div",{staticClass:"qiong-wide-7"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"qiong-wide-15"},[t._v("訂單號")]),t._v(" "),s("div",{staticClass:"qiong-wide-11"},[t._v("結算")]),t._v(" "),s("div",{staticClass:"qiong-wide-13"},[t._v("會員編號")]),t._v(" "),s("div",{staticClass:"qiong-wide-26"},[t._v("用戶全稱")]),t._v(" "),s("div",{staticClass:"qiong-wide-13"},[t._v("購買時間")]),t._v(" "),s("div",{staticClass:"qiong-wide-6"},[t._v("ipv")]),t._v(" "),s("div",{staticClass:"qiong-wide-9"},[t._v(" ")])])}]};var U=s("VU/8")({name:"",data:function(){return{}}},Q,!1,function(t){s("A48D")},"data-v-5173e08e",null).exports,V=s("OhMI"),F={components:{QiongPageHeader:c.a,QiongHeader:o.a,QiongPageLing:d.a,QiongPagePanel:v.a,BuyRecordsTableHeader:U,BuysRecordsTable:k,QiongLoading:q.a,QiongPanelElement:V.a},name:"",data:function(){return{buys:null}},mounted:function(){var t=this;return r()(e.a.mark(function i(){return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.buysLoading();case 2:case"end":return i.stop()}},i,t)}))()},methods:{buysLoading:function(){var t=this;return r()(e.a.mark(function i(){var s,n,a,r,o;return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.conn.get(t.api.buys,t.$store.state.token,{chronu:t.$store.state.chronus.id,_sort:"published_at:DESC"});case 2:if((s=i.sent)&&(t.buys=[],n=t.$store.state.transfer))for(a=0;a<n.length;a++)for(r=n[a],o=0;o<s.length;o++)r.unid==s[o].users_permissions_user.unid&&t.buys.push(s[o]);case 4:case"end":return i.stop()}},i,t)}))()}}},P={render:function(){var t=this.$createElement,i=this._self._c||t;return i("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[i("qiong-header",{attrs:{extra_calss:"qiong-primay-bg-title pl-7"}},[this._v("購買記錄")]),this._v(" "),i("qiong-panel-element",[i("div",{staticClass:"qiong-pt-10"}),this._v(" "),i("buy-records-table-header"),this._v(" "),this.buys?i("buys-records-table",{attrs:{buy:this.buys}}):this._e()],1)],1)},staticRenderFns:[]};var H=s("VU/8")(F,P,!1,function(t){s("HJcs")},"data-v-52b18057",null);i.default=H.exports},gw47:function(t,i){},o7kW:function(t,i){},oVfn:function(t,i){},"vmk/":function(t,i){}});
//# sourceMappingURL=5.48b1bfcda89afebdf770.js.map