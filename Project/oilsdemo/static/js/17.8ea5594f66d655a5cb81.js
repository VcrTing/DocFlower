webpackJsonp([17],{ZDR2:function(e,t){},cTk8:function(e,t){},eP6H:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Xxa5"),a=s.n(n),r=s("exGp"),o=s.n(r),i={props:{outline:{type:Boolean,default:!1},extra_class:{type:String,default:"qiong-txt-14"},color:{type:String,default:"accent"}},name:"",data:function(){return{}},methods:{done:function(){this.$emit("done_Father")}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("v-btn",{staticClass:"qiong-btn_green_deep ",class:this.extra_class,attrs:{rounded:"",block:"",elevation:"0",outlined:this.outline,color:this.color},on:{click:this.done}},[this._t("default")],2)],1)},staticRenderFns:[]};var l=s("VU/8")(i,c,!1,function(e){s("vA4q")},"data-v-903bdf80",null).exports,u={props:{txt:{type:String},v:{type:Object,default:null},def_check:{type:Boolean,default:!1},extra_class:{type:String}},name:"",data:function(){return{check:!1}},mounted:function(){this.check=this.def_check},methods:{done:function(){this.$emit("done_Father",this.check,this.v)}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-checkbox",{class:e.extra_class,attrs:{label:e.txt},on:{click:e.done},model:{value:e.def_check,callback:function(t){e.def_check=t},expression:"def_check"}})],1)},staticRenderFns:[]};var p=s("VU/8")(u,d,!1,function(e){s("ZDR2")},"data-v-0929ae64",null).exports,_=s("T/Tv"),v=s("Um5R"),h={components:{QiongHeader:_.a,QiongSpace:v.a,QiongCheckBoxOne:p,QiongButtonAccent:l},name:"",data:function(){return{username:"",password:"",remember_pass:!1,error_username:null,error_password:null,rules_email:[function(e){return(e||"").length<=40||"不得超過40字符"},function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"請輸入正確的郵箱格式。"}],rules_pass:[function(e){return(e||"").length<=40||"不得超過40字符"}]}},methods:{msgLog:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"username",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"username"==t?(this.error_username=s,setTimeout(function(){e.error_username=null},2400)):"password"==t&&(this.error_password=s,setTimeout(function(){e.error_password=null},2300))},_Login:function(){var e=this;return o()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={identifier:e.username,password:e.password},t.prev=1,t.next=4,e.conn.login(s);case 4:(n=t.sent)&&(e.$store.commit("changeAuth",n.data.jwt),e.$store.commit("saveBackendUser",n.data.user),e.$router.push({path:"/"})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.view.alert_message("賬號或密碼錯誤！！！");case 11:case"end":return t.stop()}},t,e,[[1,8]])}))()},readyLogin:function(){var e=!0;console.log("登錄"),this.username=this.username.trim(),this.password=this.password.trim(),""==this.username&&(e=!1,this.msgLog("username","請輸入您的電郵地址")),""==this.password&&(e=!1,this.msgLog("password","請輸入您的密碼")),e&&this._Login()}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("qiong-space",{attrs:{space:"2vh"}}),e._v(" "),s("qiong-space",{attrs:{space:"1vw"}}),e._v(" "),s("div",{staticClass:"qiong-sub_header_element qiong-txt-36 fw-b"},[e._v("\n        歡迎來到一葉\n    ")]),e._v(" "),s("qiong-space",{attrs:{space:"1.2vh"}}),e._v(" "),s("qiong-space",{attrs:{space:"1vw"}}),e._v(" "),s("div",[s("v-text-field",{staticClass:"qiong-round_input qiong-txt-16 mt-0 py-0 qiong-input_L",attrs:{rules:e.rules_email,color:"rgba(44, 43, 43, 0.7)",placeholder:"郵箱","error-messages":e.error_username},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),s("v-text-field",{staticClass:"qiong-round_input qiong-txt-16 mt-0 py-0 qiong-input_L",attrs:{rules:e.rules_pass,color:"rgba(44, 43, 43, 0.7)",placeholder:"密碼","error-messages":e.error_password},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("qiong-space",{attrs:{space:"0.3vh"}}),e._v(" "),s("v-checkbox",{staticClass:"my-0 py-0 qiong-accent_reverse_check_box",attrs:{label:"記住密碼",color:"accent"},model:{value:e.remember_pass,callback:function(t){e.remember_pass=t},expression:"remember_pass"}}),e._v(" "),s("qiong-space",{attrs:{space:"0.3vh"}}),e._v(" "),s("qiong-space",{attrs:{space:"0.3vw"}})],1),e._v(" "),s("div",{staticClass:"qiong-td"},[s("div",{staticClass:"qiong-wide-51 pr-0"},[s("qiong-button-accent",{attrs:{color:"secondary",extra_class:"qiong-input_S_self"},on:{done_Father:e.readyLogin}},[s("span",{staticClass:"qiong-txt-16"},[e._v("登錄")])])],1),e._v(" "),s("div",{staticClass:"qiong-wide-16"},[e._v(" ")]),e._v(" "),s("div",{staticClass:"qiong-wide-33 pr-0"},[s("qiong-button-accent",{attrs:{extra_class:"qiong-input_T_self",outline:!0}},[s("span",{staticClass:"qiong-txt-16"},[e._v("註冊")])])],1)])],1)},staticRenderFns:[]};var g=s("VU/8")(h,m,!1,function(e){s("cTk8")},"data-v-0533e0b6",null);t.default=g.exports},vA4q:function(e,t){}});
//# sourceMappingURL=17.8ea5594f66d655a5cb81.js.map