webpackJsonp([24],{"+cey":function(e,n){},"0alL":function(e,n){},"4Vrm":function(e,n){},"4ij5":function(e,n){},"7zck":function(e,n){},AfF2:function(e,n,t){"use strict";var r,a=t("Xxa5"),i=t.n(a),o=t("exGp"),s=t.n(o),u=t("//Fk"),c=t.n(u),l=t("B8md"),d=t("ERgN"),h=function(e,n,t,r){var a=[];return new c.a(function(i,o){if(l.a.judge_has_children(e)){var s=e.children;s.length>=n&&s.map(function(e){if(e.ipv>=t&&l.a.judge_has_children(e)){var r=[];e.children.map(function(e){e.ipv>=t&&r.push(e.ipv)}),r.length>=n&&a.push(r)}})}e.active_house_result=a,i(function(e,n,t){var r=Math.floor(e.length/n);return l.a.floatMul(t,r)}(a,n,r))})},f=function e(n,t,r,a){var o,u=this;n.map((o=s()(i.a.mark(function n(o){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l.a.judge_has_children(o)&&e(o.children,t,r,a),n.next=3,h(o,t,r,a);case 3:o.bonus.usd_active_house=n.sent;case 4:case"end":return n.stop()}},n,u)})),function(e){return o.apply(this,arguments)}))},p=(r=s()(i.a.mark(function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d.a.ACTIVE_MEMBER_NUM,o=this,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:d.a.USER_PV_LIMIT,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:d.a.ACTIVE_USD;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new c.a(function(){var e=s()(i.a.mark(function e(t,s){var c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=0,!r){e.next=7;break}return e.next=4,h(n,a,u,l);case 4:c=e.sent,e.next=8;break;case 7:c=f(n,a,u,l);case 8:t(c);case 9:case"end":return e.stop()}},e,o)}));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)})),function(e,n){return r.apply(this,arguments)});n.a=p},B8md:function(e,n,t){"use strict";var r=t("Dd8w"),a=t.n(r),i={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,i=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{i=n.toString().split(".")[1].length}catch(e){i=0}return t=Math.pow(10,Math.max(a,i)),r=(a=i)?a:i,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}};n.a=a()({numd_pv:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=0;return e.buys&&e.buys.length>=0&&(n?e.buys.map(function(e){if(e.first_buy){var n=i.floatMul(e.num,e.pv);t=i.floatAdd(t,n)}}):e.buys.map(function(e){var n=i.floatMul(e.num,e.pv);t=i.floatAdd(t,n)})),t},numd_inum:function(e,n){return e>=n?1:0},num_reward:function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0==e||void 0==n?0:t?i.floatMul(e,n):i.floatAdd(e,n)},judge_has_children:function(e){return"children"in e&&e.children.length>0},transfer_vip:function(e,n){for(var t={ratio:[]},r=e.length,a=0;a<r;a++)if(e[a].unid==n){t=e[a].vip;break}return t}},i)},D1QD:function(e,n){},ERgN:function(e,n,t){"use strict";var r=[.07,.06,.05,.03,.02],a={};a.simpler=[[r[0],0,0,0,0,0,0],[r[0],r[1],0,0,0,0,0],[r[0],r[1],r[1],0,0,0,0],[r[0],r[1],r[1],r[2],0,0,0],[r[0],r[1],r[1],r[2],r[2],0,0]],a.leader=[[r[0],r[1],r[1],r[2],r[2],r[3],0],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]],[r[0],r[1],r[1],r[2],r[2],r[3],r[4]]],n.a={USER_PV_LIMIT:100,LAYER_DEPTH_NUM:7,ACTIVE_MEMBER_NUM:3,ACTIVE_USD:130,RECOMMEND_DEPTH:3,SIMPLER:"simpler",LEADER:"leader",VIP_LAYER_RATIOS:a,RECOMMEND_RATIOS:[.2,.1,.05]}},GwPA:function(e,n,t){"use strict";var r=t("B8md"),a=t("ERgN"),i=a.a.LEADER,o=a.a.SIMPLER,s=function(e,n,t,s,u){var c,l,d,h=o,f=1;if(e<a.a.USER_PV_LIMIT)f=0;else{var p=r.a.floatAdd(e,s);p>=5e3&&u>=2e3&&t>=2?(h=i,f=function(e,n,t){var r=3;return e>4&&n>25e3&&t>5e3?e>=6&&n>=15e4&&t>=25e3?r=5:e>=5&&n>=72e3&&t>=9e3&&(r=4):(e<4||n<25e3||t<5e3)&&(r=e>=3&&n>=9e3&&t>=3e3?2:1),r}(t,p,u)):f=function(e){var n=3;return e>1e3?e>=3e3?n=5:e>=2e3&&(n=4):e<1e3&&(n=e<500?1:2),n}(p)}return c=h,l=f,void 0==(d=a.a.VIP_LAYER_RATIOS[c][l-1])&&(d=[]),{name:c,star:l,ratio:d}},u=function(e){var n=e.ipv,t=e.son_can_num_SPONSER,r=e.son_can_num_ENROLLER,a=e.son_pv_SPONSER,i=e.son_pv_ENROLLER;return s(n,t,r,a,i)};n.a=function(e){return u(e)}},I76R:function(e,n){e.exports={val_empty:function(e,n){return null!=e&&""!=e.trim()||n+"必須填寫。"},val_char:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e)||n+"中不應有特殊字符。"},val_char_price:function(e,n){return!/[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/.test(e)||n+"中不應有除了.之外的特殊字符。"},val_email:function(e,n){return!!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e)||n+"格式錯誤。"},val_length:function(e,n,t,r){return e.length<t?n+"的字符長度應該大於等於"+t:!(e.length>r)||n+"的字符長度應該小於等於"+r},val_timed:function(e,n,t){if(t){if(e.length>10&&e.length<8)return n+"字符長度不符合！";if(/[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/.test(e))return n+"中不應有除了 - 之外的特殊字符。"}return!0}}},JFoy:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),i=t("B8md"),o=t("ERgN");n.a=function(e,n,t,r){return new a.a(function(a,s){!function e(n,t,r,a){var s={num:0,pv:0,active:0,pv_next_only:0},u=0;return n.map(function(n){var c={num:0,pv:0,active:0,pv_next_only:0};u=i.a.numd_inum(n.ipv,o.a.USER_PV_LIMIT),i.a.judge_has_children(n)&&(c=e(n.children,t,r,a)),n.son_pv=c.pv,n.son_can_num=c.active,n.active_lower=c.active,n.ipv_next_only=c.pv_next_only,s.pv=i.a.floatAdd(s.pv,i.a.floatAdd(c.pv,n.ipv)),s.num=i.a.floatAdd(s.num,i.a.floatAdd(c.num,u)),s.active=i.a.floatAdd(u,s.active),u>0&&(s.pv_next_only=i.a.floatAdd(s.pv_next_only,n.ipv)),function(e,n,t){for(var r=-1,a=e.length,i=0;i<a;i++)e[i].unid==n.unid&&(r=i);if(r>=0)e[r]["son_pv_"+t]=n.son_pv,e[r]["son_can_num_"+t]=n.son_can_num,e[r]["active_lower_"+t]=n.active_lower,e[r]["ipv_next_only_"+t]=n.ipv_next_only;else{var o={unid:n.unid,ipv:n.ipv};o["son_pv_"+t]=n.son_pv,o["son_can_num_"+t]=n.son_can_num,o["active_lower_"+t]=n.active_lower,o["ipv_next_only_"+t]=n.ipv_next_only,e.push(o)}}(t,n,r),null!=a&&a(n)}),s}(e,t,n,r),a(t)})}},KBL8:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),i=t("B8md"),o=t("ERgN"),s=function e(n,t,r,a,o,s){var u=0,c=a[r];return void 0==c&&(c=0),n.map(function(n){var l=0,d=r;if(r<s){n.usd_layer=i.a.floatMul(r+1,i.a.floatMul(c,n.ipv));var h=i.a.floatAdd(n.ipv,t);d=r+1,h>=o?h=0:d-=1,i.a.judge_has_children(n)&&(l=e(n.children,h,d,a,o,s))}else n.usd_layer=0;return u=i.a.floatAdd(u,i.a.floatAdd(n.usd_layer,l)),n.temporary_index=d,n}),u};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.a.USER_PV_LIMIT,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.a.LAYER_DEPTH_NUM;return new a.a(function(a,o){a(t?s(e.children,0,0,e.vip.ratio,r,u):function e(n,t,r,a){n.map(function(n){if(n.vip=i.a.transfer_vip(t,n.unid),i.a.judge_has_children(n)){var o=n.children;e(o,t,r,a),n.bonus.usd_team_layer=s(o,0,0,n.vip.ratio,r,a)}else n.bonus.usd_team_layer=0})}(e,n,r,u))})}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=t("Xxa5"),i=t.n(a),o=t("exGp"),s=t.n(o),u={name:"",data:function(){return{}},mounted:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.$store.state.token){n.next=5;break}return n.next=3,e.chronusNow();case 3:t=n.sent,e.$store.commit("saveChronus",[t,!0]);case 5:case"end":return n.stop()}},n,e)}))()},methods:{chronusNow:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t={"_where[start_lte]":e.view.getToday(),"_where[end_gte]":e.view.getToday()},n.next=3,e.conn.get(e.api.chronus,e.$store.state.token,t);case 3:if(!(t=n.sent)){n.next=9;break}if(!(t.length>0)){n.next=7;break}return n.abrupt("return",t[0]);case 7:n.next=10;break;case 9:e.view.alert_message("新的結算日程開始了，但是數據庫未有關於新日程的時間準備，請移步後臺新增時間代號。");case 10:return n.abrupt("return",null);case 11:case"end":return n.stop()}},n,e)}))()}}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var l=t("VU/8")(u,c,!1,function(e){t("+cey")},"data-v-3b88b5e7",null).exports,d={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]};var h=t("VU/8")({name:"",data:function(){return{}},provide:function(){return{reload:this.reload}},mounted:function(){},methods:{reload:function(){this.alive=!1,this.$nextTick(function(){this.alive=!0})}}},d,!1,function(e){t("yifX")},"data-v-6f565ddb",null).exports,f={props:{defeated:{type:Boolean}},name:"",data:function(){return{}}},p={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"defeated_sign"},[this.defeated?n("div",[this._v("\n        有用户数据，无后台账户，登录失败！！！\n    ")]):n("div",[this._v("\n        无用户数据，登录失败！！！\n    ")])])},staticRenderFns:[]};var m={components:{LoginDefeated:t("VU/8")(f,p,!1,function(e){t("D1QD")},"data-v-3950fda5",null).exports},name:"",props:{},data:function(){return{user:null,unid:null,username:null,password:null,sign_defeated:null,end_login:!1}},mounted:function(){},methods:{touchLogin:function(){this.username=this.$store.state.platform_data.username,this.password=this.$store.state.platform_data.password,console.log("预备登录"),this.username?this.login():(this.sign_defeated=!1,this.$emit("defeated_Father",this.sign_defeated))},intervenLogin:function(){this.$store.state.layout==this.conf.LAYOUT.WORDPRESS?this.unid=this.$store.state.platform_data.unid:this.unid=this.user.unid},switchLoginSuccess:function(e){console.log("A"),this.$store.commit("saveBackendUser",e),this.$emit("success_Father",!0),console.log("B"),e.sponser_id&&(onsole.log("C"),this.$router.push({path:"/home/user/center"}))},login:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.conn.login({identifier:e.username,password:e.password});case 3:(t=n.sent)&&(e.$store.commit("changeAuth",t.data.jwt),e.user=t.data.user,e.intervenLogin(),e.unidForUser()),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),e.sign_defeated=!0,e.$emit("defeated_Father",e.sign_defeated);case 11:e.end_login=!0;case 12:case"end":return n.stop()}},n,e,[[0,7]])}))()},unidForUser:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.users,e.$store.state.token,{unid:e.unid});case 2:(t=n.sent)?t.length>0&&(e.user=t[0],console.log("有此用户 username =",e.user.username),e.switchLoginSuccess(t[0])):(e.sign_defeated=!0,e.$emit("defeated_Father",e.sign_defeated));case 4:case"end":return n.stop()}},n,e)}))()}}},v={render:function(){var e=this.$createElement,n=this._self._c||e;return this.end_login?n("div",[null!=this.sign_defeated?n("login-defeated",{attrs:{defeated:this.sign_defeated}}):this._e()],1):n("div")},staticRenderFns:[]};var _=t("VU/8")(m,v,!1,function(e){t("4ij5")},"data-v-42524eef",null).exports,g=t("dmby"),b=t("KBL8"),y=t("AfF2"),w={components:{QiongLoading:t("oKCz").a},props:{chronu_id:{type:String}},name:"",data:function(){return{chronu:"",transfer:[],finished:!1}},created:function(){this.valuation(this.chronu_id)},mounted:function(){this.init()},methods:{valuation:function(e){this.chronu=e||this.$store.state.chronus.id},init:function(){var e=this;return s()(i.a.mark(function n(){var t,r,a,o,s,u;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.finished=!1,t=void 0,r=void 0,!(a=e.$store.state.user_backend)){n.next=38;break}return n.next=6,e.userLoading("SPONSER");case 6:return o=n.sent,n.next=9,e.userLoading("ENROLLER");case 9:return s=n.sent,n.next=12,e.buyLoading();case 12:return u=n.sent,o=e.build_buying(o,u),s=e.build_buying(s,u),n.next=17,e.bonus.rolling(o,"SPONSER",e.rebuild_user,a.sponser_id);case 17:return t=n.sent,n.next=20,e.bonus.rolling(s,"ENROLLER",e.rebuild_user,a.enroller_id);case 20:return r=n.sent,n.next=23,e.bonus.computed(t,"SPONSER",e.transfer,null);case 23:return e.transfer=n.sent,n.next=26,e.bonus.computed(r,"ENROLLER",e.transfer,null);case 26:return e.transfer=n.sent,e.transfer.map(function(n){return n.vip=e.bonus.vip(n),n}),n.next=30,Object(g.a)(r,e.transfer);case 30:return n.next=32,Object(b.a)(t,e.transfer);case 32:return n.next=34,Object(y.a)(t,e.transfer);case 34:e.into_transfer(t,"SPONSER"),e.into_transfer(r,"ENROLLER"),e.saving(t,r),e.finished=!0;case 38:case"end":return n.stop()}},n,e)}))()},saving:function(e,n){this.$store.commit("saveUserSponser",e),this.$store.commit("saveUserEnroller",n),this.$store.commit("saveTransfer",this.transfer),console.log("sponser =",n,"enroller =",n)},buyLoading:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.get(e.api.buys,e.$store.state.token,{chronu:e.chrou});case 2:return t=n.sent,n.abrupt("return",t.map(function(e){return{num:e.num,id:e.id,pv:e.product.pv,first_buy:e.first_buy,users_permissions_user:e.users_permissions_user.id,buy_time:e.buy_time,product:e.product.id}}));case 4:case"end":return n.stop()}},n,e)}))()},userLoading:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SPONSER";return s()(i.a.mark(function t(){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={},"SPONSER"==n?r["_where[relation_index_sponser_contains]"]=e.$store.state.user_backend.relation_index_sponser:r["_where[relation_index_enroller_contains]"]=e.$store.state.user_backend.relation_index_enroller,t.next=4,e.conn.get(e.api.users,e.$store.state.token,r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,e)}))()},rebuild_user:function(e){delete e.created_at,delete e.updated_at,delete e.role,delete e.provider,delete e.confirmed,delete e.blocked,delete e.email},build_buying:function(e,n){return e.map(function(e){var t=[];return n.map(function(n){e.id==n.users_permissions_user&&t.push(n)}),e.buys=t,e})},into_transfer:function(e,n){"SPONSER"?this.bonus._build_res(e,this.transfer,function(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.unid==r.unid&&(e.transfer=r,r.bonus=e.bonus)}}):this.bonus._build_res(e,this.transfer,function(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.unid==r.unid&&(e.transfer=r,r.bonus.usd_recommend=e.bonus.usd_recommend)}})}}},S={render:function(){var e=this.$createElement,n=this._self._c||e;return this.finished?n("div"):n("div",{staticClass:"init-shimmer"},[n("qiong-loading")],1)},staticRenderFns:[]};var x=t("VU/8")(w,S,!1,function(e){t("rcte")},"data-v-28fd1a8d",null).exports,E={name:"",data:function(){return{}},mounted:function(){var e=this;setTimeout(function(n){e.$emit("recive_Father",{params:{unid:1}})},1e3)},methods:{returnMessage:function(e){var n=e.data;switch(n.cmd){case"getFormJson":console.log(n),console.log(n.params),this.$emit("recive_Father",n)}}},created:function(){window.addEventListener("message",this.returnMessage)},unmounted:function(){window.removeEventListener("message",this.returnMessage)}},k={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var R={components:{DataFromPlantForm:t("VU/8")(E,k,!1,function(e){t("4Vrm")},"data-v-3b529488",null).exports,LoginFromStrapi:_},name:"",data:function(){return{}},mounted:function(){},methods:{reciveData:function(e){console.log("data =",e);try{e.params&&(this.savingData(e.params),this.$emit("sign_Father",!0))}catch(e){}},savingData:function(e){e.username=this.conf.BOWSER.username,e.password=this.conf.BOWSER.password,this.$store.commit("saveFromPlatform",e)}}},N={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("data-from-plant-form",{on:{recive_Father:this.reciveData}})],1)},staticRenderFns:[]};var L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"app-shimmer"},[n("div",{staticClass:"the_loading"},[this._v("\n        \n        加载中...\n    ")])])}]};var M={components:{WordpressApp:t("VU/8")(R,N,!1,function(e){t("meGr")},"data-v-e8744cc6",null).exports,InitShimmer:t("VU/8")({name:"",data:function(){return{}}},L,!1,function(e){t("R0ik")},"data-v-2913439c",null).exports,InitAuto:x,LoginFromStrapi:_,AppView:h},name:"",data:function(){return{layout:"",finished:!1,shimmer:!0,login_success:null}},created:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.layout=e.conf.LAYOUT.WORDPRESS,(t=e.$route.query.layout)&&(e.layout=t),n.next=5,e.$store.commit("saveLayout",e.layout);case 5:e.layout==e.conf.LAYOUT.HTML&&(e.finished=!0);case 6:case"end":return n.stop()}},n,e)}))()},methods:{plantFinished:function(e){var n=this;this.finished=e,this.$refs.loginREF.touchLogin(),setTimeout(function(e){n.shimmer=!1},1e3)},loginSuccess:function(e){console.log("登录成功!!!"),this.login_success=!0},loginDefeated:function(e){e?console.log("有 平台 数据，但是没有 Strapi User。登录失败"):console.log("未找到 平台 userID，登录失败！！！"),this.login_success=!1}}},F={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.layout==e.conf.LAYOUT.WORDPRESS?t("wordpress-app",{on:{sign_Father:e.plantFinished}}):t("div"),e._v(" "),e.$store.state.chronus?t("div",[e.$store.state.user_backend?t("init-auto"):e._e()],1):e._e(),e._v(" "),t("div",[t("login-from-strapi",{ref:"loginREF",on:{defeated_Father:e.loginDefeated,success_Father:e.loginSuccess}})],1),e._v(" "),t("transition",{attrs:{name:"fade_out"}},[t("init-shimmer",{directives:[{name:"show",rawName:"v-show",value:e.shimmer,expression:"shimmer"}]})],1),e._v(" "),t("transition",{attrs:{name:"page_in"}},[null!=e.login_success?t("app-view"):e._e()],1)],1)},staticRenderFns:[]};var A={components:{ChronusNow:l,Layout:t("VU/8")(M,F,!1,function(e){t("0alL")},"data-v-65907512",null).exports},name:"",data:function(){return{hasing_chronu:!1}},mounted:function(){var e=this;return s()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.app();case 2:case"end":return n.stop()}},n,e)}))()},created:function(){var e=this;return s()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.commit("saveChronus",["",!1]);case 2:case"end":return n.stop()}},n,e)}))()},methods:{app:function(){var e=this;return s()(i.a.mark(function n(){var t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$refs.chronuREF.chronusNow();case 2:(t=n.sent)&&(e.$store.commit("saveChronus",[t,!0]),e.hasing_chronu=!0),console.log("加载月份 =",t);case 5:case"end":return n.stop()}},n,e)}))()}}},O={render:function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("chronus-now",{ref:"chronuREF"}),this._v(" "),n("layout")],1)},staticRenderFns:[]};var P=t("VU/8")(A,O,!1,function(e){t("V0Gc")},null,null).exports,I=t("/ocq"),T=t("Gu7T"),$=t.n(T),D=[{path:"/login",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"ROIB"))},meta:{title:"登录界面",needLogin:!1},redirect:"/login/form",children:[{path:"/login/form",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"eP6H"))}}]}],U=[{path:"/widget_menu_msg",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"kfMJ"))}}],B=[{path:"/home",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"n/G1"))},redirect:"/home/account",children:[{path:"/home/account",component:function(){return t.e(22).then(t.bind(null,"NeGW"))},redirect:"/home/account/statement",children:[{path:"/home/account/statement",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"HeVP"))}}]},{path:"/home/bonus",component:function(){return t.e(16).then(t.bind(null,"OzQL"))},redirect:"/home/bonus/active_house",children:[{path:"/home/bonus/active_house",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"zj5+"))}},{path:"/home/bonus/active_house_one",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"8Igl"))}},{path:"/home/bonus/recommend",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"vXEu"))}},{path:"/home/bonus/recommend_one",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"KJyv"))}},{path:"/home/bonus/active_layer",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"1e4n"))}},{path:"/home/bonus/active_layer_one",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"yEZu"))}}]},{path:"/home/user",component:function(){return t.e(20).then(t.bind(null,"x7Nh"))},redirect:"/home/user/sponser",children:[{path:"/home/user/center",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"2L7I"))}},{path:"/home/user/sponser",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"47jR"))}},{path:"/home/user/enroller",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"4ivJ"))}}]},{path:"/home/buys",component:function(){return t.e(17).then(t.bind(null,"iRNI"))},redirect:"/home/buys/records",children:[{path:"/home/buys/records",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"WxnW"))}}]},{path:"/ui",component:function(){return t.e(19).then(t.bind(null,"p69I"))},redirect:"/ui/element",children:[{path:"/ui/element",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"lQLT"))}},{path:"/ui/pdf_user",component:function(){return t.e(0).then(t.bind(null,"cMDu"))}}]},{path:"/home/dump",component:function(){return t.e(21).then(t.bind(null,"0VwF"))}}]}].concat($()(D),$()(U),[{path:"",redirect:"/home",meta:{title:"首页"}}]);r.default.use(I.a);var C=I.a.prototype.push;I.a.prototype.push=function(e){return C.call(this,e).catch(function(e){return e})};var V=new I.a({routes:B,mode:"hash",scrollBehviour:function(e,n,t){return t||(e.hash?{selector:e.hash}:void 0)}});V.afterEach(function(){window.scrollTo(0,0)});var j=V,J=t("mvHQ"),W=t.n(J),X=t("NYxO");r.default.use(X.a);var z=new X.a.Store({state:{token:"",user_backend:null,user:{},bonus:{},user_unit:null,chronus:null,transfer:null,users_sponser:null,users_enroller:null,me:{},layout:null,platform_data:null},mutations:{changeAuth:function(e,n){e.token=n,localStorage.setItem("oils_token",n)},clearToken:function(e){e.token="",e.user={},localStorage.setItem("oils_token","")},saveUnitUser:function(e,n){e.user_unit=n},saveBackendUser:function(e,n){localStorage.setItem("oils_user_backend",W()(n)),e.user_backend=n},saveBonus:function(e,n){e.bonus=n},saveUser:function(e,n){e.user=n},saveMe:function(e,n){e.me=n},saveUserSponser:function(e,n){e.users_sponser=n},saveUserEnroller:function(e,n){e.users_enroller=n},saveTransfer:function(e,n){e.transfer=n},saveChronus:function(e,n){var t=n[0];n[1]&&(delete t.buys,delete t.bonus,delete t.created_at,delete t.updated_at,delete t.published_at,localStorage.setItem("oils_chronu",W()(t))),e.chronus=t},saveLayout:function(e,n){e.layout=n},saveFromPlatform:function(e,n){e.platform_data=n,localStorage.setItem("oils_conn_data",W()(n))}},getters:{checkToken:function(e){var n=!1,t=localStorage.getItem("oils_token");return void 0==t||""==t||null==t||"undefined"==t?n=!0:(e.token=t,console.log("token = ",t.substring(0,15)+"...")),function(e){return n}},checkUserBackend:function(e){var n=!1;try{var t=JSON.parse(localStorage.getItem("oils_user_backend"));void 0==t||""==t||null==t||"undefined"==t?n=!0:e.user_backend=t}catch(e){}return function(e){return n}},checkChronus:function(e){var n=!1;try{var t=JSON.parse(localStorage.getItem("oils_chronu"));void 0==t||""==t||null==t?n=!0:e.chronus=t}catch(e){}return function(e){return n}},checkPlantfrom:function(e){var n=!1;try{var t=JSON.parse(localStorage.getItem("oils_conn_data"));void 0==t||""==t||null==t?n=!0:e.platform_data=t}catch(e){}return function(e){return n}}},modules:{}}),G=t("I76R"),H=t.n(G),Y=t("Xejt"),Q=t("Dd8w"),q=t.n(Q),K={view_pay_way:function(e){return["信用卡","其他"][e]}},Z={alert_message:function(e,n){alert(e)}},ee={ser_timed:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==e||void 0==e)return"--";var r=e.substring(0,4),a=e.substring(5,7),i=e.substring(8,10),o=e.substring(11,13),s=e.substring(14,16);return n?t?r+"年"+a+"月"+i+"日 ":r+"年"+a+"月"+i+"日 "+o+"時"+s+"分":t?r+"-"+a+"-"+i:r+"-"+a+"-"+i+" "+o+":"+s},getToday:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new Date),r=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return a<10&&!n&&(a="0"+a),i<10&&!n&&(i="0"+i),e?r+"年"+a+"月"+i+"日":r+"-"+a+"-"+i},getTodayEn:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,r=e.getDate(),a=e.getDay();return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][a-1]+", "+function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e+1]}(t)+" "+r+", "+n}},ne={floatAdd:function(e,n){var t,r=void 0,a=void 0;try{r=e.toString().split(".")[1].length}catch(e){r=0}try{a=n.toString().split(".")[1].length}catch(e){a=0}return(e*(t=Math.pow(10,Math.max(r,a)))+n*t)/t},floatSub:function(e,n){var t,r,a=void 0,i=void 0;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{i=n.toString().split(".")[1].length}catch(e){i=0}return t=Math.pow(10,Math.max(a,i)),r=(a=i)?a:i,((arg1m-arg2m)/t).toFixed(r)},floatMul:function(e,n){var t=0,r=e.toString(),a=n.toString();try{t+=r.split(".")[1].length}catch(e){}try{t+=a.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,t)},floatDiv:function(e,n){var t=0,r=0;try{t=e.toString().split(".")[1].length}catch(e){}try{r=n.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(n.toString().replace(".",""))*Math.pow(10,r-t)}},te=q()({backend:K},ee,ne,Z,{first_Max:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},if_def:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"- -";return e||n}}),re=t("IHMs"),ae=t.n(re),ie="http://cms02.svr.up5d.com",oe={baseURL:ie,apiURL:"http://cms02.svr.up5d.com:1337",delayTime:300,theme:{primary:{base:"#F08585",darken1:"#5b0c64",lighten1:"#bd10d1"},accent:{base:"#4B7670",darken1:"#3d6963"},secondary:{base:"#365b56",darken1:ae.a.cyan.darken3,lighten1:ae.a.cyan.lighten3},header:{color:"",classes:"neu-glow"},footer:{color:"",classes:"neu-glow"},primaryBgText:ae.a.shades.white,secondaryBgText:ae.a.shades.white,dark:!1,semidark:!1,rtl:!1},LAYOUT:{WORDPRESS:"WORDPRESS"},BOWSER:{username:"VcrTing@163.com",password:"123456"}},se=t("mtWM"),ue=t.n(se),ce=oe.apiURL+"/auth/local",le={token:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vcrting@163.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"123456";return s()(i.a.mark(function r(){var a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={identifier:n,password:t},e.next=3,ue.a.post(ce,a);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}},r,e)}))()},login:function(e){return ue.a.post(ce,e)}};function de(e){var n=ue.a.create({timeout:12e3});return n.defaults.retry=2,n.defaults.retryDelay=3e3,n.interceptors.request.use(function(e){return e},function(e){console.log(e)}),n.interceptors.response.use(function(e){return e.data},function(e){throw console.log("请求出错!!!"),console.log(e),e}),n(e)}var he=function(e){var n={};return e&&(n.Authorization="Bearer "+e),n},fe={get:function(e,n){return e+=function(e){var n="?";if("{}"==W()(e));else for(var t in e)n+=t+"="+e[t]+"&";return n}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),console.log(e),de({url:e,method:"get",headers:he(n)})},post:function(e,n,t){return de({url:e,method:"post",data:t,headers:he(n)})},put:function(e,n,t){return de({url:e,method:"put",data:t,headers:he(n)})}},pe=q()({},le,fe,{success_one:function(e){try{e.id}catch(e){return!1}return!0},success_many:function(e){return e.length>0}}),me=function(e){return oe.apiURL+e},ve={users:me("/users"),levels:me("/levels"),buys:me("/buys"),chronus:me("/chronuses"),bonus:me("/bonuses"),products:me("/products")},_e=t("3EgV"),ge=t.n(_e),be=(t("7zck"),t("csSS"),t("gJtD"),t("e0XP"),oe.theme);r.default.use(ge.a);var ye={icons:{iconfont:"mdiSvg"},rtl:!1,theme:{dark:be.dark,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:!0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:be.primary,secondary:be.secondary.base,accent:be.accent.base,error:ae.a.red.accent4,info:ae.a.blue.lighten1,success:ae.a.green.accent4,warning:ae.a.amber.darken2,background:"#f8f9fa",neu:{darken1:"#DDE4EF",lighten1:"#FFFFFF"},primaryBgText:be.primaryBgText,secondaryBgText:be.secondaryBgText},dark:{primary:be.primary,secondary:be.secondary.base,accent:be.accent.darken1,error:ae.a.red.accent4,info:ae.a.blue.lighten1,success:ae.a.green.accent4,warning:ae.a.amber.darken2,background:"#1d2327",neu:{darken1:"#1d2327",lighten1:"#1d2327"},primaryBgText:be.primaryBgText,secondaryBgText:be.secondaryBgText}}}},we=new ge.a(ye),Se=t("/kJX"),xe=t.n(Se);r.default.prototype.api=ve,r.default.prototype.conn=pe,r.default.prototype.conf=oe,r.default.prototype.view=te,r.default.prototype.bonus=Y.a,r.default.prototype.validated=H.a,r.default.config.productionTip=!1,r.default.use(xe.a),new r.default({router:j,store:z,vuetify:we,components:{App:P},template:"<App/>"}).$mount("#app")},NwXI:function(e,n,t){"use strict";var r=t("mvHQ"),a=t.n(r),i=t("//Fk"),o=t.n(i),s=t("B8md"),u=(t("ERgN"),function e(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=[];return i+=1,n.map(function(u){u[a]==t&&(u.children=e(n,u.unid,r,a,i),u.index=i,u.ipv=s.a.numd_pv(u),u.ipv_first=s.a.numd_pv(u,!0),u.children.length>0?u.has_child=!0:u.has_child=!1,null!=r&&r(u),o.push(u))}),o});n.a=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return new o.a(function(i,o){var s=[];s=u(e,r,t,"SPONSER"==n||"sponser"==n||0==n?"sponser_id":"enroller_id"),i(JSON.parse(a()(s)))})}},R0ik:function(e,n){},V0Gc:function(e,n){},Vqni:function(e,n){},Xejt:function(e,n,t){"use strict";var r=t("Xxa5"),a=t.n(r),i=t("exGp"),o=t.n(i),s=t("B8md"),u=t("ERgN"),c=t("JFoy"),l=t("NwXI"),d=t("GwPA"),h=t("gBtx"),f=t.n(h),p=u.a.SIMPLER,m=u.a.LEADER,v={name:"普通會員",type:p,star:0},_=[[100,0],[100,500],[100,1e3],[100,2e3],[100,3e3]],g=[[100,5e3,2,2e3],[100,9e3,3,3e3],[100,25e3,4,5e3],[100,72e3,5,9e3],[100,15e4,6,25e3]],b=[{name:"一級會員",type:p,star:1,nick:"一級會員",img:"ICONS/vip_simpler_1.png",condition:_[0]},{name:"二級會員",type:p,star:2,nick:"二級會員",img:"ICONS/vip_simpler_2.png",condition:_[1]},{name:"三級會員",type:p,star:3,nick:"三級會員",img:"ICONS/vip_simpler_3.png",condition:_[2]},{name:"四級會員",type:p,star:4,nick:"四級會員",img:"ICONS/vip_simpler_4.png",condition:_[3]},{name:"五級會員",type:p,star:5,nick:"五級會員",img:"ICONS/vip_simpler_5.png",condition:_[4]}],y=[{name:"一星領袖",type:m,star:1,nick:"紅寶",img:"ICONS/vip_leader_1.png",condition:g[0]},{name:"二星領袖",type:m,star:2,nick:"鉆石",img:"ICONS/vip_leader_2.png",condition:g[1]},{name:"三星領袖",type:m,star:3,nick:"銀鉆",img:"ICONS/vip_leader_3.png",condition:g[2]},{name:"四星領袖",type:m,star:4,nick:"黑鉆",img:"ICONS/vip_leader_4.png",condition:g[3]},{name:"五星領袖",type:m,star:5,nick:"星鉆",img:"ICONS/vip_leader_5.png",condition:g[4]}],w=function(e){var n="";if(void 0==e)return v;if(e[0]==p){if(0==e[1])return n;n=b[e[1]-1]}else n=y[e[1]-1];return n},S=function(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?e.split("_"):e.join("_")},x={vip_next:function(e){var n=S(e);return n=function e(n,t){t=f()(t);var r=y.length;if(n==p){if(t==b.length)return e(m,1)}else n==m&&t==r&&(t-=1);return[n,t+=1]}(n[0],n[1]),w(n)},finished_vip:function(e,n){return e==m&&n==y.length},split_code:S,code_to_content:w},E={team_layer:function(e){var n=0;return e>u.a.USER_PV_LIMIT&&(n=1),["无","有"][n]},order_role:function(e){return"Member"}},k=t("dmby"),R=t("KBL8"),N=t("AfF2"),L=function e(n,t,r){n.map(function(n){r(n,t),s.a.judge_has_children(n)&&e(n.children,t,r)})};n.a={_build:function e(n,t,r){var i,u=this;n.map((i=o()(a.a.mark(function n(i){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s.a.judge_has_children(i)&&e(i.children,t,r),n.next=3,r(i,t);case 3:case"end":return n.stop()}},n,u)})),function(e){return i.apply(this,arguments)}))},_build_res:L,_build_newer:function(e,n,t){var r=[];return e.map(function(e){var a=[];t(e,n),s.a.judge_has_children(e)&&(a=L(e.children,n,t),e.children=a),r.push(e)}),r},rolling:l.a,computed:c.a,vip:d.a,has:E,conf:u.a,vip_view:x,recommend:k.a,team_layer:R.a,active_house:N.a}},csSS:function(e,n){},dmby:function(e,n,t){"use strict";var r=t("//Fk"),a=t.n(r),i=t("B8md"),o=t("ERgN"),s=function e(n,t,r){var a=0;return n.map(function(n){var s=0;n.vip=i.a.transfer_vip(t,n.unid),i.a.judge_has_children(n)&&(s=e(n.children,t,r)),n.ipv_first>0&&(a=i.a.floatAdd(a,n.ipv_first)),n.pv_recommend_one=s,n.bonus.usd_recommend=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0;return r+=1,n.map(function(n){var s=0;r<o.a.RECOMMEND_DEPTH&&i.a.judge_has_children(n)&&(s=e(n.children,t,r),a=i.a.floatAdd(a,s)),a=i.a.floatAdd(a,i.a.floatMul(n.pv_recommend_one,t[r-1])),n.temporary_re_ratio=t[r-1]}),a}([n],r)}),a};n.a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.a.RECOMMEND_RATIOS;return new a.a(function(r,a){r(s(e,n,t))})}},e0XP:function(e,n){},gJtD:function(e,n){},meGr:function(e,n){},oKCz:function(e,n,t){"use strict";var r={name:"LoadingSmall",props:{bigger:{type:Number,default:0}}},a={render:function(){var e=this.$createElement,n=this._self._c||e;return-1==this.bigger?n("div",{staticClass:"loading-small"}):1==this.bigger?n("div",{staticClass:"loading-huge"}):n("div",{staticClass:"loading"})},staticRenderFns:[]};var i=t("VU/8")(r,a,!1,function(e){t("Vqni")},"data-v-2cbb40ff",null);n.a=i.exports},rcte:function(e,n){},yifX:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.de44f31d514580c96224.js.map