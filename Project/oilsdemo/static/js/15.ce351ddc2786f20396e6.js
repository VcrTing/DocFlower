webpackJsonp([15],{KJyv:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("mvHQ"),s=n.n(e),a=n("Xejt"),d=n("vs4I"),o=n("AE2U"),r=n("n7zJ"),v=n("FnJI"),l=n("oKCz"),c=n("jOJ2"),_={components:{QiongHeaderBonusOne:d.a,LevelViewing:c.a,Loading:r.a,QiongLoadingDiv:v.a,QiongLoading:l.a},props:{me:{type:Object}},name:"",data:function(){return{}}},u={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("qiong-header-bonus-one",[i.me?n("div",{staticClass:"qiong-txt-primary-dark qiong-txt-shadow",attrs:{slot:"header"},slot:"header"},[i._v("\n        "+i._s(i.me.username)+"\n    ")]):n("qiong-loading",{attrs:{slot:"header"},slot:"header"}),i._v(" "),i.me?n("div",{staticClass:"qiong-td",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"qiong-wide-15 qiong-txt-tr fw-b"},[i._v("\n            用戶編號 : \n            "),n("span",{staticClass:"qiong-txt-td fw-n"},[i._v(i._s(i.me.number_code))])]),i._v(" "),n("div",{staticClass:"qiong-wide-34 qiong-txt-tr fw-b"},[i._v("\n            用戶全稱 : \n            "),n("span",{staticClass:"qiong-txt-td fw-n"},[i._v(i._s(i.me.display_name))])]),i._v(" "),n("div",{staticClass:"qiong-wide-9 qiong-txt-tr fw-b"},[i._v("\n            IPV : \n            "),n("span",{staticClass:"qiong-txt-td fw-n"},[i._v(i._s(i.me.ipv))])]),i._v(" "),n("div",{staticClass:"qiong-wide-16 qiong-txt-tr fw-b pr-0"},[i._v("\n            支付級別 : \n            "),n("div",{staticClass:"qiong-txt-td fw-n d-inline-block"},[n("level-viewing",{attrs:{item:i.me.vip.name+"_"+i.me.vip.star}})],1)]),i._v(" "),n("div",{staticClass:"qiong-wide-12 qiong-txt-tr fw-b"},[i._v("\n            首購的PV : \n            "),n("span",{staticClass:"qiong-txt-td fw-n"},[i._v(i._s(i.me.ipv_first))])]),i._v(" "),n("div",{staticClass:"qiong-wide-14 qiong-txt-tr fw-b"},[i._v("\n            推薦獎金 : \n            "),n("span",{staticClass:"qiong-txt-td fw-n"},[i._v(i._s(i.me.bonus.usd_recommend))])])]):n("qiong-loading",{attrs:{slot:"header",bigger:-1},slot:"header"})],1)},staticRenderFns:[]};var g=n("VU/8")(_,u,!1,function(i){n("N66u")},"data-v-391c4652",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"qiong-tr qiong-pb-7 qiong-pt-5 qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-9"},[i._v(" ")]),i._v(" "),n("div",{staticClass:"qiong-wide-11"},[i._v("用戶名稱")]),i._v(" "),n("div",{staticClass:"qiong-wide-9"},[i._v("用戶編號")]),i._v(" "),n("div",{staticClass:"qiong-wide-30"},[i._v("用戶全稱")]),i._v(" "),n("div",{staticClass:"qiong-wide-6"},[i._v("層級")]),i._v(" "),n("div",{staticClass:"qiong-wide-6"},[i._v("IPV")]),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[i._v("支付級別")]),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[i._v("首購的PV")]),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[i._v("推薦獎金")]),i._v(" "),n("div",{staticClass:"qiong-wide-5"})])}]};var q=n("VU/8")({name:"",data:function(){return{}}},m,!1,function(i){n("zdLy")},"data-v-9f89170a",null).exports,p=n("T5vK"),h=n("zDkF"),f=n("Um5R"),w={components:{LevelViewing:c.a,QiongIconInset:p.a,Loading:r.a,QiongEmpty:h.a,QiongSpace:f.a},inject:["reload"],props:{index:{type:Number},me:{type:Object},childs:{type:Array}},name:"",mounted:function(){this.indexList=[];for(var i=0;i<this.index;i++)this.indexList.push(i+1+this.me.index)},data:function(){return{indexList:[]}},methods:{openCenter:function(i){this.$router.push({path:"/home/bonus/recommend_one/",query:{id:i.unid}}),this.reload()}}},C={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return i.index>0?n("div",i._l(i.indexList,function(t){return n("div",{key:t},i._l(i.childs,function(e,s){return n("div",{key:s},[t==e.index?n("div",{staticClass:"qiong-td qiong-pb-7 qiong-pt-5 qiong-txt-td",class:{"qiong-td-zebra":(e.index-i.me.index)%2!=0,"qiong-td-light":(e.index-i.me.index)%2==0}},[n("div",{staticClass:"qiong-wide-9"}),i._v(" "),n("div",{staticClass:"qiong-wide-11"},[i._v(i._s(e.username))]),i._v(" "),n("div",{staticClass:"qiong-wide-9"},[i._v(i._s(e.number_code))]),i._v(" "),n("div",{staticClass:"qiong-wide-30"},[i._v(i._s(e.display_name))]),i._v(" "),n("div",{staticClass:"qiong-wide-6"},[i._v(i._s(e.index-i.me.index))]),i._v(" "),n("div",{staticClass:"qiong-wide-6"},[i._v(i._s(e.ipv))]),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[n("level-viewing",{attrs:{item:e.vip.name+"_"+e.vip.star}})],1),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[i._v(i._s(e.ipv_first))]),i._v(" "),n("div",{staticClass:"qiong-wide-8"},[i._v(i._s(e.bonus.usd_recommend))]),i._v(" "),n("div",{staticClass:"qiong-wide-5"},[n("qiong-icon-inset",{attrs:{color:"primary",arg:e},on:{done_Father:i.openCenter}})],1)]):i._e()])}),0)}),0):n("div",{staticClass:"w-full h-full"},[n("qiong-space",{attrs:{space:"4vh"}}),i._v(" "),n("qiong-empty")],1)},staticRenderFns:[]};var x=n("VU/8")(w,C,!1,function(i){n("ZwWF")},"data-v-078f4c29",null).exports,b={components:{QiongHeaderBonusOne:d.a,QiongPagePanel:o.a,BrOneHeader:g,BrOneTableHeader:q,BrOneTableBody:x},props:{},name:"",inject:["reload"],watch:{$route:function(i,t){t.query&&(this.mine=null,this.childrens=null,this.reload())}},data:function(){return{id:null,i:null,mine:null,childrens:null}},mounted:function(){this.id=this.$route.query.id,this.me()},methods:{me:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var i=this,t=this.$store.state.users_enroller,n=this.$store.state.transfer;t&&a.a._build_res(t,n,function(t,n){if(t.unid==i.id){var e=JSON.parse(s()(t));i.mine=e}}),this.mine&&(this.childrens=[],a.a._build_res([this.mine],n,function(t,n){t.unid!=i.mine.unid&&(i.childrens.push(t),t.index>i.i&&(i.i=t.index-i.mine.index))}))}}},y={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("br-one-header",{attrs:{me:i.mine}}),i._v(" "),n("qiong-page-panel",[n("br-one-table-header"),i._v(" "),n("div",{staticClass:"qiong-pt-5"}),i._v(" "),null!=i.childrens?n("br-one-table-body",{attrs:{index:i.i,me:i.mine,childs:i.childrens}}):i._e(),i._v(" "),n("div",{staticClass:"qiong-bottom-spce"})],1)],1)},staticRenderFns:[]};var L=n("VU/8")(b,y,!1,function(i){n("plP3")},"data-v-8da72ad4",null);t.default=L.exports},N66u:function(i,t){},ZwWF:function(i,t){},plP3:function(i,t){},zdLy:function(i,t){}});
//# sourceMappingURL=15.ce351ddc2786f20396e6.js.map