webpackJsonp([2],{"7qUZ":function(e,t,n){"use strict";var s={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loading"})},staticRenderFns:[]};var r=n("VU/8")({name:"LoadingSmall"},s,!1,function(e){n("acM9")},"data-v-aaa72676",null);t.a=r.exports},"8fQv":function(e,t){},Iy87:function(e,t){},JDRv:function(e,t){},OZZj:function(e,t){},Qu52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Q5Hn"),r=n("mvHQ"),a=n.n(r),i=n("Xxa5"),o=n.n(i),u=n("exGp"),c=n.n(u),d=n("DBJ4"),_=d.a.NAMESPACE.simpler,l=d.a.NAMESPACE.leader,v={name:"普通成员",type:_,star:0,ratio:[0]},f=d.a.VIPS_SIMPLER,m=d.a.VIPS_LEADER,p=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=v;return e==l?m.map(function(e){e.star==t&&(s=e)}):f.map(function(e){e.star==t&&(s=e)}),n&&t>0&&(s.ratio=function(e,t){var n=t-1;return d.a.ACTIVE_LAYER_RATIOS[e][n]}(e,t)),s},h=function(e,t,n){var s=_,r=1;return e<100?r=0:n>2e3&&t>=2&&e+n>=5e3?(r=function(e,t,n){var s=e+n,r=3;return t>4&&s>25e3&&n>5e3?t>=6&&s>=15e4&&n>=25e3?r=5:t>=5&&s>=72e3&&n>=9e3&&(r=4):(t<4||s<25e3||n<5e3)&&(r=t>=3&&s>=9e3&&n>=3e3?2:1),r}(e,t,n),s=l):r=function(e,t,n){var s=e+n,r=3;return s>1e3?s>=3e3?r=5:s>=2e3&&(r=4):s<1e3&&(r=s<500?1:2),r}(e,0,n),p(s,r)},b=n("Mh3b"),x=d.a.NAMESPACE,C=d.a.CAN_USER_PV_LIMIT,w=function e(t){var n={num:0,pv:0},s=0,r=0;return t.map(function(t){var a={num:0,pv:0};s=b.a.numd_pv(t),r=b.a.numd_inum(s,C),b.a.judge_has_children(t)&&(a=e(t[x.children])),t[x.ipv]=s,t[x.son_pv]=a.pv,t[x.son_can_num]=a.num,t[x.vip]=h(s,a.num,a.pv),n.pv+=a.pv+s,n.num+=a.num+r,t.show=!0}),n},S=function(e,t){b.a.judge_has_children(e)?w([e]):w(e)},y=n("//Fk"),E=n.n(y),g=d.a.NAMESPACE,A=(d.a.CAN_USER_PV_LIMIT,function e(t,n,s){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,a=[];return r+=1,t.map(function(i){if(i[s]==n){var o=i[g.unid];i[g.children]=e(t,o,s,r),i[g.index]=r,a.push(i)}}),a}),R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return new E.a(function(s,r){s(A(e,n,"SPONSER"==t?g.sponser_id:g.enroller_id))})},k=n("isQH"),L=n("1Qta"),$=n("qzOj"),O=n("myd0"),U=n("7qUZ"),P={components:{LoadingSmall:U.a},props:{user:{type:Object},code:{type:String}},name:"",data:function(){return{usd_recommend:0,usd_active_house:0,usd_team_layer:0,res:0,completed:!1}},mounted:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.showRes();case 2:case"end":return t.stop()}},t,e)}))()},methods:{showRes:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.completed=!1,"usd_recommend"!=e.code){t.next=8;break}return t.next=4,Object(k.a)(e.user);case 4:n=t.sent,e.res=n[0]+", "+n[1]+", "+n[2],t.next=21;break;case 8:if("usd_active_house"!=e.code){t.next=14;break}return t.next=11,Object(L.a)(e.user);case 11:e.res=t.sent,t.next=21;break;case 14:if("usd_team_layer"!=e.code){t.next=20;break}return t.next=17,Object($.a)(e.user);case 17:e.res=t.sent,t.next=21;break;case 20:e.res=0;case 21:e.completed=!0;case 22:case"end":return t.stop()}},t,e)}))()},getUsd:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.a)(e.user);case 2:return e.usd_recommend=t.sent,t.next=5,Object(L.a)(e.user);case 5:return e.usd_active_house=t.sent,e.usd_team_layer=Object($.a)(e.user),n=O.a.ser_bonus(e.usd_recommend,e.usd_active_house,e.usd_team_layer),e.user.bonus=n,t.abrupt("return",n);case 10:case"end":return t.stop()}},t,e)}))()}}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return this.completed?t("div",[this._v("\n    "+this._s(this.res)+"\n")]):t("loading-small")},staticRenderFns:[]};var I=n("VU/8")(P,j,!1,function(e){n("h4Tq")},"data-v-4da0bf6e",null).exports,M=d.a.NAMESPACE.simpler,N=(d.a.NAMESPACE.leader,d.a.VIPS_SIMPLER),V=d.a.VIPS_LEADER,T=function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e.join("_"):e.split("_")},F=function(e){var t="";if(e[0]==M){if(0==e[1])return t;t=N[e[1]-1]}else t=V[e[1]-1];return t},J=n("i4QM"),D={components:{UnitBonus:I},props:{the_item:{type:Object},allow:{type:Boolean}},name:"",mounted:function(){},data:function(){return{}},computed:{total:function(){var e=J.a.floatAdd(this.the_item.usd_recommend,this.the_item.usd_active_house);return J.a.floatAdd(e,this.the_item.usd_team_layer)}},methods:{vip_code_to_name:function(e){return e?(e=T(e),F(e).name):"無結果"}}},Q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-inline"},[n("div",{staticClass:"tree-table-content ttc-ar",class:{"tree-root":e.the_item.index<2}},[n("div",{staticClass:"level tree-col"},[e._v("\n            "+e._s(e.vip_code_to_name(e.the_item.vip))+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_recommend tree-col"},[e._v("\n            "+e._s(e.the_item.usd_recommend)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_active_house tree-col"},[e._v("\n            "+e._s(e.the_item.usd_active_house)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_team_layer tree-col"},[e._v("\n            "+e._s(e.the_item.usd_team_layer)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_leader_management tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"usd_leader_devlopment tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"usd_sale_commission tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"usd_result tree-col"},[e._v("\n            "+e._s(e.total)+"\n        ")])])])},staticRenderFns:[]};var B=n("VU/8")(D,Q,!1,function(e){n("8fQv")},"data-v-0f63fa06",null).exports,Z=n("ClHd"),q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix fs-14 fw-b header-bg"},[n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"15%"}},[n("div",{staticClass:"username"},[e._v("\n                User Unid\n            ")])]),e._v(" "),n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"85%"}},[n("div",{staticClass:"level"},[e._v("\n                支付级别\n            ")]),e._v(" "),n("div",{staticClass:"usd_recommend"},[e._v("\n                首购直接"),n("br"),e._v("\n                推荐奖金\n            ")]),e._v(" "),n("div",{staticClass:"usd_active_house"},[e._v("\n                活跃分店消费奖励"),n("br"),e._v("\n                @ 130USD\n            ")]),e._v(" "),n("div",{staticClass:"usd_team_layer"},[e._v("\n                团队奖金\n            ")]),e._v(" "),n("div",{staticClass:"usd_leader_management"},[e._v("\n                领袖分红"),n("br"),e._v("（管理奖金）\n            ")]),e._v(" "),n("div",{staticClass:"usd_leader_devlopment"},[e._v("\n                领袖分红"),n("br"),e._v("（发展奖金）\n            ")]),e._v(" "),n("div",{staticClass:"usd_sale_commission"},[e._v("\n                零售佣金\n            ")]),e._v(" "),n("div",{staticClass:"usd_result"},[e._v("\n                Total\n            ")])])])}]};var H=n("VU/8")({name:"",data:function(){return{}}},q,!1,function(e){n("JDRv")},"data-v-7dc3f568",null).exports,z=n("Dd8w"),X=n.n(z),G=n("Xejt"),Y={components:{LoadingSmall:U.a},props:{user_s:{type:Array},user_e:{type:Array}},name:"",data:function(){return{loading:!1,bonus:[],transfer:[]}},mounted:function(){this.transfer=this.$store.state.transfer,this.getBonus()},methods:{getBonus:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.bonus,e.$store.state.token);case 2:(n=t.sent)&&(e.bonus=n.map(function(e){return{id:e.id,user:e.user.id}}));case 4:case"end":return t.stop()}},t,e)}))()},netoSave_enroller:function(e){var t=this;return c()(o.a.mark(function n(){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s={usd_recommend:e.bonus.usd_recommend},t.bonus.map(function(t){t.user==e.id&&(s.bonus=t.id)}),n.next=4,t.conn.put(t.api.bonus+"/"+s.bonus,t.$store.state.token,s);case 4:n.sent;case 5:case"end":return n.stop()}},n,t)}))()},netoSave_sponser:function(e){var t=this;return c()(o.a.mark(function n(){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=X()({},e.bonus,{vip:e.vip.name+"_"+e.vip.star}),t.bonus.map(function(t){t.user==e.id&&(s.bonus=t.id)}),n.next=4,t.conn.put(t.api.bonus+"/"+s.bonus,t.$store.state.token,s);case 4:n.sent;case 5:case"end":return n.stop()}},n,t)}))()},num:function(){var e=this;this.loading=!0,G.a._build(this.user_s,this.transfer,this.netoSave_sponser),G.a._build(this.user_e,this.transfer,this.netoSave_enroller),setTimeout(function(){e.loading=!1,e.$emit("finished_Father")},600)}}},K={render:function(){var e=this.$createElement,t=this._self._c||e;return this.loading?t("span",[this._v("\n    等待\n")]):t("span",{on:{click:this.num}},[this._v("\n    同步\n")])},staticRenderFns:[]};var W=n("VU/8")(Y,K,!1,function(e){n("Iy87")},"data-v-d1ae0306",null).exports,ee=n("n7zJ"),te={components:{ArTreeItem:B,NameLabel:Z.a,ArTreeHeader:H,SyncBonus:W,Loading:ee.a},name:"",data:function(){return{users_sponser:null,users_enroller:null,show:!1,can_num:!1,bonuses:[]}},mounted:function(){this.theUser(),this.bonusesLoading()},methods:{theUser:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.users_sponser=e.$store.state.users_sponser,e.users_enroller=e.$store.state.users_enroller,e.show=!0;case 3:case"end":return t.stop()}},t,e)}))()},bonusesLoading:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.bonus,e.$store.state.token);case 2:(n=t.sent)&&(e.bonuses=n),console.log(n);case 5:case"end":return t.stop()}},t,e)}))()},user:function(){var e=this;return c()(o.a.mark(function t(){var n,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e.$store.state.user_unit,"SPONSER");case 2:return(n=t.sent)&&(e.users_sponser=JSON.parse(a()(n)),S(e.users_sponser)),t.next=6,R(e.$store.state.user_unit,"ENROLLER");case 6:(s=t.sent)&&(e.users_enroller=JSON.parse(a()(s)),S(e.users_enroller)),e.show=!0;case 9:case"end":return t.stop()}},t,e)}))()},async_finished:function(){location.reload()}}},ne={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary ml-2 mb-3"}},[n("sync-bonus",{attrs:{user_s:e.users_sponser,user_e:e.users_enroller},on:{finished_Father:e.async_finished}})],1),e._v(" "),n("ar-tree-header")],1),e._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[e.show?n("v-treeview",{staticClass:"mt-0 the-tree ar-tree fs-14",attrs:{"multiple-active":"",transition:"",dense:"","off-icon":"",items:e.bonuses,"open-all":"",open:[0,1]},scopedSlots:e._u([{key:"label",fn:function(e){var t=e.item,s=e.open;return[n("name-label",{attrs:{the_item:t.user,op:s,space:"unid",need_tree:!1}})]}},{key:"append",fn:function(t){var s=t.item,r=t.open;return[n("ar-tree-item",{ref:"treeItem",attrs:{allow:e.can_num,the_item:s,o:r}})]}}],null,!1,774871104)}):e._e(),e._v(" "),e.bonuses.length<1?n("div",{staticClass:"pa-6 text-center fs-13"},[e._v("\n                同步成功，數據拉取中...\n            ")]):e._e()],1)],1)],1)},staticRenderFns:[]};var se=n("VU/8")(te,ne,!1,function(e){n("OZZj")},"data-v-44eda2a5",null).exports,re={components:{TreeListLayout:s.a,AccountResultData:se,Loading:ee.a,SyncBonus:W},name:"",data:function(){return{}}},ae={render:function(){var e=this.$createElement,t=this._self._c||e;return t("tree-list-layout",[t("div",{attrs:{slot:"title"},slot:"title"},[this._v("會計結算\n    ")]),this._v(" "),this.$store.state.transfer?t("account-result-data",{attrs:{slot:"content"},slot:"content"}):t("loading",{attrs:{slot:"content"},slot:"content"})],1)},staticRenderFns:[]};var ie=n("VU/8")(re,ae,!1,function(e){n("RzJ5")},"data-v-fca2ac90",null);t.default=ie.exports},RzJ5:function(e,t){},acM9:function(e,t){},h4Tq:function(e,t){}});
//# sourceMappingURL=2.2cc763ec6a4700cdede2.js.map