webpackJsonp([5],{"7zck":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={name:"App",created:function(){var e=this;console.log("启动:"),this.$store.getters.checkToken()&&this.conn.token().then(function(t){console.log(t),e.$store.commit("changeAuth",t.jwt,t.user)})},mounted:function(){console.log("完毕 》》》》》")}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(r,u,!1,function(e){n("W8Mf")},null,null).exports,c=n("/ocq"),a=[{path:"/home",component:function(){return n.e(2).then(n.bind(null,"n/G1"))},redirect:"/home/bonus",children:[{path:"/home/bonus",component:function(){return n.e(3).then(n.bind(null,"z8eu"))},redirect:"/home/bonus/active_house",children:[{path:"/home/bonus/active_house",component:function(){return n.e(1).then(n.bind(null,"WVNf"))}},{path:"/home/bonus/recommend",component:function(){return n.e(0).then(n.bind(null,"JZBU"))}}]}]},{path:"",redirect:"/home",meta:{title:"首页"}}];o.default.use(c.a);var i=c.a.prototype.push;c.a.prototype.push=function(e){return i.call(this,e).catch(function(e){return e})};var l=new c.a({routes:a,mode:"history",scrollBehviour:function(e,t,n){return n||(e.hash?{selector:e.hash}:void 0)}});l.afterEach(function(){window.scrollTo(0,0)});var f=l,p=n("NYxO");o.default.use(p.a);var h=new p.a.Store({state:{token:"",user:{}},mutations:{changeAuth:function(e,t,n){e.token=t,e.user=n,localStorage.setItem("oils_token",t),localStorage.setItem("oils_user",n)},clearToken:function(e){e.token="",e.user={},localStorage.setItem("oils_token",""),localStorage.setItem("oils_user",{})}},getters:{checkToken:function(e){var t=!1,n=localStorage.getItem("oils_token");return void 0==n||""==n||null==n?t=!0:(e.token=n,e.user=localStorage.getItem("oils_user"),console.log("token = ",n.substring(0,15)+"...")),function(e){return t}}},modules:{}}),d=n("Dd8w"),m=n.n(d),v={ser_timed:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==e||void 0==e)return"--";var o=e.substring(0,4),r=e.substring(5,7),u=e.substring(8,10),s=e.substring(11,13),c=e.substring(14,16);return t?n?o+"年"+r+"月"+u+"日 ":o+"年"+r+"月"+u+"日 "+s+"時"+c+"分":n?o+"-"+r+"-"+u:o+"-"+r+"-"+u+" "+s+":"+c}},g=m()({},v),b="http://cms01.svr.up5d.com:1337",k={baseURL:b,apiURL:"http://cms01.svr.up5d.com:1337",delayTime:300},w=n("Xxa5"),y=n.n(w),_=n("exGp"),S=n.n(_),x=n("mtWM"),I=n.n(x);function T(e){var t=I.a.create({timeout:12e3});return t.defaults.retry=2,t.defaults.retryDelay=3e3,t.interceptors.request.use(function(e){return e},function(e){console.log(e)}),t.interceptors.response.use(function(e){return e.data},function(e){throw console.log("请求出错!!!"),console.log(e),e}),t(e)}var U=function(e,t){return T({url:e,method:"post",data:t})},A=k.baseURL+"/auth/local",R={token:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vcrting@163.com",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1234567";return S()(y.a.mark(function o(){var r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={identifier:t,password:n},e.next=3,U(A,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},o,e)}))()}},W=m()({},R,{success_one:function(e){try{e.id}catch(e){return!1}return!0},success_many:function(e){return e.length>0}}),D=function(e){return k.baseURL+e},J={users:D("/users"),levels:D("/levels")},L=n("3EgV"),M=n.n(L);n("7zck"),n("csSS"),n("gJtD");o.default.use(M.a);var N=new M.a({icons:{iconfont:"mdiSvg"}});o.default.prototype.api=J,o.default.prototype.conn=W,o.default.prototype.conf=k,o.default.prototype.view=g,o.default.config.productionTip=!1,new o.default({router:f,store:h,vuetify:N,components:{App:s},template:"<App/>"}).$mount("#app")},W8Mf:function(e,t){},csSS:function(e,t){},gJtD:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.69fb6b6b2f2e3034a2b3.js.map