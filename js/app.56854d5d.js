(function(){"use strict";var t={6909:function(t,e,n){n(560);var a=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Nav"),e("router-view")],1)},r=[],o=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),e("div",{staticClass:"navbar-menu",attrs:{id:"navbar"}},[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[t.$auth.loading?t._e():e("div",[t.$auth.isAuthenticated?t._e():e("a",{staticClass:"button is-dark",on:{click:t.login}},[e("strong",[t._v("Sign in")])]),t.$auth.isAuthenticated?e("a",{staticClass:"button is-dark",on:{click:t.logout}},[e("strong",[t._v("Log out")])]):t._e()])])])])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("strong",{staticClass:"is-size-4"},[t._v("Animal Rescue League")])]),e("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])])}],u={name:"Nav",methods:{login(){this.$auth.loginWithRedirect()},logout(){this.$auth.logout({returnTo:window.location.origin})}}},l=u,c=n(1001),d=(0,c.Z)(l,o,s,!1,null,"f81a03aa",null),h=d.exports,p={name:"app",components:{Nav:h}},v=p,f=(0,c.Z)(v,i,r,!1,null,null,null),m=f.exports,g=n(2631),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t._m(0),e("EventsList")],1)},C=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero is-dark"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Welcome to the Animal Rescue League")]),e("h2",{staticClass:"subtitle"},[t._v(" Make sure you check out our upcoming events below ")]),e("div",{staticClass:"button-block"},[e("button",{staticClass:"button is-xl is-dark"},[t._v(" Sign Up to Browse Events ")])])])])])}],y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"events container"},[e("h2",{staticClass:"subtitle is-3"},[t._v("Check out our upcoming events")]),e("div",{staticClass:"columns is-multiline"},t._l(t.events,(function(t){return e("div",{key:t.id,staticClass:"column is-one-quarter",attrs:{event:t}},[e("router-link",{attrs:{to:"/event/"+t.id}},[e("EventCard",{attrs:{event:t}})],1)],1)})),0)])},w=[],k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"event-card"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("h2",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(t._s(t.event.name))]),e("small",{staticClass:"event-date"},[t._v(t._s(t.event.date))]),e("span",[t._v(t._s(t.event.location))])])])])},_=[],A={name:"EventCard",props:["event"]},S=A,E=(0,c.Z)(S,k,_,!1,null,"4d3f51c6",null),O=E.exports,P={name:"EventsList",components:{EventCard:O},data(){return{event:{},events:[{id:1,name:"Charity Ball",category:"Fundraising",description:"Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",featuredImage:"https://placekitten.com/500/500",images:["https://placekitten.com/500/500","https://placekitten.com/500/500","https://placekitten.com/500/500"],location:"1234 Fancy Ave",date:"12-25-2019",time:"11:30"},{id:2,name:"Rescue Center Goods Drive",category:"Adoptions",description:"Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.",featuredImage:"https://placekitten.com/500/500",images:["https://placekitten.com/500/500"],location:"1234 Dog Alley",date:"11-21-2019",time:"12:00"}]}}},T=P,x=(0,c.Z)(T,y,w,!1,null,"42716441",null),N=x.exports,j={name:"home-view",components:{EventsList:N}},L=j,Z=(0,c.Z)(L,b,C,!1,null,"78e73f48",null),R=Z.exports;a.ZP.use(g.ZP);var I=new g.ZP({mode:"history",base:"events-app/",routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7565))},{path:"/event/:id",name:"eventSingle",component:()=>n.e(156).then(n.bind(n,9156))}]}),U=JSON.parse('{"n":"dev-xg4d3lyhp2oteky6.us.auth0.com","I":"hM6b035PvUwScdn4dFNiaCTtLG0TxCpI"}'),W=n(181);const B=()=>window.history.replaceState({},document.title,window.location.pathname);let F;const $=({onRedirectCallback:t=B,redirectUri:e=window.location.origin,...n})=>F||(F=new a.ZP({data(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{async loginWithPopup(t){this.popupOpen=!0;try{await this.auth0Client.loginWithPopup(t)}catch(e){console.error(e)}finally{this.popupOpen=!1}this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0},async handleRedirectCallback(){this.loading=!0;try{await this.auth0Client.handleRedirectCallback(),this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0}catch(t){this.error=t}finally{this.loading=!1}},loginWithRedirect(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup(t){return this.auth0Client.getTokenWithPopup(t)},logout(t){return this.auth0Client.logout(t)}},async created(){this.auth0Client=await(0,W["default"])({domain:n.domain,client_id:n.clientId,audience:n.audience,redirect_uri:e});try{if(window.location.search.includes("code=")&&window.location.search.includes("state=")){const{appState:e}=await this.auth0Client.handleRedirectCallback();t(e)}}catch(a){this.error=a}finally{this.isAuthenticated=await this.auth0Client.isAuthenticated(),this.user=await this.auth0Client.getUser(),this.loading=!1}}}),F),M={install(t,e){t.prototype.$auth=$(e)}};a.ZP.use(M,{domain:U.n,clientId:U.I,onRedirectCallback:t=>{I.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a.ZP.config.productionTip=!1,new a.ZP({router:I,render:t=>t(m)}).$mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],r=t[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(s=!1,r<o&&(o=r));if(s){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+(443===t?"about":t)+"."+{156:"e86b5957",443:"b3e88fc7"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+(443===t?"about":t)+"."+{156:"adffd159",443:"6cb5e8c7"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="events-app:";n.l=function(a,i,r,o){if(t[a])t[a].push(i);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=a),t[a]=[i];var h=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var i=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="events-app/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=s,r.parentNode&&r.parentNode.removeChild(r),i(u)}};return r.onerror=r.onload=o,r.href=e,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===t||r===e)return i}},a=function(a){return new Promise((function(i,r){var o=n.miniCssF(a),s=n.p+o;if(e(o,s))return i();t(a,s,null,i,r)}))},i={143:0};n.f.miniCss=function(t,e){var n={156:1,443:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=r);var o=n.p+n.u(e),s=new Error,u=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};n.l(o,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,o=a[0],s=a[1],u=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var c=u(n)}for(e&&e(a);l<o.length;l++)r=o[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkevents_app"]=self["webpackChunkevents_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6909)}));a=n.O(a)})();
//# sourceMappingURL=app.56854d5d.js.map