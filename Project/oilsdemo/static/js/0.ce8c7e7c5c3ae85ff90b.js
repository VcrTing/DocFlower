webpackJsonp([0],{"8XzZ":function(e,n){},"9bBU":function(e,n,s){s("mClu");var i=s("FeBl").Object;e.exports=function(e,n,s){return i.defineProperty(e,n,s)}},A7ga:function(e,n){},C4MV:function(e,n,s){e.exports={default:s("9bBU"),__esModule:!0}},ClHd:function(e,n,s){"use strict";var i={props:{the_item:{type:Object},space:{type:String,default:"username"},need_tree:{type:Boolean,default:!0}},name:"",data:function(){return{}}},t={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"username",class:{"tree-root":e.the_item.index<2,"text-center":!e.need_tree}},[e._l(e.the_item.index,function(n){return s("div",{key:n,class:{"level-space":e.need_tree}})}),e._v(" "),s("div",{staticClass:"inner-name d-inline"},[e._v(e._s(e.the_item[e.space]))])],2)},staticRenderFns:[]};var a=s("VU/8")(i,t,!1,function(e){s("UkAe")},"data-v-6b654210",null);n.a=a.exports},POIM:function(e,n){},Q5Hn:function(e,n,s){"use strict";var i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{col:"12"}},[n("div",{staticClass:"title pl-4 pt-2"},[this._t("title")],2)])],1),this._v(" "),n("v-row",[n("v-col",{staticClass:"px-5 pt-1"},[this._t("content")],2)],1),this._v(" "),n("v-row",[n("v-col",{staticClass:"text-right"})],1)],1)},staticRenderFns:[]};var t=s("VU/8")({name:"",data:function(){return{}}},i,!1,function(e){s("8XzZ")},"data-v-08962aa4",null);n.a=t.exports},QvWw:function(e,n){},UkAe:function(e,n){},Xt5o:function(e,n){},bOdI:function(e,n,s){"use strict";n.__esModule=!0;var i,t=s("C4MV"),a=(i=t)&&i.__esModule?i:{default:i};n.default=function(e,n,s){return n in e?(0,a.default)(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}},f82S:function(e,n,s){"use strict";var i={props:{def:{type:String,default:"s"}},name:"",data:function(){return{v:"",choise:[{text:"Sponser",value:"s"},{text:"Enroller",value:"e"}]}},mounted:function(){this.v=this.def},methods:{getUserModel:function(){this.$emit("getUser_Father",this.v)}}},t={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("v-select",{staticClass:"user-model no-detial",attrs:{label:"用戶模型",dense:"",items:e.choise,outlined:""},on:{change:e.getUserModel},model:{value:e.v,callback:function(n){e.v=n},expression:"v"}})],1)},staticRenderFns:[]};var a=s("VU/8")(i,t,!1,function(e){s("POIM")},"data-v-1c44e521",null).exports,r=s("fE3H"),u={name:"",data:function(){return{unid:null,ipv:null,rules:{unid:[function(e){return e<0||"Value > 0, pls."}],ipv:[function(e){return e<0||"Value > 0, pls."}]},rule:[function(e){return e>0||"Value > 0, pls."}],snackbar:!1,alert:!1,alert_type:"success",alert_msg:""}},computed:{formIsValid:function(){return this.unid&&this.ipv}},methods:{alertIt:function(e){var n=this;"success"!=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success")&&(this.alert_type="error"),this.alert=!0,this.alert_msg=e,setTimeout(function(){n.alert=!1},1500)},doSubmit:function(){var e=this.unid.trim(),n=this.ipv.trim();null!=e&&null!=n?isNaN(e)||isNaN(n)?this.alertIt("Sir, it not an number.",""):this.submit(e,n):this.alertIt("Input something, pls.","")},submit:function(e,n){var s=this,i=[{num:1,pv:n}];r.a.map(function(n){return e==n.unid&&(n.buys=i,s.alertIt("Change Success","success")),n}),this.$emit("single_Father")}}},l={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"400"},scopedSlots:e._u([{key:"activator",fn:function(n){var i=n.on,t=n.attrs;return[s("v-btn",e._g(e._b({staticClass:"btn-accent",attrs:{outlined:""}},"v-btn",t,!1),i),[e._v("\n            編輯 IPV\n        ")])]}},{key:"default",fn:function(n){return[s("v-card",[s("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Edit Someone's Ipv")]),e._v(" "),s("v-card-text",[s("div",{staticClass:"pa-6"},[s("v-form",{ref:"form"},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{rules:e.rule,label:"Unid",color:"secondary",required:"",clearable:""},model:{value:e.unid,callback:function(n){e.unid=n},expression:"unid"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{rules:e.rule,color:"secondary",label:"Ipv",required:"",clearable:""},model:{value:e.ipv,callback:function(n){e.ipv=n},expression:"ipv"}})],1)],1)],1)],1)],1),e._v(" "),e.alert?s("v-alert",{staticClass:"ma-0",attrs:{dense:"",text:"",type:e.alert_type}},[e._v("\n                "+e._s(e.alert_msg)+"\n            ")]):e._e()],1),e._v(" "),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:"",color:"secondary dark"},on:{click:e.doSubmit}},[e._v("Submit")])],1)],1)]}}])})},staticRenderFns:[]};var o={components:{UserModelSelect:a,EditIpv:s("VU/8")(u,l,!1,function(e){s("QvWw")},"data-v-1054305c",null).exports},name:"",props:{isUM:{type:Boolean,default:!0}},data:function(){return{show:!1,user_code:"s"}},mounted:function(){},methods:{doingNum:function(){location.reload()},getUser:function(e){var n="ENROLLER";"s"==e&&(n="SPONSER"),this.user_code=e,this.$emit("user_Father",n)},single_Change:function(){this.getUser(this.user_code)}}},d={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("v-card",[s("v-row",{staticClass:"pa-4 px-6"},[s("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"6"}},[e.isUM?s("user-model-select",{on:{getUser_Father:e.getUser}}):e._e()],1),e._v(" "),s("v-col",{staticClass:"mb-0 py-0 text-right pb-2",attrs:{cols:"6"}},[s("v-btn",{staticClass:"ml-3",attrs:{color:"primary"},on:{click:e.doingNum}},[e._v("刷新")])],1)],1)],1),e._v(" "),s("v-card",{},[s("v-row",{staticClass:"pa-4 px-6"},[s("v-col",{staticClass:"pa-0"},[e._t("tree_header"),e._v(" "),s("div",{staticClass:"mt-4"})],2),e._v(" "),e.show?s("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[e._t("tree")],2):s("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e._v("\n\n                计算中...\n\n            ")])],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(o,d,!1,function(e){s("Xt5o")},"data-v-2e3f153c",null);n.a=c.exports},fE3H:function(e,n,s){"use strict";n.a=[{name:"UNION",username:"UNION",displayname:"UNION ASPIRE COMPANY LIMITED",unid:"1",sponser_id:"",enroller_id:"",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"ECMARKETING",username:"ECMARKETING",displayname:"EC Marketing Limited",unid:"2",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"VDE",username:"VDE",displayname:"V.D.E. International Limited",unid:"3",sponser_id:"2",enroller_id:"2",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"lingcheung",username:"lingcheung",displayname:"Nga Ling Cheung",unid:"4",sponser_id:"3",enroller_id:"3",is_new:!0,boss_id:"",buys:[{num:10,pv:120}]},{name:"muspiration",username:"muspiration",displayname:"MUSPIRATION PIANO PERFORMING MUSIC STUDIO",unid:"5",sponser_id:"2",enroller_id:"2",is_new:!0,boss_id:"",buys:[]},{name:"LOUIS",username:"LOUIS",displayname:"LAI, Cheuk Kit Louis",unid:"6",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[]},{name:"florace",username:"florace",displayname:"FLORACE INTERNATIONAL HK LIMITED",unid:"7",sponser_id:"6",enroller_id:"6",is_new:!0,boss_id:"",buys:[]},{name:"yield",username:"yield",displayname:"YIELD PROFIT TRADING LIMITED",unid:"8",sponser_id:"6",enroller_id:"6",is_new:!0,boss_id:"",buys:[]},{name:"ngseetan",username:"ngseetan",displayname:"NG SEE TAN",unid:"9",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"zengsuyun",username:"zengsuyun",displayname:"ZENG SUYUN",unid:"10",sponser_id:"9",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"ausauchi",username:"ausauchi",displayname:"AU SAU CHI",unid:"11",sponser_id:"10",enroller_id:"10",is_new:!0,boss_id:"",buys:[]},{name:"tsangliyung",username:"tsangliyung",displayname:"TSANG LI TUNG",unid:"12",sponser_id:"10",enroller_id:"10",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"makyee",username:"makyee",displayname:"Mak Yee",unid:"13",sponser_id:"12",enroller_id:"12",is_new:!0,boss_id:"",buys:[{num:7,pv:120}]},{name:"icypeng",username:"icypeng",displayname:"Peng Icy",unid:"14",sponser_id:"12",enroller_id:"12",is_new:!0,boss_id:"",buys:[{num:2,pv:120}]},{name:"pollyyu",username:"pollyyu",displayname:"Yu Kwai Mei Polly",unid:"15",sponser_id:"12",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"tsangsiupan",username:"tsangsiupan",displayname:"TSANG SIU PAN",unid:"16",sponser_id:"10",enroller_id:"10",is_new:!0,boss_id:"",buys:[]},{name:"alicewan",username:"alicewan",displayname:"Wan Lok Hsi",unid:"17",sponser_id:"10",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"charlenemak",username:"charlenemak",displayname:"Mak Charlene",unid:"18",sponser_id:"10",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"punlan",username:"punlan",displayname:"punlan",unid:"19",sponser_id:"10",enroller_id:"10",is_new:!0,boss_id:"",buys:[]},{name:"leungyukchun",username:"leungyukchun",displayname:"LEUNG YUK CHUN",unid:"20",sponser_id:"9",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"THIRU",username:"THIRU",displayname:"Nachiappan Thirupathi",unid:"21",sponser_id:"20",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"graceyu",username:"graceyu",displayname:"Yu Grace",unid:"22",sponser_id:"20",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"maychan",username:"maychan",displayname:"Chan Kam Mui",unid:"23",sponser_id:"20",enroller_id:"20",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"tsebikkei",username:"tsebikkei",displayname:"TSE BIK KEI",unid:"24",sponser_id:"9",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"veronicalau",username:"veronicalau",displayname:"Lau Veronica",unid:"25",sponser_id:"24",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"kcho",username:"kcho",displayname:"Ho KC",unid:"26",sponser_id:"24",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"sylvialiu",username:"sylvialiu",displayname:"Liu Yuk Ha Sylvia",unid:"27",sponser_id:"24",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"Iniskim1668",username:"Iniskim1668",displayname:"Ho Vicky",unid:"28",sponser_id:"9",enroller_id:"9",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]},{name:"lauasia",username:"lauasia",displayname:"Lau (Asia) Distribution Limited",unid:"29",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[]},{name:"DNS",username:"DNS",displayname:"DNS WORLDWIDE LIMITED",unid:"30",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[]},{name:"mobox",username:"mobox",displayname:"MOBOX HK LIMITED",unid:"31",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[]},{name:"chanchifai",username:"chanchifai",displayname:"PREMIER CAPTIAL WEALTH MANAGEMENT (ASIA) LIMITED",unid:"32",sponser_id:"1",enroller_id:"1",is_new:!0,boss_id:"",buys:[{num:1,pv:120}]}]},mClu:function(e,n,s){var i=s("kM2E");i(i.S+i.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})},"ok/q":function(e,n,s){"use strict";var i=s("Xejt"),t={props:{item:{type:Object}},name:"",data:function(){return{}},computed:{show_vip:function(){if(this.item.vip){var e=void 0;if(0!=this.item.vip.star&&(e=[this.item.vip.name,this.item.vip.star]),e=i.a.vip_view.code_to_content(e))return e.name}return"无"}}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.show_vip)}})},staticRenderFns:[]};var r=s("VU/8")(t,a,!1,function(e){s("A7ga")},"data-v-641c1f14",null);n.a=r.exports}});
//# sourceMappingURL=0.ce8c7e7c5c3ae85ff90b.js.map