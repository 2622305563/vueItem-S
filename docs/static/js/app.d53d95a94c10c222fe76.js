webpackJsonp([1],{"+CbQ":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},o,!1,function(t){e("dSnc")},null,null).exports,i=e("/ocq");e("vkyI");a.a.use(i.a);var u=new i.a({mode:"hash",routes:[{path:"/",name:"home",component:function(t){return new Promise(function(t){t()}).then(function(){var n=[e("vkyI")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:u,components:{App:r},template:"<App/>"})},dSnc:function(t,n){},vkyI:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("pFYg"),o=e.n(a),r={name:"home",data:function(){return{data:"",addObj:{}}},mounted:function(){},methods:{getData:function(){this.data="成功",this.$set(this.addObj,"name","zhangsan","age","12"),console.log("addObj",this.addObj),alert("延迟加载")},button:function(){console.log("getData函数属性",this.getData,o()(this.getData)),setTimeout(this.getData,500)}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[t._v(t._s(t.data)+"\n  "),e("button",{on:{click:function(n){return t.button()}}},[t._v("点击")])])},staticRenderFns:[]};var u=e("VU/8")(r,i,!1,function(t){e("+CbQ")},null,null);n.default=u.exports}},["NHnr"]);
//# sourceMappingURL=app.d53d95a94c10c222fe76.js.map