(function(t){function e(e){for(var s,l,n=e[0],c=e[1],o=e[2],u=0,f=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},r={app:0},i=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2046:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-primary text-default",attrs:{id:"app"}},[a("Header"),a("router-view",{attrs:{games:t.games}}),a("Footer")],1)},l=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"mx-auto my-2 container xl flex justify-between"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"max-w-xs bg-default-dark"}),a("div",{staticClass:"site-header-title flex ml-2 items-center"},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticClass:"text-3xl text-default"},[t._v("Gamefy")])]),a("router-link",{attrs:{to:"/"}},[a("h2",{staticClass:"text-3xl text-secondary"},[t._v(".IO")])])],1)]),a("label",{staticClass:"cursor-pointer lg:hidden block",attrs:{for:"menu-toggle"}},[t._v("X")]),a("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"menu-toggle"}}),t._m(0),t._m(1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hidden lg:flex lg:items-center",attrs:{id:"menu"}},[a("nav",{staticClass:"lg:flex items-center"},[a("ul",{staticClass:"flex"},[a("li",[a("a",{staticClass:"text-xl block text-default",attrs:{href:"#"}},[t._v("All Games")])]),a("li",[a("a",{staticClass:"text-xl block ml-8 text-default",attrs:{href:"#"}},[t._v("New Comers")])]),a("li",[a("a",{staticClass:"text-xl block ml-8 text-default",attrs:{href:"#"}},[t._v("Sign in")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-searchbar-wrapper flex items-center"},[a("form",{attrs:{method:"GET"}},[a("input",{staticClass:"bg-default px-4 py-2 rounded text-black focus:outline-none",attrs:{type:"text",placeholder:"Search..."}})])])}],o=a("2877"),d={},u=Object(o["a"])(d,n,c,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"max-w-4xl text-sm py-12 pb-4 block lg:flex justify-between mx-auto"},[a("div",{staticClass:"footer-company max-w-sm"},[a("div",{staticClass:"mb-4 text-xl footer-company-logo flex"},[a("h4",{staticClass:"text-default"},[t._v("Gamefy")]),a("span",{staticClass:"text-secondary"},[t._v(".IO")])]),a("p",{staticClass:"footer-company-details text-default"},[t._v(" We are a small business focusing on delivering great standard for all gamers everywhere! Our games always aim to deliver the most fun experience ever! ")])]),a("div",{staticClass:"footer-links"},[a("a",{staticClass:"underline text-default",attrs:{href:"/"}},[t._v("Contact Us")]),a("a",{staticClass:"underline block mt-2 text-default",attrs:{href:"/"}},[t._v("Privacy Policy")]),a("a",{staticClass:"underline block mt-2 text-default",attrs:{href:"/"}},[t._v("Terms of Service")]),a("a",{staticClass:"underline block mt-2 text-default",attrs:{href:"/"}},[t._v("Careers")])]),a("div",{staticClass:"footer-social ml-4"},[a("p",{staticClass:"footer-social-details text-default"},[t._v("Find us on social media!")]),a("div",{staticClass:"footer-social-icons text-start mt-2"},[a("a",{staticClass:"hover:text-secondary text-default",attrs:{href:"/"}},[a("i",{staticClass:"fab fa-facebook text-3xl"})]),a("a",{staticClass:"hover:text-secondary text-default",attrs:{href:"/"}},[a("i",{staticClass:"fab fa-twitter text-3xl ml-2"})]),a("a",{staticClass:"hover:text-secondary text-default",attrs:{href:"/"}},[a("i",{staticClass:"fab fa-instagram text-3xl ml-2"})])])])])}],v={},g=Object(o["a"])(v,p,m,!1,null,null,null),x=g.exports,h={name:"App",data:function(){return{games:[{id:"1",src:"placeholder-1.jpg",title:"World of Warcraft",count:"18.320",likes:"9.540",dislikes:"3.543",rating:"95%"},{id:"2",src:"placeholder-1.jpg",title:"World of Warcraft",count:"13.500",likes:"17.540",dislikes:"5.637",rating:"91%"},{id:"3",src:"placeholder-1.jpg",title:"World of Warcraft",count:"9.101",likes:"5.540",dislikes:"1.143",rating:"93%"},{id:"4",src:"placeholder-1.jpg",title:"World of Warcraft",count:"11.213",likes:"5.540",dislikes:"1.143",rating:"97%"},{id:"5",src:"placeholder-1.jpg",title:"World of Warcraft",count:"5.644",likes:"10.540",dislikes:"5.143",rating:"92%"},{id:"6",src:"placeholder-1.jpg",title:"World of Warcraft",count:"10.089",likes:"13.540",dislikes:"1.143",rating:"89%"},{id:"7",src:"placeholder-1.jpg",title:"World of Warcraft",count:"14.903",likes:"22.540",dislikes:"3.143",rating:"94%"},{id:"8",src:"placeholder-1.jpg",title:"World of Warcraft",count:"11.341",likes:"7.540",dislikes:"2.143",rating:"90%"}]}},components:{Header:f,Footer:x}},_=h,C=Object(o["a"])(_,i,l,!1,null,null,null),y=C.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container xl mx-auto my-6",attrs:{id:"popular"}},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"popular-card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2"},t._l(t.games,(function(e){return a("div",{key:""+e.id,staticClass:"primary-card text-default"},[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"max-w-full",attrs:{src:""+e.src,alt:"game-card"}})]),a("div",{staticClass:"primary-card-content"},[a("h3",{staticClass:"primary-game-title mt-3"},[t._v(t._s(e.title))]),a("div",{staticClass:"primary-game-stats mb-5 flex justify-between"},[a("span",[t._v(t._s(t.roundVal(e.count))+"k plays")]),a("span",{staticClass:"text-secondary-light"},[t._v(t._s(e.rating))])]),a("div",{staticClass:"primary-button-wrapper mb-4"},[a("router-link",{attrs:{to:"/games/"+e.id}},[a("a",{staticClass:"bg-secondary py-2 px-4 rounded"},[t._v("Play!")])])],1)])])})),0),t._m(3)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-6 flex justify-center"},[a("h2",{staticClass:"text-3xl text-default"},[t._v("Game Your Way!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"},[s("div",{staticClass:"landing-card"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("a29c"),alt:"game-card"}})])]),s("div",{staticClass:"landing-card"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("a29c"),alt:"game-card"}})])]),s("div",{staticClass:"landing-card"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("a29c"),alt:"game-card"}})])]),s("div",{staticClass:"landing-card"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("a29c"),alt:"game-card"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-section-heading"},[a("h2",{staticClass:"text-2xl text-default"},[t._v("Most Popular")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"more-button-wrapper flex justify-center"},[a("a",{staticClass:"px-12 py-2 rounded bg-default text-secondary font-4xl mt-16 mb-10",attrs:{href:"/"}},[t._v("View More!")])])}],k={props:{games:[]},methods:{roundVal:function(t){return+(Math.round(t+"e+1")+"e-1")}}},j=k,O=Object(o["a"])(j,b,w,!1,null,null,null),W=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"single-view"}},[t._m(0),a("section",{staticClass:"single-view-section container mx-auto"},[a("div",{staticClass:"single-view-wrapper"},[a("img",{attrs:{src:""+t.games.src,alt:"game-player"}}),a("div",{staticClass:"single-view-content flex justify-between"},[a("h2",{staticClass:"single-view-title"},[t._v(t._s(t.games.title))]),a("h3",{staticClass:"single-view-stats"},[a("span",{staticClass:"likes"},[t._v(t._s(t.games.likes))]),t._v("k likes / "),a("span",{staticClass:"dislikes"},[t._v(t._s(t.games.dislikes))]),t._v("k dislikes ")])]),a("div",{staticClass:"single-view-details flex justify-between"},[a("p",{staticClass:"single-view-description"},[t._v("Join this one of a kind adventure with us, where you will explore the beautiful world of Warcraft! This is a vast...")]),a("span",[t._v(t._s(t.games.rating))])])]),t._m(1)])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"single-view-navigation container flex justify-between mx-auto"},[a("div",{staticClass:"single-view-button-wrapper"},[a("a",{staticClass:"button-primary return",attrs:{href:"/"}},[t._v("Back")])]),a("div",{staticClass:"single-view-button-wrapper"},[a("a",{staticClass:"button-primary next",attrs:{href:"#"}},[t._v("Next")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"primary-button-wrapper"},[a("a",{staticClass:"button-primary single-more"},[t._v("View More")])])}],P={props:{games:[]}},M=P,S=Object(o["a"])(M,E,$,!1,null,null,null),T=S.exports,G=[{path:"/",component:W},{path:"/game/:id",component:T}];a("2046");s["a"].config.productionTip=!0,s["a"].use(r["a"]);var V=new r["a"]({routes:G,mode:"history"});new s["a"]({render:function(t){return t(y)},router:V}).$mount("#app")},a29c:function(t,e,a){t.exports=a.p+"img/placeholder-1.9fced1cc.jpg"}});
//# sourceMappingURL=app.8d1f4dd7.js.map