webpackJsonp([1],{"3c3G":function(t,n,e){"use strict";var s={components:{PdfUser:e("cMDu").default},name:"",props:{icon:{type:String,default:"mdi-file-pdf-box-outline"},color:{type:String,default:""},extra_calss:{type:String,default:""},is_fixed:{type:Boolean,default:!0},l_or_r:{type:Boolean,default:!1},is_small:{type:Boolean,default:!1},useless:{type:Boolean}},data:function(){return{print:!1,link:"https://fanyi.youdao.com/",loading:!1}},methods:{lockPrint:function(){this.link="https://fanyi.youdao.com/";var t=this.conf.baseURL+"/#/home/dump/?menu=false&unid="+this.$store.state.user_backend.unid+"&chronu_id="+this.$store.state.chronus.id;this.link=t,this._loading(),console.log("URI =",t)},_loading:function(){var t=this;this.loading=!0,this.$emit("useless_Father",!0),setTimeout(function(){t.loading=!1,t.$emit("useless_Father",!1)},3400)}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-btn",{staticClass:"mx-2 right_20 top_85 mr-0 z-L",class:t.extra_calss,attrs:{fab:"",color:t.color,fixed:t.is_fixed,left:t.l_or_r,right:!t.l_or_r,"x-small":t.is_small,disabled:t.useless},on:{click:t.lockPrint}},[t.loading?e("v-icon",{staticClass:"circle-around"},[t._v("mdi-loading")]):e("v-icon",[t._v("\n            "+t._s(t.icon)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"pdf-fixed-iframe",attrs:{id:"_data"}},[e("iframe",{attrs:{src:t.link}})])],1)},staticRenderFns:[]};var i=e("VU/8")(s,r,!1,function(t){e("u2JY")},"data-v-0fd3760e",null);n.a=i.exports},"5YKq":function(t,n){},"7Uv1":function(t,n){},"9b8r":function(t,n){},APhH:function(t,n,e){t.exports=e.p+"static/img/FACE.3c2555c.jpg"},Bs1a:function(t,n){},FPAt:function(t,n){},MLSc:function(t,n){},OLQ5:function(t,n,e){"use strict";var s=e("Xxa5"),r=e.n(s),i=e("exGp"),a=e.n(i),o=e("k0Vh"),u=e("rbjZ"),c=e("Sx7q"),l=e("oKCz"),d=e("jOJ2"),_={name:"",components:{LevelImageViewing:e("+Wze").a,LevelViewing:d.a},props:{_need_avatar:{type:Boolean},_avatar:{type:String},_bonus:{type:Object}},data:function(){return{}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item-group",[e("v-list-item",{staticClass:"pl-8",attrs:{disabled:""}},[t._need_avatar?e("v-list-item-avatar",{attrs:{size:"69"}},[e("v-img",{attrs:{src:t._avatar}})],1):t._e(),t._v(" "),t._bonus?e("v-list-item-content",[e("v-list-item-title",{staticClass:"fs-18"},[t._v("\n                \n                "+t._s(t._bonus.user.username)+"\n            ")]),t._v(" "),e("v-list-item-subtitle",{},[e("level-image-viewing",{attrs:{item:t._bonus.vip}}),t._v(" "),e("level-viewing",{staticClass:"fs-12 d-inline op-80",attrs:{item:t._bonus.vip}})],1)],1):e("v-list-item-content",[e("v-list-item-title",{staticClass:"fs-18"},[t._v("\n                \n                "+t._s(t.$store.state.user_backend.username)+"\n            ")]),t._v(" "),e("v-list-item-subtitle",[t._v("\n                \n                Lv.0 "),e("level-viewing",{staticClass:"fs-12 d-inline op-80",attrs:{item:"simpler_0"}})],1)],1)],1)],1)},staticRenderFns:[]};var f=e("VU/8")(_,v,!1,function(t){e("qShA")},"data-v-dfe57b0a",null).exports,p={components:{LadBonus:o.a,LadMsg:u.a,QiongGradientLine:c.a,LadAvatar:f,QiongLoading:l.a},name:"",props:{id:{type:String,default:""},need_avatar:{type:Boolean,default:!1}},data:function(){return{face:e("APhH"),unid:null,bonus:null,_chronus:null,loading:!1}},mounted:function(){var t=this;return a()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!1,t._assign(),n.next=4,t.chronuLoading();case 4:t._chronus=n.sent,t._chronus&&t.bonusLoading(t._chronus.id);case 6:case"end":return n.stop()}},n,t)}))()},methods:{_assign:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.id?this.unid=this.id:this.unid=t},chronuLoading:function(){var t=this;return a()(r.a.mark(function n(){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.get(t.api.chronus,t.$store.state.token,{"_where[start_lte]":t.view.getToday(),"_where[end_gte]":t.view.getToday()});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}},n,t)}))()},bonusLoading:function(t){var n=this;return a()(r.a.mark(function e(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.conn.get(n.api.bonus,n.$store.state.token,{chronu:t,"user.unid":n.unid});case 2:s=e.sent,console.log(s),s&&(n.bonus=s[0]),n.loading=!0;case 6:case"end":return e.stop()}},e,n)}))()}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list",{staticClass:"px-0",attrs:{nav:"",dense:""}},[e("lad-avatar",{attrs:{_avatar:t.face,_need_avatar:t.need_avatar,_bonus:t.bonus}}),t._v(" "),t.loading?e("lad-msg",{staticClass:"qiong-pt-5 mt-1 pl-4",attrs:{_bonus:t.bonus}}):e("div",{staticClass:"Lad_Three_Line pt-9"},[e("qiong-loading",{attrs:{bigger:-1}})],1),t._v(" "),e("qiong-gradient-line",{staticClass:"qiong-pt-5 mt-1"}),t._v(" "),t.loading?e("lad-bonus",{staticClass:"qiong-pt-10 pl-4",attrs:{_bonus:t.bonus}}):e("div",{staticClass:"Lad_Two_Line pt-5"},[e("qiong-loading",{attrs:{bigger:-1}})],1)],1)},staticRenderFns:[]};var h=e("VU/8")(p,m,!1,function(t){e("Q0Ox")},"data-v-9d4b15f8",null);n.a=h.exports},Q0Ox:function(t,n){},Sx7q:function(t,n,e){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"qiong-gradient-line"})])}]};var r=e("VU/8")({name:"",data:function(){return{}}},s,!1,function(t){e("xhc2")},"data-v-64c2bf1c",null);n.a=r.exports},VfDx:function(t,n){},WM2S:function(t,n){},"ZN+b":function(t,n){},bCRH:function(t,n){},fnM1:function(t,n){},h0mM:function(t,n){},k0Vh:function(t,n,e){"use strict";var s={components:{QiongLoading:e("oKCz").a},props:{_bonus:{type:Object}},name:"",data:function(){return{}},mounted:function(){}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._bonus?e("div",{staticClass:"fs-12 lad-lister qiong-menu-sub"},[e("div",{},[t._v("\n        團隊銷售點數："+t._s(t.view.if_def(t._bonus.son_pv_enroller))+"\n    ")]),t._v(" "),e("div",{},[t._v("\n        合資格活躍下線："+t._s(t.view.if_def(t._bonus.son_can_num_enroller))+"\n    ")])]):e("div",{staticClass:"fs-12 lad-lister qiong-menu-sub"},[e("div",{},[t._v("\n        團隊銷售點數：0\n    ")]),t._v(" "),e("div",{},[t._v("\n        合資格活躍下線：0\n    ")])])},staticRenderFns:[]};var i=e("VU/8")(s,r,!1,function(t){e("ZN+b")},"data-v-3fc9feae",null);n.a=i.exports},"n/G1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Xxa5"),r=e.n(s),i=e("exGp"),a=e.n(i),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home-bg"},[this._t("menu"),this._v(" "),n("v-main",{staticClass:"content"},[this._t("content")],2)],2)},staticRenderFns:[]};var u=e("VU/8")({components:{},name:"",data:function(){return{}}},o,!1,function(t){e("WM2S")},"data-v-3c13c716",null).exports,c={props:{chronu:{type:Object}},name:"",data:function(){return{}},methods:{choiseIt:function(){this.$store.commit("saveChronus",[this.chronu,!0])}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-full chronu def-shadow pa-3"},[e("div",{staticClass:"chronu_name"},[e("v-icon",{attrs:{size:"14"}},[t._v("calendar-multiple")]),t._v(" "+t._s(t.chronu.mark)+"\n\n        "),e("v-btn",{staticClass:"float-right",attrs:{color:"primary",text:""},on:{click:t.choiseIt}},[t._v("確認選擇")])],1),t._v(" "),e("div",{staticClass:"chronu_start sub-header pl-4"},[t._v("\n        開始："+t._s(t.view.ser_timed(t.chronu.start,!0))+"\n    ")]),t._v(" "),e("div",{staticClass:"chronu_end sub-header pl-4"},[t._v("\n        結束："+t._s(t.view.ser_timed(t.chronu.end,!0))+"\n    ")])])},staticRenderFns:[]};var d={components:{ChronusItem:e("VU/8")(c,l,!1,function(t){e("fnM1")},"data-v-5fabef73",null).exports},name:"",data:function(){return{chronus:[]}},mounted:function(){this.chronusLoading()},methods:{chronusLoading:function(){var t=this;return a()(r.a.mark(function n(){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.get(t.api.chronus,t.$store.state.token,{_sort:"published_at:DESC"});case 2:(e=n.sent)&&(t.chronus=e);case 4:case"end":return n.stop()}},n,t)}))()}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"bg-hui h-100",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"title pl-4 pt-2"},[t._v("   ")])])],1),t._v(" "),e("v-row",{staticClass:"w-full"},[e("v-col",{attrs:{col:"2"}}),t._v(" "),e("v-col",{staticClass:"pt-1",attrs:{col:"8"}},[e("div",{staticClass:"qiong-txt-18 qiong-txt-primary-dark"},[t._v("\n                結算月份\n            ")]),t._v(" "),e("div",{staticClass:"pb-2"},t._l(t.chronus,function(n,s){return e("div",{key:s,staticClass:"my-4"},[e("chronus-item",{attrs:{chronu:n}}),t._v(" "),s==n.length-1?e("v-divider"):t._e()],1)}),0)]),t._v(" "),e("v-col",{attrs:{col:"2"}})],1),t._v(" "),e("v-row",[e("v-col",{staticClass:"text-right"})],1)],1)},staticRenderFns:[]};var v=e("VU/8")(d,_,!1,function(t){e("VfDx")},"data-v-4d6d7104",null).exports,f=e("NwXI"),p=e("JFoy"),m=e("GwPA"),h=e("dmby"),g=e("KBL8"),b=e("AfF2"),x={props:{},name:"",data:function(){return{chrou:"",transfer:[],unit_users_sponser:[],unit_users_enroller:[]}},methods:{chronuLoading:function(){var t=this;return a()(r.a.mark(function n(){var e,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=void 0,s={"_where[start_lte]":t.view.getToday(),"_where[end_gte]":t.view.getToday()},n.next=4,t.conn.get(t.api.chronus,t.$store.state.token,s);case 4:if(e=n.sent,console.log("INIT 搜索 时光 =",e),e&&e.length>0&&(s=!0),!0!==s){n.next=14;break}return e[1]=!0,t.$store.commit("saveChronus",e),t.chrou=e[0],n.abrupt("return",!0);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}},n,t)}))()},buyLoading:function(){var t=this;return a()(r.a.mark(function n(){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.get(t.api.buys,t.$store.state.token,{chronu:t.chrou.id});case 2:return e=n.sent,n.abrupt("return",e.map(function(t){return{num:t.num,id:t.id,pv:t.product.pv,first_buy:t.first_buy,users_permissions_user:t.users_permissions_user.id,buy_time:t.buy_time,product:t.product.id}}));case 4:case"end":return n.stop()}},n,t)}))()},userLoading:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER";return a()(r.a.mark(function e(){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={},"SPONSER"==n?s["_where[relation_index_sponser_contains]"]=t.$store.state.user_backend.relation_index_sponser:s["_where[relation_index_enroller_contains]"]=t.$store.state.user_backend.relation_index_enroller,e.next=4,t.conn.get(t.api.users,t.$store.state.token,s);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}},e,t)}))()},rebuild_user:function(t){delete t.created_at,delete t.updated_at,delete t.role,delete t.provider,delete t.confirmed,delete t.blocked,delete t.email},init:function(){var t=this;return a()(r.a.mark(function n(){var e,s,i,a,o,u,c,l,d;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=!1,s=void 0,i=void 0,a=t.$store.state.user_backend,!t.$store.state.chronus||!a){n.next=47;break}return o=a.sponser_id,u=a.enroller_id,t.chrou=t.$store.state.chronus,console.log("INIT 资料 =",t.chrou.mark,a.username),n.next=10,t.userLoading("SPONSER");case 10:return c=n.sent,n.next=13,t.userLoading("ENROLLER");case 13:return l=n.sent,n.next=16,t.buyLoading();case 16:return d=n.sent,c.map(function(t){var n=[];return d.map(function(e){t.id==e.users_permissions_user&&n.push(e)}),t.buys=n,t}),l.map(function(t){var n=[];return d.map(function(e){t.id==e.users_permissions_user&&n.push(e)}),t.buys=n,t}),n.next=21,Object(f.a)(c,"SPONSER",t.rebuild_user,o);case 21:return s=n.sent,n.next=24,Object(f.a)(l,"ENROLLER",t.rebuild_user,u);case 24:return i=n.sent,n.next=27,Object(p.a)(s,"SPONSER",t.transfer,null);case 27:return t.transfer=n.sent,n.next=30,Object(p.a)(i,"ENROLLER",t.transfer,null);case 30:return t.transfer=n.sent,t.transfer.map(function(t){return t.vip=Object(m.a)(t),t}),t.unit_users_sponser=s,t.unit_users_enroller=i,n.next=36,Object(h.a)(i,t.transfer);case 36:return n.next=38,Object(g.a)(s,t.transfer);case 38:return n.next=40,Object(b.a)(s,t.transfer);case 40:t.bonus._build_res(s,t.transfer,function(t,n){for(var e=0;e<n.length;e++)t.unid==n[e].unid&&(t.transfer=n[e],n[e].bonus=t.bonus)}),t.bonus._build_res(i,t.transfer,function(t,n){for(var e=0;e<n.length;e++)t.unid==n[e].unid&&(t.transfer=n[e],n[e].bonus.usd_recommend=t.bonus.usd_recommend)}),console.log("sponser =",t.unit_users_sponser,"enroller =",t.unit_users_enroller),t.$store.commit("saveUserSponser",t.unit_users_sponser),t.$store.commit("saveUserEnroller",t.unit_users_enroller),t.$store.commit("saveTransfer",t.transfer),e=!0;case 47:return n.abrupt("return",e);case 48:case"end":return n.stop()}},n,t)}))()}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var k=e("VU/8")(x,w,!1,function(t){e("h0mM")},"data-v-3868b934",null).exports,y=e("oKCz"),C={name:"",components:{QiongLoading:y.a},data:function(){return{}}},$={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"qiong-txt-td"},[n("v-row",[n("v-col",{staticClass:"qiong-pl-20 qiong-pr-20 running-pt"},[n("qiong-loading",{attrs:{bigger:1}}),this._v(" "),n("div",{staticClass:"text-center running-txt"},[this._v("\n                加載中\n            ")])],1)],1)],1)},staticRenderFns:[]};var L=e("VU/8")(C,$,!1,function(t){e("FPAt")},"data-v-1a18304e",null).exports,E=e("mvHQ"),R=e.n(E),S=e("Sx7q"),O=e("+Wze"),q=e("k0Vh"),N={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item-group",{staticClass:"qiong-br-0 qiong-list-item",attrs:{"active-class":"deep-blue--text text--accent-5"},model:{value:t.group,callback:function(n){t.group=n},expression:"group"}},[t._l(t.tiles,function(n){return e("v-list-item",{key:n.title,on:{click:function(e){return e.stopPropagation(),t.go("/home/"+n.link)}}},[e("v-list-item-avatar",{staticClass:"py-0 my-0"},[e("v-icon",{domProps:{innerHTML:t._s(n.icon)}})],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                "+t._s(n.title)+"\n            ")])])],1)}),t._v(" "),t._l(t.tiles_group,function(n){return e("v-list-group",{key:n.title,staticClass:"lad_list_group",attrs:{"no-action":"","sub-group":"",color:"rgba(255, 255, 255, 0.6)","prepend-icon":n.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-content",[e("v-list-item-title",{staticClass:"pl-2 fs-16"},[t._v(t._s(n.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(n.children,function(n){return e("v-list-item",{key:n.title,staticClass:"pl-15",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.go("/home/"+n.link)}}},[e("v-list-item-avatar",{staticClass:"pr-0 mr-3"},[e("v-icon",{attrs:{size:22}},[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                    "+t._s(n.title)+"\n                ")])])],1)})],2)}),t._v(" "),e("v-list-item",{on:{click:t.editChronu}},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-application-cog")])],1),t._v(" "),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v("\n                切換月份\n            ")])])],1)],2)},staticRenderFns:[]};var F=e("VU/8")({name:"",data:function(){return{group:null,tiles:[{icon:"mdi-account-tie-outline",title:"個人中心",link:"user/center"},{icon:"mdi-clipboard-multiple-outline",title:"購買記錄",link:"buys/records"},{icon:"mdi-certificate",title:"獎金報表",link:"account/statement"}],tiles_group:[{icon:"mdi-trophy-variant-outline",title:"獎勵明細",link:null,children:[{icon:"mdi-bell-ring-outline",title:"活躍分店獎勵",link:"bonus/active_house"},{icon:"mdi-basket-outline",title:"首購獎勵",link:"bonus/recommend"},{icon:"mdi-account-group-outline",title:"團隊獎金",link:"bonus/active_layer"}]},{icon:"mdi-family-tree",title:"樹形結構",link:null,children:[{icon:"mdi-file-tree-outline",title:"Sponser 結構",link:"user/sponser"},{icon:"mdi-file-tree",title:"Enroller 結構",link:"user/enroller"}]}]}},methods:{go:function(t){this.$router.push({path:t})},outLogin:function(){this.$store.commit("changeAuth",null),this.$store.commit("saveBackendUser",""),this.$router.push({path:"/login/"})},editChronu:function(){this.$store.commit("saveChronus",["",!0])}}},N,!1,function(t){e("Bs1a")},"data-v-b0bdd064",null).exports,U=e("rbjZ"),V=e("OLQ5"),P=e("Dd8w"),M=e.n(P),j={props:{user_s:{type:Array},user_e:{type:Array}},name:"",data:function(){return{loading:!1,_bonus:[],transfer:[]}},mounted:function(){var t=this;return a()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.transfer=t.$store.state.transfer,n.next=3,t.getBonus();case 3:t._bonus=n.sent,t._bonus.length>0&&setTimeout(function(){t.syncData()},4e3);case 5:case"end":return n.stop()}},n,t)}))()},methods:{clear_data:function(t){delete t.chronu,delete t.createdAt,delete t.published_at,delete t.updatedAt,delete t.bonus},getBonus:function(){var t=this;return a()(r.a.mark(function n(){var e,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.next=3,t.conn.get(t.api.bonus,t.$store.state.token,{chronu:t.$store.state.chronus.id});case 3:return(s=n.sent)&&(e=s.map(function(t){return{id:t.id,user:t.user.id}})),n.abrupt("return",e);case 6:case"end":return n.stop()}},n,t)}))()},netoSave_enroller:function(t){var n=this;return a()(r.a.mark(function e(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={usd_recommend:t.bonus.usd_recommend},n._bonus.map(function(n){n.user==t.id&&(s.bonus=n.id)}),e.next=4,n.conn.put(n.api.bonus+"/"+s.id,n.$store.state.token,s);case 4:if(!e.sent){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,n)}))()},netoSave_sponser:function(t){var n=this;return a()(r.a.mark(function e(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=M()({},t.bonus,{vip:t.vip.name+"_"+t.vip.star,son_can_num_sponser:t.transfer.son_can_num_SPONSER,son_can_num_enroller:t.transfer.son_can_num_ENROLLER,son_pv_sponser:t.transfer.son_pv_SPONSER+"",son_pv_enroller:t.transfer.son_pv_ENROLLER+""}),n._bonus.map(function(n){n.user==t.id&&(s.bonus=n.id)}),n.clear_data(s),e.next=5,n.conn.put(n.api.bonus+"/"+s.id,n.$store.state.token,s);case 5:if(!e.sent){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,n)}))()},syncData:function(){var t=this;this.loading=!0,console.log(this.transfer),this.transfer.map(function(t){}),setTimeout(function(){t.loading=!1},4600)}}},T={render:function(){var t=this.$createElement,n=this._self._c||t;return this.loading?n("div",{staticClass:"pl-4 pr-4 async-content-fixed sub-header"},[n("v-icon",{staticClass:"circle-around d-inline-block",attrs:{size:"14"}},[this._v("mdi-loading")]),this._v(" "),n("div",{staticClass:"fs-12 d-inline-block"},[this._v("同步中...")])],1):n("span")},staticRenderFns:[]};var A=e("VU/8")(j,T,!1,function(t){e("9b8r")},"data-v-05632c9e",null).exports,I={name:"",props:{unid:{type:String}},data:function(){return{_unid:null,loading:!1,me_sponser:null,me_enroller:null}},mounted:function(){var t=this;setTimeout(function(){t.syncData()},4e3)},methods:{syncData:function(){var t=this;return a()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,t.unid?t._unid=t.unid:t._unid=t.$store.state.user_backend.unid,t._switchMe(),t.asyncMe(),setTimeout(function(){t.loading=!1},2400);case 5:case"end":return n.stop()}},n,t)}))()},_switchMe:function(){var t=this,n=this.$store.state.transfer,e=this.$store.state.users_sponser;this.bonus._build(e,n,function(n,e){n.unid==t._unid&&(t.me_sponser=n)}),e=this.$store.state.users_enroller,this.bonus._build(e,n,function(n,e){n.unid==t._unid&&(t.me_enroller=n)})},_bonusLoading:function(){var t=this;return a()(r.a.mark(function n(){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={chronu:t.$store.state.chronus.id,_sort:"published_at:DESC","user.unid":t._unid},n.next=3,t.conn.get(t.api.bonus,t.$store.state.token,e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,t)}))()},_bonusUpdate:function(t){var n=this;return a()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.conn.put(n.api.bonus+"/"+t.id,n.$store.state.token,t);case 2:e.sent;case 3:case"end":return e.stop()}},e,n)}))()},asyncMe:function(){var t=this.me_sponser,n=M()({},t.bonus,{vip:t.vip.name+"_"+t.vip.star,son_can_num_sponser:t.transfer.son_can_num_SPONSER,son_can_num_enroller:t.transfer.son_can_num_ENROLLER,son_pv_sponser:t.transfer.son_pv_SPONSER+"",son_pv_enroller:t.transfer.son_pv_ENROLLER+""});n.usd_recommend=this.me_enroller.bonus.usd_recommend,this._bonusUpdate(n)}}},B={render:function(){var t=this.$createElement,n=this._self._c||t;return this.loading?n("div",{staticClass:"pl-4 pr-4 async-content-fixed sub-header"},[n("v-icon",{staticClass:"circle-around d-inline-block",attrs:{size:"14"}},[this._v("mdi-loading")]),this._v(" "),n("div",{staticClass:"fs-12 d-inline-block"},[this._v("同步中...")])],1):n("span")},staticRenderFns:[]};var z={components:{SyncBonus:A,SyncMe:e("VU/8")(I,B,!1,function(t){e("tUJE")},"data-v-547fd560",null).exports},name:"",data:function(){return{}}},D={render:function(){var t=this.$createElement,n=this._self._c||t;return this.$store.state.transfer?n("sync-me",{attrs:{unid:this.$store.state.user_backend.unid}}):this._e()},staticRenderFns:[]};var Q=e("VU/8")(z,D,!1,function(t){e("5YKq")},"data-v-1d139130",null).exports,J={name:"",inject:["reload"],components:{LadLister:F,QiongGradientLine:S.a,LadMsg:U.a,LadBonus:q.a,LevelImageViewing:O.a,MenuMsgWidget:V.a,AsyncTopWidget:Q},data:function(){return{drawer:!1,group2:null,mini:!1,mine:null}},watch:{group:function(){this.drawer=!1}},mounted:function(){this.me()},methods:{changeF:function(){this.drawer=!this.drawer},init:function(){this.me()},me:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t=this,n=this.$store.state.user_backend.unid,e=this.$store.state.users_sponser,s=this.$store.state.transfer;e&&this.bonus._build_res(e,s,function(e,s){e.unid==n&&(t.mine=JSON.parse(R()(e)))})},userCenter:function(){this.$router.push({path:"/home/user/center"})}}},H={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-navigation-drawer",{staticClass:"right-shadow qiong-pt-20",attrs:{width:"290",app:"","mini-variant":t.mini,"mini-variant-width":"68","enable-resize-watcher":"",floating:"",permanent:"","hide-overlay":""},on:{"update:miniVariant":function(n){t.mini=n},"update:mini-variant":function(n){t.mini=n}},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("menu-msg-widget",{attrs:{id:this.$store.state.user_backend.unid,need_avatar:!1}}),t._v(" "),e("lad-lister",{staticClass:"qiong-pt-15 mt-2"}),t._v(" "),e("v-spacer"),t._v(" "),e("async-top-widget")],1)},staticRenderFns:[]};var G=e("VU/8")(J,H,!1,function(t){e("7Uv1")},"data-v-63de2d3c",null).exports,K=e("3c3G"),W={components:{HomeLayout:u,Chronus:v,Init:k,QiongLoading:y.a,DataRunning:L,LeftAppDrawers:G,FlexIframePdf:K.a,AsyncTopWidget:Q},name:"",created:function(){var t=this.$route.query.menu;this.menu=!t||JSON.parse(t)},provide:function(){return{reload:this.reload}},watch:{$route:function(t,n){var e=t.path.split("/").length,s=n.path.split("/").length;this.transitionName=e<s?"slide-up":"slide-down",this.transitionName||(this.transitionName="slide-up")}},data:function(){return{menu:!1,alive:!0,init_finished:!1,transitionName:null}},mounted:function(){var t=this;return a()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.initREF.init();case 2:t.init_finished=n.sent,console.log("HOME INIT FINISHED =",t.init_finished),t.reload(),t.init_finished&&t.menu&&t.$refs.menu.init();case 6:case"end":return n.stop()}},n,t)}))()},methods:{reload:function(){this.alive=!1,this.$nextTick(function(){this.alive=!0})}}},Z={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("home-layout",[t.menu?e("div",{attrs:{slot:"menu"},slot:"menu"},[e("left-app-drawers",{ref:"menu",staticClass:"menu"})],1):t._e(),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t.alive?e("transition",{attrs:{name:t.transitionName}},[t.init_finished?e("router-view"):e("data-running")],1):t._e(),t._v(" "),t.$store.state.chronus?e("init",{ref:"initREF"}):t._e()],1)])},staticRenderFns:[]};var Y=e("VU/8")(W,Z,!1,function(t){e("bCRH")},"data-v-234a38f1",null);n.default=Y.exports},qShA:function(t,n){},rbjZ:function(t,n,e){"use strict";var s=e("oKCz"),r=e("jOJ2"),i={props:{_bonus:{type:Object}},name:"",data:function(){return{}},components:{LevelViewing:r.a,QiongLoading:s.a}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._bonus?e("div",{staticClass:"fs-12 lad-lister"},[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            用戶編號："+t._s(t.view.if_def(t._bonus.user.number_code))+"\n        ")]),t._v(" "),e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            iPV："+t._s(t.view.if_def(t._bonus.ipv))+"\n            ")])]),t._v(" "),e("div",{},[t._v("\n        用戶全稱："+t._s(t.view.if_def(t._bonus.user.display_name))+"\n    ")])]):e("div",{staticClass:"fs-12 lad-lister"},[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            用戶編號："+t._s(t.view.if_def(t.$store.state.user_backend.username))+"\n        ")]),t._v(" "),e("div",{staticClass:"qiong-wide-50 pr-0"},[t._v("\n            iPV：0\n        ")])]),t._v(" "),e("div",{},[t._v("\n        用戶全稱："+t._s(t.view.if_def(t.$store.state.user_backend.display_name))+"\n    ")])])},staticRenderFns:[]};var o=e("VU/8")(i,a,!1,function(t){e("MLSc")},"data-v-2e0b51f0",null);n.a=o.exports},tUJE:function(t,n){},u2JY:function(t,n){},xhc2:function(t,n){}});
//# sourceMappingURL=1.404079e0d7124ee8eac2.js.map