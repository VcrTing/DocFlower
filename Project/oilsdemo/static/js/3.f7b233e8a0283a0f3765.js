webpackJsonp([3],{"+Wze":function(t,n,e){"use strict";var i=e("Xejt"),s={components:{LoadingSmall:e("7qUZ").a},props:{item:{type:String},def:{type:String,default:"ICONS/vip_simpler_1.png"},bigger:{type:Number,default:-1},extra_class:{type:String}},name:"",data:function(){return{addr:null}},mounted:function(){},computed:{result:function(){var t="/static/";if(void 0!=this.item&&"undefined_0"!=this.item){var n=i.a.vip_view.split_code(this.item);t+=(n=i.a.vip_view.code_to_content(n))?n.img:this.def}return console.log("图片地址 =",t),t}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-inline"},[-1==t.bigger?e("div",{staticClass:"vip-img-S",class:t.extra_class},[e("img",{attrs:{src:t.result}})]):t._e(),t._v(" "),2==t.bigger?e("div",{staticClass:"vip-img-XXL",class:t.extra_class},[e("img",{attrs:{src:t.result}})]):t._e()])},staticRenderFns:[]};var r=e("VU/8")(s,a,!1,function(t){e("UpSe")},"data-v-61e01bca",null);n.a=r.exports},"3c3G":function(t,n,e){"use strict";var i={components:{PdfUser:e("cMDu").default},name:"",props:{icon:{type:String,default:"mdi-file-pdf-box-outline"},color:{type:String,default:""},extra_calss:{type:String,default:""},is_fixed:{type:Boolean,default:!0},l_or_r:{type:Boolean,default:!1},is_small:{type:Boolean,default:!1},useless:{type:Boolean}},data:function(){return{print:!1,link:"https://fanyi.youdao.com/",loading:!1}},methods:{lockPrint:function(){var t=this;this.loading=!0,this.link="https://fanyi.youdao.com/";var n=this.conf.baseURL+"/#/home/dump/?menu=false&unid="+this.$store.state.user_backend.unid+"&chronu_id="+this.$store.state.chronus.id;this.link=n,console.log("URI =",n),setTimeout(function(){t.loading=!1},3400)}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-btn",{staticClass:"mx-2 right_20 top_85 mr-0 z-L",class:t.extra_calss,attrs:{fab:"",color:t.color,fixed:t.is_fixed,left:t.l_or_r,right:!t.l_or_r,"x-small":t.is_small,disabled:t.useless},on:{click:t.lockPrint}},[t.loading?e("v-icon",{staticClass:"circle-around"},[t._v("mdi-loading")]):e("v-icon",[t._v("\n            "+t._s(t.icon)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"pdf-fixed-iframe",attrs:{id:"_data"}},[e("iframe",{attrs:{src:t.link}})])],1)},staticRenderFns:[]};var a=e("VU/8")(i,s,!1,function(t){e("Oy8S")},"data-v-389b8cf6",null);n.a=a.exports},APhH:function(t,n,e){t.exports=e.p+"static/img/FACE.3c2555c.jpg"},CaRH:function(t,n){},FPAt:function(t,n){},Kdca:function(t,n){},Oy8S:function(t,n){},PMEc:function(t,n){},UpSe:function(t,n){},WM2S:function(t,n){},Z5KY:function(t,n){},Z7tF:function(t,n){},eaBb:function(t,n){},"n/G1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Xxa5"),s=e.n(i),a=e("exGp"),r=e.n(a),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home-bg"},[this._t("menu"),this._v(" "),n("v-main",{staticClass:"content"},[this._t("content")],2)],2)},staticRenderFns:[]};var l=e("VU/8")({components:{},name:"",data:function(){return{}}},o,!1,function(t){e("WM2S")},"data-v-3c13c716",null).exports,c=e("6Z/R"),u=e("Bc7/"),d=e("oKCz"),v={name:"",components:{QiongLoading:d.a},data:function(){return{}}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"qiong-txt-td"},[n("v-row",[n("v-col",{staticClass:"qiong-pl-20 qiong-pr-20 running-pt"},[n("qiong-loading",{attrs:{bigger:1}}),this._v(" "),n("div",{staticClass:"text-center running-txt"},[this._v("\n                加載中\n            ")])],1)],1)],1)},staticRenderFns:[]};var m=e("VU/8")(v,_,!1,function(t){e("FPAt")},"data-v-1a18304e",null).exports,f=e("mvHQ"),p=e.n(f),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"qiong-gradient-line"})])}]};var h=e("VU/8")({name:"",data:function(){return{}}},g,!1,function(t){e("xhc2")},"data-v-64c2bf1c",null).exports,b=e("+Wze"),C={components:{QiongLoading:d.a},props:{_bonus:{type:Object}},name:"",data:function(){return{}},mounted:function(){}},x={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fs-12 lad-lister qiong-menu-sub"},[e("div",{},[t._v("\n        團隊銷售點數："+t._s(t.view.if_def(t._bonus.son_pv_enroller))+"\n    ")]),t._v(" "),e("div",{},[t._v("\n        合資格活躍下線："+t._s(t.view.if_def(t._bonus.son_can_num_enroller))+"\n    ")])])},staticRenderFns:[]};var y=e("VU/8")(C,x,!1,function(t){e("Z7tF")},"data-v-6987cd50",null).exports,w={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item-group",{staticClass:"qiong-br-0 qiong-list-item",attrs:{"active-class":"deep-blue--text text--accent-5"},model:{value:t.group,callback:function(n){t.group=n},expression:"group"}},[t._l(t.tiles,function(n){return e("v-list-item",{key:n.title,on:{click:function(e){return e.stopPropagation(),t.go("/home/"+n.link)}}},[e("v-list-item-avatar",{staticClass:"py-0 my-0"},[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                "+t._s(n.title)+"\n            ")])])],1)}),t._v(" "),t._l(t.tiles_group,function(n){return e("v-list-group",{key:n.title,staticClass:"lad_list_group",attrs:{"no-action":"","sub-group":"",color:"rgba(255, 255, 255, 0.6)","prepend-icon":n.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-content",[e("v-list-item-title",{staticClass:"pl-2 fs-16"},[t._v(t._s(n.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(n.children,function(n){return e("v-list-item",{key:n.title,staticClass:"pl-15",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.go("/home/"+n.link)}}},[e("v-list-item-avatar",{staticClass:"pr-0 mr-3"},[e("v-icon",{attrs:{size:22}},[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                    "+t._s(n.title)+"\n                ")])])],1)})],2)}),t._v(" "),e("v-list-item",{on:{click:t.editChronu}},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-application-cog")])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                編輯月份\n            ")])])],1)],2)},staticRenderFns:[]};var k=e("VU/8")({name:"",data:function(){return{group:null,tiles:[{icon:"mdi-account-tie-outline",title:"個人中心",link:"user/center"},{icon:"mdi-clipboard-multiple-outline",title:"購買記錄",link:"buys/records"},{icon:"mdi-certificate",title:"獎金報表",link:"account/statement"}],tiles_group:[{icon:"mdi-trophy-variant-outline",title:"獎勵明細",link:null,children:[{icon:"mdi-bell-ring-outline",title:"活躍分店獎勵",link:"bonus/active_house"},{icon:"mdi-basket-outline",title:"首購獎勵",link:"bonus/recommend"},{icon:"mdi-account-group-outline",title:"團隊獎金",link:"bonus/active_layer"}]},{icon:"mdi-family-tree",title:"樹形結構",link:null,children:[{icon:"mdi-file-tree-outline",title:"Sponser 結構",link:"user/sponser"},{icon:"mdi-file-tree",title:"Enroller 結構",link:"user/enroller"}]}]}},methods:{go:function(t){this.$router.push({path:t})},outLogin:function(){this.$store.commit("changeAuth",null),this.$store.commit("saveBackendUser",""),this.$router.push({path:"/login/"})},editChronu:function(){this.$store.commit("saveChronus",["",!0])}}},w,!1,function(t){e("PMEc")},"data-v-2de495aa",null).exports,$=e("jOJ2"),L={props:{_bonus:{type:Object}},name:"",data:function(){return{}},components:{LevelViewing:$.a,QiongLoading:d.a}},q={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fs-12 lad-lister"},[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            用戶編號："+t._s(t.view.if_def(t._bonus.user.number_code))+"\n        ")]),t._v(" "),e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            iPV："+t._s(t.view.if_def(t._bonus.ipv))+"\n            ")])]),t._v(" "),e("div",{},[t._v("\n        用戶全稱："+t._s(t.view.if_def(t._bonus.user.display_name))+"\n    ")])])},staticRenderFns:[]};var F=e("VU/8")(L,q,!1,function(t){e("Kdca")},"data-v-0572bafa",null).exports,S={name:"",components:{LevelImageViewing:b.a,LevelViewing:$.a},props:{_need_avatar:{type:Boolean},_avatar:{type:String},_bonus:{type:Object}},data:function(){return{}}},E={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item-group",[e("v-list-item",{staticClass:"pl-8"},[t._need_avatar?e("v-list-item-avatar",{attrs:{size:"69"}},[e("v-img",{attrs:{src:t._avatar}})],1):t._e(),t._v(" "),t._bonus?e("v-list-item-content",[e("v-list-item-title",{staticClass:"fs-18"},[t._v("\n                \n                "+t._s(t._bonus.user.username)+"\n            ")]),t._v(" "),e("v-list-item-subtitle",{},[e("level-image-viewing",{attrs:{item:t._bonus.vip}}),t._v(" "),e("level-viewing",{staticClass:"fs-12 d-inline op-80",attrs:{item:t._bonus.vip}})],1)],1):e("v-list-item-content",[e("v-list-item-title",{staticClass:"fs-18"},[t._v("\n                \n                匿名用户\n            ")]),t._v(" "),e("v-list-item-subtitle",[t._v("\n                \n                --\n            ")])],1)],1)],1)},staticRenderFns:[]};var R={components:{LadBonus:y,LadMsg:F,QiongGradientLine:h,LadAvatar:e("VU/8")(S,E,!1,function(t){e("y2A1")},"data-v-d1241a00",null).exports,QiongLoading:d.a},name:"",props:{id:{type:String,default:""},need_avatar:{type:Boolean,default:!1}},data:function(){return{face:e("APhH"),unid:null,bonus:null,loading:!1}},mounted:function(){this._assign(),this.bonusLoading()},methods:{_assign:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.id?this.unid=this.id:this.unid=t},bonusLoading:function(){var t=this;return r()(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.get(t.api.bonus,t.$store.state.token,{chronu:t.$store.state.chronus.id,"user.unid":t.unid});case 2:(e=n.sent)&&(t.bonus=e[0]),t.loading=!0;case 5:case"end":return n.stop()}},n,t)}))()}}},U={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list",{staticClass:"px-0",attrs:{nav:"",dense:""}},[e("lad-avatar",{attrs:{_avatar:t.face,_need_avatar:t.need_avatar,_bonus:t.bonus}}),t._v(" "),t.bonus?e("lad-msg",{staticClass:"qiong-pt-5 mt-1 pl-4",attrs:{_bonus:t.bonus}}):e("div",{staticClass:"Lad_Three_Line pt-9"},[e("qiong-loading",{attrs:{bigger:-1}})],1),t._v(" "),e("qiong-gradient-line",{staticClass:"qiong-pt-5 mt-1"}),t._v(" "),t.bonus?e("lad-bonus",{staticClass:"qiong-pt-10 pl-4",attrs:{_bonus:t.bonus}}):e("div",{staticClass:"Lad_Two_Line pt-5"},[e("qiong-loading",{attrs:{bigger:-1}})],1)],1)},staticRenderFns:[]};var V=e("VU/8")(R,U,!1,function(t){e("CaRH")},"data-v-2a42d730",null).exports,P={name:"",inject:["reload"],components:{LadLister:k,QiongGradientLine:h,LadMsg:F,LadBonus:y,LevelImageViewing:b.a,MenuMsgWidget:V},data:function(){return{drawer:!1,group2:null,mini:!1,mine:null}},watch:{group:function(){this.drawer=!1}},mounted:function(){this.me()},methods:{changeF:function(){this.drawer=!this.drawer},init:function(){this.me()},me:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t=this,n=this.$store.state.user_backend.unid,e=this.$store.state.users_sponser,i=this.$store.state.transfer;e&&this.bonus._build_res(e,i,function(e,i){e.unid==n&&(t.mine=JSON.parse(p()(e)))})},userCenter:function(){this.$router.push({path:"/home/user/center"})}}},B={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-navigation-drawer",{staticClass:"right-shadow qiong-pt-20",attrs:{width:"290",app:"","mini-variant":t.mini,"mini-variant-width":"68","enable-resize-watcher":"",floating:"",permanent:"","hide-overlay":""},on:{"update:miniVariant":function(n){t.mini=n},"update:mini-variant":function(n){t.mini=n}},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("menu-msg-widget",{attrs:{id:this.$store.state.user_backend.unid,need_avatar:!1}}),t._v(" "),e("lad-lister",{staticClass:"qiong-pt-15 mt-2"}),t._v(" "),e("v-spacer")],1)},staticRenderFns:[]};var M=e("VU/8")(P,B,!1,function(t){e("eaBb")},"data-v-cdddd33a",null).exports,N=e("3c3G"),O={components:{HomeLayout:l,Chronus:c.a,Init:u.a,QiongLoading:d.a,DataRunning:m,LeftAppDrawers:M,FlexIframePdf:N.a},name:"",created:function(){var t=this.$route.query.menu;this.menu=!t||JSON.parse(t)},provide:function(){return{reload:this.reload}},watch:{$route:function(t,n){var e=t.path.split("/").length,i=n.path.split("/").length;this.transitionName=e<i?"slide-up":"slide-down",this.transitionName||(this.transitionName="slide-up")}},data:function(){return{menu:!1,alive:!0,init_finished:!1,transitionName:null}},mounted:function(){var t=this;return r()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.initREF.init();case 2:t.init_finished=n.sent,console.log("HOME INIT FINISHED =",t.init_finished),t.reload(),t.init_finished&&t.menu&&t.$refs.menu.init();case 6:case"end":return n.stop()}},n,t)}))()},methods:{reload:function(){this.alive=!1,this.$nextTick(function(){this.alive=!0})}}},A={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.$store.state.user_backend?e("home-layout",[t.menu?e("div",{attrs:{slot:"menu"},slot:"menu"},[e("left-app-drawers",{ref:"menu",staticClass:"menu"})],1):t._e(),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t.alive?e("transition",{attrs:{name:t.transitionName}},[t.init_finished?e("router-view"):e("data-running")],1):t._e(),t._v(" "),t.$store.state.chronus?e("init",{ref:"initREF"}):t._e()],1)]):e("qiong-loading")},staticRenderFns:[]};var I=e("VU/8")(O,A,!1,function(t){e("Z5KY")},"data-v-422ecb5a",null);n.default=I.exports},xhc2:function(t,n){},y2A1:function(t,n){}});
//# sourceMappingURL=3.f7b233e8a0283a0f3765.js.map