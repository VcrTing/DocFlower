webpackJsonp([26],{"1Qta":function(e,n,t){"use strict";var r,a=t("Xxa5"),o=t.n(a),u=t("exGp"),s=t.n(u),i=t("//Fk"),c=t.n(i),l=t("Mh3b"),d=t("DBJ4"),h=d.a.NAMESPACE,p=d.a.CAN_USER_PV_LIMIT,f=d.a.ACTIVE_MEMBER_NUM,v=d.a.ACTIVE_USD,_=function(e){return l.a.numd_pv(e)},m=function(e,n,t){var r=Math.floor(e.length/n);return l.a.floatMul(t,r)},g=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h.children,a=0,o=[];return new c.a(function(u,s){if(l.a.judge_has_children(e,r)){var i=e[r];l.a.judge_number(i.length,n)&&i.map(function(e){if(l.a.judge_number(_(e),t)&&l.a.judge_has_children(e,r)){var u=[];e[r].map(function(e){a=_(e),l.a.judge_number(a,t)&&u.push(a)}),l.a.judge_number(u.length,n)&&o.push(u)}})}u(o)})},b=(r=s()(o.a.mark(function e(n){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n,f,p);case 2:return t=e.sent,r=m(t,f,v),e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)});n.a=b},"6I/9":function(e,n){},"6Z/R":function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),u=t.n(o),s={props:{chronu:{type:Object}},name:"",data:function(){return{}},methods:{choiseIt:function(){this.$store.commit("saveChronus",[this.chronu,!0])}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"w-full chronu def-shadow pa-3"},[t("div",{staticClass:"chronu_name"},[t("v-icon",{attrs:{size:"14"}},[e._v("calendar-multiple")]),e._v(" "+e._s(e.chronu.mark)+"\n\n        "),t("v-btn",{staticClass:"float-right",attrs:{color:"primary",text:""},on:{click:e.choiseIt}},[e._v("确认选择")])],1),e._v(" "),t("div",{staticClass:"chronu_start sub-header pl-4"},[e._v("\n        開始："+e._s(e.view.ser_timed(e.chronu.start,!0))+"\n    ")]),e._v(" "),t("div",{staticClass:"chronu_end sub-header pl-4"},[e._v("\n        結束："+e._s(e.view.ser_timed(e.chronu.end,!0))+"\n    ")])])},staticRenderFns:[]};var c={components:{ChronusItem:t("VU/8")(s,i,!1,function(e){t("fT/B")},"data-v-77b08172",null).exports},name:"",data:function(){return{chronus:[]}},mounted:function(){this.chronusLoading()},methods:{chronusLoading:function(){var e=this;return u()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.chronus,e.$store.state.token);case 2:(t=n.sent)&&(e.chronus=t);case 4:case"end":return n.stop()}},n,e)}))()}}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"bg-hui h-100",attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{col:"12"}},[t("div",{staticClass:"title pl-4 pt-2"},[e._v("   ")])])],1),e._v(" "),t("v-row",{staticClass:"w-full"},[t("v-col",{attrs:{col:"2"}}),e._v(" "),t("v-col",{staticClass:"pt-1",attrs:{col:"8"}},[t("div",{staticClass:"title"},[e._v("\n                結算月份\n            ")]),e._v(" "),t("div",{staticClass:"pb-2"},e._l(e.chronus,function(n,r){return t("div",{key:r,staticClass:"my-4"},[t("chronus-item",{attrs:{chronu:n}}),e._v(" "),r==n.length-1?t("v-divider"):e._e()],1)}),0)]),e._v(" "),t("v-col",{attrs:{col:"2"}})],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"text-right"})],1)],1)},staticRenderFns:[]};var d=t("VU/8")(c,l,!1,function(e){t("SXCW")},"data-v-cd008088",null);n.a=d.exports},"7zck":function(e,n){},"9pcs":function(e,n){},AfF2:function(e,n,t){"use strict";var r,a=t("Xxa5"),o=t.n(a),u=t("exGp"),s=t.n(u),i=t("//Fk"),c=t.n(i),l=t("B8md"),d=t("ERgN"),h=function(e,n,t,r){var a=[];return new c.a(function(o,u){if(l.a.judge_has_children(e)){var s=e.children;s.length>=n&&s.map(function(e){if(e.ipv>=t&&l.a.judge_has_children(e)){var r=[];e.children.map(function(e){e.ipv>=t&&r.push(e.ipv)}),r.length>=n&&a.push(r)}})}e.active_house_result=a,o(function(e,n,t){var r=Math.floor(e.length/n);return l.a.floatMul(t,r)}(a,n,r))})},p=function e(n,t,r,a){var u,i=this;n.map((u=s()(o.a.mark(function n(u){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l.a.judge_has_children(u)&&e(u.children,t,r,a),n.next=3,h(u,t,r,a);case 3:u.bonus.usd_active_house=n.sent;case 4:case"end":return n.stop()}},n,i)})),function(e){return u.apply(this,arguments)}))},f=(r=s()(o.a.mark(function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d.a.ACTIVE_MEMBER_NUM,u=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:d.a.USER_PV_LIMIT,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:d.a.ACTIVE_USD;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new c.a(function(){var e=s()(o.a.mark(function e(t,s){var c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=0,!r){e.next=7;break}return e.next=4,h(n,a,i,l);case 4:c=e.sent,e.next=8;break;case 7:c=p(n,a,i,l);case 8:t(c);case 9:case"end":return e.stop()}},e,u)}));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)})),function(e,n){return r.apply(this,arguments)});n.a=f},B8md:function(e,n,t){"use strict";var r=t("Dd8w"),a=t.n(r),o={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,o=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{o=n.toString().split(".")[1].length}catch(e){o=0}return t=Math.pow(10,Math.max(a,o)),r=(a=o)?a:o,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}};n.a=a()({numd_pv:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=0;return e.buys&&e.buys.length>=0&&(n?e.buys.map(function(e){if(e.first_buy){var n=o.floatMul(e.num,e.pv);t=o.floatAdd(t,n)}}):e.buys.map(function(e){var n=o.floatMul(e.num,e.pv);t=o.floatAdd(t,n)})),t},numd_inum:function(e,n){return e>=n?1:0},num_reward:function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0==e||void 0==n?0:t?o.floatMul(e,n):o.floatAdd(e,n)},judge_has_children:function(e){return"children"in e&&e.children.length>0},transfer_vip:function(e,n){for(var t={ratio:[]},r=e.length,a=0;a<r;a++)if(e[a].unid==n){t=e[a].vip;break}return t}},o)},"Bc7/":function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),u=t.n(o),s=t("NwXI"),i=t("JFoy"),c=t("GwPA"),l=t("dmby"),d=t("KBL8"),h=t("AfF2"),p={props:{},name:"",data:function(){return{chrou:"",transfer:[],unit_users_sponser:[],unit_users_enroller:[]}},methods:{chronuLoading:function(){var e=this;return u()(a.a.mark(function n(){var t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=void 0,r={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=4,e.conn.get(e.api.chronus,e.$store.state.token,r);case 4:if(t=n.sent,console.log("搜索 时光 =",t),t&&t.length>0&&(r=!0),!0!==r){n.next=14;break}return t[1]=!0,e.$store.commit("saveChronus",t),e.chrou=t[0],n.abrupt("return",!0);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}},n,e)}))()},buyLoading:function(){var e=this;return u()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.chrou.id});case 2:return t=n.sent,n.abrupt("return",t.map(function(e){return{num:e.num,id:e.id,pv:e.product.pv,first_buy:e.first_buy,users_permissions_user:e.users_permissions_user.id,buy_time:e.buy_time,product:e.product.id}}));case 4:case"end":return n.stop()}},n,e)}))()},userLoading:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER";return u()(a.a.mark(function t(){var r,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={},"SPONSER"==n?r["_where[relation_index_sponser_contains]"]=e.$store.state.user_backend.relation_index_sponser:r["_where[relation_index_enroller_contains]"]=e.$store.state.user_backend.relation_index_enroller,t.next=4,e.conn.get(e.api.users,e.$store.state.token,r);case 4:return o=t.sent,console.log("user.length",o.length),t.abrupt("return",o);case 7:case"end":return t.stop()}},t,e)}))()},rebuild_user:function(e){delete e.created_at,delete e.updated_at,delete e.role,delete e.provider,delete e.confirmed,delete e.blocked,delete e.email},init:function(){var e=this;return u()(a.a.mark(function n(){var t,r,o,u,p,f,v;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=void 0,r=void 0,!e.$store.state.chronus){n.next=46;break}return o=e.$store.state.user_backend.sponser_id,u=e.$store.state.user_backend.enroller_id,e.chrou=e.$store.state.chronus,n.next=7,e.userLoading("SPONSER");case 7:return p=n.sent,n.next=10,e.userLoading("ENROLLER");case 10:return f=n.sent,n.next=13,e.buyLoading();case 13:return v=n.sent,p.map(function(e){var n=[];return v.map(function(t){e.id==t.users_permissions_user&&n.push(t)}),e.buys=n,e}),f.map(function(e){var n=[];return v.map(function(t){e.id==t.users_permissions_user&&n.push(t)}),e.buys=n,e}),console.log("INIT UNID =",o,u),console.log("清洗后的用户S =",p),console.log("清洗后的用户E =",f),n.next=21,Object(s.a)(p,"SPONSER",e.rebuild_user,o);case 21:return t=n.sent,n.next=24,Object(s.a)(f,"ENROLLER",e.rebuild_user,u);case 24:return r=n.sent,n.next=27,Object(i.a)(t,"SPONSER",e.transfer,null);case 27:return e.transfer=n.sent,n.next=30,Object(i.a)(r,"ENROLLER",e.transfer,null);case 30:return e.transfer=n.sent,console.log("重建后的结构S =",t),console.log("重建后的结构E =",r),e.transfer.map(function(e){return e.vip=Object(c.a)(e),e}),e.unit_users_sponser=t,e.unit_users_enroller=r,n.next=38,Object(l.a)(r,e.transfer);case 38:return n.next=40,Object(d.a)(t,e.transfer);case 40:return n.next=42,Object(h.a)(t,e.transfer);case 42:console.log("最终 Transfer =",e.transfer),e.$store.commit("saveUserSponser",e.unit_users_sponser),e.$store.commit("saveUserEnroller",e.unit_users_enroller),e.$store.commit("saveTransfer",e.transfer);case 46:case"end":return n.stop()}},n,e)}))()}}},f={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var v=t("VU/8")(p,f,!1,function(e){t("Uf0w")},"data-v-7260cc06",null);n.a=v.exports},DBJ4:function(e,n,t){"use strict";var r=[.07,.06,.05,.03,.02],a={index:"index",bonus:"bonus",named:"named",user_id:"user",product_id:"product",unid:"unid",sponser_id:"sponser_id",enroller_id:"enroller_id",is_new:"is_new",children:"children",buys:"buys",pv:"pv",num:"num",ipv:"ipv",son_pv:"son_pv",son_can_num:"son_can_num",ratio:"ratio",vip:"vip",usd_layer:"usd_layer",son_usd:"son_usd",leader:"leader",simpler:"simpler",display_name:"displayname",usd_recommend:"usd_recommend",usd_team_layer:"usd_team_layer",usd_active_house:"usd_active_house"},o=[{name:"一级会员",type:a.simpler,star:1},{name:"二级会员",type:a.simpler,star:2},{name:"三级会员",type:a.simpler,star:3},{name:"四级会员",type:a.simpler,star:4},{name:"五级会员",type:a.simpler,star:5}],u=[{name:"一星领袖",type:a.leader,star:1},{name:"二星领袖",type:a.leader,star:2},{name:"三星领袖",type:a.leader,star:3},{name:"四星领袖",type:a.leader,star:4},{name:"五星领袖",type:a.leader,star:5}],s={simpler:[[r[0],0,0,0,0,0,0],[r[0],r[1],0,0,0,0,0],[r[0],r[1],r[1],0,0,0,0],[r[0],r[1],r[1],r[2],0,0,0],[r[0],r[1],r[1],r[2],r[2],0,0]],leader:[[r[0],r[1],r[1],r[2],r[2],r[3],0],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]]]};n.a={NAMESPACE:a,CAN_USER_PV_LIMIT:100,LAYER_DEPTH_NUM:7,ACTIVE_MEMBER_NUM:3,ACTIVE_USD:130,ACTIVE_LAYER_RATIOS:s,VIPS_SIMPLER:o,VIPS_LEADER:u}},ERgN:function(e,n,t){"use strict";var r=[.07,.06,.05,.03,.02],a={};a.simpler=[[r[0],0,0,0,0,0,0],[r[0],r[1],0,0,0,0,0],[r[0],r[1],r[1],0,0,0,0],[r[0],r[1],r[1],r[2],0,0,0],[r[0],r[1],r[1],r[2],r[2],0,0]],a.leader=[[r[0],r[1],r[1],r[2],r[2],r[3],0],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]]],n.a={USER_PV_LIMIT:100,LAYER_DEPTH_NUM:7,ACTIVE_MEMBER_NUM:3,ACTIVE_USD:130,RECOMMEND_DEPTH:3,SIMPLER:"simpler",LEADER:"leader",VIP_LAYER_RATIOS:a,RECOMMEND_RATIOS:[.2,.1,.05]}},GwPA:function(e,n,t){"use strict";var r=t("B8md"),a=t("ERgN"),o=a.a.LEADER,u=a.a.SIMPLER,s=function(e,n,t,s,i){var c,l,d,h=u,p=1;if(e<a.a.USER_PV_LIMIT)p=0;else{var f=r.a.floatAdd(e,s),v=r.a.floatAdd(e,i);f>=5e3&&v>=2e3&&t>=2?(h=o,p=function(e,n,t){var r=3;return e>4&&n>25e3&&t>5e3?e>=6&&n>=15e4&&t>=25e3?r=5:e>=5&&n>=72e3&&t>=9e3&&(r=4):(e<4||n<25e3||t<5e3)&&(r=e>=3&&n>=9e3&&t>=3e3?2:1),r}(t,f,v)):p=function(e){var n=3;return e>1e3?e>=3e3?n=5:e>=2e3&&(n=4):e<1e3&&(n=e<500?1:2),n}(f)}return c=h,l=p,void 0==(d=a.a.VIP_LAYER_RATIOS[c][l-1])&&(d=[]),{name:c,star:l,ratio:d}},i=function(e){var n=e.ipv,t=e.son_can_num_SPONSER,r=e.son_can_num_ENROLLER,a=e.son_pv_SPONSER,o=e.son_pv_ENROLLER;return s(n,t,r,a,o)};n.a=function(e){return i(e)}},I76R:function(e,n){e.exports={val_empty:function(e,n){return null!=e&&""!=e.trim()||n+"必須填寫。"},val_char:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e)||n+"中不應有特殊字符。"},val_char_price:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/.test(e)||n+"中不應有除了.之外的特殊字符。"},val_email:function(e,n){return!!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e)||n+"格式錯誤。"},val_length:function(e,n,t,r){return e.length<t?n+"的字符長度應該大於等於"+t:!(e.length>r)||n+"的字符長度應該小於等於"+r},val_timed:function(e,n,t){if(t){if(e.length>10&&e.length<8)return n+"字符長度不符合！";if(/[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e))return n+"中不應有除了 - 之外的特殊字符。"}return!0}}},JFoy:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),u=t("ERgN");n.a=function(e,n,t,r){return new a.a(function(a,s){!function e(n,t,r,a){var s={num:0,pv:0},i=0;return n.map(function(n){var c={num:0,pv:0};i=o.a.numd_inum(n.ipv,u.a.USER_PV_LIMIT),o.a.judge_has_children(n)&&(c=e(n.children,t,r,a)),n.son_pv=c.pv,n.son_can_num=c.num,s.pv=o.a.floatAdd(s.pv,o.a.floatAdd(c.pv,n.ipv)),s.num=o.a.floatAdd(s.num,o.a.floatAdd(c.num,i)),function(e,n,t){for(var r=-1,a=e.length,o=0;o<a;o++)e[o].unid==n.unid&&(r=o);if(r>=0)e[r]["son_pv_"+t]=n.son_pv,e[r]["son_can_num_"+t]=n.son_can_num;else{var u={unid:n.unid,ipv:n.ipv};u["son_pv_"+t]=n.son_pv,u["son_can_num_"+t]=n.son_can_num,e.push(u)}}(t,n,r),null!=a&&a(n)}),s}(e,t,n,r),a(t)})}},KBL8:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),u=t("ERgN"),s=function e(n,t,r,a,u,s){var i=0,c=a[r];return void 0==c&&(c=0),n.map(function(n){var l=0,d=r;if(r<s){n.usd_layer=o.a.floatMul(r+1,o.a.floatMul(c,n.ipv));var h=o.a.floatAdd(n.ipv,t);d=r+1,h>=u?h=0:d-=1,o.a.judge_has_children(n)&&(l=e(n.children,h,d,a,u,s))}else n.usd_layer=0;return i=o.a.floatAdd(i,o.a.floatAdd(n.usd_layer,l)),n.temporary_index=d,n}),i};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u.a.USER_PV_LIMIT,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.a.LAYER_DEPTH_NUM;return new a.a(function(a,u){a(t?s(e.children,0,0,e.vip.ratio,r,i):function e(n,t,r,a){n.map(function(n){if(n.vip=o.a.transfer_vip(t,n.unid),o.a.judge_has_children(n)){var u=n.children;e(u,t,r,a),n.bonus.usd_team_layer=s(u,0,0,n.vip.ratio,r,a)}else n.bonus.usd_team_layer=0})}(e,n,r,i))})}},Mh3b:function(e,n,t){"use strict";var r=t("i4QM"),a=t("DBJ4"),o=a.a.NAMESPACE,u=(a.a.CAN_USER_PV_LIMIT,function(e,n){return r.a.floatAdd(e,n)}),s=function(e,n){return r.a.floatMul(e,n)},i=function(e,n){return e>=n};n.a={judge_has_children:function(e){return o.children in e&&e[o.children].length>0},numd_pv:function(e){var n=0;return e[o.buys]&&e[o.buys].length>=0&&e[o.buys].map(function(e){return n+=e[o.num]*e[o.pv],e}),n},num_reward:function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0==e||void 0==n?0:t?s(e,n):u(e,n)},numd_inum:function(e,n){return i(e,n)?1:0},judge_number:i,floatAdd:u,floatMul:s}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=t("Xxa5"),o=t.n(a),u=t("exGp"),s=t.n(u),i=t("mvHQ"),c=t.n(i),l=t("woOf"),d=t.n(l),h=t("Bc7/"),p=t("n7zJ"),f=t("myd0"),v=t("Xejt"),_={name:"",data:function(){return{transfer:[],unit_users_sponser:[],unit_users_enroller:[]}},mounted:function(){},methods:{init:function(){var e=this;return s()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadingItems();case 2:return t=n.sent,e.$store.commit("saveUnitUser",t),n.next=6,e.productsLoading();case 6:r=n.sent,e.$store.commit("saveProducts",r),console.log("Loading Completed!");case 9:case"end":return n.stop()}},n,e)}))()},loadingItems:function(){var e=this;return s()(o.a.mark(function n(){var t,r,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],n.next=3,e.loadingUser();case 3:return r=n.sent,n.next=6,e.loadingBuys();case 6:return a=n.sent,r&&r.map(function(e){var n=a.filter(function(n){return n.user==e.id});t.push(f.a.ser_user(e.id,e.unid,e.sponser_id,e.enroller_id,n,e.is_new,e.username,e.displayname))}),n.abrupt("return",t);case 9:case"end":return n.stop()}},n,e)}))()},productsLoading:function(){var e=this;return s()(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.products,e.$store.state.token);case 2:return(t=n.sent)&&(t=t.map(function(e){return{id:e.id,named:e.named,price:e.price,pv:e.pv}})),n.abrupt("return",t);case 5:case"end":return n.stop()}},n,e)}))()},loadingUser:function(){var e=this;return s()(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("搜集用户资料 token =",e.$store.state.token),n.next=3,e.conn.get(e.api.users,e.$store.state.token);case 3:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}},n,e)}))()},loadingBuys:function(){var e=this;return s()(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.buys,e.$store.state.token);case 2:return(t=n.sent)&&(t=t.map(function(e){return f.a.ser_buy(e.id,e.buy_time,e.num,e.product.id,e.product.pv,e.users_permissions_user.id)})),n.abrupt("return",t);case 5:case"end":return n.stop()}},n,e)}))()}}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var g=t("VU/8")(_,m,!1,function(e){t("9pcs")},"data-v-6b1d72bf",null).exports,b=t("6Z/R"),y={components:{Init:h.a,UnitData:g,Chronus:b.a,Loading:p.a},name:"App",created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(d()({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",function(){sessionStorage.setItem("store",c()(e.$store.state))})},mounted:function(){var e=this.$store.getters.checkToken();e&&(this.$router.push({path:"/login"}),this.$store.commit("saveBackendUser","")),this.$store.getters.checkUserBackend()&&(this.$router.push({path:"/login"}),this.$store.commit("changeAuth","")),this.$store.getters.checkUserBackend(),this.initialize(!e),console.log("完畢 》》》》》")},methods:{initLoading:function(){var e=this;return s()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$refs.userData.init();case 2:case"end":return n.stop()}},n,e)}))()},gotAuth:function(e){var n=this;return s()(o.a.mark(function t(){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.conn.token();case 2:r=t.sent,n.$store.commit("changeAuth",r.jwt,r.user),e&&n.initialize(e);case 5:case"end":return t.stop()}},t,n)}))()},initialize:function(e){var n=this;return s()(o.a.mark(function t(){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n.$store.getters.checkChronus())){t.next=6;break}return t.next=4,n.chronusNow();case 4:r=t.sent,n.$store.commit("saveChronus",[r,!0]);case 6:e&&n.initLoading();case 7:case"end":return t.stop()}},t,n)}))()},chronusNow:function(){var e=this;return s()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=void 0,r={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=4,e.conn.get(e.api.chronus,e.$store.state.token,r);case 4:if(t=n.sent,console.log("搜索 時光 =",t),!t){n.next=9;break}if(!(t.length>0)){n.next=9;break}return n.abrupt("return",t[0]);case 9:return e.view.alert_message("新的結算日程開始了，但是數據庫未有關於新日程的時間準備，請移步後臺新增時間代號。"),n.abrupt("return","");case 11:case"end":return n.stop()}},n,e)}))()}}},w={render:function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("unit-data",{ref:"userData"}),this._v(" "),this.$store.state.chronus?n("router-view"):n("div",[this.$store.state.token?n("chronus",{ref:"chronusREF"}):n("loading")],1)],1)},staticRenderFns:[]};var x=t("VU/8")(y,w,!1,function(e){t("jn4P")},null,null).exports,E=t("/ocq"),S=t("Gu7T"),k={path:"/ui",component:function(){return t.e(21).then(t.bind(null,"p69I"))},redirect:"/ui/element",children:[{path:"/ui/element",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"lQLT"))}},{path:"/ui/pdf_user",component:function(){return t.e(3).then(t.bind(null,"cMDu"))}}]},M=[{path:"/login",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"ROIB"))},redirect:"/login/form",children:[{path:"/login/form",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"eP6H"))}}]}],A=[{path:"/home",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"n/G1"))},redirect:"/home/account",children:[{path:"/home/account",component:function(){return t.e(23).then(t.bind(null,"NeGW"))},redirect:"/home/account/result",children:[{path:"/home/account/result",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"Qu52"))}},{path:"/home/account/user_center",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"WHWk"))}},{path:"/home/account/statement",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"HeVP"))}},{path:"/home/account/test",component:function(){return t.e(24).then(t.bind(null,"7PWD"))}}]},{path:"/home/bonus",component:function(){return t.e(19).then(t.bind(null,"OzQL"))},redirect:"/home/bonus/active_house",children:[{path:"/home/bonus/active_house",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"zj5+"))}},{path:"/home/bonus/active_house_one",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"8Igl"))}},{path:"/home/bonus/recommend",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"vXEu"))}},{path:"/home/bonus/recommend_one",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"KJyv"))}},{path:"/home/bonus/active_layer",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"1e4n"))}},{path:"/home/bonus/active_layer_one",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"yEZu"))}},{path:"/home/bonus/active_house_older",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"WVNf"))}},{path:"/home/bonus/recommend_older",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"JZBU"))}},{path:"/home/bonus/active_layer_older",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"qOYF"))}}]},{path:"/home/buys",component:function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"iRNI"))},redirect:"/home/buys/records",children:[{path:"/home/buys/records",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"WxnW"))}},{path:"/home/buys/records_older",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"FMyh"))}}]}]}].concat(t.n(S)()(M),[{path:"",redirect:"/home",meta:{title:"首页"}},k]);r.default.use(E.a);var R=E.a.prototype.push;E.a.prototype.push=function(e){return R.call(this,e).catch(function(e){return e})};var I=new E.a({routes:A,mode:"hash",scrollBehviour:function(e,n,t){return t||(e.hash?{selector:e.hash}:void 0)}});I.afterEach(function(){window.scrollTo(0,0)});var N=I,P=t("NYxO");r.default.use(P.a);var T=new P.a.Store({state:{token:"",user_backend:null,user:{},bonus:{},user_unit:null,products:[],is_first:!1,chronus:null,transfer:null,users_sponser:null,users_enroller:null},mutations:{changeAuth:function(e,n){e.token=n,localStorage.setItem("oils_token",n)},clearToken:function(e){e.token="",e.user={},localStorage.setItem("oils_token","")},saveUnitUser:function(e,n){e.user_unit=n},saveProducts:function(e,n){e.products=n},saveBackendUser:function(e,n){localStorage.setItem("oils_user_backend",c()(n)),e.user_backend=n},saveBonus:function(e,n){e.bonus=n},saveUser:function(e,n){e.user=n},saveFirst:function(e,n){e.is_first=n},saveUserSponser:function(e,n){e.users_sponser=n},saveUserEnroller:function(e,n){e.users_enroller=n},saveTransfer:function(e,n){e.transfer=n},saveChronus:function(e,n){var t=n[0];n[1]&&(delete t.buys,delete t.bonus,delete t.created_at,delete t.updated_at,delete t.published_at,localStorage.setItem("oils_chronu",c()(t))),e.chronus=t}},getters:{checkToken:function(e){var n=!1,t=localStorage.getItem("oils_token");return void 0==t||""==t||null==t||"undefined"==t?n=!0:(e.token=t,console.log("token = ",t.substring(0,15)+"...")),function(e){return n}},checkUserBackend:function(e){var n=!1,t=localStorage.getItem("oils_user_backend");return void 0==t||""==t||null==t||"undefined"==t?n=!0:e.user_backend=JSON.parse(t),function(e){return n}},checkChronus:function(e){var n=!1,t=localStorage.getItem("oils_chronu");return void 0==t||""==t||null==t?n=!0:e.chronus=JSON.parse(t),function(e){return n}}},modules:{}}),L=t("I76R"),U=t.n(L),C=t("Dd8w"),B=t.n(C),j={view_pay_way:function(e){return["信用卡","其他"][e]}},$={alert_message:function(e,n){alert(e)}},D={ser_timed:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==e||void 0==e)return"--";var r=e.substring(0,4),a=e.substring(5,7),o=e.substring(8,10),u=e.substring(11,13),s=e.substring(14,16);return n?t?r+"年"+a+"月"+o+"日 ":r+"年"+a+"月"+o+"日 "+u+"時"+s+"分":t?r+"-"+a+"-"+o:r+"-"+a+"-"+o+" "+u+":"+s},getToday:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new Date),r=t.getFullYear(),a=t.getMonth()+1,o=t.getDate();return a<10&&!n&&(a="0"+a),e?r+"年"+a+"月"+o+"日":r+"-"+a+"-"+o},getTodayEn:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,r=e.getDate(),a=e.getDay();return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][a+1]+", "+function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e+1]}(t)+" "+r+", "+n}},O={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,o=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{o=n.toString().split(".")[1].length}catch(e){o=0}return t=Math.pow(10,Math.max(a,o)),r=(a=o)?a:o,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}},F=B()({backend:j},D,O,$,{first_Max:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}}),V=t("IHMs"),J=t.n(V),z="http://cms02.svr.up5d.com:1337",X={baseURL:z,apiURL:"http://cms02.svr.up5d.com:1337",delayTime:300,theme:{primary:{base:"#6a097d",darken1:"#5b0c64",lighten1:"#bd10d1"},accent:{base:"#4B7670",darken1:"#c060a1"},secondary:{base:"#f1d4d4",darken1:J.a.cyan.darken3,lighten1:J.a.cyan.lighten3},header:{color:"",classes:"neu-glow"},footer:{color:"",classes:"neu-glow"},primaryBgText:J.a.shades.white,secondaryBgText:J.a.shades.white,dark:!1,semidark:!1,rtl:!1}},H=t("mtWM"),G=t.n(H),W=X.baseURL+"/auth/local",Q={token:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vcrting@163.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"123456";return s()(o.a.mark(function r(){var a,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={identifier:n,password:t},e.next=3,G.a.post(W,a);case 3:return u=e.sent,e.abrupt("return",u.data);case 5:case"end":return e.stop()}},r,e)}))()},login:function(e){return G.a.post(W,e)}};function Y(e){var n=G.a.create({timeout:12e3});return n.defaults.retry=2,n.defaults.retryDelay=3e3,n.interceptors.request.use(function(e){return e},function(e){console.log(e)}),n.interceptors.response.use(function(e){return e.data},function(e){throw console.log("请求出错!!!"),console.log(e),e}),n(e)}var Z=function(e){var n={};return e&&(n.Authorization="Bearer "+e),n},q={get:function(e,n){return Y({url:e+=function(e){var n="?";if("{}"==c()(e));else for(var t in e)n+=t+"="+e[t]+"&";return n}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),method:"get",headers:Z(n)})},post:function(e,n,t){return Y({url:e,method:"post",data:t,headers:Z(n)})},put:function(e,n,t){return Y({url:e,method:"put",data:t,headers:Z(n)})}},K=B()({},Q,q,{success_one:function(e){try{e.id}catch(e){return!1}return!0},success_many:function(e){return e.length>0}}),ee=function(e){return X.baseURL+e},ne={users:ee("/users"),levels:ee("/levels"),buys:ee("/buys"),chronus:ee("/chronuses"),bonus:ee("/bonuses"),products:ee("/products")},te=t("3EgV"),re=t.n(te),ae=(t("7zck"),t("csSS"),t("gJtD"),t("e0XP"),X.theme);r.default.use(re.a);var oe={icons:{iconfont:"mdiSvg"},rtl:!1,theme:{dark:ae.dark,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:!0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:ae.primary,secondary:ae.secondary.base,accent:ae.accent.base,error:J.a.red.accent4,info:J.a.blue.lighten1,success:J.a.green.accent4,warning:J.a.amber.darken2,background:"#f8f9fa",neu:{darken1:"#DDE4EF",lighten1:"#FFFFFF"},primaryBgText:ae.primaryBgText,secondaryBgText:ae.secondaryBgText},dark:{primary:ae.primary,secondary:ae.secondary.base,accent:ae.accent.darken1,error:J.a.red.accent4,info:J.a.blue.lighten1,success:J.a.green.accent4,warning:J.a.amber.darken2,background:"#1d2327",neu:{darken1:"#1d2327",lighten1:"#1d2327"},primaryBgText:ae.primaryBgText,secondaryBgText:ae.secondaryBgText}}}},ue=new re.a(oe);r.default.prototype.api=ne,r.default.prototype.conn=K,r.default.prototype.conf=X,r.default.prototype.view=F,r.default.prototype.bonus=v.a,r.default.prototype.validated=U.a,r.default.config.productionTip=!1,new r.default({router:N,store:T,vuetify:ue,components:{App:x},template:"<App/>"}).$mount("#app")},NwXI:function(e,n,t){"use strict";var r=t("mvHQ"),a=t.n(r),o=t("//Fk"),u=t.n(o),s=t("B8md"),i=(t("ERgN"),function e(n,t,r,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,u=[];return o+=1,n.map(function(i){i[a]==t&&(i.children=e(n,i.unid,r,a,o),i.index=o,i.ipv=s.a.numd_pv(i),i.ipv_first=s.a.numd_pv(i,!0),i.children.length>0?i.has_child=!0:i.has_child=!1,null!=r&&r(i),u.push(i))}),u});n.a=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return new u.a(function(o,u){var s=[];s=i(e,r,t,"SPONSER"==n||"sponser"==n||0==n?"sponser_id":"enroller_id"),o(JSON.parse(a()(s)))})}},SXCW:function(e,n){},Uf0w:function(e,n){},Xejt:function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),u=t.n(o),s=t("B8md"),i=t("JFoy"),c=t("NwXI"),l=t("GwPA"),d=t("ERgN"),h=d.a.SIMPLER,p=d.a.LEADER,f={name:"普通會員",type:h,star:0},v=[{name:"一級會員",type:h,star:1},{name:"二級會員",type:h,star:2},{name:"三級會員",type:h,star:3},{name:"四級會員",type:h,star:4},{name:"五級會員",type:h,star:5}],_=[{name:"一星領袖",type:p,star:1},{name:"二星領袖",type:p,star:2},{name:"三星領袖",type:p,star:3},{name:"四星領袖",type:p,star:4},{name:"五星領袖",type:p,star:5}],m={split_code:function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e.join("_"):e.split("_")},code_to_content:function(e){var n="";if(void 0==e)return f;if(e[0]==h){if(0==e[1])return n;n=v[e[1]-1]}else n=_[e[1]-1];return n}},g={team_layer:function(e){var n=0;return e>d.a.USER_PV_LIMIT&&(n=1),["无","有"][n]},order_role:function(e){return"Member"}},b=t("dmby"),y=t("KBL8"),w=t("AfF2");n.a={_build:function e(n,t,r){var o,i=this;n.map((o=u()(a.a.mark(function n(o){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s.a.judge_has_children(o)&&e(o.children,t,r),n.next=3,r(o,t);case 3:case"end":return n.stop()}},n,i)})),function(e){return o.apply(this,arguments)}))},_build_res:function e(n,t,r){n.map(function(n){r(n,t),s.a.judge_has_children(n)&&e(n.children,t,r)})},rolling:c.a,computed:i.a,vip:l.a,has:g,vip_view:m,recommend:b.a,team_layer:y.a,active_house:w.a}},csSS:function(e,n){},dmby:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),u=t("ERgN"),s=function e(n,t,r){var a=0;return n.map(function(n){var s=0;n.vip=o.a.transfer_vip(t,n.unid),o.a.judge_has_children(n)&&(s=e(n.children,t,r)),n.ipv_first>0&&(a=o.a.floatAdd(a,n.ipv_first)),n.pv_recommend_one=s,n.bonus.usd_recommend=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0;return r+=1,n.map(function(n){var s=0;r<u.a.RECOMMEND_DEPTH&&o.a.judge_has_children(n)&&(s=e(n.children,t,r),a=o.a.floatAdd(a,s)),a=o.a.floatAdd(a,o.a.floatMul(n.pv_recommend_one,t[r-1])),n.temporary_re_ratio=t[r-1]}),a}([n],r)}),a};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.a.RECOMMEND_RATIOS;return new a.a(function(r,a){r(s(e,n,t))})}},e0XP:function(e,n){},"fT/B":function(e,n){},gJtD:function(e,n){},i4QM:function(e,n,t){"use strict";n.a={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,o=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{o=n.toString().split(".")[1].length}catch(e){o=0}return t=Math.pow(10,Math.max(a,o)),r=(a=o)?a:o,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}}},isQH:function(e,n,t){"use strict";var r,a=t("Xxa5"),o=t.n(a),u=t("exGp"),s=t.n(u),i=t("Gu7T"),c=t.n(i),l=t("//Fk"),d=t.n(l),h=t("Mh3b"),p=t("DBJ4"),f=p.a.NAMESPACE,v=(p.a.CAN_USER_PV_LIMIT,function(e){return!!(e[f.buys]&&e[f.buys].length>=0)}),_=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.children;return new d.a(function(t,r){var a=[],o=[],u=[];h.a.judge_has_children(e)&&e[n].map(function(e){if(h.a.judge_has_children(e)){var t=e[n];t.map(function(e){h.a.judge_has_children(e)&&a.push.apply(a,c()(e[n]))}),o.push.apply(o,c()(t))}u.push(e)});t({user_1:u,user_2:o,user_3:a})})},m=function(e,n){return[e[0]*n[0],e[1]*n[1],e[2]*n[2]]},g=function(e,n,t,r){var a=[0,0,0];return new d.a(function(o,u){h.a.numd_pv(e)>.5&&(n.map(function(e){v(e)&&e[f.is_new]&&(a[0]+=h.a.numd_pv(e))}),t.map(function(e){v(e)&&e[f.is_new]&&(a[1]+=h.a.numd_pv(e))}),r.map(function(e){v(e)&&e[f.is_new]&&(a[2]+=h.a.numd_pv(e))})),o(a)})},b=(r=s()(o.a.mark(function e(n){var t,r,a,u,s,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[.2,.1,.05];return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(n);case 2:if(t=e.sent,r=t.user_1,a=t.user_2,u=t.user_3,s=[],!u){e.next=12;break}return e.next=10,g(n,r,a,u);case 10:s=e.sent,s=m(s,i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)});n.a=b},jn4P:function(e,n){},myd0:function(e,n,t){"use strict";var r,a=t("Dd8w"),o=t.n(a),u=t("Xxa5"),s=t.n(u),i=t("exGp"),c=t.n(i),l=t("DBJ4"),d=t("Mh3b"),h=t("isQH"),p=t("1Qta"),f=t("qzOj"),v=l.a.NAMESPACE,_={ser_buy:function(e,n,t,r,a,o){var u={id:e};return u[v.buy_time]=n,u[v.num]=t,u[v.product_id]=r,u[v.user_id]=o,u[v.pv]=a,u},ser_user:function(e,n,t,r,a,o,u,s){var i={id:e};return i[v.unid]=n,i[v.sponser_id]=t,i[v.enroller_id]=r,i[v.is_new]=o,i[v.named]=u,i[v.display_name]=s,i[v.buys]=a,i},ser_bonus:function(e,n,t){var r={};r[v.usd_recommend]=e,r[v.usd_active_house]=n,r[v.usd_team_layer]=t}},m=l.a.NAMESPACE,g=(r=c()(s.a.mark(function e(n,t,r,a){var o,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o={},null!=r&&"usd_recommend"!=r){e.next=7;break}return e.next=4,Object(h.a)(n);case 4:u=e.sent,a&&(u=d.a.floatAdd(u[2],d.a.floatAdd(u[0],u[1]))),o[m.usd_recommend]=u;case 7:if(null!=r&&"usd_active_house"!=r){e.next=11;break}return e.next=10,Object(p.a)(n);case 10:o[m.usd_active_house]=e.sent;case 11:if(null!=r&&"usd_team_layer"!=r){e.next=15;break}return e.next=14,Object(f.a)(n);case 14:o[m.usd_team_layer]=e.sent;case 15:n[m.bonus]=o,t(n),d.a.judge_has_children(n)&&n[m.children].map(function(e){g(e,t,r,a)});case 18:case"end":return e.stop()}},e,this)})),function(e,n,t,a){return r.apply(this,arguments)});n.a=o()({bonus:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];console.time("Bonus"),g(e,n,t,r),console.timeEnd("Bonus")}},_)},n7zJ:function(e,n,t){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loading def-shadow"})},staticRenderFns:[]};var a=t("VU/8")({name:"LoadingSmall"},r,!1,function(e){t("6I/9")},"data-v-3d091060",null);n.a=a.exports},qzOj:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("Mh3b"),u=t("DBJ4"),s=u.a.NAMESPACE,i=(u.a.CAN_USER_PV_LIMIT,function(e,n){return o.a.floatMul(e,n)}),c=function(e,n){return o.a.floatAdd(e,n)};n.a=function(e){var n=0;return new a.a(function(t,r){var a=e.vip.ratio.filter(function(e){return 0!=e});e=function e(n,t,r){var a=[];return t+=1,n.map(function(n){var u={},i=[];return o.a.judge_has_children(n)&&(i=e(n[s.children],t,r)),u.name=n.name,u[s.ipv]=n[s.ipv],u[s.vip]=n[s.vip],u[s.index]=n[s.index],i.length>0&&(u[s.children]=i),a.push(u),u}),a}([e],0,a)[0],o.a.judge_has_children(e)&&(n=function e(n,t,r,a){var l=0,d=a[r];return void 0==d&&(d=0),n.map(function(n){var h=0;if(r<u.a.LAYER_DEPTH_NUM){n[s.usd_layer]=i(i(d,n[s.ipv]),r+1);var p=n[s.ipv]+t,f=r+1;o.a.judge_number(p,u.a.CAN_USER_PV_LIMIT)?p=0:f-=1,o.a.judge_has_children(n)&&(h=e(n[s.children],p,f,a))}else n[s.usd_layer]=0;return l=c(l,c(n[s.usd_layer],h)),n}),l}(e[s.children],0,0,e[s.vip][s.ratio])),t(n)})}}},["NHnr"]);
//# sourceMappingURL=app.8b7ae70ac412b72bb64d.js.map