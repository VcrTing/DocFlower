webpackJsonp([5],{"21k6":function(t,e){},"8a1k":function(t,e){},BRvi:function(t,e){},qOYF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Q5Hn"),i=n("Xxa5"),a=n.n(i),r=n("exGp"),u=n.n(r),o=n("aL0L"),c=(n("fE3H"),n("lPj9")),l=n("f82S"),_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix fs-15 fw-b header-bg"},[n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"30%"}},[n("div",{staticClass:"username"},[t._v("\n                User Name\n            ")])]),t._v(" "),n("div",{staticClass:"table-header clearfix f-l",staticStyle:{width:"70%"}},[n("div",{staticClass:"unid"},[t._v("\n                Unique ID\n            ")]),t._v(" "),n("div",{staticClass:"buys"},[t._v("\n                层级\n            ")]),t._v(" "),n("div",{staticClass:"ipv"},[t._v("\n                IPV\n            ")]),t._v(" "),n("div",{staticClass:"level"},[t._v("\n                支付级别\n            ")]),t._v(" "),n("div",{staticClass:"son_pv"},[t._v("\n                团员pv总和\n            ")]),t._v(" "),n("div",{staticClass:"can_num"},[t._v("\n                合资格下线\n            ")]),t._v(" "),n("div",{staticClass:"result"},[t._v("\n                结算奖金\n            ")])])])}]};var v,d=n("VU/8")({name:"",data:function(){return{}}},_,!1,function(t){n("xEy2")},"data-v-2dd5316e",null).exports,h=n("bOdI"),m=n.n(h),f=n("//Fk"),p=n.n(f),b=n("qzOj"),w=(v={name:"",props:{the_item:{type:Object},allow:{type:Boolean}}},m()(v,"name",""),m()(v,"data",function(){return{num:0,vip:"5级会员",usd:0,ipv:0}}),m()(v,"mounted",function(){var t=this;return u()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.allow){e.next=4;break}return e.next=3,t.load_data();case 3:t.usd=e.sent;case 4:case"end":return e.stop()}},e,t)}))()}),m()(v,"computed",{num_color:function(){return this.num>0},show_vip:function(){return this.the_item.vip?this.the_item.vip.name:""},show_pv:function(){return this.the_item.vip?this.the_item.ipv:"待计算"},show_son_pv:function(){return this.the_item.vip?this.the_item.son_pv:""},show_can_num:function(){return this.the_item.vip?this.the_item.son_can_num:""},is_show:function(){var t=!1;return this.the_item.vip&&(t=!0),t}}),m()(v,"methods",{load_data:function(){var t=this;return new p.a(function(e,n){t.the_item.buys.length<=0?(t.num=0,t.the_item.buys.push({num:0,pv:120})):t.num=t.the_item.buys[0].num,e((t.the_item.vip&&t.the_item.index,Object(b.a)(t.the_item)))})},changeNum:function(t){t?this.num+=1:this.num>0&&(this.num-=1),this.the_item.buys[0].num=this.num}}),v),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline"},[n("div",{staticClass:"tree-table-content",class:{"tree-root":t.the_item.index<2}},[n("div",{staticClass:"unid tree-col"},[t._v("\n            "+t._s(t.the_item.unid)+"\n        ")]),t._v(" "),n("div",{staticClass:"layer tree-col"},[t._v("\n            "+t._s(t.the_item.index)+"\n        ")]),t._v(" "),n("div",{staticClass:"ipv tree-col"},[t._v("\n            "+t._s(t.show_pv)+"\n        ")]),t._v(" "),n("div",{staticClass:"level tree-col"},[t._v("\n            "+t._s(t.show_vip)+"\n        ")]),t._v(" "),n("div",{staticClass:"son_pv tree-col"},[t._v("\n            "+t._s(t.show_son_pv)+"\n        ")]),t._v(" "),n("div",{staticClass:"can_num tree-col"},[t._v("\n            "+t._s(t.show_can_num)+"\n        ")]),t._v(" "),n("div",{staticClass:"result tree-col  fs-15"},[t._v("\n            "+t._s(this.usd)+"\n        ")])])])},staticRenderFns:[]};var C=n("VU/8")(w,y,!1,function(t){n("8a1k")},"data-v-e8d0ad82",null).exports,x=n("ClHd"),E={components:{TreeLayout:l.a,AlbTableHeader:d,AlbTreeItem:C,NameLabel:x.a},name:"",data:function(){return{users:[],show:!1,can_num:!1}},mounted:function(){this.user("SPONSER")},methods:{reloadTree:function(t){void 0!=this.$refs.treeLayout&&(this.show=t,this.$refs.treeLayout.show=t)},numing:function(){var t=this;this.reloadTree(!1),this.can_num=!0,setTimeout(function(){t.reloadTree(!0)},1e3)},user:function(t){var e=this;return u()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.reloadTree(!1),n.next=3,Object(c.a)(e.$store.state.user_unit,t);case 3:e.users=n.sent,Object(o.a)(e.users),setTimeout(function(){e.reloadTree(!0)},1e3);case 6:case"end":return n.stop()}},n,e)}))()}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tree-layout",{ref:"treeLayout",on:{numing_Father:t.numing,user_Father:t.user}},[n("alb-table-header",{attrs:{slot:"tree_header"},slot:"tree_header"}),t._v(" "),t.show?n("v-treeview",{staticClass:"mt-0 the-tree fs-14",attrs:{slot:"tree","multiple-active":"",transition:"",dense:"","off-icon":"",items:t.users,"open-all":"",open:[0,1]},slot:"tree",scopedSlots:t._u([{key:"label",fn:function(t){var e=t.item,s=t.open;return[n("name-label",{attrs:{the_item:e,op:s}})]}},{key:"append",fn:function(e){var s=e.item,i=e.open;return[n("alb-tree-item",{ref:"treeItem",attrs:{allow:t.can_num,the_item:s,o:i}})]}}],null,!1,104223199)}):t._e()],1)},staticRenderFns:[]};var L=n("VU/8")(E,T,!1,function(t){n("BRvi")},"data-v-799e0b6e",null).exports,g=n("n7zJ"),j={components:{TreeListLayout:s.a,ActiveLayerBonusTree:L,Loading:g.a},name:"",data:function(){return{bonus:0}},mounted:function(){},methods:{numResult:function(){this.$refs.alb_tree.numResult()}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("tree-list-layout",[e("div",{attrs:{slot:"title"},slot:"title"},[this._v("團隊獎金")]),this._v(" "),this.$store.state.user_unit?e("active-layer-bonus-tree",{attrs:{slot:"content"},slot:"content"}):e("loading",{attrs:{slot:"content"},slot:"content"})],1)},staticRenderFns:[]};var R=n("VU/8")(j,k,!1,function(t){n("21k6")},"data-v-048c4dbc",null);e.default=R.exports},qzOj:function(t,e,n){"use strict";var s=n("//Fk"),i=n.n(s),a=n("Mh3b"),r=n("DBJ4"),u=r.a.NAMESPACE,o=(r.a.CAN_USER_PV_LIMIT,function(t,e){return a.a.floatMul(t,e)}),c=function(t,e){return a.a.floatAdd(t,e)};e.a=function(t){var e=0;return new i.a(function(n,s){var i=t.vip.ratio.filter(function(t){return 0!=t});t=function t(e,n,s){var i=[];return n+=1,e.map(function(e){var r={},o=[];return a.a.judge_has_children(e)&&(o=t(e[u.children],n,s)),r.name=e.name,r[u.ipv]=e[u.ipv],r[u.vip]=e[u.vip],r[u.index]=e[u.index],o.length>0&&(r[u.children]=o),i.push(r),r}),i}([t],0,i)[0],a.a.judge_has_children(t)&&(e=function t(e,n,s,i){var l=0,_=i[s];return void 0==_&&(_=0),e.map(function(e){var v=0;if(s<r.a.LAYER_DEPTH_NUM){e[u.usd_layer]=o(o(_,e[u.ipv]),s+1);var d=e[u.ipv]+n,h=s+1;a.a.judge_number(d,r.a.CAN_USER_PV_LIMIT)?d=0:h-=1,a.a.judge_has_children(e)&&(v=t(e[u.children],d,h,i))}else e[u.usd_layer]=0;return l=c(l,c(e[u.usd_layer],v)),e}),l}(t[u.children],0,0,t[u.vip][u.ratio])),n(e)})}},xEy2:function(t,e){}});
//# sourceMappingURL=5.debeaca93115fd6a0c8b.js.map