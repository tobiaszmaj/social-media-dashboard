(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=o[0]))}return t}var s={},a={app:0},r=[];function n(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=s,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/social-media-dashboard/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0d12":function(t,e,o){"use strict";o("e39c")},"259e":function(t,e,o){},3947:function(t,e,o){t.exports=o.p+"img/icon-down.69a5c77f.svg"},"431d":function(t,e,o){t.exports=o.p+"img/icon-facebook.a7383764.svg"},5417:function(t,e,o){t.exports=o.p+"img/icon-up.95f916a5.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",class:t.theme},[o("Header",{attrs:{theme:t.theme},on:{toggle:t.toggle}}),o("div",{staticClass:"layout"},[o("main",{staticClass:"bigCards"},t._l(t.cards,(function(t){return o("div",{key:t.key},[o("BigCard",{attrs:{followers:t.followers,todayFollowers:t.todayFollowers,brand:t.brand,isUp:t.isUp,color:t.color}})],1)})),0),o("main",{staticClass:"secondSection"},[o("h1",[t._v("Overview - Today")]),o("div",{staticClass:"smallCards"},t._l(t.smallCards,(function(t){return o("div",{key:t.key},[o("SmallCard",{attrs:{name:t.name,followers:t.followers,todayFollowers:t.todayFollowers,brand:t.brand,isUp:t.isUp}})],1)})),0)])])],1)},r=[],n=(o("b7e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"container"},[o("div",{staticClass:"navbar"},[t._m(0),o("nav",{staticClass:"toggle"},[o("p",{staticClass:"toggle__text"},[t._v(t._s("dark"===t.theme?"light":"dark")+" Mode")]),o("label",{staticClass:"switch"},[o("input",{class:"dark"===t.theme&&"checked",attrs:{type:"checkbox"},on:{change:function(e){return t.$emit("toggle")}}}),o("span",{staticClass:"slider round"})])])])])}),i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h2",{staticClass:"header__title"},[t._v("Social Media Dashboard")]),o("h4",{staticClass:"header__subtitle"},[t._v("Total Followers: 24,004")])])}],l={name:"Header",props:["theme"]},c=l,d=(o("0d12"),o("2877")),u=Object(d["a"])(c,n,i,!1,null,"8d004e86",null),f=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{class:"brand "+t.brand}),s("div",{staticClass:"social"},[s("i",{attrs:{alt:"brand"}},[s("img",{staticClass:"icon",attrs:{alt:"social-brand",src:o("a23c")("./icon-"+t.brand+".svg")}})]),s("h5",{staticClass:"user"},[t._v("@nathan")])]),s("div",{staticClass:"followers"},[s("h1",{staticClass:"number"},[t._v(t._s(t.followers))]),s("h2",{staticClass:"text"},[t._v("followers")])]),s("div",{staticClass:"date"},[s("i",{staticClass:"arrow",attrs:{alt:"up-arrow"}},[s("img",{attrs:{src:o("a23c")("./icon-"+(t.isUp?"up":"down")+".svg")}})]),s("p",{class:"text "+t.color},[t._v(t._s(t.todayFollowers)+" Today")])])])},w=[],b={name:"BigCard",props:{followers:String,todayFollowers:String,brand:String,isUp:{type:Boolean,default:!1},color:String}},g=b,v=(o("819a"),Object(d["a"])(g,p,w,!1,null,"57699e21",null)),m=v.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"firstSection"},[s("p",{staticClass:"name"},[t._v(t._s(t.name))]),s("i",{staticClass:"brand"},[s("img",{attrs:{alt:"brand icon",src:o("a23c")("./icon-"+t.brand+".svg")}})])]),s("div",{staticClass:"secondSection"},[s("h4",{staticClass:"number"},[t._v(t._s(t.followers))]),s("div",{staticClass:"percentaje",class:t.isUp?"green":"red"},[s("i",{staticClass:"arrow",attrs:{alt:"arrow icon"}},[s("img",{attrs:{alt:"arrow icon",src:o("a23c")("./icon-"+(t.isUp?"up":"down")+".svg")}})]),s("span",[t._v(t._s(t.todayFollowers)+"%")])])])])},h=[],_={name:"SmallCard",props:{name:String,followers:String,todayFollowers:String,brand:String,isUp:Boolean}},C=_,k=(o("5f3f"),Object(d["a"])(C,y,h,!1,null,"40736dd1",null)),U=k.exports,F={name:"App",components:{Header:f,BigCard:m,SmallCard:U},data:function(){return{theme:"dark",cards:[{key:0,brand:"facebook",followers:"1987",todayFollowers:"12",isUp:!0},{key:1,brand:"twitter",followers:"1044",todayFollowers:"99",isUp:!0,color:"green"},{key:2,brand:"instagram",followers:"11k",todayFollowers:"1099",isUp:!0,color:"green"},{key:3,brand:"youtube",followers:"11k",todayFollowers:"8239",isUp:!1,color:"red"}],smallCards:[{key:0,brand:"facebook",name:"Page Views",followers:"87",todayFollowers:"3",isUp:!0},{key:1,brand:"facebook",name:"Likes",followers:"52",todayFollowers:"2",isUp:!1},{key:2,brand:"instagram",name:"Likes",followers:"5462",todayFollowers:"2257",isUp:!0},{key:3,brand:"instagram",name:"Profile Views",followers:"52K",todayFollowers:"1375",isUp:!0},{key:4,brand:"twitter",name:"Retweets",followers:"117",todayFollowers:"303",isUp:!0},{key:5,brand:"twitter",name:"Likes",followers:"507",todayFollowers:"553",isUp:!0},{key:6,brand:"youtube",name:"Likes",followers:"107",todayFollowers:"19",isUp:!1},{key:7,brand:"youtube",name:"Total Views",followers:"1407",todayFollowers:"12",isUp:!1}]}},methods:{toggle:function(){"dark"===this.theme?this.theme="light":this.theme="dark"}}},x=F,O=(o("5c0b"),Object(d["a"])(x,a,r,!1,null,null,null)),S=O.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"5cfb":function(t,e,o){t.exports=o.p+"img/icon-twitter.810ccee8.svg"},"5f3f":function(t,e,o){"use strict";o("259e")},"613d":function(t,e,o){},"63ec":function(t,e,o){t.exports=o.p+"img/icon-youtube.8499da12.svg"},8158:function(t,e,o){t.exports=o.p+"img/icon-instagram.991487fe.svg"},"819a":function(t,e,o){"use strict";o("613d")},"9c0c":function(t,e,o){},a23c:function(t,e,o){var s={"./icon-down.svg":"3947","./icon-facebook.svg":"431d","./icon-instagram.svg":"8158","./icon-twitter.svg":"5cfb","./icon-up.svg":"5417","./icon-youtube.svg":"63ec"};function a(t){var e=r(t);return o(e)}function r(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="a23c"},b7e3:function(t,e,o){},e39c:function(t,e,o){}});
//# sourceMappingURL=app.4115406c.js.map