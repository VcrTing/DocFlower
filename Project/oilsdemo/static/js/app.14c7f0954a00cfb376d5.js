webpackJsonp([25],{"4+ut":function(e,n){},"6Z/R":function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),i=t.n(o),s={props:{chronu:{type:Object}},name:"",data:function(){return{}},methods:{choiseIt:function(){this.$store.commit("saveChronus",[this.chronu,!0])}}},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"w-full chronu def-shadow pa-3"},[t("div",{staticClass:"chronu_name"},[t("v-icon",{attrs:{size:"14"}},[e._v("calendar-multiple")]),e._v(" "+e._s(e.chronu.mark)+"\n\n        "),t("v-btn",{staticClass:"float-right",attrs:{color:"primary",text:""},on:{click:e.choiseIt}},[e._v("确认选择")])],1),e._v(" "),t("div",{staticClass:"chronu_start sub-header pl-4"},[e._v("\n        開始："+e._s(e.view.ser_timed(e.chronu.start,!0))+"\n    ")]),e._v(" "),t("div",{staticClass:"chronu_end sub-header pl-4"},[e._v("\n        結束："+e._s(e.view.ser_timed(e.chronu.end,!0))+"\n    ")])])},staticRenderFns:[]};var c={components:{ChronusItem:t("VU/8")(s,u,!1,function(e){t("fT/B")},"data-v-77b08172",null).exports},name:"",data:function(){return{chronus:[]}},mounted:function(){this.chronusLoading()},methods:{chronusLoading:function(){var e=this;return i()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.chronus,e.$store.state.token,{_sort:"published_at:DESC"});case 2:(t=n.sent)&&(e.chronus=t);case 4:case"end":return n.stop()}},n,e)}))()}}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"bg-hui h-100",attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"title pl-4 pt-2"},[e._v("   ")])])],1),e._v(" "),t("v-row",{staticClass:"w-full"},[t("v-col",{attrs:{col:"2"}}),e._v(" "),t("v-col",{staticClass:"pt-1",attrs:{col:"8"}},[t("div",{staticClass:"qiong-txt-18 qiong-txt-primary-dark"},[e._v("\n                結算月份\n            ")]),e._v(" "),t("div",{staticClass:"pb-2"},e._l(e.chronus,function(n,r){return t("div",{key:r,staticClass:"my-4"},[t("chronus-item",{attrs:{chronu:n}}),e._v(" "),r==n.length-1?t("v-divider"):e._e()],1)}),0)]),e._v(" "),t("v-col",{attrs:{col:"2"}})],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"text-right"})],1)],1)},staticRenderFns:[]};var d=t("VU/8")(c,l,!1,function(e){t("VfDx")},"data-v-4d6d7104",null);n.a=d.exports},"7zck":function(e,n){},AfF2:function(e,n,t){"use strict";var r,a=t("Xxa5"),o=t.n(a),i=t("exGp"),s=t.n(i),u=t("//Fk"),c=t.n(u),l=t("B8md"),d=t("ERgN"),h=function(e,n,t,r){var a=[];return new c.a(function(o,i){if(l.a.judge_has_children(e)){var s=e.children;s.length>=n&&s.map(function(e){if(e.ipv>=t&&l.a.judge_has_children(e)){var r=[];e.children.map(function(e){e.ipv>=t&&r.push(e.ipv)}),r.length>=n&&a.push(r)}})}e.active_house_result=a,o(function(e,n,t){var r=Math.floor(e.length/n);return l.a.floatMul(t,r)}(a,n,r))})},p=function e(n,t,r,a){var i,u=this;n.map((i=s()(o.a.mark(function n(i){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l.a.judge_has_children(i)&&e(i.children,t,r,a),n.next=3,h(i,t,r,a);case 3:i.bonus.usd_active_house=n.sent;case 4:case"end":return n.stop()}},n,u)})),function(e){return i.apply(this,arguments)}))},f=(r=s()(o.a.mark(function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d.a.ACTIVE_MEMBER_NUM,i=this,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:d.a.USER_PV_LIMIT,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:d.a.ACTIVE_USD;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new c.a(function(){var e=s()(o.a.mark(function e(t,s){var c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=0,!r){e.next=7;break}return e.next=4,h(n,a,u,l);case 4:c=e.sent,e.next=8;break;case 7:c=p(n,a,u,l);case 8:t(c);case 9:case"end":return e.stop()}},e,i)}));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)})),function(e,n){return r.apply(this,arguments)});n.a=f},B8md:function(e,n,t){"use strict";var r=t("Dd8w"),a=t.n(r),o={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,o=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{o=n.toString().split(".")[1].length}catch(e){o=0}return t=Math.pow(10,Math.max(a,o)),r=(a=o)?a:o,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}};n.a=a()({numd_pv:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=0;return e.buys&&e.buys.length>=0&&(n?e.buys.map(function(e){if(e.first_buy){var n=o.floatMul(e.num,e.pv);t=o.floatAdd(t,n)}}):e.buys.map(function(e){var n=o.floatMul(e.num,e.pv);t=o.floatAdd(t,n)})),t},numd_inum:function(e,n){return e>=n?1:0},num_reward:function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0==e||void 0==n?0:t?o.floatMul(e,n):o.floatAdd(e,n)},judge_has_children:function(e){return"children"in e&&e.children.length>0},transfer_vip:function(e,n){for(var t={ratio:[]},r=e.length,a=0;a<r;a++)if(e[a].unid==n){t=e[a].vip;break}return t}},o)},"Bc7/":function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),i=t.n(o),s=t("NwXI"),u=t("JFoy"),c=t("GwPA"),l=t("dmby"),d=t("KBL8"),h=t("AfF2"),p={props:{},name:"",data:function(){return{chrou:"",transfer:[],unit_users_sponser:[],unit_users_enroller:[]}},methods:{chronuLoading:function(){var e=this;return i()(a.a.mark(function n(){var t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=void 0,r={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=4,e.conn.get(e.api.chronus,e.$store.state.token,r);case 4:if(t=n.sent,console.log("INIT 搜索 时光 =",t),t&&t.length>0&&(r=!0),!0!==r){n.next=14;break}return t[1]=!0,e.$store.commit("saveChronus",t),e.chrou=t[0],n.abrupt("return",!0);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}},n,e)}))()},buyLoading:function(){var e=this;return i()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.chrou.id});case 2:return t=n.sent,n.abrupt("return",t.map(function(e){return{num:e.num,id:e.id,pv:e.product.pv,first_buy:e.first_buy,users_permissions_user:e.users_permissions_user.id,buy_time:e.buy_time,product:e.product.id}}));case 4:case"end":return n.stop()}},n,e)}))()},userLoading:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER";return i()(a.a.mark(function t(){var r,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={},"SPONSER"==n?r["_where[relation_index_sponser_contains]"]=e.$store.state.user_backend.relation_index_sponser:r["_where[relation_index_enroller_contains]"]=e.$store.state.user_backend.relation_index_enroller,t.next=4,e.conn.get(e.api.users,e.$store.state.token,r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}},t,e)}))()},rebuild_user:function(e){delete e.created_at,delete e.updated_at,delete e.role,delete e.provider,delete e.confirmed,delete e.blocked,delete e.email},init:function(){var e=this;return i()(a.a.mark(function n(){var t,r,o,i,p,f,v,_,m;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=!1,r=void 0,o=void 0,i=e.$store.state.user_backend,!e.$store.state.chronus||!i){n.next=47;break}return p=i.sponser_id,f=i.enroller_id,e.chrou=e.$store.state.chronus,console.log("INIT 资料 =",e.chrou.mark,i.username),n.next=10,e.userLoading("SPONSER");case 10:return v=n.sent,n.next=13,e.userLoading("ENROLLER");case 13:return _=n.sent,n.next=16,e.buyLoading();case 16:return m=n.sent,v.map(function(e){var n=[];return m.map(function(t){e.id==t.users_permissions_user&&n.push(t)}),e.buys=n,e}),_.map(function(e){var n=[];return m.map(function(t){e.id==t.users_permissions_user&&n.push(t)}),e.buys=n,e}),n.next=21,Object(s.a)(v,"SPONSER",e.rebuild_user,p);case 21:return r=n.sent,n.next=24,Object(s.a)(_,"ENROLLER",e.rebuild_user,f);case 24:return o=n.sent,n.next=27,Object(u.a)(r,"SPONSER",e.transfer,null);case 27:return e.transfer=n.sent,n.next=30,Object(u.a)(o,"ENROLLER",e.transfer,null);case 30:return e.transfer=n.sent,e.transfer.map(function(e){return e.vip=Object(c.a)(e),e}),e.unit_users_sponser=r,e.unit_users_enroller=o,n.next=36,Object(l.a)(o,e.transfer);case 36:return n.next=38,Object(d.a)(r,e.transfer);case 38:return n.next=40,Object(h.a)(r,e.transfer);case 40:e.bonus._build_res(r,e.transfer,function(e,n){for(var t=0;t<n.length;t++)e.unid==n[t].unid&&(e.transfer=n[t],n[t].bonus=e.bonus)}),e.bonus._build_res(o,e.transfer,function(e,n){for(var t=0;t<n.length;t++)e.unid==n[t].unid&&(e.transfer=n[t],n[t].bonus.usd_recommend=e.bonus.usd_recommend)}),console.log("sponser =",e.unit_users_sponser,"enroller =",e.unit_users_enroller),e.$store.commit("saveUserSponser",e.unit_users_sponser),e.$store.commit("saveUserEnroller",e.unit_users_enroller),e.$store.commit("saveTransfer",e.transfer),t=!0;case 47:return n.abrupt("return",t);case 48:case"end":return n.stop()}},n,e)}))()}}},f={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var v=t("VU/8")(p,f,!1,function(e){t("h0mM")},"data-v-3868b934",null);n.a=v.exports},ERgN:function(e,n,t){"use strict";var r=[.07,.06,.05,.03,.02],a={};a.simpler=[[r[0],0,0,0,0,0,0],[r[0],r[1],0,0,0,0,0],[r[0],r[1],r[1],0,0,0,0],[r[0],r[1],r[1],r[2],0,0,0],[r[0],r[1],r[1],r[2],r[2],0,0]],a.leader=[[r[0],r[1],r[1],r[2],r[2],r[3],0],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]]],n.a={USER_PV_LIMIT:100,LAYER_DEPTH_NUM:7,ACTIVE_MEMBER_NUM:3,ACTIVE_USD:130,RECOMMEND_DEPTH:3,SIMPLER:"simpler",LEADER:"leader",VIP_LAYER_RATIOS:a,RECOMMEND_RATIOS:[.2,.1,.05]}},GwPA:function(e,n,t){"use strict";var r=t("B8md"),a=t("ERgN"),o=a.a.LEADER,i=a.a.SIMPLER,s=function(e,n,t,s,u){var c,l,d,h=i,p=1;if(e<a.a.USER_PV_LIMIT)p=0;else{var f=r.a.floatAdd(e,s);f>=5e3&&u>=2e3&&t>=2?(h=o,p=function(e,n,t){var r=3;return e>4&&n>25e3&&t>5e3?e>=6&&n>=15e4&&t>=25e3?r=5:e>=5&&n>=72e3&&t>=9e3&&(r=4):(e<4||n<25e3||t<5e3)&&(r=e>=3&&n>=9e3&&t>=3e3?2:1),r}(t,f,u)):p=function(e){var n=3;return e>1e3?e>=3e3?n=5:e>=2e3&&(n=4):e<1e3&&(n=e<500?1:2),n}(f)}return c=h,l=p,void 0==(d=a.a.VIP_LAYER_RATIOS[c][l-1])&&(d=[]),{name:c,star:l,ratio:d}},u=function(e){var n=e.ipv,t=e.son_can_num_SPONSER,r=e.son_can_num_ENROLLER,a=e.son_pv_SPONSER,o=e.son_pv_ENROLLER;return s(n,t,r,a,o)};n.a=function(e){return u(e)}},I76R:function(e,n){e.exports={val_empty:function(e,n){return null!=e&&""!=e.trim()||n+"必須填寫。"},val_char:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e)||n+"中不應有特殊字符。"},val_char_price:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/.test(e)||n+"中不應有除了.之外的特殊字符。"},val_email:function(e,n){return!!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e)||n+"格式錯誤。"},val_length:function(e,n,t,r){return e.length<t?n+"的字符長度應該大於等於"+t:!(e.length>r)||n+"的字符長度應該小於等於"+r},val_timed:function(e,n,t){if(t){if(e.length>10&&e.length<8)return n+"字符長度不符合！";if(/[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e))return n+"中不應有除了 - 之外的特殊字符。"}return!0}}},JFoy:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),i=t("ERgN");n.a=function(e,n,t,r){return new a.a(function(a,s){!function e(n,t,r,a){var s={num:0,pv:0,active:0,pv_next_only:0},u=0;return n.map(function(n){var c={num:0,pv:0,active:0,pv_next_only:0};u=o.a.numd_inum(n.ipv,i.a.USER_PV_LIMIT),o.a.judge_has_children(n)&&(c=e(n.children,t,r,a)),n.son_pv=c.pv,n.son_can_num=c.active,n.active_lower=c.active,n.ipv_next_only=c.pv_next_only,s.pv=o.a.floatAdd(s.pv,o.a.floatAdd(c.pv,n.ipv)),s.num=o.a.floatAdd(s.num,o.a.floatAdd(c.num,u)),s.active=o.a.floatAdd(u,s.active),u>0&&(s.pv_next_only=o.a.floatAdd(s.pv_next_only,n.ipv)),function(e,n,t){for(var r=-1,a=e.length,o=0;o<a;o++)e[o].unid==n.unid&&(r=o);if(r>=0)e[r]["son_pv_"+t]=n.son_pv,e[r]["son_can_num_"+t]=n.son_can_num,e[r]["active_lower_"+t]=n.active_lower,e[r]["ipv_next_only_"+t]=n.ipv_next_only;else{var i={unid:n.unid,ipv:n.ipv};i["son_pv_"+t]=n.son_pv,i["son_can_num_"+t]=n.son_can_num,i["active_lower_"+t]=n.active_lower,i["ipv_next_only_"+t]=n.ipv_next_only,e.push(i)}}(t,n,r),null!=a&&a(n)}),s}(e,t,n,r),a(t)})}},KBL8:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),i=t("ERgN"),s=function e(n,t,r,a,i,s){var u=0,c=a[r];return void 0==c&&(c=0),n.map(function(n){var l=0,d=r;if(r<s){n.usd_layer=o.a.floatMul(r+1,o.a.floatMul(c,n.ipv));var h=o.a.floatAdd(n.ipv,t);d=r+1,h>=i?h=0:d-=1,o.a.judge_has_children(n)&&(l=e(n.children,h,d,a,i,s))}else n.usd_layer=0;return u=o.a.floatAdd(u,o.a.floatAdd(n.usd_layer,l)),n.temporary_index=d,n}),u};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.a.USER_PV_LIMIT,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i.a.LAYER_DEPTH_NUM;return new a.a(function(a,i){a(t?s(e.children,0,0,e.vip.ratio,r,u):function e(n,t,r,a){n.map(function(n){if(n.vip=o.a.transfer_vip(t,n.unid),o.a.judge_has_children(n)){var i=n.children;e(i,t,r,a),n.bonus.usd_team_layer=s(i,0,0,n.vip.ratio,r,a)}else n.bonus.usd_team_layer=0})}(e,n,r,u))})}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=t("Xxa5"),o=t.n(a),i=t("exGp"),s=t.n(i),u=t("mvHQ"),c=t.n(u),l=t("woOf"),d=t.n(l),h={components:{QiongLoading:t("oKCz").a},name:"",data:function(){return{}},mounted:function(){var e=this;return s()(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.$store.state.token){n.next=5;break}return n.next=3,e.chronusNow();case 3:t=n.sent,e.$store.commit("saveChronus",[t,!0]);case 5:case"end":return n.stop()}},n,e)}))()},methods:{chronusNow:function(){var e=this;return s()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=void 0,r={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=4,e.conn.get(e.api.chronus,e.$store.state.token,r);case 4:if(t=n.sent,console.log("搜索 時光 =",t),!t){n.next=9;break}if(!(t.length>0)){n.next=9;break}return n.abrupt("return",t[0]);case 9:return e.view.alert_message("新的結算日程開始了，但是數據庫未有關於新日程的時間準備，請移步後臺新增時間代號。"),n.abrupt("return","");case 11:case"end":return n.stop()}},n,e)}))()}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("qiong-loading")},staticRenderFns:[]};var f=t("VU/8")(h,p,!1,function(e){t("cgK4")},"data-v-6bbbbf82",null).exports,v=t("Bc7/"),_=t("6Z/R"),m={components:{Init:v.a,Chronus:_.a,ChronusNow:f},name:"App",created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(d()({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",function(){sessionStorage.setItem("store",c()(e.$store.state))}),console.log("----------------------")},mounted:function(){var e=this.$store.getters.checkToken(),n=this.$store.getters.checkUserBackend();1==!n&&1==!e?this.initialize(!e):(this.$store.commit("changeAuth",null),this.$store.commit("saveBackendUser",""),this.$router.push({path:"/login"})),console.log("NEED_AUTH =",e,",NEED_LOGIN =",n,",INTO INIT =",1==!n&&1==!e)},methods:{initialize:function(e){var n=this;return s()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.$store.getters.checkChronus())){e.next=6;break}return e.next=4,n.chronusNow();case 4:t=e.sent,n.$store.commit("saveChronus",[t,!0]);case 6:console.log("NEED_CHRONU =",t);case 7:case"end":return e.stop()}},e,n)}))()},chronusNow:function(){var e=this;return s()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=void 0,r={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=4,e.conn.get(e.api.chronus,e.$store.state.token,r);case 4:if(t=n.sent,console.log("搜索 時光 =",t),!t){n.next=9;break}if(!(t.length>0)){n.next=9;break}return n.abrupt("return",t[0]);case 9:return e.view.alert_message("新的結算日程開始了，但是數據庫未有關於新日程的時間準備，請移步後臺新增時間代號。"),n.abrupt("return","");case 11:case"end":return n.stop()}},n,e)}))()}}},g={render:function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",{attrs:{id:"app"}},[this.$store.state.chronus?n("router-view"):n("div",[this.$store.state.token?n("chronus"):n("chronus-now")],1)],1)},staticRenderFns:[]};var b=t("VU/8")(m,g,!1,function(e){t("4+ut")},null,null).exports,y=t("/ocq"),w=t("Gu7T"),x=[{path:"/login",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"ROIB"))},meta:{title:"登录界面",needLogin:!1},redirect:"/login/form",children:[{path:"/login/form",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"eP6H"))}}]}],k=[{path:"/home",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"n/G1"))},redirect:"/home/user",children:[{path:"/home/account",component:function(){return t.e(23).then(t.bind(null,"NeGW"))},redirect:"/home/account/statement",children:[{path:"/home/account/result",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"Qu52"))}},{path:"/home/account/statement",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"HeVP"))}}]},{path:"/home/bonus",component:function(){return t.e(17).then(t.bind(null,"OzQL"))},redirect:"/home/bonus/active_house",children:[{path:"/home/bonus/active_house",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"zj5+"))}},{path:"/home/bonus/active_house_one",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"8Igl"))}},{path:"/home/bonus/recommend",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"vXEu"))}},{path:"/home/bonus/recommend_one",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"KJyv"))}},{path:"/home/bonus/active_layer",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"1e4n"))}},{path:"/home/bonus/active_layer_one",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"yEZu"))}}]},{path:"/home/user",component:function(){return t.e(21).then(t.bind(null,"x7Nh"))},redirect:"/home/user/sponser",children:[{path:"/home/user/center",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"2L7I"))}},{path:"/home/user/sponser",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"47jR"))}},{path:"/home/user/enroller",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"4ivJ"))}}]},{path:"/home/buys",component:function(){return t.e(18).then(t.bind(null,"iRNI"))},redirect:"/home/buys/records",children:[{path:"/home/buys/records",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"WxnW"))}},{path:"/home/buys/records_older",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"FMyh"))}}]},{path:"/ui",component:function(){return t.e(20).then(t.bind(null,"p69I"))},redirect:"/ui/element",children:[{path:"/ui/element",component:function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"lQLT"))}},{path:"/ui/pdf_user",component:function(){return t.e(0).then(t.bind(null,"cMDu"))}}]},{path:"/home/dump",component:function(){return t.e(22).then(t.bind(null,"0VwF"))}}]}].concat(t.n(w)()(x),[{path:"",redirect:"/home",meta:{title:"首页"}}]);r.default.use(y.a);var S=y.a.prototype.push;y.a.prototype.push=function(e){return S.call(this,e).catch(function(e){return e})};var E=new y.a({routes:k,mode:"hash",scrollBehviour:function(e,n,t){return t||(e.hash?{selector:e.hash}:void 0)}});E.afterEach(function(){window.scrollTo(0,0)});var N=E,R=t("NYxO");r.default.use(R.a);var I=new R.a.Store({state:{token:"",user_backend:null,user:{},bonus:{},user_unit:null,products:[],is_first:!1,chronus:null,transfer:null,users_sponser:null,users_enroller:null,me:{}},mutations:{changeAuth:function(e,n){e.token=n,localStorage.setItem("oils_token",n)},clearToken:function(e){e.token="",e.user={},localStorage.setItem("oils_token","")},saveUnitUser:function(e,n){e.user_unit=n},saveProducts:function(e,n){e.products=n},saveBackendUser:function(e,n){localStorage.setItem("oils_user_backend",c()(n)),e.user_backend=n},saveBonus:function(e,n){e.bonus=n},saveUser:function(e,n){e.user=n},saveFirst:function(e,n){e.is_first=n},saveMe:function(e,n){e.me=n},saveUserSponser:function(e,n){e.users_sponser=n},saveUserEnroller:function(e,n){e.users_enroller=n},saveTransfer:function(e,n){e.transfer=n},saveChronus:function(e,n){var t=n[0];n[1]&&(delete t.buys,delete t.bonus,delete t.created_at,delete t.updated_at,delete t.published_at,localStorage.setItem("oils_chronu",c()(t))),e.chronus=t}},getters:{checkToken:function(e){var n=!1,t=localStorage.getItem("oils_token");return void 0==t||""==t||null==t||"undefined"==t?n=!0:(e.token=t,console.log("token = ",t.substring(0,15)+"...")),function(e){return n}},checkUserBackend:function(e){var n=!1;try{var t=JSON.parse(localStorage.getItem("oils_user_backend"));void 0==t||""==t||null==t||"undefined"==t?n=!0:e.user_backend=t}catch(e){}return function(e){return n}},checkChronus:function(e){var n=!1;try{var t=JSON.parse(localStorage.getItem("oils_chronu"));void 0==t||""==t||null==t?n=!0:e.chronus=t}catch(e){}return function(e){return n}}},modules:{}}),M=t("I76R"),T=t.n(M),A=t("Xejt"),O=t("Dd8w"),C=t.n(O),P={view_pay_way:function(e){return["信用卡","其他"][e]}},L={alert_message:function(e,n){alert(e)}},$={ser_timed:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==e||void 0==e)return"--";var r=e.substring(0,4),a=e.substring(5,7),o=e.substring(8,10),i=e.substring(11,13),s=e.substring(14,16);return n?t?r+"年"+a+"月"+o+"日 ":r+"年"+a+"月"+o+"日 "+i+"時"+s+"分":t?r+"-"+a+"-"+o:r+"-"+a+"-"+o+" "+i+":"+s},getToday:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new Date),r=t.getFullYear(),a=t.getMonth()+1,o=t.getDate();return a<10&&!n&&(a="0"+a),e?r+"年"+a+"月"+o+"日":r+"-"+a+"-"+o},getTodayEn:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,r=e.getDate(),a=e.getDay();return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][a+1]+", "+function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e+1]}(t)+" "+r+", "+n}},B={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,o=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{o=n.toString().split(".")[1].length}catch(e){o=0}return t=Math.pow(10,Math.max(a,o)),r=(a=o)?a:o,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}},U=C()({backend:P},$,B,L,{first_Max:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},if_def:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"- -";return e||n}}),D=t("IHMs"),F=t.n(D),j="http://cms02.svr.up5d.com",V={baseURL:j,apiURL:"http://cms02.svr.up5d.com:1337",delayTime:300,theme:{primary:{base:"#F08585",darken1:"#5b0c64",lighten1:"#bd10d1"},accent:{base:"#4B7670",darken1:"#3d6963"},secondary:{base:"#365b56",darken1:F.a.cyan.darken3,lighten1:F.a.cyan.lighten3},header:{color:"",classes:"neu-glow"},footer:{color:"",classes:"neu-glow"},primaryBgText:F.a.shades.white,secondaryBgText:F.a.shades.white,dark:!1,semidark:!1,rtl:!1}},J=t("mtWM"),z=t.n(J),X=V.apiURL+"/auth/local",H={token:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vcrting@163.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"123456";return s()(o.a.mark(function r(){var a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={identifier:n,password:t},e.next=3,z.a.post(X,a);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}},r,e)}))()},login:function(e){return z.a.post(X,e)}};function G(e){var n=z.a.create({timeout:12e3});return n.defaults.retry=2,n.defaults.retryDelay=3e3,n.interceptors.request.use(function(e){return e},function(e){console.log(e)}),n.interceptors.response.use(function(e){return e.data},function(e){throw console.log("请求出错!!!"),console.log(e),e}),n(e)}var K=function(e){var n={};return e&&(n.Authorization="Bearer "+e),n},Z={get:function(e,n){return e+=function(e){var n="?";if("{}"==c()(e));else for(var t in e)n+=t+"="+e[t]+"&";return n}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),console.log(e),G({url:e,method:"get",headers:K(n)})},post:function(e,n,t){return G({url:e,method:"post",data:t,headers:K(n)})},put:function(e,n,t){return G({url:e,method:"put",data:t,headers:K(n)})}},q=C()({},H,Z,{success_one:function(e){try{e.id}catch(e){return!1}return!0},success_many:function(e){return e.length>0}}),Y=function(e){return V.apiURL+e},Q={users:Y("/users"),levels:Y("/levels"),buys:Y("/buys"),chronus:Y("/chronuses"),bonus:Y("/bonuses"),products:Y("/products")},W=t("3EgV"),ee=t.n(W),ne=(t("7zck"),t("csSS"),t("gJtD"),t("e0XP"),V.theme);r.default.use(ee.a);var te={icons:{iconfont:"mdiSvg"},rtl:!1,theme:{dark:ne.dark,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:!0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:ne.primary,secondary:ne.secondary.base,accent:ne.accent.base,error:F.a.red.accent4,info:F.a.blue.lighten1,success:F.a.green.accent4,warning:F.a.amber.darken2,background:"#f8f9fa",neu:{darken1:"#DDE4EF",lighten1:"#FFFFFF"},primaryBgText:ne.primaryBgText,secondaryBgText:ne.secondaryBgText},dark:{primary:ne.primary,secondary:ne.secondary.base,accent:ne.accent.darken1,error:F.a.red.accent4,info:F.a.blue.lighten1,success:F.a.green.accent4,warning:F.a.amber.darken2,background:"#1d2327",neu:{darken1:"#1d2327",lighten1:"#1d2327"},primaryBgText:ne.primaryBgText,secondaryBgText:ne.secondaryBgText}}}},re=new ee.a(te),ae=t("/kJX"),oe=t.n(ae);r.default.prototype.api=Q,r.default.prototype.conn=q,r.default.prototype.conf=V,r.default.prototype.view=U,r.default.prototype.bonus=A.a,r.default.prototype.validated=T.a,r.default.config.productionTip=!1,r.default.use(oe.a),new r.default({router:N,store:I,vuetify:re,components:{App:b},template:"<App/>"}).$mount("#app")},NwXI:function(e,n,t){"use strict";var r=t("mvHQ"),a=t.n(r),o=t("//Fk"),i=t.n(o),s=t("B8md"),u=(t("ERgN"),function e(n,t,r,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,i=[];return o+=1,n.map(function(u){u[a]==t&&(u.children=e(n,u.unid,r,a,o),u.index=o,u.ipv=s.a.numd_pv(u),u.ipv_first=s.a.numd_pv(u,!0),u.children.length>0?u.has_child=!0:u.has_child=!1,null!=r&&r(u),i.push(u))}),i});n.a=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return new i.a(function(o,i){var s=[];s=u(e,r,t,"SPONSER"==n||"sponser"==n||0==n?"sponser_id":"enroller_id"),o(JSON.parse(a()(s)))})}},VfDx:function(e,n){},Vqni:function(e,n){},Xejt:function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),o=t("exGp"),i=t.n(o),s=t("B8md"),u=t("ERgN"),c=t("JFoy"),l=t("NwXI"),d=t("GwPA"),h=t("gBtx"),p=t.n(h),f=u.a.SIMPLER,v=u.a.LEADER,_={name:"普通會員",type:f,star:0},m=[[100,0],[100,500],[100,1e3],[100,2e3],[100,3e3]],g=[[100,5e3,2,2e3],[100,9e3,3,3e3],[100,25e3,4,5e3],[100,72e3,5,9e3],[100,15e4,6,25e3]],b=[{name:"一級會員",type:f,star:1,nick:"一級會員",img:"ICONS/vip_simpler_1.png",condition:m[0]},{name:"二級會員",type:f,star:2,nick:"二級會員",img:"ICONS/vip_simpler_2.png",condition:m[1]},{name:"三級會員",type:f,star:3,nick:"三級會員",img:"ICONS/vip_simpler_3.png",condition:m[2]},{name:"四級會員",type:f,star:4,nick:"四級會員",img:"ICONS/vip_simpler_4.png",condition:m[3]},{name:"五級會員",type:f,star:5,nick:"五級會員",img:"ICONS/vip_simpler_5.png",condition:m[4]}],y=[{name:"一星領袖",type:v,star:1,nick:"紅寶",img:"ICONS/vip_leader_1.png",condition:g[0]},{name:"二星領袖",type:v,star:2,nick:"鉆石",img:"ICONS/vip_leader_2.png",condition:g[1]},{name:"三星領袖",type:v,star:3,nick:"銀鉆",img:"ICONS/vip_leader_3.png",condition:g[2]},{name:"四星領袖",type:v,star:4,nick:"黑鉆",img:"ICONS/vip_leader_4.png",condition:g[3]},{name:"五星領袖",type:v,star:5,nick:"星鉆",img:"ICONS/vip_leader_5.png",condition:g[4]}],w=function(e){var n="";if(void 0==e)return _;if(e[0]==f){if(0==e[1])return n;n=b[e[1]-1]}else n=y[e[1]-1];return n},x=function(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?e.split("_"):e.join("_")},k={vip_next:function(e){var n=x(e);return n=function e(n,t){t=p()(t);var r=y.length;if(n==f){if(t==b.length)return e(v,1)}else n==v&&t==r&&(t-=1);return[n,t+=1]}(n[0],n[1]),w(n)},finished_vip:function(e,n){return e==v&&n==y.length},split_code:x,code_to_content:w},S={team_layer:function(e){var n=0;return e>u.a.USER_PV_LIMIT&&(n=1),["无","有"][n]},order_role:function(e){return"Member"}},E=t("dmby"),N=t("KBL8"),R=t("AfF2"),I=function e(n,t,r){n.map(function(n){r(n,t),s.a.judge_has_children(n)&&e(n.children,t,r)})};n.a={_build:function e(n,t,r){var o,u=this;n.map((o=i()(a.a.mark(function n(o){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s.a.judge_has_children(o)&&e(o.children,t,r),n.next=3,r(o,t);case 3:case"end":return n.stop()}},n,u)})),function(e){return o.apply(this,arguments)}))},_build_res:I,_build_newer:function(e,n,t){var r=[];return e.map(function(e){var a=[];t(e,n),s.a.judge_has_children(e)&&(a=I(e.children,n,t),e.children=a),r.push(e)}),r},rolling:l.a,computed:c.a,vip:d.a,has:S,conf:u.a,vip_view:k,recommend:E.a,team_layer:N.a,active_house:R.a}},cgK4:function(e,n){},csSS:function(e,n){},dmby:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),o=t("B8md"),i=t("ERgN"),s=function e(n,t,r){var a=0;return n.map(function(n){var s=0;n.vip=o.a.transfer_vip(t,n.unid),o.a.judge_has_children(n)&&(s=e(n.children,t,r)),n.ipv_first>0&&(a=o.a.floatAdd(a,n.ipv_first)),n.pv_recommend_one=s,n.bonus.usd_recommend=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0;return r+=1,n.map(function(n){var s=0;r<i.a.RECOMMEND_DEPTH&&o.a.judge_has_children(n)&&(s=e(n.children,t,r),a=o.a.floatAdd(a,s)),a=o.a.floatAdd(a,o.a.floatMul(n.pv_recommend_one,t[r-1])),n.temporary_re_ratio=t[r-1]}),a}([n],r)}),a};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.a.RECOMMEND_RATIOS;return new a.a(function(r,a){r(s(e,n,t))})}},e0XP:function(e,n){},"fT/B":function(e,n){},gJtD:function(e,n){},h0mM:function(e,n){},oKCz:function(e,n,t){"use strict";var r={name:"LoadingSmall",props:{bigger:{type:Number,default:0}}},a={render:function(){var e=this.$createElement,n=this._self._c||e;return-1==this.bigger?n("div",{staticClass:"loading-small"}):1==this.bigger?n("div",{staticClass:"loading-huge"}):n("div",{staticClass:"loading"})},staticRenderFns:[]};var o=t("VU/8")(r,a,!1,function(e){t("Vqni")},"data-v-2cbb40ff",null);n.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.14c7f0954a00cfb376d5.js.map