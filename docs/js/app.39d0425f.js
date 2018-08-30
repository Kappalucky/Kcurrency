(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],p=0,f=[];p<s.length;p++)c=s[p],o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Kcurrency/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("2ef0"),a=n.n(o),c=n("a7c6"),s=n.n(c),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l=(n("034f"),n("2877")),p={},f=Object(l["a"])(p,i,u,!1,null,null,null);f.options.__file="App.vue";var _=f.exports,v=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("app-header"),n("currency-table")],1)},d=[],b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Crypto Compare")]),n("div",{staticClass:"row"},[n("div",{staticClass:"jumbotron col-xs-offset-2 col-xs-8"},[n("p",[e._v("\n                This website indexes the top 10 crytocurrencies by market cap, and gives you an easy way to compare cryptocurrency performance and rank over the last week.\n            ")])])])])}],y={},g=Object(l["a"])(y,b,m,!1,null,null,null);g.options.__file="AppHeader.vue";var C=g.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("table",{staticClass:"table table-hover"},[e._m(0),n("tbody",e._l(e.coins.data,function(t){return n("tr",{key:t.rank},[n("td",[e._v(e._s(t.rank))]),n("td",[e._v("\n                    "+e._s(t.name)+"\n                ")]),n("td",[e._v(e._s(t.symbol))]),n("td",[e._v(e._s(e._f("currency")(t.quotes.USD.price)))]),n("td",{style:e.getColor(t.quotes.USD.percent_change_1h)},[t.quotes.USD.percent_change_1h>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.quotes.USD.percent_change_1h)+"%\n                ")]),n("td",{style:e.getColor(t.quotes.USD.percent_change_24h)},[t.quotes.USD.percent_change_24h>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.quotes.USD.percent_change_24h)+"%\n                ")]),n("td",{style:e.getColor(t.quotes.USD.percent_change_7d)},[t.quotes.USD.percent_change_7d>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.quotes.USD.percent_change_7d)+"%\n                ")]),n("td",[e._v(e._s(e._f("currency")(t.quotes.USD.market_cap)))])])}))])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Rank")]),n("th",{attrs:{scope:"col"}},[e._v("Name")]),n("th",{attrs:{scope:"col"}},[e._v("Symbol")]),n("th",{attrs:{scope:"col"}},[e._v("Price (USD)")]),n("th",{attrs:{scope:"col"}},[e._v("1H")]),n("th",{attrs:{scope:"col"}},[e._v("1D")]),n("th",{attrs:{scope:"col"}},[e._v("1W")]),n("th",{attrs:{scope:"col"}},[e._v("Market Cap (USD)")])])])}],w=n("bc3a"),k=n.n(w),j="https://min-api.cryptocompare.com",x="https://api.coinmarketcap.com",O=6e4,U={name:"CurrencyTable",data:function(){return{coins:[],coinData:{},coinDetails:{}}},created:function(){var e=this;this.getCoins(),this.getCoinData(),this.getCoinImage("BTC"),setInterval(function(){e.getCoins()},O)},methods:{getCoinData:function(){var e=this;k.a.get(j+"/data/all/coinlist").then(function(t){e.coinData=t.data.Data}).catch(function(e){console.error(e)})},getCoins:function(){var e=this;k.a.get(x+"/v2/ticker/?limit=10").then(function(t){console.log("request successful"),e.coins=t.data}).catch(function(e){console.error(e)})},getCoinImage:function(e){var t=this.coinData[e];this.coinDetails=t},getColor:function(e){return e>0?"color:green;":"color:red;"}}},q=U,T=(n("a4bb"),Object(l["a"])(q,D,S,!1,null,"6764b595",null));T.options.__file="CurrencyTable.vue";var P=T.exports,$={name:"home",components:{AppHeader:C,CurrencyTable:P}},E=$,M=Object(l["a"])(E,h,d,!1,null,null,null);M.options.__file="Home.vue";var H=M.exports;r["a"].use(v["a"]);var A=new v["a"]({mode:"history",base:"/Kcurrency/",routes:[{path:"/",name:"home",component:H}]}),I=n("2f62");r["a"].use(I["a"]);var J=new I["a"].Store({state:{},mutations:{},actions:{}});r["a"].use(s.a,a.a),r["a"].config.productionTip=!1,new r["a"]({router:A,store:J,render:function(e){return e(_)}}).$mount("#app")},a4bb:function(e,t,n){"use strict";var r=n("bbf4"),o=n.n(r);o.a},bbf4:function(e,t,n){},c21b:function(e,t,n){}});
//# sourceMappingURL=app.39d0425f.js.map