webpackJsonp([4],{"922K":function(t,n){},APhH:function(t,n,e){t.exports=e.p+"static/img/FACE.3c2555c.jpg"},Krs7:function(t,n){},SVfT:function(t,n){},"Y/C2":function(t,n){},YIFR:function(t,n){},eQi6:function(t,n){},kw80:function(t,n){},"n/G1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Xxa5"),a=e.n(i),s=e("exGp"),r=e.n(s),o=e("mvHQ"),c=e.n(o),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"qiong-gradient-line"})])}]};var u=e("VU/8")({name:"",data:function(){return{}}},l,!1,function(t){e("xhc2")},"data-v-64c2bf1c",null).exports,v={props:{me:{type:Object}},name:"",data:function(){return{}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return null!=t.me?e("div",{staticClass:"fs-12 lad-lister qiong-menu-sub"},[e("div",{},[t._v("\n        合资格下线："+t._s(t.me.son_can_num)+"\n    ")]),t._v(" "),e("div",{},[t._v("\n        团队销售点数："+t._s(t.me.son_pv)+"\n    ")])]):e("div",[e("div",[t._v(" ")]),t._v(" "),e("div",[t._v(" ")])])},staticRenderFns:[]};var m=e("VU/8")(v,d,!1,function(t){e("YIFR")},"data-v-2dcc7c56",null).exports,p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item-group",{staticClass:"qiong-br-0",attrs:{"active-class":"deep-blue--text text--accent-5"},model:{value:t.group,callback:function(n){t.group=n},expression:"group"}},[t._l(t.tiles,function(n){return e("v-list-item",{key:n.title,on:{click:function(e){return e.stopPropagation(),t.go("/home/"+n.link)}}},[e("v-list-item-avatar",{staticClass:"py-0 my-0"},[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                "+t._s(n.title)+"\n            ")])])],1)}),t._v(" "),e("v-list-item",{on:{click:t.editChronu}},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-application-cog")])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                編輯月份\n            ")])])],1),t._v(" "),e("v-list-item",{on:{click:t.outLogin}},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-logout-variant")])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                退出登錄\n            ")])])],1)],2)},staticRenderFns:[]};var f=e("VU/8")({name:"",data:function(){return{group:null,tiles:[{icon:"mdi-bell-ring-outline",img:"keep.png",title:"活躍分店獎勵",link:"bonus/active_house"},{icon:"mdi-trophy-variant-outline",img:"inbox.png",title:"首購獎勵",link:"bonus/recommend"},{icon:"mdi-account-group-outline",img:"hangouts.png",title:"團隊獎金",link:"bonus/active_layer"},{icon:"mdi-clipboard-multiple-outline",img:"messenger.png",title:"購買記錄",link:"buys/records"},{icon:"mdi-certificate",title:"獎金報表",link:"account/result"}]}},methods:{go:function(t){this.$router.push({path:t})},outLogin:function(){this.$store.commit("changeAuth",null),this.$store.commit("saveBackendUser",""),this.$router.push({path:"/login/"})},editChronu:function(){this.$store.commit("saveChronus",["",!0])}}},p,!1,function(t){e("SVfT")},"data-v-bf64bf1a",null).exports,_={components:{LevelViewing:e("jOJ2").a},props:{me:{type:Object}},name:"",data:function(){return{}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return null!=t.me?e("div",{staticClass:"fs-12 lad-lister"},[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-47 pr-0"},[t._v("\n            用户编号："+t._s(t.me.number_code)+"\n        ")]),t._v(" "),e("div",{staticClass:"qiong-wide-60 pr-0"},[t._v("\n            支付级别："),e("level-viewing",{staticClass:"d-inline",attrs:{item:t.me.vip.named+"_"+t.me.vip.star}})],1)]),t._v(" "),e("div",{},[t._v("\n        用户全称："+t._s(t.$store.state.user_backend.display_name)+"\n    ")]),t._v(" "),e("div",{staticClass:"qiong-menu-sub"},[t._v("\n        IPv："+t._s(t.me.ipv)+"\n    ")])]):e("div",[e("div",[t._v(" ")]),t._v(" "),e("div",[t._v(" ")]),t._v(" "),e("div",[t._v(" ")])])},staticRenderFns:[]};var g={name:"",components:{LadLister:f,QiongGradientLine:u,LadMsg:e("VU/8")(_,h,!1,function(t){e("sFkE")},"data-v-295f8c71",null).exports,LadBonus:m},data:function(){return{face:e("APhH"),drawer:!1,group2:null,mini:!1,mine:null}},watch:{group:function(){this.drawer=!1}},mounted:function(){this.me()},methods:{changeF:function(){this.drawer=!this.drawer},me:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t=this,n=this.$store.state.user_backend.unid,e=this.$store.state.users_sponser,i=this.$store.state.transfer;e&&this.bonus._build_res(e,i,function(e,i){e.unid==n&&(t.mine=JSON.parse(c()(e)))})}}},b={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-navigation-drawer",{staticClass:"right-shadow appBar_dark qiong-pt-20",attrs:{width:"270",app:"",dark:"","mini-variant":t.mini,"mini-variant-width":"68","enable-resize-watcher":"",floating:"",permanent:""},on:{"update:miniVariant":function(n){t.mini=n},"update:mini-variant":function(n){t.mini=n}},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",{staticClass:"px-0",attrs:{nav:"",dense:""}},[e("v-list-item-group",[e("v-list-item",{staticClass:"flex-center",attrs:{disabled:""}},[e("v-list-item-avatar",{staticClass:"ma-0",attrs:{size:"90"}},[e("v-img",{attrs:{src:t.face}})],1)],1),t._v(" "),e("v-list-item",{staticClass:"flex-center",attrs:{disabled:""}},[e("v-list-item-content",{staticClass:"qiong-pt-5"},[t.$store.state.user_backend?e("v-list-item-subtitle",{staticClass:"text-center over-view pb-2 pt-1"},[e("div",{staticClass:"fs-18"},[t._v(t._s(t.$store.state.user_backend.username))])]):e("v-list-item-subtitle",[t._v("\n                        Admin\n                    ")])],1)],1)],1),t._v(" "),e("lad-msg",{staticClass:"qiong-pt-5 mt-1 pl-4",attrs:{me:t.mine}}),t._v(" "),e("qiong-gradient-line",{staticClass:"qiong-pt-5 mt-1 pl-4"}),t._v(" "),e("lad-bonus",{staticClass:"qiong-pt-10 mt-1 pl-4",attrs:{me:t.mine}}),t._v(" "),e("lad-lister",{staticClass:"qiong-pt-15 mt-2"})],1),t._v(" "),e("v-spacer")],1)},staticRenderFns:[]};var C={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{attrs:{app:"",height:"49"}},[e("v-app-bar-nav-icon",{on:{click:function(n){return n.stopPropagation(),t.drawerOption(n)}}}),t._v(" "),e("v-app-bar-title"),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-ev-plug-chademo")])],1)],1)},staticRenderFns:[]};var k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app-border-top"})},staticRenderFns:[]};var w={components:{LeftAppDrawers:e("VU/8")(g,b,!1,function(t){e("Y/C2")},"data-v-0e9c4e76",null).exports,TopAppBar:e("VU/8")({name:"",data:function(){return{}},methods:{drawerOption:function(){}}},C,!1,function(t){e("922K")},"data-v-f924cab2",null).exports,TopColorAccentBar:e("VU/8")({name:"",data:function(){return{}}},k,!1,function(t){e("eQi6")},"data-v-4c05c150",null).exports},name:"",data:function(){return{}}},x={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"bg-hui"},[n("left-app-drawers"),this._v(" "),n("v-main",{staticClass:"content"},[this._t("default")],2)],1)},staticRenderFns:[]};var $=e("VU/8")(w,x,!1,function(t){e("kw80")},"data-v-350fab20",null).exports,F=e("6Z/R"),E=e("Bc7/"),q=e("oKCz"),R={components:{HomeLayout:$,Chronus:F.a,Init:E.a,QiongLoading:q.a},name:"",provide:function(){return{reload:this.reload}},watch:{$route:function(t,n){var e=t.path.split("/").length,i=n.path.split("/").length;this.transitionName=e<i?"slide-right":"slide-left"}},data:function(){return{alive:!0,transitionName:null}},mounted:function(){var t=this;return r()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("HOME INIT"),n.next=3,t.$refs.initREF.init();case 3:case"end":return n.stop()}},n,t)}))()},methods:{reload:function(){this.alive=!1,this.$nextTick(function(){this.alive=!0})}}},V={render:function(){var t=this.$createElement,n=this._self._c||t;return this.$store.state.user_backend?n("home-layout",[this.alive?n("transition",{attrs:{name:this.transitionName}},[n("router-view")],1):this._e(),this._v(" "),this.$store.state.chronus?n("init",{ref:"initREF"}):this._e()],1):n("qiong-loading")},staticRenderFns:[]};var y=e("VU/8")(R,V,!1,function(t){e("Krs7")},"data-v-66a6caaf",null);n.default=y.exports},sFkE:function(t,n){},xhc2:function(t,n){}});
//# sourceMappingURL=4.747430f33238a334c48e.js.map