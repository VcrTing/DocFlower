webpackJsonp([6],{"1QuX":function(e,t){},"1uLK":function(e,t){},Qu52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Q5Hn"),r=n("mvHQ"),a=n.n(r),i=n("Xxa5"),o=n.n(i),u=n("exGp"),c=n.n(u),_=n("DBJ4"),d=_.a.NAMESPACE.simpler,l=_.a.NAMESPACE.leader,v={name:"普通成员",type:d,star:0,ratio:[0]},m=_.a.VIPS_SIMPLER,f=_.a.VIPS_LEADER,h=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=v;return e==l?f.map(function(e){e.star==t&&(s=e)}):m.map(function(e){e.star==t&&(s=e)}),n&&t>0&&(s.ratio=function(e,t){var n=t-1;return _.a.ACTIVE_LAYER_RATIOS[e][n]}(e,t)),s},p=function(e,t,n){var s=d,r=1;return e<100?r=0:n>2e3&&t>=2&&e+n>=5e3?(r=function(e,t,n){var s=e+n,r=3;return t>4&&s>25e3&&n>5e3?t>=6&&s>=15e4&&n>=25e3?r=5:t>=5&&s>=72e3&&n>=9e3&&(r=4):(t<4||s<25e3||n<5e3)&&(r=t>=3&&s>=9e3&&n>=3e3?2:1),r}(e,t,n),s=l):r=function(e,t,n){var s=e+n,r=3;return s>1e3?s>=3e3?r=5:s>=2e3&&(r=4):s<1e3&&(r=s<500?1:2),r}(e,0,n),h(s,r)},b=n("Mh3b"),x=_.a.NAMESPACE,C=_.a.CAN_USER_PV_LIMIT,y=function e(t){var n={num:0,pv:0},s=0,r=0;return t.map(function(t){var a={num:0,pv:0};s=b.a.numd_pv(t),r=b.a.numd_inum(s,C),b.a.judge_has_children(t)&&(a=e(t[x.children])),t[x.ipv]=s,t[x.son_pv]=a.pv,t[x.son_can_num]=a.num,t[x.vip]=p(s,a.num,a.pv),n.pv+=a.pv+s,n.num+=a.num+r,t.show=!0}),n},g=function(e,t){b.a.judge_has_children(e)?y([e]):y(e)},w=n("//Fk"),S=n.n(w),E=_.a.NAMESPACE,k=(_.a.CAN_USER_PV_LIMIT,function e(t,n,s){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,a=[];return r+=1,t.map(function(i){if(i[s]==n){var o=i[E.unid];i[E.children]=e(t,o,s,r),i[E.index]=r,a.push(i)}}),a}),A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return new S.a(function(s,r){s(k(e,n,"SPONSER"==t?E.sponser_id:E.enroller_id))})},$=n("isQH"),R=n("1Qta"),L=n("qzOj"),P=n("myd0"),I=n("7qUZ"),M={components:{LoadingSmall:I.a},props:{user:{type:Object},code:{type:String}},name:"",data:function(){return{usd_recommend:0,usd_active_house:0,usd_team_layer:0,res:0,completed:!1}},mounted:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.showRes();case 2:case"end":return t.stop()}},t,e)}))()},methods:{showRes:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.completed=!1,"usd_recommend"!=e.code){t.next=8;break}return t.next=4,Object($.a)(e.user);case 4:n=t.sent,e.res=n[0]+", "+n[1]+", "+n[2],t.next=21;break;case 8:if("usd_active_house"!=e.code){t.next=14;break}return t.next=11,Object(R.a)(e.user);case 11:e.res=t.sent,t.next=21;break;case 14:if("usd_team_layer"!=e.code){t.next=20;break}return t.next=17,Object(L.a)(e.user);case 17:e.res=t.sent,t.next=21;break;case 20:e.res=0;case 21:e.completed=!0;case 22:case"end":return t.stop()}},t,e)}))()},getUsd:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.a)(e.user);case 2:return e.usd_recommend=t.sent,t.next=5,Object(R.a)(e.user);case 5:return e.usd_active_house=t.sent,e.usd_team_layer=Object(L.a)(e.user),n=P.a.ser_bonus(e.usd_recommend,e.usd_active_house,e.usd_team_layer),e.user.bonus=n,t.abrupt("return",n);case 10:case"end":return t.stop()}},t,e)}))()}}},O={render:function(){var e=this.$createElement,t=this._self._c||e;return this.completed?t("div",[this._v("\n    "+this._s(this.res)+"\n")]):t("loading-small")},staticRenderFns:[]};var U=n("VU/8")(M,O,!1,function(e){n("h4Tq")},"data-v-4da0bf6e",null).exports,j=_.a.NAMESPACE.simpler,N=(_.a.NAMESPACE.leader,_.a.VIPS_SIMPLER),T=_.a.VIPS_LEADER,V=function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e.join("_"):e.split("_")},F=function(e){var t="";if(e[0]==j){if(0==e[1])return t;t=N[e[1]-1]}else t=T[e[1]-1];return t},B=n("i4QM"),Q={components:{UnitBonus:U},props:{the_item:{type:Object},allow:{type:Boolean}},name:"",mounted:function(){},data:function(){return{}},computed:{total:function(){var e=B.a.floatAdd(this.the_item.usd_recommend,this.the_item.usd_active_house);return B.a.floatAdd(e,this.the_item.usd_team_layer)}},methods:{vip_code_to_name:function(e){return e?(e=V(e),F(e).name):"無結果"},goCenter:function(){this.$store.commit("saveUser",this.the_item.user),this.$store.commit("saveBonus",this.the_item),this.$router.push({path:"/home/account/user_center",query:{user_id:this.the_item.user.id}})}}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-inline"},[n("div",{staticClass:"tree-table-content ttc-ar",class:{"tree-root":e.the_item.index<2}},[n("div",{staticClass:"account_empty text-left tree-col",domProps:{innerHTML:e._s(e.the_item.user.username)}}),e._v(" "),n("div",{staticClass:"ipv tree-col"},[e._v("\n            "+e._s(e.vip_code_to_name(e.the_item.vip))+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_recommend tree-col"},[e._v("\n            "+e._s(e.the_item.usd_recommend)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_active_house tree-col"},[e._v("\n            "+e._s(e.the_item.usd_active_house)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_team_layer tree-col"},[e._v("\n            "+e._s(e.the_item.usd_team_layer)+"\n        ")]),e._v(" "),n("div",{staticClass:"usd_leader_management tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"usd_leader_devlopment tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"usd_sale_commission tree-col"},[e._v("\n            0\n        ")]),e._v(" "),n("div",{staticClass:"ipv tree-col"},[e._v("\n            "+e._s(e.total)+"\n        ")]),e._v(" "),n("div",{staticClass:"option"},[n("v-btn",{staticClass:"ma-0 pa-1 btn-item-icon text-center",attrs:{fab:"",icon:"","x-small":"",color:"primary"},on:{click:e.goCenter}},[n("v-icon",[e._v("\n                    mdi-chevron-right\n                ")])],1)],1)])])},staticRenderFns:[]};var J=n("VU/8")(Q,H,!1,function(e){n("1uLK")},"data-v-7d64ced8",null).exports,z=n("ClHd"),D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix fs-14 fw-b header-bg"},[n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"15%"}},[n("div",{staticClass:"username"},[e._v("\n                會員號碼\n            ")])]),e._v(" "),n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"85%"}},[n("div",{staticClass:"account_empty text-left"},[e._v("\n                用戶名\n            ")]),e._v(" "),n("div",{staticClass:"ipv"},[e._v("\n                支付級別\n            ")]),e._v(" "),n("div",{staticClass:"usd_recommend"},[e._v("\n                首購直接"),n("br"),e._v("\n                推薦獎金\n            ")]),e._v(" "),n("div",{staticClass:"usd_active_house"},[e._v("\n                活躍分店消費獎勵"),n("br"),e._v("\n                @ 130USD\n            ")]),e._v(" "),n("div",{staticClass:"usd_team_layer"},[e._v("\n                團隊獎金\n            ")]),e._v(" "),n("div",{staticClass:"usd_leader_management"},[e._v("\n                領袖分紅"),n("br"),e._v("（管理獎金）\n            ")]),e._v(" "),n("div",{staticClass:"usd_leader_devlopment"},[e._v("\n                領袖分紅"),n("br"),e._v("（發展獎金）\n            ")]),e._v(" "),n("div",{staticClass:"usd_sale_commission"},[e._v("\n                零售傭金\n            ")]),e._v(" "),n("div",{staticClass:"ipv"},[e._v("\n                Total\n            ")]),e._v(" "),n("div",{staticClass:"option"},[e._v("\n                 \n            ")])])])}]};var q=n("VU/8")({name:"",data:function(){return{}}},D,!1,function(e){n("c0z0")},"data-v-d07ca7c4",null).exports,X=n("Dd8w"),K=n.n(X),G=n("Xejt"),Y={components:{LoadingSmall:I.a},props:{user_s:{type:Array},user_e:{type:Array}},name:"",data:function(){return{loading:!1,bonus:[],transfer:[]}},mounted:function(){this.transfer=this.$store.state.transfer,this.getBonus()},methods:{getBonus:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.bonus,e.$store.state.token,{chronu:e.$store.state.chronus.id});case 2:(n=t.sent)&&(e.bonus=n.map(function(e){return{id:e.id,user:e.user.id}}));case 4:case"end":return t.stop()}},t,e)}))()},netoSave_enroller:function(e){var t=this;return c()(o.a.mark(function n(){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s={usd_recommend:e.bonus.usd_recommend},t.bonus.map(function(t){t.user==e.id&&(s.bonus=t.id)}),n.next=4,t.conn.put(t.api.bonus+"/"+s.bonus,t.$store.state.token,s);case 4:if(!n.sent){n.next=7;break}return n.abrupt("return",!0);case 7:return n.abrupt("return",!1);case 8:case"end":return n.stop()}},n,t)}))()},netoSave_sponser:function(e){var t=this;return c()(o.a.mark(function n(){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=K()({},e.bonus,{vip:e.vip.name+"_"+e.vip.star}),t.bonus.map(function(t){t.user==e.id&&(s.bonus=t.id)}),n.next=4,t.conn.put(t.api.bonus+"/"+s.bonus,t.$store.state.token,s);case 4:if(!n.sent){n.next=7;break}return n.abrupt("return",!0);case 7:return n.abrupt("return",!1);case 8:case"end":return n.stop()}},n,t)}))()},num:function(){var e=this;this.loading=!0,this.$emit("start_Father"),G.a._build(this.user_s,this.transfer,this.netoSave_sponser),G.a._build(this.user_e,this.transfer,this.netoSave_enroller),setTimeout(function(){e.loading=!1,e.$emit("finished_Father")},4600)}}},Z={render:function(){var e=this.$createElement,t=this._self._c||e;return this.loading?t("span",[this._v("\n    等待\n")]):t("span",{on:{click:this.num}},[this._v("\n    同步\n")])},staticRenderFns:[]};var W=n("VU/8")(Y,Z,!1,function(e){n("TM68")},"data-v-f853eff4",null).exports,ee=n("n7zJ"),te=n("IIpk"),ne={components:{ArTreeItem:J,NameLabel:z.a,ArTreeHeader:q,SyncBonus:W,Loading:ee.a,LoadingHuge:te.a},name:"",data:function(){return{users_sponser:null,users_enroller:null,show:!1,can_num:!1,bonuses:[]}},mounted:function(){this.theUser(),this.bonusesLoading()},methods:{theUser:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.users_sponser=e.$store.state.users_sponser,e.users_enroller=e.$store.state.users_enroller,e.show=!0;case 3:case"end":return t.stop()}},t,e)}))()},bonusesLoading:function(){var e=this;return c()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.conn.get(e.api.bonus,e.$store.state.token,{chronu:e.$store.state.chronus.id});case 2:(n=t.sent)&&(e.bonuses=n,0==e.bonuses.length&&alert("數據量 = 0。"));case 4:case"end":return t.stop()}},t,e)}))()},user:function(){var e=this;return c()(o.a.mark(function t(){var n,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.$store.state.user_unit,"SPONSER");case 2:return(n=t.sent)&&(e.users_sponser=JSON.parse(a()(n)),g(e.users_sponser)),t.next=6,A(e.$store.state.user_unit,"ENROLLER");case 6:(s=t.sent)&&(e.users_enroller=JSON.parse(a()(s)),g(e.users_enroller)),e.show=!0;case 9:case"end":return t.stop()}},t,e)}))()},async_start:function(){this.bonuses=[]},async_finished:function(){location.reload()}}},se={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary ml-2 mb-3"}},[n("sync-bonus",{attrs:{user_s:e.users_sponser,user_e:e.users_enroller},on:{start_Father:e.async_start,finished_Father:e.async_finished}})],1),e._v(" "),n("ar-tree-header")],1),e._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[e.show?n("v-treeview",{staticClass:"mt-0 the-tree ar-tree fs-14",attrs:{"multiple-active":"",transition:"",dense:"","off-icon":"",items:e.bonuses,"open-all":"",open:[0,1]},scopedSlots:e._u([{key:"label",fn:function(e){var t=e.item,s=e.open;return[n("name-label",{attrs:{the_item:t.user,op:s,space:"number_code",need_tree:!1}})]}},{key:"append",fn:function(t){var s=t.item,r=t.open;return[n("ar-tree-item",{ref:"treeItem",attrs:{allow:e.can_num,the_item:s,o:r}})]}}],null,!1,736346695)}):e._e(),e._v(" "),e.bonuses.length<1?n("loading"):e._e()],1)],1)],1)},staticRenderFns:[]};var re=n("VU/8")(ne,se,!1,function(e){n("1QuX")},"data-v-b16ebba8",null).exports,ae={components:{TreeListLayout:s.a,AccountResultData:re,Loading:ee.a,SyncBonus:W},name:"",data:function(){return{}}},ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("tree-list-layout",[t("div",{attrs:{slot:"title"},slot:"title"},[this._v("會計結算\n    ")]),this._v(" "),this.$store.state.transfer?t("account-result-data",{attrs:{slot:"content"},slot:"content"}):t("loading",{attrs:{slot:"content"},slot:"content"})],1)},staticRenderFns:[]};var oe=n("VU/8")(ae,ie,!1,function(e){n("RzJ5")},"data-v-fca2ac90",null);t.default=oe.exports},RzJ5:function(e,t){},TM68:function(e,t){},c0z0:function(e,t){},h4Tq:function(e,t){}});
//# sourceMappingURL=6.63318d017db1b4af8044.js.map